let gl_import = require("@/demos/rasterizer/modules/gl-matrix-min")

import vertexShaderCode from "@/demos/cape/src/shader/vertex";
import fragmentShaderCode from "@/demos/cape/src/shader/fragment";
import {terrain_vertices, terrain_normals} from "@/demos/cape/src/shapes/terrain";
import {cloth_vertices, cloth_size, cloth_triangles, cloth_normals} from "@/demos/cape/src/shapes/cloth";

let gl; // WebGL context
let shaderProgram; // The GLSL program we will use for rendering

let terrain_vao; // The vertex array object for the terrain
let cloth_vao; // The vertex array object for the cloth

let terrainVertexBuffer;
let terrainNormalBuffer;

let clothVertexBuffer;
let clothNormalBuffer;
let clothTriangleBuffer;


// Cloth simulation variables
const spring_start = [];
const spring_end = [];
const spring_rest = [];

let time; // variable that counts the time in milliseconds from the initialization of the mass spring system
const v = []; // velocities of the cloth vertices
const f = []; // forces acting on individual cloth vertices (gravity + springs + any external)

const gravity = 9.8;
const mass = 0.1;
const damping = 1.0;
const k = 30; // stiffness coefficient of every spring

const deltaT = 0.001; // time step for simulation


/**
 * Function to initialize the WebGL context.
 */
function initWebGL() {
    const canvas = document.getElementById("webgl-canvas");
    gl = canvas.getContext("webgl2");

    gl.viewportWidth = canvas.width;
    gl.viewportHeight = canvas.height;

    if (gl) {
        console.log("WebGL successfully initialized.");
    } else {
        console.log("Failed to initialize WebGL.")
    }
}


/**
 * Function to compile the shader.
 *
 * @param shader The shader to compile
 * @param source The source of the shader
 * @param type The type of the shader
 * @param name The name of the shader (default: "")
 */
function compileShader(shader, source, type, name = "") {
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);

    if (success) {
        console.log(name + " shader compiled successfully.");
    } else {
        console.log(name + " vertex shader error.")
        console.log(gl.getShaderInfoLog(shader));
    }
}


/**
 * Function to link the GLSL program by combining the vertex and
 * fragment shaders.
 *
 * @param program The GLSL program
 * @param vertShader The vertex shader
 * @param fragShader The fragment shader
 */
function linkProgram(program, vertShader, fragShader) {
    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);

    gl.linkProgram(program);

    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.log("The shaders are initialized.");
    } else {
        console.log("Could not initialize shaders.");
    }
}


/**
 * Function to initialize the shaders for the scene.
 */
function initShaders() {
    let vertShader = gl.createShader(gl.VERTEX_SHADER);
    compileShader(vertShader, vertexShaderCode, gl.VERTEX_SHADER, "Vertex");

    let fragShader = gl.createShader(gl.FRAGMENT_SHADER);
    compileShader(fragShader, fragmentShaderCode, gl.FRAGMENT_SHADER, "Fragment");

    shaderProgram = gl.createProgram();
    linkProgram(shaderProgram, vertShader, fragShader);

    shaderProgram.modelMatrixUniform = gl.getUniformLocation(shaderProgram, "ModelMatrix");
    shaderProgram.viewMatrixUniform = gl.getUniformLocation(shaderProgram, "ViewMatrix");
    shaderProgram.projectionMatrixUniform = gl.getUniformLocation(shaderProgram, "ProjectionMatrix");
    shaderProgram.lightDirectionUniform = gl.getUniformLocation(shaderProgram, "L");
}


/**
 * Function to create the GLSL programs.
 */
// eslint-disable-next-line no-unused-vars
function createGLSLProgram(program, vertCode, fragCode) {
    let vertexShader = gl.createShader(gl.VERTEX_SHADER);
    compileShader(vertexShader, vertCode, gl.VERTEX_SHADER, "Vertex shader");

    let fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    compileShader(fragmentShader, fragCode, gl.VERTEX_SHADER, "Fragment shader");

    linkProgram(program, vertexShader, fragmentShader);
}


/**
 * Function to initialize the buffers.
 */
function initBuffers() {
    // Cloth buffer initialization
    clothVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, clothVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cloth_vertices), gl.DYNAMIC_DRAW);
    clothNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, clothNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cloth_normals), gl.DYNAMIC_DRAW);
    clothTriangleBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, clothTriangleBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint32Array(cloth_triangles), gl.STATIC_DRAW);

    cloth_vao = gl.createVertexArray();
    gl.bindVertexArray(cloth_vao);

    gl.enableVertexAttribArray(0);
    gl.bindBuffer(gl.ARRAY_BUFFER, clothVertexBuffer);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(1);
    gl.bindBuffer(gl.ARRAY_BUFFER, clothNormalBuffer);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, clothTriangleBuffer);

    // Terrain buffer initialization
    terrainVertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, terrainVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(terrain_vertices), gl.STATIC_DRAW);
    terrainNormalBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, terrainNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(terrain_normals), gl.STATIC_DRAW);

    terrain_vao = gl.createVertexArray();
    gl.bindVertexArray(terrain_vao);

    gl.enableVertexAttribArray(0);
    gl.bindBuffer(gl.ARRAY_BUFFER, terrainVertexBuffer);
    gl.vertexAttribPointer(0, 3, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(1);
    gl.bindBuffer(gl.ARRAY_BUFFER, terrainNormalBuffer);
    gl.vertexAttribPointer(1, 3, gl.FLOAT, false, 0, 0);
}


/**
 * Draw the arrays to the screen.
 *
 * @param vao The vertex array object
 * @param program The GLSL program
 * @param num The number of vertices
 * @param modelMatrix The model matrix
 */
function my_drawArray(vao, program, num, modelMatrix) {
    gl.uniformMatrix4fv(program.modelMatrixUniform, false, modelMatrix);
    gl.bindVertexArray(vao);
    gl.drawArrays(gl.TRIANGLES, 0, num);
}


/**
 * Draw the elements to the screen.
 *
 * @param vao The vertex array object
 * @param program The GLSL program
 * @param num The number of vertices
 * @param modelMatrix The model matrix
 */
function my_drawElements(vao, program, num, modelMatrix) {
    gl.uniformMatrix4fv(program.modelMatrixUniform, false, modelMatrix);
    gl.bindVertexArray(vao);
    gl.drawElements(gl.TRIANGLES, num, gl.UNSIGNED_INT, 0);
}


/**
 * Function to draw the geometry.
 *
 * @param program The GLSL program
 */
function drawGeometry(program) {
    let modelMatrix = gl_import.mat4.create();
    gl_import.mat4.identity(modelMatrix);

    gl_import.mat4.fromTranslation(modelMatrix, gl_import.vec3.fromValues(0.0, -1.0, 0.0));
    my_drawArray(terrain_vao, program, terrain_vertices.length / 3, modelMatrix);

    gl_import.mat4.fromTranslation(modelMatrix, gl_import.vec3.fromValues(0.0, 1.0, -1.0));
    gl.disable(gl.CULL_FACE);
    my_drawElements(cloth_vao, program, cloth_triangles.length, modelMatrix);
    gl.enable(gl.CULL_FACE);
}


/**
 * Function to draw the scene.
 */
function draw() {
    var camera_rotation = document.getElementById("camera_rotation");
    var camera_y = document.getElementById("camera_y");
    var camera_distance = document.getElementById("camera_distance");
    var light_rotation = document.getElementById("light_rotation");
    var light_height = document.getElementById("light_height");

    gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.enable(gl.CULL_FACE);
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    gl.useProgram(shaderProgram);

    // View matrix
    var viewMatrix = gl_import.mat4.create();
    let rotation = camera_rotation.value / 100 * Math.PI * 2;
    let radius = camera_distance.value / 10;
    gl_import.mat4.lookAt(viewMatrix, gl_import.vec3.fromValues(radius * Math.sin(rotation), 5 * (camera_y.value) / 100, radius * Math.cos(rotation)), gl_import.vec3.fromValues(0, 0.6, 0), gl_import.vec3.fromValues(0, 1, 0));

    // Light direction
    let lr = light_rotation.value / 100 * Math.PI * 2;
    let r = Math.cos(Math.PI * light_height.value / 200);
    let light_direction = gl_import.vec3.fromValues(r * Math.sin(lr), Math.sin(Math.PI * light_height.value / 200), r * Math.cos(lr));
    let viewMatrix3x3 = gl_import.mat3.create();
    gl_import.mat3.fromMat4(viewMatrix3x3, viewMatrix)
    gl_import.vec3.transformMat3(light_direction, light_direction, viewMatrix3x3);

    // Projection ViewMatrix
    const projectionMatrix = gl_import.mat4.create();
    gl_import.mat4.perspective(projectionMatrix, 1.3, 1024 / 768, 0.1, 100);

    // Setting uniforms for all objects
    gl.uniformMatrix4fv(shaderProgram.viewMatrixUniform, false, viewMatrix);
    gl.uniformMatrix4fv(shaderProgram.projectionMatrixUniform, false, projectionMatrix);
    gl.uniform3fv(shaderProgram.lightDirectionUniform, light_direction);

    drawGeometry(shaderProgram);
}


// the function initialized the topology of the mass-spring system
function initMassSpringSystem() {
    // adding springs
    for (let i = 0; i < cloth_size - 1; i++) {
        for (let j = 0; j < cloth_size - 1; j++) {
            let top = i * cloth_size + j;
            // vertical 1
            spring_start.push(top);
            spring_end.push(top + cloth_size);
            spring_rest.push(1.0 / (cloth_size - 1));
            // horizontal 1
            spring_start.push(top);
            spring_end.push(top + 1);
            spring_rest.push(1.0 / (cloth_size - 1));
            // vertical 2
            spring_start.push(top + 1);
            spring_end.push(top + 1 + cloth_size);
            spring_rest.push(1.0 / (cloth_size - 1));
            // horizontal 1
            spring_start.push(top + cloth_size);
            spring_end.push(top + 1 + cloth_size);
            spring_rest.push(1.0 / (cloth_size - 1));
            // diagonal 1
            spring_start.push(top);
            spring_end.push(top + 1 + cloth_size);
            spring_rest.push(Math.sqrt(2) * 1.0 / (cloth_size - 1));
            // diagonal 2
            spring_start.push(top + 1);
            spring_end.push(top + cloth_size);
            spring_rest.push(Math.sqrt(2) * 1.0 / (cloth_size - 1));
        }
    }

    // initializing velocities and forces
    for (let i = 0; i < cloth_size * cloth_size; i++) {
        v.push(gl_import.vec3.fromValues(0.0, 0.0, 0.0));
        f.push(gl_import.vec3.fromValues(0.0, 0.0, 0.0));
    }

    time = Date.now();
}


/**
 * Function that updates the normal vectors of the cloth.
 */
function updateNormals() {
    for (let i = 0; i < cloth_triangles.length; i += 3) {
        let i1 = cloth_triangles[i];
        let i2 = cloth_triangles[i + 1];
        let i3 = cloth_triangles[i + 2];

        let v1 = gl_import.vec3.fromValues(cloth_vertices[3 * i1], cloth_vertices[3 * i1 + 1], cloth_vertices[3 * i1 + 2]);
        let v2 = gl_import.vec3.fromValues(cloth_vertices[3 * i2], cloth_vertices[3 * i2 + 1], cloth_vertices[3 * i2 + 2]);
        let v3 = gl_import.vec3.fromValues(cloth_vertices[3 * i3], cloth_vertices[3 * i3 + 1], cloth_vertices[3 * i3 + 2]);

        let s1 = gl_import.vec3.subtract(gl_import.vec3.create(), v2, v1);
        let s2 = gl_import.vec3.subtract(gl_import.vec3.create(), v3, v1);

        let n = gl_import.vec3.cross(gl_import.vec3.create(), s1, s2);
        gl_import.vec3.normalize(n, n);

        cloth_normals[3 * i1] = n[0];
        cloth_normals[3 * i1 + 1] = n[1];
        cloth_normals[3 * i1 + 2] = n[2];

        cloth_normals[3 * i2] = n[0];
        cloth_normals[3 * i2 + 1] = n[1];
        cloth_normals[3 * i2 + 2] = n[2];

        cloth_normals[3 * i3] = n[0];
        cloth_normals[3 * i3 + 1] = n[1];
        cloth_normals[3 * i3 + 2] = n[2];
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, clothNormalBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cloth_normals), gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
}


/**
 * Function that updates the position of the cloth's vertices.
 */
function updateCloth() {
    // Initialization of the mass-spring system
    for (let i = 0; i < cloth_size * cloth_size; i++) {
        let curr_time = ((Date.now() - time) / 200) * Math.random(10, 20);
        curr_time = curr_time <= 30 ? curr_time : 30 * Math.random(10, 20);

        f[i] = gl_import.vec3.scale(gl_import.vec3.create(), gl_import.vec3.fromValues(0.0, -gravity, curr_time), mass);
    }

    // Computing forces acting on every spring in the system and adding them to the corresponding particles
    for (let i = 0; i < spring_start.length; i++) {
        let p = spring_start[i]; // index of the particle/vertex which corresponds to one end of the spring
        let q = spring_end[i]; // index of the particle/vertex which corresponds to one end of the spring

        // positions of the two ends of the spring
        let x_p = gl_import.vec3.fromValues(cloth_vertices[3 * p], cloth_vertices[3 * p + 1], cloth_vertices[3 * p + 2]);
        let x_q = gl_import.vec3.fromValues(cloth_vertices[3 * q], cloth_vertices[3 * q + 1], cloth_vertices[3 * q + 2]);

        let vec_length = gl_import.vec3.subtract(gl_import.vec3.create(), x_q, x_p);
        let length = gl_import.vec3.length(vec_length);
        let strain = k * ((length / spring_rest[i]) - 1.0);
        let vec_length_norm = gl_import.vec3.scale(gl_import.vec3.create(), vec_length, 1 / length);

        let vec_velocity = gl_import.vec3.subtract(gl_import.vec3.create(), v[q], v[p]);
        let relative_velocity = gl_import.vec3.scale(gl_import.vec3.create(), vec_velocity, 1 / spring_rest[i]);
        let velocity = damping * gl_import.vec3.dot(relative_velocity, vec_length_norm);

        let hooke_p = gl_import.vec3.scale(gl_import.vec3.create(), vec_length_norm, strain);
        let hooke_q = gl_import.vec3.scale(gl_import.vec3.create(), hooke_p, -1.0);

        let damping_p = gl_import.vec3.scale(gl_import.vec3.create(), vec_length_norm, velocity);
        let damping_q = gl_import.vec3.scale(gl_import.vec3.create(), damping_p, -1.0);

        let force_p = gl_import.vec3.add(gl_import.vec3.create(), hooke_p, damping_p);
        let force_q = gl_import.vec3.add(gl_import.vec3.create(), hooke_q, damping_q);

        // Sum the forces acting on the two ends of the spring
        f[p] = gl_import.vec3.add(gl_import.vec3.create(), f[p], force_p);
        f[q] = gl_import.vec3.add(gl_import.vec3.create(), f[q], force_q);
    }

    var anchor_one = document.getElementById("anchor_one");
    var anchor_two = document.getElementById("anchor_two");
    var anchor_three = document.getElementById("anchor_three");

    // Updating the velocities of the particles based on the forces acting on them
    for (let i = 0; i < cloth_size * cloth_size; i++) {
        if (anchor_one.checked && i === 0) continue;
        if (anchor_two.checked && i === cloth_size / 2 - 1) continue;
        if (anchor_three.checked && i === cloth_size - 1) continue;

        let vec_deltaT = gl_import.vec3.fromValues(deltaT, deltaT, deltaT);
        let vec_mass = gl_import.vec3.fromValues(mass, mass, mass);

        let quotient = gl_import.vec3.divide(gl_import.vec3.create(), vec_deltaT, vec_mass);
        let velocity = gl_import.vec3.multiply(gl_import.vec3.create(), f[i], quotient);

        // Velocity of i-th particle
        v[i][0] += velocity[0];
        v[i][1] += velocity[1];
        v[i][2] += velocity[2];

        let position = gl_import.vec3.multiply(gl_import.vec3.create(), vec_deltaT, v[i]);

        // Position of i-th particle
        cloth_vertices[3 * i] += position[0];
        cloth_vertices[3 * i + 1] += position[1];
        cloth_vertices[3 * i + 2] += position[2];
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, clothVertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(cloth_vertices), gl.DYNAMIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
}


/**
 * Function that runs the simulation.
 */
function run() {
    draw();

    const num_substeps = 1.0 / 60 / deltaT;

    for (let i = 0; i < num_substeps; i++) {
        updateCloth();
    }

    updateNormals();
    window.requestAnimationFrame(function () {
        run();
    });
}


/**
 * Function that starts the application.
 */
function main() {
    initWebGL();
    initShaders();
    initBuffers();
    initMassSpringSystem();
    run();
}


export default main;

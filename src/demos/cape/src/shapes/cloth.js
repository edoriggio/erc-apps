let cloth_vertices = [];
let cloth_normals = [];
let cloth_triangles = [];

let cloth_size = 10;

function create_cloth() {
  let step = 1.0 / (cloth_size - 1);

  // creating vertices
  for (let i = 0; i < cloth_size; i++) {
    for (let j = 0; j < cloth_size; j++) {
      cloth_vertices.push(j * step - 0.5, 0.5 - i * step, 0);
      cloth_normals.push(0.0, 0.0, 1.0);
    }
  }

  // adding triangles
  for (let i = 0; i < cloth_size - 1; i++) {
    for (let j = 0; j < cloth_size - 1; j++) {
      let top = i * cloth_size + j;
      
      cloth_triangles.push(top, top + cloth_size, top + cloth_size + 1);
      cloth_triangles.push(top, top + cloth_size + 1, top + 1);
    }
  }
}

create_cloth();

export {cloth_vertices, cloth_normals, cloth_triangles, cloth_size}

<template>
    <div class="main-wrapper">
        <canvas id="webgl-canvas" width="768" height="768"></canvas>

        <div style="float: right">
            <h4>Camera:</h4>
            <div class="slidecontainer">
                Azimuthal angle:<br/><input type="range" min="-270" max="90" value="-45"
                                            id="camera_azimuthal_angle">
            </div>

            <div class="slidecontainer">
                Polar angle:<br/><input type="range" min="1" max="179" value="60" id="camera_polar_angle">
            </div>

            <div class="slidecontainer">
                Distance:<br/><input type="range" min="0" max="100" value="15" id="camera_distance">
            </div>

            <div class="slidecontainer">
                Field of view:<br/><input type="range" min="10" max="150" value="45" id="camera_fov">
            </div>

            <h4>Light:</h4>
            <div class="slidecontainer">
                Azimuthal angle:<br/><input type="range" min="-270" max="90" value="-70" id="light_azimuthal_angle">
            </div>

            <div class="slidecontainer">
                Polar angle:<br/><input type="range" min="1" max="90" value="60" id="light_polar_angle">
            </div>

            <h4>Terrain:</h4>
            <div class="slidecontainer">
                Scale:<br/><input type="range" min="0" max="100" value="30" id="terrain_scale">
            </div>

            <div class="slidecontainer">
                Bias:<br/><input type="range" min="-100" max="100" value="0" id="terrain_bias">
            </div>

            <div class="slidecontainer">
                Water level:<br/><input type="range" min="0" max="200" value="10" id="water_level">
            </div>
        </div>
    </div>
</template>

<script>
import main from "@/demos/rasterizer/src/shader";

const textureFiles = [
    require('@/demos/rasterizer/assets/terrains/Lugano.png'),
    require('@/demos/rasterizer/assets/textures/water/color.jpg'),
    require('@/demos/rasterizer/assets/textures/sand/color.jpg'),
    require('@/demos/rasterizer/assets/textures/grass/color.jpg'),
    require('@/demos/rasterizer/assets/textures/rock/color.jpg'),
    require('@/demos/rasterizer/assets/textures/snow/color.jpg')
];

export default {
    name: "Rasterizer",
    mounted() {
        main(textureFiles)
    }
}
</script>

<style scoped>

</style>
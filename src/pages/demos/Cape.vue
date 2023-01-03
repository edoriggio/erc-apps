<template>
    <div class="main-wrapper">
        <canvas id="webgl-canvas" style="border:1px solid #000000;" width="768" height="768"></canvas>

        <div>
            <h4>Camera:</h4>
            <div class="slidecontainer">
                Camera rotation:<br/><input type="range" min="0" max="100" value="10" id="camera_rotation">
            </div>

            <div class="slidecontainer">
                Camera height:<br/><input type="range" min="0" max="100" value="20" id="camera_y">
            </div>

            <div class="slidecontainer">
                Camera distance:<br/><input type="range" min="10" max="150" value="20" id="camera_distance">
            </div>

            <h4>Light:</h4>
            <div class="slidecontainer">
                Light rotation:<br/><input type="range" min="0" max="100" value="10" id="light_rotation">
            </div>

            <div class="slidecontainer">
                Light height:<br/><input type="range" min="0" max="100" value="30" id="light_height">
            </div>

            <h4>Anchors:</h4>
            <div class="checkboxcontainer">
                Anchor 1 <input type="checkbox" id="anchor_one" checked> <br>
                Anchor 2 <input type="checkbox" id="anchor_two" checked> <br>
                Anchor 3 <input type="checkbox" id="anchor_three" checked>
            </div>
        </div>
    </div>
</template>

<script>
import main_cape from "@/demos/cape/src/shader";

export default {
    name: "Cape",
    mounted() {
        main_cape()
    }
}
</script>

<style scoped>

</style>
<template>
   <div>
      <HelloWorld :msg="text"></HelloWorld>
      
      <center><h2 class="mt-5 mb-3">GIF:</h2></center>
      <Picture src="star-wars/g1.gif" />
      <Picture src="star-wars/g2.gif" />

      <center><h2 class="mt-5 mb-3">JPG:</h2></center>
      <Picture src="star-wars/j1.jpg" />
      <Picture src="star-wars/j2.jpg" />
      <Picture src="star-wars/j3.jpg" />

      <center><h2 class="mt-5 mb-3">PNG:</h2></center>
      <Picture src="star-wars/p1.png" />
      <Picture src="star-wars/p2.png" />

      <center><h2 class="mt-5 mb-3">SVG:</h2></center>
      <Picture src="star-wars/s1.svg" />

      <center><h2 class="mt-5 mb-3">SASS:</h2></center>
      <Test />

      <center><h2 class="mt-5 mb-3">JSON:</h2></center>
      <JsonFile src="tmp.json" />
      
      <center>
         <h2 class="mt-5 mb-3">AUDIO:</h2>
         <audio controls>
            <source src="@sounds/projects/star-wars/imperial-march.mp3">
         </audio>
      </center>
   </div>
</template>

<script>
import HelloWorld from "~components/HelloWorld/index.vue";
import Picture from "~components/Picture/index.vue";
import Test from "~components/Test/index.vue";
import JsonFile from '~components/JsonFile/index.vue';

export default {
   components: {
      HelloWorld, Picture, Test, JsonFile,
   },
   name: "App",
   data: function () {
      return {
         text: "Laravel Mix<br><small><small>{ Vue + SCSS + Babel + AutoPrefixer }</small></small>",
      };
   },
};
</script>
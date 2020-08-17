<template>
  <div id="app">
    <demo1 />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import demo1 from "./components/demo1.vue";

export default defineComponent({
  name: "App",
  components: {
    demo1
  }
});
</script>

<style lang="less"></style>

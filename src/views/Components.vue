<template>
    <div>
        <hero></hero>
        <about></about>
        <projects></projects>
    </div>
</template>
<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue"; 
import Projects from "./components/Projects.vue";

export default {
  name: "components",
  components: {
    Hero,
    About,
    Projects,
  }
};
</script>

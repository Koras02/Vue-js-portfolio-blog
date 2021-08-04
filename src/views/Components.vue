<template>
    <div>
        <hero></hero>
        <about></about>
        <projects></projects>
        <contact></contact>
        <bottoms></bottoms>
    </div>
</template>
<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue"; 
import Projects from "./components/Projects.vue";
import Contact from "./components/Contact.vue";
import Bottoms from "./components/Bottom.vue";

export default {
  name: "components",
  components: {
    Hero,
    About,
    Projects,
    Contact,
    Bottoms,
  }
};
</script>
 
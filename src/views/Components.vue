<template>
    <div>
        <hero></hero>
        <about></about>
    </div>
</template>
<script>
import Hero from "./components/Hero.vue";
import About from "./components/About.vue"; 

export default {
  name: "components",
  components: {
    Hero,
    About,
  }
};
</script>

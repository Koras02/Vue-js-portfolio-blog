<template>
    <div id="app">
      <font-awsome-icon icon="user-secret"/>
        <main>
            <fade-transition origin="center" mode="out-in" :duration="250">
                <router-view/>
            </fade-transition>
        </main>
        <router-view class="footer" name="footer"></router-view>
    </div>
</template>
<script>
import { FadeTransition } from "vue2-transitions";

export default {
  components: {
    FadeTransition
  }
};
</script>


<style>
  #app {
    width: 100%;
 
    display:block;
   font-family: 'Noto Sans KR', sans-serif;
   font-style:inherit;
      color:#272341;

    
  }

  *, :after, :before {
    box-sizing: border-box;
  }

 
</style>
<template>
<body class="body">
   <section id="footer">
     <div class="container">
       <span class="back-to-top">
       <a @click="scrollTop" v-show="visible">
         <i class="ni ni-bold-up ni-2x" aria-hidden="true">

         </i>
       </a>
       </span>
       <div class="social-links">
         <a href="https://github.com/Koras02" rel ="noopener noreferrer" target="_blank" aria-label="github">
            <i class="fa fa-github fa-inverse fa-2x">
              
            </i>
         </a>
       </div>
       <hr>
       <p class="footer__text">
         © 2021
         - 
         <a href="https://github.com/Koras02/Vue-js-portfolio-blog" target="_blank" rel="nooperner no referrer">
            Koras02
         </a>
       </p>
     </div>
   </section>
</body>
</template>
 
 <script>
    export default {
      data() {
        return {
              visible:true
        }
      },
      methods: {
        scrollTop: function() {
          this.intervalidId = setInterval(() => {
            if (window.pageYOffset === 0) {
              clearInterval(this.intervalidId)
            }
            window.scroll(0, window.pageYOffset - 50)
          }, 20)
        },
        scrollListener: function (e) {
          this.visible = window.scrollY > 150
        }
      },
      mounted: function () {
        window.addEventListener('scroll', this.scrollListener)
      },
      beforeDestroy: function() {
        window.removeEventListener('scroll', this.scrollListener)
      }
    }
 </script>
 

<style>
  #footer {
    background:#303030;
    color:#fff;
    padding: 3.0rem 0;

    display:block;
 }

.conatiner {
  width: 100%;
  padding: 0px 15px;
  margin:auto;
}

@media (min-width:1200px)
{
  .container,
  .container-lg,
  .container-md, .container-sm,
  .container-xl  {
    max-width: 1140px;
  }
}

.back-to-top i 
{
  color:#fff;
  margin:1rem 0 1.6rem;
  transition: all .2 ease-in;
  cursor: pointer;
}

.ni-2x {
  font-size:1em;
}

.ni {
  display:inline-block;
  font:normal normal normal 14px/1 FontAwsome;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  
}

*, ::after, ::before {
  box-sizing: border-box;
}

.body {
  text-align:center;
}

.ni-bold-up::before {
    content: "\F106";
}
.ni-bold-up:hover {
    position:relative;
    top:-15px;
    transition:10s inherit;
}

.fa {
  display:inline-block;
  font: normal normal normal 14px/1FontAwesome;
  font-size:inherit;
  text-rendering: auto;
}

.footer__text,
.footer__text a  
{
  color:#fff;
  font-size:0.8rem;
}

p {
    margin-block-start: 1em;
        margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;

  display:block;
  
}

</style>

 
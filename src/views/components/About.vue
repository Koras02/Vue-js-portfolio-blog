<template>
   <section id="about">
       <div class="container">
        <h2 class="react-reveal section-title1" >ABOUT ME</h2>
        <div class="about-wrapper row">
             <div class="col-md-6 col-sm-12">
                 <div class="react-reveal about-wrapper__image">
                     <!-- 프로필 사진 아직안찍어서 보류!! -->
                     <div class="circle shdow-lh gatsby-image-wrapper" style="position:relative;overflow:hidden;display:inline-block;
                     width: 300px;height: 300px;">
                     <img aria-hidden="true" src="https://avatars.githubusercontent.com/u/67436032?v=4" 
                     alt style="position: absolute; top:0px;left:0px;width:100%;height: 100%;
                     object-fit: cover; object-position: center center; opacity:100;transition-delay: 500ms;
                     "
                     />
                     <picture>
                         <source srcset="https://avatars.githubusercontent.com/u/67436032?v=4 1x, https://avatars.githubusercontent.com/u/67436032?v=4 1.5x">
                         <img srcset="https://avatars.githubusercontent.com/u/67436032?v=4 1x,https://avatars.githubusercontent.com/u/67436032?v=4 1.5x" src="https://avatars.githubusercontent.com/u/67436032?v=4"
                            width="350" height="350" loading="lazy" style="position:absoulte; top: 0px left: 0px; width:100%; height: 100%; object-fit: cover; object-position: center cetner; opacity: 1; transition: opacity 500ms ease 0s;">
                        
                     </picture>
                     </div>
                 </div>
             </div>
             <div class="col-md-6 col-sm-12">
                  <div class="react-reveal about-wrapper__info"
                  style="animation-fill-mode:both; animation-duration: 1000ms; animation-delay: 1000ms; animation-iteration-count: 1; opacity: 1;"
                  >
                      <p class="about-wrapper__info-text">
                         1년동안 기본 HTML공부와 패스트캠퍼스를 수료한후 프론트엔드로 직업을 결정하고 
                         취업을 준비했습니다.
                      </p>
                      <p class="about-wrapper__info-text">
                         HTML CSS JAVASCRIPT를 독학한뒤 React를 집중적으로 시작했으며 API를 활용한 영화 어플리케이션을 만들었습니다.
                      </p>
                      <p class="about-wrapper__info-text">
                         👇 아래 참고할 이력서를 다운로드 받으실 수 있습니다.
                     </p>
                     <span class="d-flex mt-3">
                         <a target="_blank" rel="noopener noreferrer" class="cta-btn cta-btn--resume"
                         href="https://drive.google.com/file/d/1gguHUbVpJZGC3Zt-bI3g4G5vz_Rm7hWv/view"
                         >
                            "이력서 다운받기"
                         </a>
                     </span>
                      
                  </div>
             </div>
        </div>
       </div>
   </section>
</template>

<script>
export default{};
</script>

<style>
   #about {
       display:flex;
       align-items:center;
       background-color: #B5E1AC;
       background-image:linear-gradient(135deg,#F5F888,#17DAC3);
       color:#fff;
       height: 100vh;
       border-top: 0;
       -webkit-clip-path:polygon(0,0,100% 0, 100% 80%,0 100%);
       clip-path: polygon(0% -190%, 250% 60%, 20% 93%, 0% 95%);
       padding-bottom: 10%;
    
   }
       #about .about-wrapper__info-text {
         text-align: center;
         font-size:19px;
         text-transform: uppercase;
         font-weight: 500;
     }
 

   section {
       padding: 5rem 0;
   }

   @media (min-width: 768px) 
   {
       .container, .container-md, .container-sm {
           max-width: 720px;
       }
   }

   .container {
       width: 100%;
       padding-right: 15px;
       padding-left: 15px;
       margin-right: auto;
       margin-left: auto;
   }
   
 
   .section-title1 {
       margin: 0 0 4.5rem;
       font-size:  4.5rem;
       font-weight: 700;
       text-transform: uppercase;
       line-height: 1.2;
       text-align: center;
       color:#fff;
    
   }



 
    

 

@media  (max-width: 640px) {
    #about .about-wrapper__info-text {
         text-align: center;
         font-size:18px;
         text-transform: uppercase;
         font-weight: 500;
     }
    #about .about-wrapper__image  {
        display:flex;
        align-items:center;
        justify-content: center;
        border-radius: 50%;
 
        width: 100%;
        height: 200px;
        /* position:absolute; */
        margin-top:-20%;
        margin-bottom:60px;
        position:relative;
        bottom:30%;

        
    
    }
      .section-title1 {
       margin: 0 0 1.5rem;
       font-size: 3.0rem;
       font-weight: bold;
       text-transform: uppercase;
       line-height: 1.3;
     position:relative;
     bottom:190px;
   }

 

 
 
 #about .about-wrapper__info {
     display:flex;
     height: 100%;
     justify-content: center;
     flex-direction: column;
 }





 
}
    
 #about .about-wrapper__image .circle {
     border-radius: 50%;
    
     
 }

 
 #about .about-wrapper__info {
     display:flex;
     height: 100%;
     justify-content: center;
     flex-direction: column;
 }



a, p {
    font-family: Monserrat,sans-serif;
    font-size: .5rem;
}

 
.mt-3, .my-3 {
    margin-top: 1rem !important;
}

.d-flex {
    display:flex!important;
    width:330px;
    height:36px;
    
}

a, a:active, a:hover, a:link, a:visited {
    text-decoration: none;
}

.cta-btn {
    display: inline-block;
    position:relative;
    padding: .12rem 1.2rem;
    font-weight: 700;
    line-height: 1.2;
    z-index: 1;
    transition: all .6s cubic-bezier(0.19, 1, 0.22, 1);
}


.cta-btn , a, p {
    font-size: 1.2rem;
}
.cta-btn--resume {
    color:#fff;
    border: 3px solid #fff;

}

</style>

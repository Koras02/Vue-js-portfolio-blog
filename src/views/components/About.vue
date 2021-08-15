<template>
   <section id="about">
       <div class="container">
        <h2 class="react-reveal section-title" style="animation-fill-mode: both; both: animation-duration: 1000ms
        animation-delay: 300ms; animation-iteration-count: 1; opacity: 1">ABOUT ME</h2>
        <div class="about-wrapper row">
             <div class="col-md-6 col-sm-12">
                 <div class="react-reveal about-wrapper__image">
                     <!-- 프로필 사진 아직안찍어서 보류!! -->
                     <div class="circle shdow-lh gatsby-image-wrapper" style="position:relative;overflow:hidden;display:inline-block;
                     width: 350px;height: 350px;">
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
                         아래 참고할 이력서를 다운로드 받으실 수 있습니다.
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
       background-color: #68ff5b;
       background-image:linear-gradient(135de#68ff5b, rgba(104,255,90,.717647));
       color:#fff;
       height: 100vh;
       border-top: 0;
       clip-path: polygon(0 0,100% 0,100%, 90%,0 100%);
       padding-bottom: 10%;
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
   
   element.style {
       animation-fill-mode: both;
       animation-duration: 1000ms;
       animation-delay: 300ms;
       animation-iteration-count: 1;
       opacity: 1;
       animation-name: react-reveal-686762263305807-2;
   }

   .section-title {
       margin: 0 0 4.5rem;
       font-size: 4rem;
       font-weight: 700;
       text-transform: uppercase;
       line-height: 1.2;
       color:#fff;


   }

   h2 {
       display: block;
       margin-block-start: 0.83em;
       margin-block-end: 0.83em;
       margin-inline-start: 0px;
       margin-inline-end: 0px;
   }


   .row {
       display:flex;
       flex-wrap: wrap;
       margin-right: -15px;
       margin-left: -15px;
   }
   .row::after, ::before {
       box-sizing: border-box;
   }

   @media (min-width: 768px) 
   {
     .col-md-6 {
        flex: 0 0 50%;
        max-width: 50%;
   }
   }

   .col, .col-1, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-10, .col-11, .col-12, .col-auto, .col-lg, .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-auto, .col-md, .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12, .col-md-auto, .col-sm, .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-auto, .col-xl, .col-xl-1, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-auto{
       position:relative;
       width:100%;
       padding-right: 15px;
       padding-left: 15px;
   }


@media  (min-width: 75em) {
     #about .about-wrapper__image {
         height: 100%;
     }
}
    
    #about .about-wrapper__image {
        display:flex;
        align-items:center;
        justify-content: center;
        border-radius: 50%;
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


#about .about-wrapper__info-text {
    text-align: left;
    font-size:18px;
    text-transform: uppercase;
    font-weight: 500;
}

a, p {
    font-family: Monserrat,sans-serif;
    font-size: 2.5rem;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}

.mt-3, my-3 {
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

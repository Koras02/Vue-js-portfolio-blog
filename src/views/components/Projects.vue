<template>
   <section id="projects">
      <div class="container">
        <div class="project-wrapper">
          <div class="react-reveal sectiontitle" style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 300ms; animation-iteration-count: 1; opacity: 1; animation-name: react-reveal-686762263305807-2;">
             Projects
          </div>
          <div class="row">
            <div class="col-lg-4 col-sm-12">
               <div class="react-reveal project-wrapper__text"
                style="animation-fill-mode: both; animation-duration: 1000ms; animation-delay: 500ms; animation-iteration-count: 1; opacity:1"
               >
                   <h3 class="project-wrapper__text-title">
                       '넷플릭스(The Movie API)'
                   </h3>
                <div>
                    <p>React-Themovie Api를 사용한 넷플릭스</p>
                    <p class="mb-4">사용기술:Typescript,The Movie DB,React,React-styled-components,TheMovie-API,React-Router</p>
                    <p class="my-4">구현:영화 배너 클릭시 영화 소개 + 영화 트레일러 재생(Youtube), 검색, MyList구현,</p>
                </div>
                <a target="_blank" class="cta-btn text-color-main"   href="https://github.com/Koras02/Netflix-Api-frameWork">
                   <div id="color1">
                    Source Code
                   </div>
                </a>
               </div>
            </div>
            <div class="col-lg-8 col-sm-12">
                  <div class="react-reveal project-wrapper__image">
                     <a href="https://koras02.github.io/Netflix-Api-frameWork/" target="_blank" aria-label="Project Link" rel="noopener noreferrer">
                       <div className="Source-code" style="transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)">
                           <div data-tilt="true" class="thumbnail rounded">
                              <div class=" gatsby-image-wrapper" style="position:relative; overflow:hidden">
                                 <div aria-hidden="true" style="width:100%;padding-bottom: 59.6491%;">
                                 </div>
                                 <img aria-hidden="true" src="./1.png" style="position:absolute; top:0px; left:0px;width:100%;height:100%;background-size:cover;object-fit:cover;object-position:center center; transition-delay:500ms;">
                              </div>
                           </div>
                       </div>
                     </a>
                  </div>
            </div>
          </div>
        </div>
      </div>
   </section>

</template>
   <style>
   element.style {
    animation-fill-mode: both;
    animation-duration: 1000ms;
    animation-delay: 300ms;
    animation-iteration-count: 1;
    opacity: 1;
    animation-name: react-reveal-686762263305807-2;
   }

   #projects {
       background-color: #fff;
       color: #272341;
       padding-top: 15rem;
   }
   section {
       padding: 5rem 0;
   }
 
   @media (min-width: 1200px) 
   {
       .container, .container-lg, .container-md, .container-sm, .container-xl {
    max-width: 1140px;
    }
   }

   #projects .project-wrapper {
       margin-bottom:10rem;
       max-width: 1110px;
 
   }

   *, ::after, ::before {
       box-sizing: border-box;
   }

   div {
       display: block;
   }

   .sectiontitle {
       margin: 0 0 4.5rem;
       font-size: 3rem;
       font-weight: 700;
       text-transform: uppercase;
       text-align:center;
       font-weight: bold;
   }

   h2 {
       display:block;
       margin-block-start: 0.83em;
       margin-block-end: 0.83em;
       margin-inline-start: 0px;
       margin-inline-end: 0px;
   }

   #projects .project-wrapper .row {
       margin-bottom: 8rem;
   }

   .row {
       display:flex;
       flex-wrap: wrap;
       margin-right: -15px;
       margin-left: -15px;
       

       max-width: 1140px;
       min-height: 391.891px;
   }

   @media (min-width: 992px) 
   {
       .col-lg-4 {
           flex: 0 0 33.333333%;
           max-width: 33.333333%;
       }
   }

   .col-lg-4 {
       position:relative;
       width:100%;
       padding: 0px 15px;
   }
   
   h3 {
       display:block;
       margin-block-start: 1em;
       margin-block-end: 1em;
   }

   #projects .project-wrapper__text-title {
       font-weight: 700;
       margin-bottom: 1.8rem;
       font-size: 1.8rem;
   }

   .mb-4, .my-4 {
       margin-bottom: 1.5rem;
       font-family: 'Noto Sans JP', sans-serif;
       padding-top: 0;
       display:block;
   }

   .cta-btn {
       display: inline-block;
       position: relative;
       padding: .8rem 1.6rem;
       font-weight: 700;
       line-height: 1;
       z-index: 1;
       transition: all .6s cubic-bezier(.19,1,.22,1);
    
   }  

   .text-color-main {
       background-image: linear-gradient(135deg, #68ff5b, rgba(104,255,90,.717647));
       /* color:red; */
       --webkit-background-clip: text;
 
       -webkit-text-fill-color: transparent;
       margin-bottom:10px;
       margin-left:-10px;
   }  
   #color1:hover {
       /* background-image: linear-gradient(135deg, red, rgba(104,255,90,.717647)); */
       margin-left:15px;
       transition: 3s;

   }

   .Source-code {
       transform: perspective(1000px)
         rotateX(0deg) rotateY(0deg)
         scale3d(1,1,1);
       ;
   }
     

   .cta-btn::after {
       content: "";
       display:block;
       position:absolute;
       width:0;
       height: 100%;
       left:10px;
       bottom:0;
       z-index: -1;
       transition: all .3s cubic-bezier(0.19, 1, 0.22, 1);
   }
 
    @media (min-width: 992px)
    { .col-lg-8 {
         flex: 0 0 66.666667%;
         max-width: 66.666667%;
     }
    }

   #projects {
       color: #272341;
       padding-top: 4rem;
   }
  
    #projects .project-wrapper__image {
        width: 90%;
        margin:0 auto;
        border:4px solid rgb(206, 206, 206);
    }

    
    
    #projects .project-wrapper__image .thumbnail {
        border:none;
        box-shadow: 0 6px 10px rgb(0 0 0 / 8%), 0 0 6px rgb(0 0 0 / 5%);
        transition:transform .5s cubic-bezier(.155,1.105,.295,1.12),box-shadow .5s;

    }

    .rounded {
        border-radius: .25rem;
    }

    img, svg {
        vertical-align: middle;
    }
    
    img {
        border-style: none;
    }

    *, ::after,::before {
      box-sizing:border-box;
    }
   </style>
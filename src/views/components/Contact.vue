<template>
   <section id="contact">
       <div class="container" data-aos="fade-right">
           <h2 class="react-reveal section-title2"  
             style="animation-fill-mode:both;animation-duration: 1000ms;
             animation-delay: 300ms;animation-iteration-count: 1;
             opacity: 1; animation-name: react-reveal-739314817183330-2;"           
           >
               Contact
           </h2>
           <div class="react-reveal contact-wrapper">
               <p class="contact-wrapper__text">이메일 주소를 보내시려면 아래 버튼을 클릭하세요.</p>
               <a target="-blank" class="cta-btn1 cta-btn--resume" href="https://mail.google.com/mail/u/0/#inbox">
                    "이메일 주소"
               </a>
           </div>
       </div>
   </section>
</template>

<style>
    #contact {
        background:linear-gradient(135deg, #DDEFBB, 
        rgba(104,255,90,.717647));
        margin-bottom: -1px;
        color:#fff;
    }

    @media (min-width: 1200px) {
        #contact {
          display:flex;
          align-items:center;
       
          background-image:linear-gradient(135deg,#B0DAB9,#8CA6DB);
          border-top:0;
               -webkit-clip-path:polygon(0,0,100% 0, 100% 80%,0 100%);

            clip-path: polygon(0% 20%, 200% -15%, 100% 100%, 0% 100%);
          padding-bottom: 10%;
        }
    }
 
   @media (max-width: 75em)
   {
    #contact {
        padding: 10rem 0;
        margin-top: 0;
        --webkit-clip-path: none;
    }
   }


   .container {
       width: 100%;
       padding: 0px 15px;
       margin:auto;
       
   }

   @media (max-width: 768px) {
       .container,
       .container-md,
       .container-sm {
           max-width: 720px;
       }
   }
   
   .section-title2 {
       margin: 0.1rem 0 5rem;
       font-size: 2rem;
       font-weight:bold;
       font-style:normal;
       text-transform:uppercase;
       /* text-transform: uppercase; */
       font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;

       text-align: center;
       position: relative;
       left:2%;
       top:50px;
       color:#fff;
   }
 

   @media screen and (max-width:640px) {
         .section-title2 {
       margin: -5rem 0 5rem;
       font-size: 1.9rem;
       font-weight:bold;
       text-transform: uppercase;

       text-align: center;
       position: relative;
       
     }
  

   }
 
   #contact .contact-wrapper__text, #contact-wrapper a {
         font-size: 2rem;
         text-align: center;
         position:relative;
         left:20px;
         color:#fff;
   }

   @media screen and (max-width:860px) {
         #contact .contact-wrapper__text, #contact-wrapper a {
             font-size:1.1rem;
             color:#fff;
             font-weight:500;
         }
   }
 
   #contact .contact-wrapper__text {
       margin-bottom: 3.2rem;
   }

   .cta-btn1 {
       display:inline-block;
       position: relative;
       padding: .8rem 1.6rem;
       left:45%;
       font-weight: 700;
       line-height: 1;
       transition: all .6s cubic-bezier(.19,1,.22,1);
       margin:auto;
       
   }

   @media screen and (max-width:640px) {
       .cta-btn1 {
             display:inline-block;
       position: relative;
       padding: .8rem 1.6rem;
       left:35%;
       font-weight: 700;
       line-height: 1;
       transition: all .6s cubic-bezier(.19,1,.22,1);
       margin:auto;
       }
   }
   
   .cta-btn--resume {
       color:#fff;
       border: 2px solid #fff;
       padding:8px;
   }
   .cta-btn--resume:after {
       background:#fff;
      
   }
   .cta-btn::after {
       content: "";
       display:block;
       position:absolute;
       width: 0;
       height: 100%;
       left: 0;
       bottom: 0;
       z-index: -1;
       transition: all .3s cubic-bezier(.19,1,.22,1);
   }


</style>
 


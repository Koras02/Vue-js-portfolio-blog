<template>
<section id="hero" class="jumbotron">
  <div class="container">
  <h1 class="h1  hero-title">프론트엔드 개발자<span class="text-color-main" color="red">Kim Jung Ho</span> 입니다.
  <br>
  <typical
  
  >
  저는 REACT를 주로 사용하고
  Redux && API 개발 경험이 있는
  <br/>
  프론트엔드 개발자 입니다
  </typical>
  </h1>
   <p class="react-reveal hero-cta" style="opacity: 1">
       <span class="cta-btn cta-btn--hero">
           <a href="#" >About me</a>
       </span>
   </p>

  
 
  </div>
</section>
</template>
<script>
export default {};
</script>
<style>

.h1 {
    line-height: 1.2;
}

  #hero {
      box-sizing:border-box;
      min-height: 100vh;
      height: 100vh;
      display:flex;
      align-items:center;
      border-bottom: 0;
      background-color:#fff;
      font-weight: 400;
      color:#272341;
      padding: 0 5.6rem;
      margin-bottom: 0;
      top:0;
      left:0;
      bottom:0;
      right:0;
      z-index: -1;
  }
  .jumbotron {
      border-radius: .3rem;
  }
  .container {
      width: 100%;
      padding-right: 15px;
      padding-left: 15px;
      margin-right: auto;
      margin-left: auto;
    
  }
  .container > .h1 {
      font-weight:bold;
      line-height: 1.8;
      margin-bottom:32px;
      font-size: 32px;
  }

   @media (min-width: 768px) 
   {
       .container, .container-md, .container-sm {
           max-width: 720px;
       }
   }

.text-color-main {
    background: linear-gradient(135deg,#68ff5b,rgba(104,255,90,.717647));
    -webkit-background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size:30px;
    font-weight: bold;
    font-family: 'Noto Sans JP', sans-serif;
    margin-left: 10px;
}

element.style {
    opacity: 1;
}

#hero .hero-cta {
    display: flex;
}

#hero .hero-cta a,p {
    font-family: Montserrat,sans-serif;
    font-size: 1.6rem;
}

 
.cta-btn {
    display:inline-block;
    position:relative;
    padding: .8rem 1.6rem;
    font-weight: 700;
    line-height: 1;
    z-index: 1;
    transition: all .6s cubic-bezier(0.19, 1, 0.22, 1);

}
 

p {
    margin-top: 0;
    margin-bottom: 1rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}

*, :after, :before {
    box-sizing: border-box;
}

.cta-btn--hero {
    background-image: linear-gradient(135deg, #68ff5b, rgba(104,255,90,.717647));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-width: 2px;
    border-style:solid;
    border-image: linear-gradient(135deg,#68ff5b,rgba(104,255,90,.717647));
    border-image-slice: 1;
    cursor: pointer;
}

.cta-btn--hero:after {
    background-image: linear-gradient(
135deg
,#68ff5b,rgba(104,255,90,.717647));
}

.cta-btn::after {
    content: "";
    display:block;
    position: absolute;
    width: 0;
    height: 100%;
    left: 0;
    bottom: 0;
    z-index: -1;
    transition: all .3s cubic-bezier(0.19, 1, 0.22, 1);
}
 
#hero .hero-cta a {
    font-size: 1.4rem;
  
}
 

</style>

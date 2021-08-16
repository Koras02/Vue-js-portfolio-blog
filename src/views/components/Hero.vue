<template>
<section id="hero" class="jumbotron">
  <div class="container">
<div class="heros">변경사항:8월 16일 23시 50분</div>
  <h1 class="h1  hero-title">프론트엔드 개발자 
      <span class="text-color-main">
          김정호
      </span> 
      입니다.
  <br />
  <div 
     className="hero-title"
  >
  저는 REACT 를 주로 사용하고
  Redux & API 개발 경험이 있는 
  <br/>
  프론트엔드 개발자 입니다.
            
  </div>
  </h1>
   <div class="react-reveal hero-cta">
       <a href="#about" class="main-cta-btn" >
          
               About me
      
       </a>
   </div>

  
 
  </div>
</section>
</template>
<script>
 
 
</script>
<style>

 *, ::after,::before {
     box-sizing: border-box;
 }

.h1 {
    line-height: 1.2;
    /* color:red; */
}

  #hero {
      box-sizing:border-box;
      min-height: 100vh;
      height: 100vh;
      display:flex;
      font-family: 'Gelasio', serif;
      align-items:center;
      border-bottom: 0;
      background-color:#fff;
      /* color:red; */
      font-weight: 400;
      padding: 0 5.6rem;
      margin-bottom: 0;
      transition: 50s;
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
      color:#000000;
  }

   @media (min-width: 768px) 
   {
       .container, .container-md, .container-sm {
           max-width: 720px;
       }
   }

.text-color-main {
    background: linear-gradient(135deg,#68ff5b,rgba(104,255,90,.717647));
    background-clip:text;
    -webkit-text-fill-color: transparent;
    font-size:30px;
    font-weight: bold;
    font-family: 'Noto Sans JP', sans-serif;
    padding-left:10px;
}

 
.hero-cta {
    background-color:transparent;
    color:#68ff5b;
    border: 2px solid greenyellow;
    font-size: 20px;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: .8rem 1.6rem; 
    cursor:pointer;
    display: inline-block;
    -webkit-transition: all 0.4s;
	-moz-transition: all 0.4s;
	transition: all 0.4s;
}

.hero-cta:hover {
   /* overflow:hidden; */
   color:#fff;
   background:greenyellow;
 
}
 
.hero-cta:after {
    content: '';
    position:absolute;
    z-index: -1;
    -webkit-transition: all 0.4s;
    -moz-transition: all 0.4s;
    transition: all 0.4s;
  
    
    overflow:hidden;
}

.main-cta-btn {
    overflow:hidden;
    position:relative;
}

.main-cta-btn a:hover {
    color:black;
}

.main-cta-btn::after {
    content:  '';
	position: absolute;
	z-index: -1;
	-webkit-transition: all 0.4s;
	-moz-transition: all 0.4s;
	transition: all 0.4s;
	width: 100%;
	height: 0;
	top: 0;
	left: 0;
	background: #fff;
}



.main-cta-btn:hover:after,
.main-cta-btn:active:after {
    height: 100%;
    overflow:hidden;
}


a, p {
    font-family: Montserrat,sans-serif;
    font-size: 1.6rem;
}

p {
    margin-top: 0;
    margin-bottom: 1rem;
}


a:not([href]), a:not([href]):hover {
    color:inherit;
    text-decoration: none;
}



</style>

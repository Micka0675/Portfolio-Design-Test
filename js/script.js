var titleCreate = document.getElementById('create');
var animateTitleLeft = document.getElementById('create2');
var navBarMask = document.getElementById('maskNavbarBlur');
var navbar = document.getElementById('navbar');
// var landing = document.getElementById('landing');
var blocResp = document.getElementById('blocResp');
var blocResp2 = document.getElementById('blocResp2');
var titleResp = document.getElementById('titleResp');
var animatetitle3 = document.getElementById('create3');
var headReal = document.getElementsByClassName('head-real');
var botReal = document.getElementsByClassName('bot-real');
var blocReal = document.getElementsByClassName('bloc-real');
var inputLeft = document.getElementsByClassName('input-comes-left');
var inputRight = document.getElementsByClassName('input-comes-right');

// get all lines inside data bloc

var carouselElem = document.getElementsByClassName('car-elem');
var animate = document.getElementsByClassName('animation')[0];
var classMatrix = [];
var archive = [];
var colorDiv = ['color1','color2','color3'];
var anime = [];
var compteur = 0;
var animReady = true;

for (i = 0; i < blocReal.length; i++ )
{
  anime.push(false);
}
// var botReal = document.getElementById('botReal');
var lines = [] ;
// var links = [];
var lineText = document.getElementsByClassName('underlines');
lines = document.getElementsByClassName('lines');

// landing
window.addEventListener('load', animations);
// if(window.innerWidth < 960)
// {
//   titleCreate.style.right = "0";
//   animateTitleLeft.style.right = '0';
//   animatetitle3.style.left = '0';
//   animatetitle3.style.color = 'wheat';
//   blocResp.style.backgroundColor = 'wheat';
//   blocResp2.style.backgroundColor = 'black';
//   titleResp.style.backgroundColor ='black';
//   $("#aboutMe").css({left:'0'});
//   $("#imgCv").css({right:'0'}); 
//   for(i = 0;i<inputLeft.length;i++)
//   {
//     inputLeft[i].style = 'transform:translateX(100%)';
//   }
//   for(i=0;i<inputRight.length;i++)
//   {
//     inputRight[i].style = 'transform:translateX(-100%)';
//   }
    
// }
function animations(){
    // wrapperAppairs();
    // hideLanding();
    matrixEffect();
    carousel();
}

// function hideLanding(){
//   setTimeout(function(){
//     landing.style.display = 'none';
//   }, 9000);
// }

// function wrapperAppairs(){
//   setTimeout(function(){
//     wrapper.style.display = 'block';
//    }, 7000);
// }

// lines animation
function matrixEffect(){
  setInterval(function(){
    
    for(createDiv = 0;createDiv<20;createDiv++)
    {

      var divCreate = $("<div>", { class:'matrix'}); 
      $('.mask-matrix').append(divCreate);
      $('.matrix').css({width:'1px',height:'100%'});
      $('.matrix').css({position:'absolute',top:'-100%'});
      if(createDiv > 9)
      {
        $('.matrix').eq(createDiv).addClass('mobile-lines');
      }

    }

    $('.matrix').each(function()
    {
      leftPos = Math.floor(Math.random()*(100)+1);
      speedAnim = Math.floor(Math.random()*(8)+1);
      colorAnim = Math.floor(Math.random()*(3)+1);
      $(this).addClass('color'+colorAnim);
      $(this).animate({left:leftPos+"%"},0);
      $(this).css({transition:speedAnim+'s'});
      $(this).animate({top:'100%'});
      
    })
      
    setTimeout(function(){
      $('.matrix').remove();
    },8000);
      
  },9000);
}  

// carousel animation
function carousel(){
  if(window.innerWidth < 600)
  {
    for(pos=0;pos<3;pos++)
    {
      function animateCar(){
        $('.car-elem').eq(pos).animate({left:'-100%'},1000);
        $('.car-elem').eq(pos).animate({left:'-100%'},1000);
        $('.car-elem').eq(pos).animate({left:'-200%'},1000);
        $('.car-elem').eq(pos).animate({left:'-200%'},1000);
      }
      
      stop(animateCar);
    }
    for(pos=2;pos>=0;pos--)
    {
      function removeCar(){
        $('.car-elem').eq(pos).animate({left:'-100%'},1000);
        $('.car-elem').eq(pos).animate({left:'-100%'},1000);
        $('.car-elem').eq(pos).animate({left:'0'},1000);
        $('.car-elem').eq(pos).animate({left:'0'},1000);
      }
      stop(removeCar);
    }
    setInterval(function(){
      for(pos=0;pos<3;pos++)
      {
        animateCar();
        stop(animateCar);
      }
      for(pos=2;pos>=0;pos--)
      {
        removeCar();
        stop(removeCar);
      }
      
    },10000);
  }
  
}
// mouse over animations
document.addEventListener('mouseover', showUnderline);

function showUnderline(e){
  if (e.target && e.target.id == "nameLink")
  {
    lineText[0].classList.add('lineText');
    lineText[0].classList.remove('hideLineText');
  }
  if (e.target && e.target.id != "nameLink")
  {
    lineText[0].classList.add('hideLineText');
    lineText[0].classList.remove('lineText');
  }

  if (e.target && e.target.id == "moreInfo")
  {
    lineText[1].classList.add('lineText');
    lineText[1].classList.remove('hideLineText');
  }

  else
  {
    lineText[1].classList.add('hideLineText');
    lineText[1].classList.remove('lineText');
  }
};

// scroll animations

document.addEventListener('scroll', function()
{

  if(window.scrollY == 0) 
  {
    for(i = 0; i < lines.length; i++)
    {
        lines[i].style = 'transform: translateX(0%)';
    }
  }
  else
  {
    for(i = 0; i < lines.length; i++)
    {
      lines[i].style = 'transform: translateX(-100%)';
    }
  } 
  if (window.scrollY > window.innerHeight/1.7)
  {
    // titleCreate.style.display = 'block';
    
    navbar.style = "transform:translateY(-100%)";
    navbar.style.transition = "0.5s";
    navBarMask.style = "transform:translateY(-100%)";
    navBarMask.style.transition = "0.5s";
    if(window.innerHeight >960)
    {
      titleCreate.style.right = "0";
    }
  }
  else
  {
    navbar.style = "transform:translateY(0%)";
    navBarMask.style = "transform:translateY(0%)";
    navBarMask.style.transition = "0.5s";
    navbar.style.transition = "0.5s"
    if(window.innerHeight >960)
    {
      titleCreate.style = "-100%";
    }
  }
  if(window.innerWidth > 960)
  {
    if (window.scrollY >= 2*window.innerHeight){
      blocResp.style.transition = '0.5s';
      blocResp.style.backgroundColor = 'wheat';
      animateTitleLeft.style = 'transform:translateX(0%)';
    }
    else
    {
      blocResp.style.backgroundColor = 'black';
      blocResp.classList.remove('bloc-anime-reveal');
      animateTitleLeft.style = 'transform:translateX(-100%)';
    }

    if(window.scrollY >= 3.7*window.innerHeight)
    {
      animatetitle3.style.left = '0';
      animatetitle3.style.color = 'wheat';
      titleResp.style.transition = '0.5s';
      blocResp2.style.backgroundColor = 'black';
      titleResp.style.backgroundColor ='black';
    }
    else
    {
      animatetitle3.style.left = '-100%';
      animatetitle3.style.color = 'black';
      blocResp2.style.backgroundColor = 'wheat';
      titleResp.style.backgroundColor ='wheat';
    }
    if(window.scrollY > 5*window.innerHeight)
    {
      $("#aboutMe").css({left:'0'});
      $("#imgCv").css({right:'0'});
    }
    else
    {
      $("#aboutMe").css({left:'-100%'});
      $("#imgCv").css({right:'-200%'});
    }
    if(window.scrollY >= 6*window.innerHeight)
    {
      for(i = 0;i<inputLeft.length;i++)
      {
        inputLeft[i].style = 'transform:translateX(100%)';

      }
      for(i=0;i<inputRight.length;i++)
      {
        inputRight[i].style = 'transform:translateX(-100%)';
      }
    }
    else
    {
      for(i = 0;i<inputLeft.length;i++)
      {
        inputLeft[i].style = 'transform:translateX(-100%)';
      }
      for(i=0;i<inputRight.length;i++)
      {
        inputRight[i].style = 'transform:translateX(100%)';
      }
    }

  }
});


// realisations animation hover

var rideau = false;
var illus = false;

for (i = 0; i < blocReal.length; i++ )
{
  blocReal[i].addEventListener('mouseover', function animeBloc(e)
    {
      compteur++;
      for(j=0;j< blocReal.length;j++)
      {
          rideau = true
          while(anime[j] === false && e.target === blocReal[j] && compteur < 2 && illus === false && rideau === true)
          {
            document.getElementsByClassName('head-real')[j].style.animation = 'headcomes 0.8s forwards';
            document.getElementsByClassName('bot-real')[j].style.animation = 'botcomes 0.8s forwards';
            anime[j] = true;
          }
      }
      compteur = 0;
      rideau = false;
    } 
  );
};

for (i = 0; i < blocReal.length; i++ )
{
  blocReal[i].addEventListener('mouseleave', function removeBloc(e)
  {
    compteur++;
    for(j=0;j< blocReal.length;j++)
    {
      illus = true;
        while(anime[j] === true && e.target === blocReal[j] && compteur < 2 && rideau === false && illus === true)
        {
          
          document.getElementsByClassName('head-real')[j].style.animation = 'headremoves forwards';
          document.getElementsByClassName('bot-real')[j].style.animation = 'botremoves  forwards';
          anime[j] = false;

          // document.getElementsByClassName('reals')[0].style.animation = 'none';
        }
      
    }
    compteur = 0;
    illus = false;
  }
  );
}







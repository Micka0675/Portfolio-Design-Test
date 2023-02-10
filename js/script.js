var titleCreate = document.getElementById('create');
var animateTitleLeft = document.getElementById('create2');
var navBarMask = document.getElementById('maskNavbarBlur');
var navbar = document.getElementById('navbar');
var landing = document.getElementById('landing');
var blocResp = document.getElementById('blocResp');
var blocResp2 = document.getElementById('blocResp2');
var titleResp = document.getElementById('titleResp');
var animatetitle3 = document.getElementById('create3');
var headReal = document.getElementsByClassName('head-real');
var botReal = document.getElementsByClassName('bot-real');
var blocReal = document.getElementsByClassName('bloc-real');
var inputLeft = document.getElementsByClassName('input-comes-left');
var inputRight = document.getElementsByClassName('input-comes-right');
var eleMatrix = document.getElementsByClassName('matrix');
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

function animations(){
    wrapperAppairs();
    hideLanding();
    matrixEffect();
}

function hideLanding(){
  setTimeout(function(){
    landing.style.display = 'none';
  }, 9000);
}

function wrapperAppairs(){
  setTimeout(function(){
    wrapper.style.display = 'block';
   }, 7000);
}



for(neo = 0;neo<eleMatrix.length;neo++)
{
  // Code for Safari 3.1 to 6.0
  eleMatrix[7].addEventListener("webkitTransitionEnd", matrixEffect);

  // Standard syntax
  eleMatrix[7].addEventListener("transitionend", matrixEffect);
}

matrixEffect();

function matrixEffect(){
  if(animReady === true)
  {
    for(i=0;i<eleMatrix.length;i++)
    {
      var colorAnim = Math.floor(Math.random()*(3)+0);
      for(j=0;j<classMatrix.length;j++)
      {
        if(classMatrix[j].startsWith('color'))
        {
          document.getElementsByClassName('matrix')[i].classList.remove(classMatrix[j]);
          document.getElementsByClassName('matrix')[i].classList.add(colorDiv[colorAnim]);
        }
      }
    }
    var matrixInterv = setInterval(function(){
      
      eleMatrix = document.getElementsByClassName('matrix');
      classMatrix = [];
      for(z=0;z<eleMatrix.length;z++)
      {
        for(i=0;i<document.getElementsByClassName('matrix')[z].classList.length;i++)
        {
          classMatrix.push(document.getElementsByClassName('matrix')[z].classList[i]);
        }
      }
      for(i=0;i<eleMatrix.length;i++)
      {
        var leftPos = Math.floor(Math.random()*(100)+1);
        var speedAnim = Math.floor(Math.random()*(22)+1);
        var colorAnim = Math.floor(Math.random()*(3)+0);
        var archiveLeftpos = [];
        archiveLeftpos.push(leftPos);
        for(j=0;j<classMatrix.length;j++)
        {
          if(classMatrix[j] == 'matrix-down')
          {
            var control = false;
            while(control === false)
            for(v = 0;v<archiveLeftpos.length;v++)
            {
              
              if(leftPos == archiveLeftpos[v])
              {
                control = false;
              }
              else
              {
                control = true;
              }
              if(control === false)
              {
                leftPos = Math.floor(Math.random()*(100)+1);
              }
            }
            document.getElementsByClassName('matrix')[i].style['left'] = leftPos+'%';
            if(document.getElementsByClassName('matrix')[i].getBoundingClientRect() != document.getElementsByClassName('matrix')[i].style['left'])
            {
              document.getElementsByClassName('matrix')[i].style['transition'] = '0s';
            }
            
            
            document.getElementsByClassName('matrix')[i].style['left'] = leftPos+'%';
            document.getElementsByClassName('matrix')[i].style['transition'] = speedAnim+'s';
            document.getElementsByClassName('matrix')[7].style['transition'] = '22s';
            document.getElementsByClassName('matrix')[i].classList.add('matrix-reset');
            document.getElementsByClassName('matrix')[i].classList.remove('matrix-down');
            animReady = false;
          }
        }
        
      }
     if (animReady === false) {
        clearInterval(matrixInterv);
     }
    },8000); 
  } 
  
  else
  {
    for(i=0;i<eleMatrix.length;i++)
    {
      for(j=0;j<classMatrix.length;j++)
      {
        if(classMatrix[j] == 'matrix-reset')
        {
          document.getElementsByClassName('matrix')[i].style['left'] = '0s';
          document.getElementsByClassName('matrix')[i].style['transition'] = '0s';
          document.getElementsByClassName('matrix')[i].classList.remove('matrix-reset');
          document.getElementsByClassName('matrix')[i].classList.add('matrix-down');
          animReady = true;
        }
      }
      
    }
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
    titleCreate.style.display = 'block';
    titleCreate.classList.add('animate-header');
    titleCreate.classList.remove('hide-header');
    navbar.style = "transform:translateY(-100%)";
    navbar.style.transition = "0.5s";
    navBarMask.style = "transform:translateY(-100%)";
    navBarMask.style.transition = "0.5s";
  }
  else
  {
    titleCreate.classList.add('hide-header');
    titleCreate.classList.remove('animate-header');
    navbar.style = "transform:translateY(0%)";
    navBarMask.style = "transform:translateY(0%)";
    navBarMask.style.transition = "0.5s";
    navbar.style.transition = "0.5s"
  }
  // if (window.scrollY > (2*window.innerHeight)-(window.innerHeight/1.7))
  // {
  //   animateTitleLeft.style = 'transform:translateX(0%)';
    

  // }
  // else
  // {
  //   animateTitleLeft.style = 'transform:translateX(-100%)';
  // }
  if (window.scrollY >= 2*window.innerHeight){
    blocResp.classList.add('bloc-anime-reveal');
    animateTitleLeft.style = 'transform:translateX(0%)';
  }
  else
  {
    blocResp.classList.remove('bloc-anime-reveal');
    animateTitleLeft.style = 'transform:translateX(-100%)';
  }

  if(window.scrollY >= 3.7*window.innerHeight)
  {
    animatetitle3.classList.add('animate-header');
    animatetitle3.classList.remove('hide-header');
    blocResp2.classList.remove('bloc-anime-reveal');
    blocResp2.classList.add('reals-shadow');
    titleResp.classList.remove('bloc-anime-reveal');
    titleResp.classList.add('reals-shadow');
  }
  else
  {
    animatetitle3.classList.add('hide-header');
    animatetitle3.classList.remove('animate-header');
    blocResp2.classList.add('bloc-anime-reveal');
    blocResp2.classList.remove('reals-shadow');
    titleResp.classList.add('bloc-anime-reveal');
    titleResp.classList.remove('reals-shadow');
  }
  if(window.scrollY >= 4*window.innerHeight)
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
  if(window.scrollY < 3.8*window.innerHeight)
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
});

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
            // e.target.children[1].classList.add('bot-real-alt');
            // e.target.children[1].classList.remove('bot-real');
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
          // e.target.children[1].classList.add('bot-real-alt');
          // e.target.children[1].classList.remove('bot-real');
          anime[j] = false;

          // document.getElementsByClassName('reals')[0].style.animation = 'none';
        }
      
    }
    compteur = 0;
    illus = false;
  }
  );
}







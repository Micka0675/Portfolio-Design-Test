var titleCreate = document.getElementById('create');
var animateTitleLeft = document.getElementById('create2');
var navBarMask = document.getElementById('maskNavbarBlur');
var landing = document.getElementById('landing');
var blocResp = document.getElementById('blocResp');
var blocResp2 = document.getElementById('blocResp2');
var titleResp = document.getElementById('titleResp');
var animatetitle3 = document.getElementById('create3');
var headReal = document.getElementsByClassName('head-real');
var botReal = document.getElementsByClassName('bot-real');
var blocReal = document.getElementsByClassName('bloc-real');
var anime = [];
var compteur = 0;

for (i = 0; i < blocReal.length; i++ )
{
  anime.push(false);
}

console.log(headReal);
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
        lines[i].classList.remove('lights-off');
        lines[i].classList.add('lights');
    }
  }
  else
  {
    for(i = 0; i < lines.length; i++)
    {
        lines[i].classList.add('lights-off');
        lines[i].classList.remove('lights');
    }
  }
  if (window.scrollY > window.innerHeight/1.7)
  {
    titleCreate.style.display = 'block';
    titleCreate.classList.add('animate-header');
    titleCreate.classList.remove('hide-header');
    navBarMask.style.visibility = "visible";

  }
  else
  {
    titleCreate.classList.add('hide-header');
    titleCreate.classList.remove('animate-header');
    navBarMask.style.visibility = "hidden";
  }
  if (window.scrollY > (2*window.innerHeight)-(window.innerHeight/1.7))
  {
    animateTitleLeft.classList.add('animate-header-left');
    animateTitleLeft.classList.remove('hide-animate-header-left');

  }
  else
  {
    animateTitleLeft.classList.add('hide-animate-header-left');
    animateTitleLeft.classList.remove('animate-header-left');
  }
  if (window.scrollY >= 2*window.innerHeight){
    blocResp.classList.add('bloc-anime-reveal');
  }
  else
  {
    blocResp.classList.remove('bloc-anime-reveal');
  }
  if(window.scrollY >= 2.7*window.innerHeight)
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
          
          document.getElementsByClassName('head-real')[j].style.animation = 'headremoves 0.8s forwards';
          document.getElementsByClassName('bot-real')[j].style.animation = 'botremoves 0.8s forwards';
          // e.target.children[1].classList.add('bot-real-alt');
          // e.target.children[1].classList.remove('bot-real');
          anime[j] = false;
        }
      
    }
    compteur = 0;
    illus = false;
  }
  );
}







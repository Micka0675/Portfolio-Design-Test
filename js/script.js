var titleCreate = document.getElementById('create');
var animateTitleLeft = document.getElementById('create2');
var navBarMask = document.getElementById('maskNavbarBlur');
var landing = document.getElementById('landing');
var blocResp = document.getElementById('blocResp');
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
});







var titleCreate = document.getElementById('create');
var lines = [] ;
var links = [];
var lineText = document.getElementsByClassName("underlines");
lines = document.getElementsByClassName('lines');

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
    titleCreate.classList.add('animate-header');
    titleCreate.classList.remove('hide-header');

  }
  else
  {
    titleCreate.classList.add('hide-header');
    titleCreate.classList.remove('animate-header');
  }
});







var titleCreate = document.getElementById('create');
var lines = [] ;
lines = document.getElementsByClassName('lines');
console.log(window.scrollY);
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
  if (window.scrollY > window.innerHeight)
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
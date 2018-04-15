var subMenu = document.getElementById('sub-menu');

document.getElementById('dropdown').onclick = function(event) {
  var target = event.target;

  if (target.id === 'dropdown') {

    if (subMenu.className === 'hide') {
      subMenu.classList.remove('hide');
      subMenu.classList.add('show');
    } else {
      subMenu.classList.remove('show');
      subMenu.classList.add('hide');
    }
  }
};

document.body.onclick = function(event) {
  var target = event.target;

  if (target.id !== 'dropdown' && target.id !== 'sub-menu') {

    if (subMenu.className === 'show') {
      subMenu.classList.remove('show');
      subMenu.classList.add('hide');
    }
  }
};
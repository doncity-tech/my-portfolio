
let toggleBtn = document.querySelector('.dark-mode-toggle');
toggleBtn.addEventListener('click', e => {
  let classes = e.target.parentNode.classList;
  classes.remove('justify-content-start');
  classes.add('justify-content-end');
});
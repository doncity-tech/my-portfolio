
let toggleBtn = document.querySelector('.dark-mode-toggle');
toggleBtn.addEventListener('click', e => {
  let classes = e.target.parentNode.classList;
  if (classes[2] === 'justify-content-start') {
    classes.remove('justify-content-start');
    classes.add('justify-content-end');
  } else {
    classes.remove('justify-content-end');
    classes.add('justify-content-start');
  }
});

let toggleBtnDiv = document.querySelector('.dark-mode-btn');
toggleBtnDiv.addEventListener('click', e => {
  let classes = e.target.classList;
  if (classes[2] === 'justify-content-start') {
    classes.remove('justify-content-start');
    classes.add('justify-content-end');
  } else {
    classes.remove('justify-content-end');
    classes.add('justify-content-start');
  }
});
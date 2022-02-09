const item = document.querySelector('.drag-content__item');
const placeholders = document.querySelectorAll('.drag-content__placeholder');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);

placeholders.forEach((el) => {
  el.addEventListener('dragover', dragover);
  el.addEventListener('dragenter', dragenter);
  el.addEventListener('dragleave', dragleave);
  el.addEventListener('drop', drop);
});

function dragstart(e) {
  e.target.classList.add('active');
  setTimeout(() => {
    e.target.classList.add('hide');
  }, 0);
//   console.log('start');
}
function dragend(e) {
  e.target.classList.remove('active', 'hide');
//   console.log('end');
}

function dragover(e) {
  e.preventDefault();
}
function dragenter(e) {
  e.preventDefault();
  e.target.classList.add('place');
//   console.log('enter');
}
function dragleave(e) {
  e.target.classList.remove('place');
//   console.log('leave');
}
function drop(e) {
  e.target.append(item);
//   console.log(e.target);
//   console.log('drop');
}

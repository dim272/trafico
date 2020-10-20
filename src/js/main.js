let item = document.getElementsByClassName("faq__more");

console.log(item);

let trigger = function(target) {
  if (target.classList.contains('collapse')) {
   target.classList.remove('collapse');
   target.classList.add('expand');
  } else {
    target.classList.add('collapse');
  }
}

item.addEventListener('click', function ({
  for (let i=0; i<item.length;i++) {
    item[i].trigger();
  }
}));

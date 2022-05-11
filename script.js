const comecar = document.querySelector('.buttonComecar');
const players = document.querySelectorAll('div input');
const imgs = document.querySelectorAll('.bordas div');
const main = document.querySelector('.main');
let audio = document.querySelector('.audio');

players.forEach((item, index) => {
  item.addEventListener('click', function() {
    imgs.forEach((item) => {
      item.classList.add('hide')
    });
    imgs[index + 1].classList.remove('hide')
  });
});
comecar.addEventListener('click', function(event) {
  event.preventDefault();
  if (imgs[1].classList.contains('hide') === false) {
    main.remove()
  } else if (imgs[2].classList.contains('hide') === false) {
    main.remove()
  }
  else if (imgs[3].classList.contains('hide') === false) {
    main.remove()
  }
  else {
    window.alert('Escolha Um Personagem')
  }
});

let volume = document.querySelector("#volume-control");
volume.addEventListener("change", function(e) {
audio.volume = e.currentTarget.value / 100;
});




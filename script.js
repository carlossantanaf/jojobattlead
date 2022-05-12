const battle = document.querySelector('.mainBattle')
function telaInicial(){
const comecar = document.querySelector('.buttonComecar');
const players = document.querySelectorAll('div input');
const imgs = document.querySelectorAll('.bordas div');
const main = document.querySelector('.main');
const aud = document.querySelector('.audio')
const range = document.querySelector("#volume-controlP");
range.addEventListener("change", () => {
  aud.volume = range.value * 0.01;
});

function autoPI(){
  aud.play()
}
autoPI()

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
    battle.classList.remove('hide')
    function autoP(){
      const aud = document.querySelector('.audioo')
      const rangeP = document.querySelector("#volume-controlBP");
      rangeP.addEventListener("change", () => {
      aud.volume = rangeP.value * 0.01;
});
      aud.play()
   }
   autoP()

  }
  else {
    window.alert('Escolha Um Personagem')
  }
});

}
telaInicial();

const polnareffVida = document.querySelector('.polnareffVida > p:last-child');
const dioVida = document.querySelector('.dioVida > p:last-child');
const atacar = document.querySelector('.buttonAtacar')
const curar = document.querySelector('.buttonCurar')
const dioTurno = document.querySelector('.turno-dio');
const playerTurno = document.querySelector('.turno');
const danoCuraP = document.querySelector('.danoCuraP')
const danoCuraD = document.querySelector('.danoCuraD')
const dioHit = document.getElementById('dioHit')
const dioImg = document.getElementById('dioImg')
let totalVidaDio = 150;
let totalVidaPolnareff = 115;


 function vezDoDio(){
  dioTurno.classList.remove('hide');
  playerTurno.classList.add('hide');
 const tempo =  setInterval(function() {
    let atacarDano = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    totalVidaPolnareff -= atacarDano;
    danoCuraP.innerHTML = '-'+atacarDano;
    danoCuraP.classList.add('anima')
    danoCuraP.classList.add('red')
    danoCuraP.classList.remove('hide')
    polnareffVida.innerHTML = '<p>Vida: '+totalVidaPolnareff+'/115</p>';
    playerTurno.classList.remove('hide');
    dioTurno.classList.add('hide'); 
    console.log(atacarDano)
    if (totalVidaPolnareff <= 0) {
      totalVidaPolnareff = 0
      alert('Dio diz: Boa Sorte da proxima vez HAHAHAHAHA!')
      battle.remove();
    }
    clearInterval(tempo)
  }, 4000);
  setInterval(function() {
    danoCuraP.classList.remove('anima')
    danoCuraP.classList.remove('red')
    danoCuraP.classList.remove('green')
    danoCuraP.classList.add('hide')
  }, 5000)
 }

 function playerUm(){
  
atacar.addEventListener('click', function(){
  const atacarInterval = setInterval(function() {
  setInterval(function() {
    danoCuraD.classList.remove('green')
    danoCuraD.classList.remove('red')
    danoCuraD.classList.remove('anima')
    danoCuraD.classList.add('hide')
    danoCuraP.classList.remove('green')
    danoCuraP.classList.remove('red')
    danoCuraP.classList.remove('anima')
    danoCuraP.classList.add('hide')
    }, 4000);
  let atacarDano = Math.floor(Math.random() * 16);
  totalVidaDio -= atacarDano;
 console.log(atacarDano)
  if(totalVidaDio <= 0) {
    totalVidaDio = 0
  }
  if(atacarDano === 15) {
    totalVidaDio -= 15
    alert('Polnareff diz: Acertei o ponto fraco dele!')
    const hitNele = setInterval(function (){
      dioHit.classList.remove('hide')
      dioImg.classList.add('hide')
      clearInterval(hitNele)
    }, 10)
    const hitNeleT = setInterval(function (){
      dioHit.classList.add('hide')
      dioImg.classList.remove('hide')
      clearInterval(hitNeleT)
    }, 100)
  }else if (atacarDano === 0){
    totalVidaPolnareff -= 15
    danoCuraP.innerHTML = -15
    danoCuraP.classList.add('anima')
    danoCuraP.classList.add('red')
    danoCuraP.classList.remove('hide')
    alert('Dio diz: ZAAAAAAAAAAAAAAAAWAAAAAAARUDO')
  } else if (atacarDano > 1 ) {
    danoCuraD.classList.add('anima')
    danoCuraD.classList.add('red')
    danoCuraD.classList.remove('hide')
    danoCuraD.innerHTML = '-'+atacarDano
   const hitNele = setInterval(function (){
      dioHit.classList.remove('hide')
      dioImg.classList.add('hide')
      clearInterval(hitNele)
    }, 10)
    const hitNeleT = setInterval(function (){
      dioHit.classList.add('hide')
      dioImg.classList.remove('hide')
      clearInterval(hitNeleT)
    }, 100)
    
  }

  polnareffVida.innerHTML = '<p>Vida: '+totalVidaPolnareff+'/115</p>';
  dioVida.innerHTML = '<p>Vida: '+totalVidaDio+'/150</p>';
  vezDoDio()
  clearInterval(atacarInterval)
}, 2000)
});



curar.addEventListener('click', function(){
  const curarInterval = setInterval(function() {
  let vidaCura = Math.floor(Math.random() * 16);
  totalVidaPolnareff += vidaCura;

  
  danoCuraP.classList.remove('green')
  danoCuraP.classList.remove('red')
  danoCuraP.classList.remove('anima')
  danoCuraP.classList.add('hide')

  
  console.log(vidaCura)
  if (totalVidaPolnareff >= 115) {
    totalVidaPolnareff = 115
  }
  if (vidaCura === 0) {
    danoCuraP.innerHTML = -15
    alert('Dio diz: ZAAAAAAAAAAAAAAAAWAAAAAAARUDO')
    danoCuraP.classList.add('anima')
    danoCuraP.classList.add('red')
    danoCuraP.classList.remove('hide')
    totalVidaPolnareff -= 15
  } else if (totalVidaPolnareff === 115) {
    danoCuraP.classList.add('green')
    danoCuraP.classList.add('anima')
    danoCuraP.classList.remove('hide')
    danoCuraP.innerHTML = 'Vida Cheia'
  } else if (vidaCura === 15) {
    danoCuraP.innerHTML = 'Sorte +30'
    danoCuraP.classList.add('anima')
    danoCuraP.classList.add('green')
    danoCuraP.classList.remove('hide')
    totalVidaPolnareff += 15
  } else if (totalVidaPolnareff <= 0) {
    totalVidaPolnareff = 0
    alert('Dio diz: Boa Sorte da proxima vez HAHAHAHAHA!')
  }else if (vidaCura > 0){
    danoCuraP.classList.add('green')
    danoCuraP.classList.add('anima')
    danoCuraP.classList.remove('hide')
    danoCuraP.innerHTML = '+'+vidaCura
  }
  polnareffVida.innerHTML = '<p>Vida: '+totalVidaPolnareff+'/115</p>';
 
  vezDoDio()
  clearInterval(curarInterval)
}, 2000)
});

}
playerUm();








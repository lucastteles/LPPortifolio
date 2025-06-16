const slide = document.querySelector('.slide'); 
const items = document.querySelectorAll('.slide .item');
const btnAvancar = document.querySelector('.avancar');
const btnVoltar = document.querySelector('.voltar');


const itemWidthWithMargin = 320; // 300px item + 2*10px margin
let currentIndex = 1; // seleciona o segundo item

function updateItemSelecionado() {
  items.forEach(item => item.classList.remove('primario'));
  if (items[currentIndex]) {
    items[currentIndex].classList.add('primario');
  }

  btnVoltar.disabled = currentIndex === 0;
  btnAvancar.disabled = currentIndex === items.length - 1;
}

// Função para centralizar o item atual no carrossel
function centralizarItem(index) {
  const slideWidth = slide.clientWidth;
  const scrollPosition = (itemWidthWithMargin * index) - (slideWidth / 2) + (itemWidthWithMargin / 2);
  slide.scrollLeft = scrollPosition;
}

// Inicializa o carrossel centralizado no segundo item
centralizarItem(currentIndex);
updateItemSelecionado();

btnAvancar.addEventListener('click', () => {
  if (currentIndex < items.length - 1) {
    currentIndex++;
    centralizarItem(currentIndex);
    updateItemSelecionado();
  }
});

btnVoltar.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    centralizarItem(currentIndex);
    updateItemSelecionado();
  }
});


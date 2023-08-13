// ---- swiper

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  mousewheel: true,
  breakpoints: {
    // Коли розширення екрану менше або дорівнює 800px
    700: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

  },
});

// ---- yandex map

ymaps.ready(function () {
  const myMap = new ymaps.Map('map', {
    center: [55.506069, 38.858160], // Координаты центра карты

    zoom: 17, // Масштаб карты
    controls: []
  });

  const mainSvgIcon = `<svg width="60" height="68" viewBox="0 0 60 68" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <path d="M23.51 51.523a.5.5 0 0 1-.5.477c-.29 0-.51-.21-.52-.477-.145-3.168-1.756-5.217-4.832-6.147C7.53 42.968 0 33.863 0 23 0 10.297 10.297 0 23 0s23 10.297 23 23c0 10.863-7.53 19.968-17.658 22.376-3.076.93-4.687 2.98-4.83 6.147z" id="ae96eeecd750ec2a83543f00c9bc789d__b"></path>
    <filter x="-21.7%" y="-15.4%" width="143.5%" height="138.5%" filterUnits="objectBoundingBox" id="ae96eeecd750ec2a83543f00c9bc789d__a">
      <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>
      <feOffset dy="2"></feOffset>
      <feComponentTransfer><feFuncA type="linear" slope=".3"></feFuncA></feComponentTransfer>
    </filter>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <g fill-rule="nonzero" transform="translate(7 5)" fill="red" style="display: flex; justify-content: center; align-items: center;">
      <use filter="url(#ae96eeecd750ec2a83543f00c9bc789d__a)" xlink:href="#ae96eeecd750ec2a83543f00c9bc789d__b"></use>
      <use xlink:href="#ae96eeecd750ec2a83543f00c9bc789d__b"></use>
      <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x="11" y="10.5"> <!-- Змінено координати x та y -->
        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12v-2c-4 3-8.08 3.5-12 3.5S4 13 0 10v2c4.148 1.66 6.865 2.286 10 2.451V16a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-1.549c3.135-.165 5.852-.792 10-2.451zM1 6h22a1 1 0 0 1 1 1v12.306c0 .977-.705 1.809-1.674 1.94-2.2.295-6.263.754-10.326.754-4.063 0-8.127-.459-10.326-.755A1.941 1.941 0 0 1 0 19.305V7a1 1 0 0 1 1-1zm14.5-1V3.5A.5.5 0 0 0 15 3H9a.5.5 0 0 0-.5.5V5H7V3.5A2.5 2.5 0 0 1 9.5 1h5A2.5 2.5 0 0 1 17 3.5V5h-1.5z" fill="white"></path>
      </svg>
    </g>
  </g>
  </svg>`
  const starLogo = `<svg width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M5.99 9.19l-2.711 1.744c-.304.195-.687-.083-.603-.435l.792-3.323-2.32-1.9c-.279-.229-.14-.685.218-.716l3.018-.262L5.625 1.25a.398.398 0 0 1 .739.001l1.231 3.047 3.04.262c.358.031.496.488.216.717l-2.33 1.9.792 3.324c.084.352-.3.63-.603.435L5.99 9.189z" fill="currentColor"></path></svg>`
  const  placemark = new ymaps.Placemark(
    [55.506069, 38.858160 ],
    {
      
      balloonContent: "Информация о месте кадастровые работы" // Здесь может быть произвольный HTML-код
    },
    {
      iconLayout: ymaps.templateLayoutFactory.createClass(
        '<div style="display: flex; align-items: center;">' +
          '<img src="data:image/svg+xml;charset=utf-8,' + encodeURIComponent(mainSvgIcon) + '" width="60" height="68" />' +
         `<div  class="icon-info">
         <div class="icon-info_rating">
         <span class="icon-info_name">Сзик</span>
         ${starLogo}
         <span class="icon-info_rate">5,0</span>
       </div>
       <div class="icon-info_text">Кадастровые работы</div>
          </div>` +
        '</div>'
      ),
      iconImageSize: [60, 68], // Размер изображения
      iconImageOffset: [-30, -68], // Отступ иконки
      
    },
    
    
  );

  myMap.geoObjects.add(placemark);
});

// burger

const burger = document.querySelectorAll('.header_burger')
const mobileMenu = document.querySelector('.mobile-menu')
const closeBtn = document.querySelectorAll('.close')
const arrayBurger = [...burger]
const arrayClose = [...closeBtn]

arrayBurger.forEach(el => {

  el.addEventListener('click', ev => {
    mobileMenu.classList.remove('scale-down-bl')
    mobileMenu.classList.add('mobile-menu--show')
    mobileMenu.classList.add('scale-up-left')
  
  })
})
arrayClose.forEach(el=> {
  el.addEventListener('click', ev => {
    mobileMenu.classList.remove('scale-up-left')
    mobileMenu.classList.toggle('scale-down-bl');
    setTimeout(()=> {
      mobileMenu.classList.remove('mobile-menu--show')
  
    },500)
  })
})


mobileMenu.addEventListener('click', (ev) => {
  if (ev.target.localName === 'a') {
    mobileMenu.classList.remove('scale-up-left')
    mobileMenu.classList.toggle('scale-down-bl');
    mobileMenu.classList.remove('mobile-menu--show')
  }
});

// modal consultation 


// const openModalButton = document.getElementById('open-modal-button');
let openModalButton = document.querySelectorAll('.consultation');
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content');
const backdrop = modal.querySelector('.bg-gray-500');
const closeButton = modal.querySelector('.close-modal');
const cancel = modal.querySelector('.cancel');
openModalButton = [...openModalButton];

openModalButton.forEach(el => {
  el.addEventListener('click', (e) => {
    modal.style.display = 'block';
  });
})

closeButton.addEventListener('click', (e) => {

  modal.style.display = 'none';
  
});

modal.addEventListener('click', (e) => {
  if(e.target.className === 'close close-modal' || e.target.className === 'modal' || e.target === cancel ) {
    modal.style.display = 'none';
  }

});

// mask input formater
const phoneInput = document.querySelector('.phone-input');

phoneInput.addEventListener('input', function() {
  formatPhoneNumber(phoneInput);
});

function formatPhoneNumber(input) {
  let value = input.value.replace(/\D/g, ''); // Удаление всех нецифровых символов
  
  if (value.length > 0) {
    if (value.length > 1 && value[0] !== '7') {
      value = '7' + value;
    }
    
    let formattedValue = '+7';
    
    if (value.length > 1) {
      formattedValue += ' (' + value.substring(1, 4);
    }
    if (value.length > 4) {
      formattedValue += ') ' + value.substring(4, 7);
    }
    if (value.length > 7) {
      formattedValue += '-' + value.substring(7, 9);
    }
    if (value.length > 9) {
      formattedValue += '-' + value.substring(9, 11);
    }
    input.value = formattedValue;
  } else {
    input.value = '';
  }
}

let linksReviews = document.querySelectorAll('.subject_links');
let hide = document.querySelector('.hide');

linksReviews = [...linksReviews];

linksReviews.forEach(el => {
  el.addEventListener('click', e => {
    const contentEl = e.target.previousElementSibling;
    const contentElHeight = getComputedStyle(contentEl).height; // Получение вычисленной высоты
    const hasClass = e.target.classList.contains('hide');
    if(hasClass) { 
      contentEl.style.height = '299px';
      e.target.innerText = 'Читать полностью'
      e.target.classList.remove('hide')
    } else {
      contentEl.style.height = 'unset';
      e.target.innerText = 'Скрыть'
      e.target.classList.add('hide')
    }

  })
})





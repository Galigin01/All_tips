var elem = document.getElementsByClassName('btn btn-primary btn-buy js_buy_button')[0];// получили элемент поклассу
elem.style.width = '150px'; //этому элементу изменили класс через js через точечный синатксис



elem.setAttribute('data-num',6) // добавили атрибут через js



//let a = document.createElement('div’);//создаем элемент
var img = document.createElement("IMG"); // создаем картинку (удобно для больших изображений и маленьких div)

img.src = "https://cdn1.savepice.ru/uploads/2021/8/22/a7a71a29b3ccfe24b2f53ce78d368859-full.png"; // что лежит в картинке
el_one.appendChild(img); // добавили ребенка
el_one.style.objectFit = 'contain'; // object-fit определяет содержимое элемента

//a.innerHTML = 'Hello!'; //заполняем его текстом
//a.classList.add('btn'); //добавляем класс
//document.querySelector('.col-md-8').appendChild(a);//добавляем детеныша
a.style.fontSize= '250%'; // меняем размер и здесь кемелкейс
a.style.border = '1px solid black'; // добавили рамочку или '17px groove PaleVioletRed'

a.style.backgroundImage = 'url(https://primpress.ru/img/articles/0809190354391dp.jpg)'; // добавили сторонюю картинку 

a.style.backgroundSize = 'cover'; // растянуть картинку (или 100%)



needElement.style.borderBlockColor = 'green';// доп настройка

//метод classList
myElement.classList.add('foo')
myElement.classList.remove('bar')
myElement.classList.toggle('baz')


$('.foo').css({color: 'green',
 background: 'yellow'}); // прописываем css через js как в css файле





el_one.appendChild(img);
el_one.style.objectFit = 'contain';





/////////////////////////////////////////




// Объявляем переменную
var slide1 = document.getElementsByClassName('img-responsive ls-is-cached lazyloaded')[0];
var main_pic = document.getElementsByTagName('picture')[0].getElementsByClassName('img-responsive ls-is-cached lazyloaded')[0];

//////////////////////////////////
var slide2 = document.getElementsByClassName('img-responsive ls-is-cached lazyloaded')[1];
var main_pic2 = document.getElementsByTagName('picture')[1].getElementsByClassName('img-responsive ls-is-cached lazyloaded')[0];


//////////////////////////////////
var slide3 = document.getElementsByClassName('img-responsive ls-is-cached lazyloaded')[2];
var main_pic3 = document.getElementsByTagName('picture')[2].getElementsByClassName('img-responsive ls-is-cached lazyloaded')[0];

//////////////////////////////////
var slide4 = document.getElementsByClassName('img-responsive ls-is-cached lazyloaded')[3];
var main_pic4 = document.getElementsByTagName('picture')[3].getElementsByClassName('img-responsive ls-is-cached lazyloaded')[0];


// функция тайм-аута

function handler_click_slide1() {
setTimeout("main_pic.setAttribute('src','/upload/iblock/19b/19bd0c8f71cf7281c6769bd787fd8b1f_thumb_c5e21112365f945cb794c3f9ec7646fd.jpg')", 100)};
function handler_click_slide2() {
setTimeout("main_pic2.setAttribute('src','/upload/iblock/19b/19bd0c8f71cf7281c6769bd787fd8b1f_thumb_c5e21112365f945cb794c3f9ec7646fd.jpg')", 100)};


function handler_click_slide3() {
setTimeout("main_pic3.setAttribute('src','/upload/iblock/19b/19bd0c8f71cf7281c6769bd787fd8b1f_thumb_c5e21112365f945cb794c3f9ec7646fd.jpg')", 300)};
function handler_click_slide4() {
setTimeout("main_pic4.setAttribute('src','/upload/iblock/19b/19bd0c8f71cf7281c6769bd787fd8b1f_thumb_c5e21112365f945cb794c3f9ec7646fd.jpg')", 100)};

// проверим tr
slide1.addEventListener('click',handler_click_slide1);
slide2.addEventListener('click',handler_click_slide2);
slide3.addEventListener('click',handler_click_slide3);
slide4.addEventListener('click',handler_click_slide4);









///////////мутация

var tt = document.getElementsByClassName('item')[2];

//var observer = new MutationObserver(onMutate);
const mutationConfig = { attributes: true, childList: true, subtree: true, characterData: true,
    characterDataOldValue: true };

var onMutate = function(mutationsList) {
    mutationsList.forEach(mutation => {
        alert('ho-ho-ho');
    });
};

var observer = new MutationObserver(onMutate);

observer.observe(tt, mutationConfig);



/// Маппинг map()


var foo = {"pageType": "cart",                                                                  
  "ecommerce": {
  "currencyCode": "RUB",
  "checkout": {
              "actionField": {"step": 1, "option": "489.00"},                    
              "products": [{                                                                  
                            "id": "СП-00034095",
                            "name": "Контейнер EMSA CLIP&CLOSE пластиковый прямоугольный, 1.2 л 508542",
                            "category": "Контейнеры для хранения продуктов",
                            "brand": "EMSA",
                            "variant": "белый",
                            "price": "489.00",
                            "metric1": "699.00",
                            "quantity": "1"
                        },
                        {                                                                  
                            "id": "СП-0009579",
                            "name": "Контейнер EMSA CLIP&CLOSE пластиковый прямоугольный, 0.5 л 508545",
                            "category": "Контейнеры для хранения продуктов",
                            "brand": "EMSA",
                            "variant": "белый",
                            "price": "289.00",
                            "metric1": "399.00",
                            "quantity": "1"
                          }]
                        }   
                  },
    "event": "event",
    "eventCategory": "eecommerce",
    "eventAction": "checkout",
    "eventLabel":"checkoutCart",
    "eventNonInteraction": "0"
    };


const n_d = foo.ecommerce.checkout.products.map((item) => {
  return { "id": item.id,
    "price": item.price,}})



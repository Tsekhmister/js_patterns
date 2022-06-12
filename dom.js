// Основные обязанности js в браузере чтение и модификация данных и разметки страницы, реакция на действия пользователя и другие браузерные собвтия, отправка и получение данных с сервера

// При загрузке html страницы браузер создает специальную объектную модель документа, ссылка на этот объект доступна в глобальном объекте window

// Переменная document дает нам доступ к элементам страницы,,

// Для каждого элемента на странице в Dom создается специальный объект dom-узел. Эти узлы могут отличатьсяя по типу
//Для тега создается dom-узел типа элемент, их чаще называют dom-element

// Для текстовой информации создается объект - текстовый узел
// Для коментариев - создаются узлы комментариев

// В зависимости от типа у этих узлов есть свойства

// У dom-elements - объектов созданных для тегов есть имя тега, аттрибуты и возможность обрабатывать события
// Для текста илли комментария - можно просто прочесть или модифицировать содержимое

// В объекте document содержатся ссылки на основные части страницы
 // например document.body - содержит ссылку на dom элемент созданный для тега body

 // У каждого тега могут быть вложенные теги и они доступны при помощи специального свойства children

 // document.body.children - покажет набор состоящий из всех вложенных тегов

 // document.body.children[1].children - какие вложенные дети есть в  элементе с индексом 1
//

///////////////////////////////////////

// Локальные ссылки, которые есть у любого дом элемента

// const element = document.body.children[1];

// console.log('Element:', element);
// console.log('Children', element.children);

// console.log('First', element.firstElementChild);
// console.log('Last', element.lastElementChild);
// console.log('Prev', element.previousElementSibling);
// console.log('Next', element.nextElementSibling);



// console.dir(document);

// console.log('Parent:' , element.parentNode);
// console.log('ChildNodes:' , element.childNodes);
// console.log('First child:' , element.firstChild);
// console.log('Last child:' , element.lastChild);
// console.log('Prev node' , element.previousSibling);
// console.log('Next node' , element.nextSibling);

// console.log(child.tagName) - read tag Name< but only in upperCase()
//console.log(child.innerHTML) - all the HTML between open and closing tags _ все содержимое включая теги
//console.log(child.textContent) - all the text (regardless of visibility) _только текствое содержимое игнорируя теги
// console.log(child.innerText)  - only a text visible to a user (but not the 'opacity')

// Search methods on the page

// console.log(
//   document.querySelector('#extra_info'), // - позволяет найти одмн элемент на странице по определнному сыы селектру
//   document.querySelectorAll('main'), // позволяет найти все элементы на страницы по определенному сss селектору - получаем коллекцию элементов, для полученя оного элемента нужно указать  индекс - document.querySelectorAll('main')[0]
//   document.querySelectorAll('.test'),
//   document.querySelectorAll('[name="info"]'),
// )



// console.log(
//   document.getElementById('extra_info'),
//   document.getElementsByTagName('main'),
//   document.getElementsByClassName('test'),
//   document.getElementsByName('info'),

// );

// console.log('Matches: ', element.matches('.test'));
// console.log('Closest: ', element.closest('.test'));

// const form = document.getElementById('feedback_form');
// console.log('Contains form: ', element.contains(form))

//Elements colletion

{/* <ul>
  <li> Item1</li>
  <li> Item2</li>
  <li> Item3</li>
</ul> */}

// const list = document.querySelector('ul');

// console.log(list) // <ul> </ul>
// console.log(list.tagName) // UL

// const items = document.querySelectorAll('li');

// const texts = [...items].map(el => el.innerText); 

// console.log(texts); //[Item1, Item2, Item3 ]

// Коллекция - это специальный объект у которого есть елементы , хранящиеся по индексам и длинна, но у нее будут другие методы чем у массива

//How to inspect elements in console

//panel elements - right button on element - console - $0 - last elemet &1- penultimate element
// console -$('li') - one elemnt on page
// console -$$('li') - array from all elemnts on page

//Attributes and propperties

{/*
 <body>
 <h1
  id="page__title" 
  title="This is description our title" 
  >
  My title
 </h1>
</body>
 */}

// const h1 = document.getElementById('page_title');

// console.log(h1.getAttribute('id'), h1.id);//page__title
// console.log(h1.getAttribute('title')); //This is description our title
// console.log(h1.hasAttribute('title')); //true

// // Для всех стандартных аттрибутов в объексте создаются аналогичные свойства

// //For changing attribute
// h1.setAttribute('title', 'hello world'); 
// h1.title = 'hello, world'



////////Data-attribures
 
{/*
 <body>
 <h1
  id="page__title" 
  title="This is description our title" 
  data-qwe="123456"
  data-main-color="red"
  data-user-id="1"
  >
  My title
 </h1>
</body>
 */}
// const h1 = document.getElementById('page_title');

// console.log('id:', h1.id); // id: page__title

//console.log('qwe:' , h1.dataset) // {
//mainColor: 'red',
//qwe: '123456',
//userId: 1,
//}
{ /* Для всех аттрибутов которые начинаются с dada- создается отдельный объект, что бы его прочитать используется свойство dataset, в нем все data аттрибуты преобразуются в ключи, data- выброшена, остальная часть преобразуется в camelCase
data-attributes - используются для того чтобы хранить какие то данные на странице, эти данные можно читать и моодифицировать
*/}

// a-href

{/* 
<body>
  <a href="https://google.com" id="google-link">
    google
  </a>

  <a href="/home" id="home-link">
    Home page
  </a>
  </ body>
*/}

// const googleLink = document.getElementById('google-link');
// const homeLink = document.getElementById('home-link');

// console.log(
//   'Google', '\n',
//   googleLink.getAttribute('href'), '\n',
//   googleLink.href
// );

// homeLink.setAttribute('href', 'qwe')
// homeLink.setAttribute('qwe', 'href')
// homeLink.href = 'qwe';

// console.log(
//   'Home', '\n',
//   homeLink.getAttribute('href'), '\n', - //атрибут содержит в точности то что записано в html 
//   homeLink.href  - // Свойство содержит полную ссылку с учетом аттрибута
// )



// Аттрибут class позволяет стилизовать элементы

{/* 
<body>
  <h1 class="page-title">
    google
  </h1>

  </ body>
*/}

// const h1 = document.querySelector('.page-title');
// h1.className += ' 1234';
// h1.className += ' active';
// // h1.setAttribute('class', 'qwe');

// h1.classList.add('not-active');
// h1.classList.remove('not-active');
// h1.classList.add('not-active');
// h1.classList.toggle('not-active'); // - переключить класс, если такого класса не было он добавляется, 


// console.log(h1.classList.contains('active'));


// console.log(h1.getAttribute('class'));
// console.log(h1.className);
// console.log(h1.classList);

//classList - // Это объект у которого в значениях хранится название классов, причем каждый класс буед встречаться единожды

//Для аттрибута class создаются два свойства , свойство className - в точности повторяет собержимое аттрибута, classList - содержит объект который позволяет проверить наличие класса, добавлять, удалять, либо переключать при помощи метода toggle

// Form attributes

//Аттрибут action - содержит адресс куда будет переданы данные формы
// Method - способ как данные будут отправлены, жто аттрибут может иметь всего два значения get и post, get -значения метода по умолчанию

// Если убрать action - то значением по умолчанию будет адресс текущей страницы
// Для action и method - есть значения по умолчанию, которые используют если аттрибут не установлен, или у method - не валидное значение

//input - type="text" - является значение по умолчанию

// button с типом button - не отпраялет форму
{/* <button type="button">Log in</button> */}
// button с типом submit - отпраялет форму по адрессу указаному в action. ТАКЖЕ TYPE SUBMIT - ЯВЛЯЕТСЯ ЗНАЧЕНИЕМ ПО УМОЛЧАНИЮ

{/* <button type="submit">Log in</button> */}

{/*
 <form >
      <input type="checkbox" id="terms">
        <label for="terms">
          I accept terms and conditions
        </label>
      <button type="button">Log in</button>

    </form>
*/}

// const label = document.querySelector('label');

// // label.setAttribute('for', 'notALabel');
// label.htmlFor = 'notALabel';

// console.log(label.getAttribute('for'));
// console.log(label.htmlFor);  // - for являетсф зарезервированным слово м в js , поэтому используем htmlFor 

// input value

{/*<body>
    <h1>Just a example</h1>
    <input type="text" value="123" class="input_class">
  </body>
*/}

// const input = document.getElementsByClassName('input_class')[0];
// // const input2 = document.getElementsByClassName('input_class')[0];


// console.log(input.getAttribute('value'));
// console.log(input.value);


// console.log(input.value); - свойство не будет синхронизированно с аттрибутом если поменяется изначальное значение в value

// Стартовое значение при загрузке страницы хранится в аттрибуте, послен изменений значения input пользователем, значение аттрибута не поменялось,  а изменилось значение свойства


//Boolean attributes 
// Аттрибуты у которых есть название но нет значения -называются boolean

{/*
 <form>
      <label>
        Name:
        <input type="text" value="123" readonly>
      </label>

      <label>
        Remember me:
        <input type="checkbox" checked>
      </label>
           
      <button type="submit" disabled>
        Save:
      </button>
    </form>
// */}

// const form = document.getElementById('test_form');

// const textfield = document.querySelector('[type=text'); 
// // const checkbox = document.querySelector('[type=checkbox]'); 

// // const button = document.querySelector('[type=submit]'); 

// // // textfield.removeAttribute('readonly')
// // textfield.readOnly = false;

// // console.log(textfield.getAttribute('readonly'));
// // console.log(textfield.readOnly); // if true - we can't change data

// // Аттрибут hidden - убирает элемент со страницы
// // Аттрибут readonly - запрещает редактировать значение в инпуте
// // Аттрибут checked - отмечает checkbox или radiobutton галочкой
// // Аттрибут checked - делает элемент не активным


// //*********************************************//
// //Summarizing all parts//////////////////////

// {/*
//   <body data-page-id="login-page" data-secret-key="123564899">
//     <a href="/home">Home page</a>

//     <h1 class="page-title" title="Learn to code">
//       Some text
//     </h1>
//   <form action="/api/login" method="post">
//     <input value="Serhii" readonly>
//     <label for="remember">
//       <input type="checkbox" id="remember" checked>
//       Remember me
//     </label>

//     <button disabled>Save</button>
//   </form>    
//   <script src="./dom.js"></script>
// </body>
// */}

// const body = document.querySelector('body');
// const link = document.querySelector('a');
// const h1 = document.querySelector('h1');
// const form = document.querySelector('form');
// const textField = document.querySelector('input');
// const label = document.querySelector('label');
// const checkbox = document.querySelector('[type=checkbox]');
// const button = document.querySelector('button');

// console.log(body.dataset.pageId, body.dataset.secretKey);
// console.log(link.href);
// console.log(h1.title, h1.className, h1.classList.contains('page-title'));
// console.log(form.method, form.action);
// console.log(textField.type, textField.value, textField.readOnly);
// console.log(label.htmlFor);
// console.log(checkbox.id, checkbox.checked);
// console.log(button.type, button.disabled);
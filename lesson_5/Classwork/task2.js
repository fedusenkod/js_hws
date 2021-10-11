/*

    Задание 2.

    Напишите фунцию, которая изменяет цвет-фона и цвет текста, присваивая к новым цветам
    значение из this.color, this.background
    А так же добавляет элемент h1 с текстом "I know how binding works in JS"

    1.1 Ф-я принимает один аргумент,
    второй попадает в него через метод .call(obj)

    1.2 Ф-я не принимает никаких аргументов,
    а необходимые настройки полностью передаются через bind

    1.3 Ф-я принимает фразу для заголовка,
    обьект с настройками передаем через .apply();

*/
  let colors = {
    background: 'purple',
    color: 'white'
  }
// 1
  function myCall( color ){
    document.body.style.background = this.background;
    document.body.style.color = color;

    var heading = document.createElement('h1');
    heading.innerText = 'I know how binding works in JS';

    document.body.appendChild(heading);
  }

  myCall.call( colors, 'red' );

// 2
  function meBind(){
    document.body.style.background = this.background;
    document.body.style.color = this.color;

    var heading = document.createElement('h1');
    heading.innerText = 'I know how binding works in JS';

    document.body.appendChild(heading);
  }
  
  var binded = meBind.bind(colors);
  binded();

// 3
  function myText( string ){
    document.body.style.background = this.background;
    document.body.style.color = this.color;

    var h1 = document.createElement('h1');
    h1.innerText = string;

    document.body.appendChild(h1);
  }

  myText.apply(colors, ['I know how binding works in JS']);
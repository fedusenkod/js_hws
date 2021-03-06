/*

  Задание "Шифр цезаря":

    https://uk.wikipedia.org/wiki/%D0%A8%D0%B8%D1%84%D1%80_%D0%A6%D0%B5%D0%B7%D0%B0%D1%80%D1%8F

    Написать функцию, которая будет принимать в себя слово и количество
    симовлов на которые нужно сделать сдвиг внутри.

    Написать функцию дешефратор которая вернет слово в изначальный вид.

    Сделать статичные функции используя bind и метод частичного
    вызова функции (каррирования), которая будет создавать и дешефровать
    слова с статично забитым шагом от одного до 5.


    const isMobile = document.innerWidth < 768;

    Например:
      encryptCesar( 3, 'Word');
      encryptCesar1(...)
      ...
      encryptCesar5(...)

      decryptCesar1(3, 'Sdwq');
      decryptCesar1(...)
      ...
      decryptCesar5(...)

      "а".charCodeAt(); // 1072
      String.fromCharCode(189, 43, 190, 61) // ½+¾

*/


document.getElementById('in').oninput = function() {
  var offset = 5;
  var str = this.value;
  console.log(str.charCodeAt(0));
  var out = '';
  for (let i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    code = code + offset;
    out += String.fromCharCode(code);
  }
  document.getElementById('out').innerHTML = out;
}

document.getElementById('help').oninput = function() {
  var offset = 5;
  var str = this.value;
  var out = '';
  for (let i = 0; i < str.length; i++) {
    var code = str.charCodeAt(i);
    code = code - offset;
    out += String.fromCharCode(code);
  }
  document.getElementById('help2').innerHTML = out;
}
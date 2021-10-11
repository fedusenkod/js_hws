/*

    Задание 1:

    Написать обьект Train у которого будут свойства:
    -имя,
    -скорость езды
    -количество пассажиров
    Методы:
    Ехать -> Поезд {name} везет { количество пассажиров} со скоростью {speed}
    Стоять -> Поезд {name} остановился. Скорость {speed}
    Подобрать пассажиров -> Увеличивает кол-во пассажиров на Х
*/


var Train = {
    name: 'Test',
    speed: 123,
    passCount: 312,
    move: function(){
        console.log('Поезд ' + this.name + ' везет ' + this.passCount + ' со скоростью ' + this.speed);
    },
    stop: function(){
        console.log('Поезд ' + this.name + ' остановился. Скорость ' + this.speed);
    },
    pickupPass: function(x){
        this.passCount += x;
        console.log('Новых пассажиров ' + this.passCount);
    }
}


//console.log('lala');
//
//var animal = {eats: true};
//
//function Rabbit(name) {
//    this.name = name;
//}
//
//Rabbit.prototype = animal;
//var rabbit = new Rabbit('John');
//
//
//console.log(rabbit.eats);
//
////--------------------
//
//var Shape = {
//    height: null,
//    width: null,
//    sides: null,
//    getArea: function () {
//        return this.height * this.width;
//    }
//};
//
//function Rectabgle(h, w) {
//    this.height = h;
//    this.width = w;
//}
//Rectabgle.prototype = Shape;
//
//
//
//
//
//var square = new Rectabgle();
//console.log('rectangle', square);
//
//function Square() {
//    Rectabgle.apply(this,arguments);
//};
//Square.prototype = Shape;
//
//sh sh s jaksjha xbcnx
//
//
//
//
//var kwadrat = new Square();
//console.log('kwadrat',kwadrat);
//
//
//function inherit(proto) {
//    function F() {}     // (1)
//    F.prototype = proto // (2)
//    return new F()      // (3)
//}
//
//
//
//
//
//
//
//
//


var BaseClass2 = function(){
    this.kl=66;
    console.log('this',this, arguments)
    console.log(123)
    return this;
}

BaseClass2.call({abc:1},1,2,3);
BaseClass2.apply({abc:1},[1,2,3]);
//
//



var BaseClass = {
    kl: 1,
    getKl: function () {
        return this.nm;
    }
};

function Class1() {
    this.nm = 9;
}

console.log('Class1', new Class1())


Class1.prototype = BaseClass;


console.log('Class1', new Class1())



var c1 = new Class1();
console.log('c1', c1);














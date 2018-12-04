// 创建对象的几种方式
// 1.字面量
var obj = {name:'stephen'}
var obj2 = new Object({name:'02'});
// 2.构造函数
function Person(name) {
    this.name = name;
}
var obj3 = new Person('03');

// Object.create
var p = {name:'04'}
var p1 = Object.create(p);


//继承的几种方法
 /**
* 借助构造函数实现继承
*/
function Parent1 () {
    this.name = 'parent1';
}
Parent1.prototype.say = function () {
    console.log(this.name);
};
function Child1 () {
    Parent1.call(this); // 或Parent1.apply(this,arguments)
    this.type = 'child1';
}
// console.log(new Child1(), new Child1().say());
// 重点是这句：Parent1.call(this); 在子类的构造函数里执行父类的构造函数，通过call/apply改变this指向，从而导致父类构造函数执行时的这些属性都会挂载到子类实例上去。
// 问题： 只能继承父类构造函数中声明的实例属性，并没有继承父类原型的属性和方法


      /**
       * 借助原型链实现继承
       */
      function Parent2 () {
        this.name = 'parent2';
        this.play = [1, 2, 3];
    }
    function Child2 () {
        this.type = 'child2';
    }
    Child2.prototype = new Parent2();

    var s1 = new Child2();
    var s2 = new Child2();
    console.log(s1.play, s2.play);
    s1.play.push(4);
    // console.log(s2.play);//[ 1, 2, 3, 4 ]
//重点就是这句： Child2.prototype = new Parent2(); 就是说 new 一个父类的实例，然后赋给子类的原型 也就是说 new Child2().__proto__ === Child2.prototype === new Parent2()当我们在new Child2()中找不到属性/方法，顺着原型链就能找到new Parent2()，这样就实现了继承。
// 问题： 原型链中的原型对象是共用的，子类无法通过父类创建私有属性
// 比如当你new两个子类s1、s2的时候，改s1的属性，s2的属性也跟着改变


/**
 * 组合继承的优化1
 * @type {String}
 */
    function Parent4 () {
        this.name = 'parent4';
        this.play = [1, 2, 3];
    }
    function Child4 () {
        Parent4.call(this);
        this.type = 'child4';
    }
    Child4.prototype = Parent4.prototype;
    var s5 = new Child4();
    var s6 = new Child4();
    console.log(s5, s6);

    console.log(s5 instanceof Child4, s5 instanceof Parent4);
    console.log(s5.constructor);
    // 父类构造函数只执行了一次了，但又有了新的问题： 无法判断s5是Child4的实例还是Parent4的实例 因为Child4.prototype.constructor指向了Parent4的实例；如果直接加一句 Child4.prototype.constructor = Child4 也不行，这样Parent4.prototype.constructor也指向Child4，就无法区分父类实例了。
    
    /**
     * 组合继承的优化2
     */
      function Parent5 () {
        this.name = 'parent5';
        this.play = [1, 2, 3];
    }
    function Child5 () {
        Parent5.call(this);
        this.type = 'child5';
    }
    //注意此处,用到了Object.creat(obj)方法，该方法会对传入的obj对象进行浅拷贝
    //这个方法作为一个桥梁，达到父类和子类的一个隔离
    Child5.prototype = Object.create(Parent5.prototype);
    //修改构造函数指向
    Child5.prototype.constructor = Child5


    // es6继承
    class Chlild6 extends Parent6 {
        constructor(x,y,color){
            super(x,y);
            this.color  = color;// 调用父类的constructor(x, y)
        }
        toString(){
            return this.color + ' ' +super.toString()// super代表父类原型，调用父类的toString()
        }
    }

    // extends实现原理
    //原型连接
Man.prototype = Object.create(Person.prototype); 
// B继承A的静态属性
Object.setPrototypeOf(Man, Person);
//绑定this
Person.call(this);
// 前两句实现了原型链上的继承，最后一句实现构造函数上的继承



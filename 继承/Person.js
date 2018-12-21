// 继承 就是 一个实例对象 能够使用多个构造函数的  方法和属性

function Person(name) {
  this.name = name || '佐佐木';
  this.eat = function () {
    console.log('吃一乐拉面!!!');
  };
};

Person.prototype.sayHi = function () {
  console.log('啊你哈塞呦！！');
};

// 通过构造函数创建对象 p
var p = new Person;

/*
  new Person
    1 普通函数名后面的括号有两个作用
       函数调用
       传参
    2 一旦函数名和 new 连用以后，构造实例对象
      只有传参
*/

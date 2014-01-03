  /*
  有缺陷的继承实现方式，虽然将各个子类型实例的继承链分开了，但是不能很方便的实现对本类型共享对象和属性的访问
  
  */
 

    function Person(name, age) {
      this.__proto__ = Object.prototype
      this.constructor = Person  
      
      this.name = name
      this.age = age
      this.sayName = function() {
        console.log('Person---' + this.name)
      }
    }

    function Man(name, age, job) {

      this.__proto__ = new Person(name, age) //实现继承父类型属性和方法
      this.constructor = Man  //修复构造器指向

      this.job = job
      this.sayJob = function() {
        console.log("Man---" + this.job)
      }

    }

    Man.prototype.sayHello = function() {
      alert('hello prototype' + this.name)
    }

    var man = new Man('andy', '20', 'job')

    var man1 = new Man('andy1', '21', 'job1')

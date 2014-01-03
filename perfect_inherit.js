      /*
      传统的面向对象语言（如java、ruby等）在子类型实例查找方法和属性时，查找过程如下：
        1.查找本类型的实例方法和属性
        2.查找本类型公有方法和属性
        3.查找继承的父类型的属性和方法
      通过这一过程可以很明显的发觉，完善的面向对象继承机制需要两条链来实现。但是JavaScript中实现继承只能依靠原型链，
      我个人认为这是规范本身的一个缺陷。
      如下是借用JavaScript中函数的call方法，来实现完善的继承机制
      
      
      */
      
      
       function Person(name, age) {
          Person.prototype.p = '_p_'
          this.name = name
          this.age = age
          Person.prototype.sayName = function() {
            console.log(this.constructor.name + ':' + this.name)
          }
        }

        function Man(name, age, job) {
          Man.prototype.__proto__ = Person.prototype
          Man.prototype.m = '_m_'
          Person.call(this, name, age)
          this.job = job    

          Man.prototype.sayJob = function() {
            console.log(this.constructor.name + ":" + this.job)
          }    
     
        }

        function Chinaman(name, age, job, language){
            Chinaman.prototype.__proto__ = Man.prototype
            Chinaman.prototype.c = '_c_'
            Man.call(this, name, age, job)
            this.language = language
            Chinaman.prototype.sayLanguage = function(){
                console.log(this.language)
            }
        }

        var a = new Chinaman('andy', '20', 'job', 'simplified Chinese')
        var b = new Chinaman('andy1', '21', 'job1' , 'Chinese Traditional')

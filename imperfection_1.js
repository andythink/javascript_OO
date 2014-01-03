    /*
    有缺陷的实现方式，子类型实例共享一条父类型继承链
    */
    
    
    function Person(name, age) {
      Person.prototype.p = '_p_'
      this.name = name
      this.age = age
      this.sayName = function() {
        console.log('Person---' + this.name)
      }
    }

    function Man(name, age, job) {

      Man.prototype.__proto__ = new Person(name, age)
      Man.prototype.m = '_m_'
      this.job = job
      this.wife = new Person('a', '15')
      this.arr = [1,2,3,4]
      this.sayJob = function() {
        console.log("Man---" + this.job)
      }
    }

    var man = new Man('andy', '20', 'job')

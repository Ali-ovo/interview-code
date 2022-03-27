    // 这里就写两种继承  es6之前和之后的
    //  只调用一次父类构造函数
    // Child可以向Parent传参
    // 父类方法可以复用
    // 父类的引用属性不会被共享
    // 子类之间互不影响  父类构造函数只调用一次

    /**
      *   es6继承 使用关键字class
      */
     {


      class Parent {
        constructor(name) {
          this.name = name
          this.arr = [1, 2, 3]
        }
      }

      class Child extends Parent {
        constructor(name, age) {
          super(name)
          this.age = age
        }
      }

      let girl = new Child('兰兰', 19);
      let boy = new Child('小辉', 20)
      let dad = new Parent('兰兰爸')

      girl.arr.push('999')
      // console.log(girl);
      // console.log(boy);
      // console.log(dad);
    }



    /**
       * es6之前  寄生组合继承 
      */

    {

      function Parent(name) {
        this.name = name
        this.arr = [1, 2, 3]
      }

      Parent.prototype.say = () => {
        console.log('Hi');
      }


      function Child(name, age) {
        Parent.call(this, name)
        this.age = age
      }

      //  核心代码 通过创建新对象 子类和父类就会隔离
      Child.prototype = Object.create(Parent.prototype)
      Child.prototype.constructor = Child



      let girl = new Child('兰兰', 19);
      let boy = new Child('小辉', 20)
      let dad = new Parent('兰兰爸')
      girl.arr.push('999')

      // console.log(girl);
      // console.log(boy);
      // console.log(dad);
    }



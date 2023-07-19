//  //getters ve setters
//  //temel syntax
//  let obj  = {
//     get propName(){
//         //obj.propName yazınca burası çalışır
//         //alıcı
//     },
//     //ayarlayıcı
//     set propName(value){
//         //obj.propName = value yazınca burası çalışır
//     }

//  }
// //örnek
// let user = {
//     name:"John",
//     surName:"Smith",

   
// };
// Object.defineProperty(user,"fullName",{
//     get(){
//         return `${this.name} ${this.surName}`;
//     },
//     set(value){
//         [this.name,this.surName] = value.split("");
//     }
// });
// alert(user.fullName);
// for(let key in user)alert(key);


// let user = {
//     get name(){
//         return this._name;
//     },
//     set name(value){
//         if (value.length <4){
//             alert("isim çok kısa başka bir isim koy ")
//             return;
//         }
//         this._name = value;
//     }
// };
// user.name = "Pete";
// alert(user.name);
// user.name = "";

// function User(name,age){
//     this.name = name;
//     this.birthday = birthday;
//     Object.defineProperty(this,"age",{
//         get(){
//             let todayYear = new Date().getFullYear();
//             return todayYear - this.birthday.getFullYear();
//         }
//     })
    
// }
// let john = new User("Tarik",new Date(2003,7,6))
// alert(tarik.name)
// alert(tarik.age)
// alert(tarik.birthday)

// //class syntax
// class myCLass(){
//     //class methods
//     //constructor{}
//     //method1{}
// }
// //sınıflar için virgüle gerek yoktur
// class User{
//     constructor(name){
//         this.name = name;
//     }
//     sayHi(){
//         console.log(this.name);
//     }
//     soyleMerhaba(){
//         console.log(this.name)
//     }
//     habinNe(){
//         console.log("Kirmiz hapliyiz aga")
//     }
//     yas(){
//         console.log("20 yaşindayim")
//     }
    
// }
// //kullanim
// let user = new User("Tarik");
// user.sayHi();
// user.soyleMerhaba();
// user.habinNe();
// user.yas();

// console.log(typeof User)

class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    sayName(){
        console.log(this.name)
        console.log(this.age)
    }
}
console.log(User)
 //mutlaka proto derslerini öğreneceğim.
let tarik = new User("tarik",20)
console.log(tarik)
console.log(typeof User)
console.log(User===User.prototype.constructor)
console.log(User.prototype.sayName);
console.log(Object.getOwnPropertyNames(User.prototype))


function user2(name){
    this.name = name;
}
user2.prototype.sayName = function(){

console.log(this.name)
}
let torok = new User("torok")
torok.sayName();

// bir class new olmadan çağırılamaz


//sınıfları başka ifadeler içinde tanımalamak
//BİR SINIfın adı olabilir ve adı varsa yalnızca sınıfın içinde görülür
let vlass =  class myCLass{
    sayBy(){
        console.log("ROKTO PORKO")
        console.log(myCLass);
    }


}

new vlass().sayBy(); // çalıştı
//sınıf oluşturma
function makeClass(phrase){
    // declare and return class
    return class{
        sayBy(){
            console.log(phrase);
        }
    }
}
let user3 = makeClass("hello");
new user3().sayBy();

class User4{
    constructor(name){
        this.name = name;

    
    }
    get name(){
        return this._name
    }
    set name(value){
        if (value.length<4){
            console.log("name is a too short")
            return;
        }
        this._name = value;

    }
}
// let user = new User4("torok")
// console.log(user.name)
// user = new User4("")

// Object.defineProperties(User.prototype,{
//     name:{
//         get(){
//             return this._name
//         },
//         set(name){

//         }
//     }
// })
// function f() { return "sayHi"; }

// class User5 {
//   [f()]() {
//     alert("Hello");
//   }

// }

// new User5().sayHi();


//sınıf özellikleri
class Users{
    name = "Anonymous";
    sayHello(){
        console.log(`Hello,${this.name}`)
    }
}
new Users().sayHello();

//sınıflar 2 şekilde tanımlanabilir. sınıf ifadesi ve sınıf bildirimi

//declatarion
class Rectangle{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}
// expression sınıf anonimdir ama bir değişkene atılmıştır
//      katı modda yürüyütür  sınıf gövdesi 
const Rectangle5 = class  {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}
//expression sınıfın kendi adı vardır
const Rectangle3 = class Rectangle2{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}

class Rectangle4{
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    get Area(){
       return this.calcArea(); 
    }
    //yöntem
    calcArea(){
        return this.height * this.width;
    }
    *getSides(){
        yield this.height;
        yield this.width;
        yield this.height;
        yield this.width;
    }
}
const square = new Rectangle4(10,10)
console.log(square.area)
console.log([...square.getSides()]);

//static yöntemleri
class Point{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    static displayName = "Point";
    static distance(a,b){
        const dx =a.x - b.x;
        const dy = a.y = b.y;
        return Math.hypot(dx,dy)
    }
}
const p1 = new Point(5,5)
const p2 = new Point(10,10)

console.log(Point.displayName)
console.log(Point.distance(p1,p2))

// sınıf özellikleri constructor gibi öyle yazılır.
class Rectangle6{
    height  =  0 ;
    width;
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
}
// özel sınıf özellikleri
class Rectangle11{
    #height = 0 ;
    #width;
    constructor(height,width){
        this.#height = height;
        this.#width = width;
    }
}
// sınıf inheritance
class Animal{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noise` );
    }

}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    speak(){
        console.log(`${this.name} barks`)
        
    }
}
const dogga = new Dog("BullPit");
dogga.speak();

//alt sınıfta bir constructor varsa thisden önce  super çağırır
class Cat{
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`hey this cat is very satistifed ${this.name}`)
    }
}

class Lion extends Cat{
    speak(){
        super.speak();
        console.log(`this name ${this.name} roars`)
        
    }
}

const l = new Lion ("fuzzy");
l.speak();

// class Animal3{
//     speak(){
//         return this;
//     }
//     static eat(){
//         return this;
//     }
// }
// const obj = new Animal3();
// obj.speak();
// const speak = obj.speak;
// speak();
// Animal3.eat();
// const eat = Animal3.eat;
// eat();


// function Animal(){}

// Animal.prototype.speak = function(){
//     return this;
// };
// Animal.eat = function(){
//     return this;
// }
// const obj3= new Animal();
// const speak3 = obj3.speak;
// const eat =Animal.eat; 
// eat();


//extends
//syntax class ChildClass extends ParentClass

// class SomeClass extends class {
//   constructor() {
//     console.log("Base class");
//   }
// } {
//   constructor() {
//     super();
//     console.log("Derived class");
//   }
// }
// new SomeClass();

//hata verir return 2 yerde kullanıldığı için
// class ParentClass{
//     constructor(){
//         return 1
//     };
// }
// class ChildClass extends ParentClass{
//     constructor(){
//         super();
//         return 1
//     }
// }
// console.log(new ChildClass())



// -------------------------------------------------------------------------------------------------------------------
function Parent(){
    this.name='parent';
}
Parent.prototype.eat=function(){console.log('eat')}

function Child(){
    this.age = 9;
}
Child.prototype=Object.create(Parent.prototype,{constructor:{value:Child}});

Child.prototype.play=function(){console.log('play')}
const child= new Child();
// console.log('1111',child.eat(),child.play())
// // console.log(child.play())
const parent= new Parent()
console.log('1111',parent.eat())
console.log(Child.prototype.__proto__ === Parent.prototype)//true
console.log(Child.__proto__ === Parent)//true
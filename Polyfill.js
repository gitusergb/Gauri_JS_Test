// Implementations for polyfills for reduce and filter.

// Implement polyfills for reduce and filter in JavaScript.

function MyArray(){
    Object.defineProperty(this, 'length', {
        enumerable: false,
    });

      this.length = arguments.length;

        for(let i = 0; i <arguments.length; i++) {
            this[i] = arguments[i];
        }

}
let myarr = new MyArray( 3, 5, 6);
console.log('myarr : ',Object.values(myarr));

MyArray.prototype.push = function(el){
    let index =this.length;
    this[index]=Object.values;
    this.length++;
    console.log('myarr2 : ',Object.values(this));
}
let arr2 = new MyArray(1,2,3);
arr2.push();

MyArray.prototype.pop = function(el){
  let index =this.length;
  this.length--;
  delete this.length;
    this[index]=Object.values;

 console.log('myarr3 : ',Object.values(this));

}
let arr3 = new MyArray(1,5,6);
arr3.pop();
MyArray.prototype.map = function(cb){
let arr2 = [];
for(let i in this){
if(this.hasOwnProperty(i)){
    arr2.push(cb(this[i]));
 
}
}return arr2;
 
}
MyArray.prototype.filter = function(){
 
   let arr4 =[];
    for(let i=0;i<this.arr1.length;i++){
       if(this.arr1[i]<8 && this.arr1[i]>3){
     arr4.push(this.arr1[i]);
        
       }
    }console.log('myfilterarr4 : ',(this.arr4));
   
}

MyArray.prototype.reduce = function(arr){
  let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    console.log('myreducearr3 : ',(sum));
}


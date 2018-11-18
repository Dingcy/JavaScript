// 1.已知数据结构users，请实现语法支持user.unique能够按照name字段去重，并输出结构为：["a","b"]

var users=[{
    id:1,name:"a"
 },{
    id:2,name:"a"
 },{
    id:3,name:"b"
 },{
    id:4,name:"v"
 }]


 Array.prototype.unique = function(){
     let newArray = this.map( item => {
         return item.name;
     });
     console.log(newArray);//[ 'a', 'a', 'b', 'v' ]
     console.log(new Set(newArray));//Set { 'a', 'b', 'v' }
     return Array.from(new Set(newArray)); 
 }

 console.log(users.unique());//[ 'a', 'b', 'v' ]
 
 
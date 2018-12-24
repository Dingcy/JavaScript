const arr = [1,2,3,4,5,6,5,2,3,4,1];

// filter + map
function unique(arr) {
    let temp = new Map();
   return  arr.filter( item => {
        return !temp.has(item) && temp.set(item,1);
    });
}

// set + Array.from
function unique2(arr) {
   return  Array.from(new Set(arr));
}

// reduce + includes
function unique3(arr) {
    return  arr.reduce( (prev,cur) => {
        return prev.includes(cur)?prev:[...prev,cur]
    },[])
 }

//  filetr + indexOf
 function unique4(arr) {
    return arr.filter( (item,index) => {
        return arr.indexOf(item) === index
    })
 }

 function unique5(arr) {
     let newArr = [];
    arr.forEach(element => {
        if(!newArr.includes(element)) newArr.push(element); 
    });

    return newArr;
 }

 function unique6(arr) {
    let newObj = {};
   arr.forEach(element => {
       if(!newObj[element]) newObj[element] = 1; 
   });

   return Object.keys(newObj);
}



console.log(unique6(arr));
// 工具函数
const toString = Object.prototype.toString;
const getType = (obj)=>  toString.call(obj).slice(8,-1);


// 深度优先深拷贝
function DFSDeepClone(obj,visited=new Set(),level=0) {
    let res = {}
    const type = getType(obj);

    if(type === 'Object' || type === 'Array'){
        // 处理环状数据
        if(visited.has(obj)){
            res = obj
        }else {
            // visited[level] = obj;
            visited.add(obj);
            res = type === 'Object'?{}:[];
            Object.keys(obj).forEach(ele => {
                res[ele] = DFSDeepClone(obj[ele],visited,level+1)
            })
        }
    }else if(type === 'Function'){
        res  = eval(`(${obj.toString()})`)
    }else {
        res = obj
    }

    return res
}

const getType3 = (obj) => Object.prototype.toString.call(obj).slice(8,-1);

function deepClone3(obj,visited = new Set(),level = 0) {
  const type = getType3(obj);
  let res = {};
  if(type == 'Object' || type == 'Array'){
    if(visited.has(obj)){
      res = obj
    }else {
      visited.add(obj);
      res = Array.isArray(obj)?[]:{};
      Object.keys(obj).forEach(key => {
        res[key] = deepClone3(obj[key],visited,level+1)
      })
    }
      
  }else if(type == 'Function'){
    res = eval(`(${obj.toString()})`)
  }else {
    res = obj
  }

  return res
}

// 模拟环状数据
const obj_huan = {
    foo: {
      name: 'foo',
      bar: {
        name: 'bar',
        baz: {
          name: 'baz',
          aChild: null  //待会让它指向obj.foo
        }
      }
    }
  }

  obj_huan.foo.bar.baz.aChild = obj_huan.foo;

//   console.log(JSON.parse(JSON.stringify(obj_huan)))


let obj = {
    a:1,
    b:{
      b1:2
    },
    c:function () {
        console.log('111')
    },
    d:undefined,
    e:{
        name:'test'
    },
    f:/\d/
}

const getType2 = (obj) =>  Object.prototype.toString.call(obj).slice(8,-1);
function deepClone2(obj,map = new Set(),level = 0) {
  let res = {};
  const type = getType2(obj);

  if(type == 'Object' || type == 'Array'){
    if(map.has(obj)){
      res = obj;
    }else {
      map.add(obj);
      res = type == 'Object'?{}:[]
        Object.keys(obj).forEach(key => {
          res[key] = deepClone2(obj[key],map,level+1)
        })
    }
  }else if(type == 'Function'){
    res = eval(`(${obj.toString()})`)
  }else {
    res = obj
  }

  return res
}


console.log(deepClone3(obj))




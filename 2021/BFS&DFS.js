// 深度优先
// 递归
function DFS(node,nodeList=[]) {
    if(node !==null ){
        nodeList.push(node)
    };
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
        DFS(children[i],nodeList)
        
    }
    return nodeList
}

function DFS1(node) {
    let nodeList = [];
    if(node !== null){
        nodeList.push(node)
    }
    let children = node.children;
    for (let i = 0; i < children.length; i++) {
        nodeList.concat(DFS(children[i]))
    }
    return nodeList
}
// 广度优先
function BFS(node) {
    let nodelist = [];
    let stack = [];
    if(node !== null){
        stack.push(node);
        while (stack.length) {
            let item = stack.shift();
            nodelist.push(item);
            let children = item.children;
            for (let i = 0; i < children.length; i++) {
                stack.push(children[i])   
            }
        }
    }

    return nodelist
}
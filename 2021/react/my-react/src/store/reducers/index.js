export function defRuducer (state={},action){
    return Object.assign({},state,action)
}
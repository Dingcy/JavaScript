// 优点:
// 1.可以在node.js中使用
// 2.支持并发请求
// 3.支持pormise API
// 4.包比较小

axios({
    method:'get',
    url:url
}).then( res =>{ console.log(res)})
.catch( err => {console.log( err )})



// 并发请求
function getUserAccount() {
    return axios.get('/user/12345');
  }
  
  function getUserPermissions() {
    return axios.get('/user/12345/permissions');
  }
  
  axios.all([getUserAccount(), getUserPermissions()])
    .then(axios.spread(function (acct, perms) {
      // Both requests are now complete
    }));

    

$.ajax({
    type: 'POST',
    url: url,
    data: data,
    dataType: dataType,
    success: function() {},
    error: function() {}
})

// 是对原生XHR的封装，支持JSONP，非常方便，

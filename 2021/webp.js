function isSupportWebp() {
    return document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0   
}

const ifSupportWebp = isSupportWebp();

function getImgUrl(url) {
    if(!url){
        return url
    }
    // base 64
    if(url.startsWith('data')){
        return url
    }
    if(!ifSupportWebp){
        return url
    }

    return url + `?imageMogr2/format/webp`  //腾讯cos传参
}
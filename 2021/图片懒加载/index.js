
const imgs = Array.prototype.slice.call(document.querySelectorAll('img'));
// getBoundingClientRect
const lazyLoadImg  = () => {
    const viewHeight = document.documentElement.clientHeight;
    for (let i = 0; i < imgs.length; i++) {
       if(imgs[i].getBoundingClientRect().top < viewHeight){
           imgs[i].src = imgs[i].getAttribute('data-src');
           imgs.splice(i,1);
           len--;
           i--;
       }
        
    }
}
// IntersectionObserver
const observer = new IntersectionObserver(changes => {
    for (let i = 0; i < imgs.length; i++) {
        let img = imgs[i];
        if(img.isIntersecting){
            const imgElement = img.target;
            imgElement.src = imgElement.getAttribute('data-src');
            observer.unobserve(imgElement);//解除观察
        }
    }
})
imgs.forEach(item => {
    observer.observe(item);
});

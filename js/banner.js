document.addEventListener("DOMContentLoaded", function(event){
//Banner
class Banner {
    constructor(idBanner, text, lifeTime, nameCookie){
        this.divBanner = document.getElementById(idBanner);
//Start init
        this.init(text, lifeTime, nameCookie);
    }
//Method Init
    init(textB, second, nameC) {
    //Start bannerText
        this.bannerText(textB);
    //Start createCookie
        this.createCookie(second, nameC);
    //Start checkCookie
        this.checkCookie();
    }
//Method bannerText
    bannerText(textB) {
        let content = document.createTextNode(textB);
        this.divBanner.appendChild(content);
    }
//Method createCookie
    createCookie(second, nameC){
        let date = new Date(new Date().getTime() + second * 1000);
        document.cookie = `name=${nameC}; path=/; expires=` + date.toUTCString();
    }
//Method getCookie
    getCookie(name){
        let match = document.cookie.match(new RegExp(name + '=([^;]+)'));
        if (match) return match[1];
    }
//checkCookie
    checkCookie(){
        let timer = setInterval(() => {
            if(this.getCookie('name')){
                this.divBanner.style.display = 'block';
            } else {
                this.divBanner.style.display = 'none';
                clearInterval(timer);
            }
        }, 1000)
    }
}
new Banner ('banner', 'This is banner', 3, 'helloMax');

//---------WITHOUT CLASS START---------
// let divBanner = document.getElementById('banner');
// let content = document.createTextNode('This is banner');
// divBanner.appendChild(content);
//
// let date = new Date(new Date().getTime() + 5 * 1000);
// document.cookie = "name=helloMax; path=/; expires=" + date.toUTCString();
// console.log(document.cookie);
//     window.getCookie = function(name) {
//         let match = document.cookie.match(new RegExp(name + '=([^;]+)'));
//         console.log(match);
//         if (match) return match[1];
//     };
//
//     console.log(window.getCookie('name'));
//     let timer = setInterval(function () {
//         if(getCookie('name')){
//             divBanner.style.display = 'block';
//             console.log('yes')
//         } else {
//             divBanner.style.display = 'none';
//             console.log('no');
//             clearInterval(timer);
//         }
//     }, 1000);
//---------WITHOUT CLASS END---------

});
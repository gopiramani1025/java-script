var letPlayButton = document.querySelector('#lets-play-btn');
var flexSwitchCheckDefault = document.querySelector('#flexSwitchCheckDefault');
var sadCat = document.querySelector('#sad-cat');
var smileCat = document.querySelector('#smile-cat');
var angryCat = document.querySelector('#angry-cat');

var counter = 0;

letPlayButton.addEventListener('click', function(){
    // if(flexSwitchCheckDefault.checked) {
    //     smileCat.style.cssText = 'display: block !important';
    //     sadCat.style.cssText = 'display: none !important';
    // } else {
    //     sadCat.style.cssText = 'display: block !important';
    //     smileCat.style.cssText = 'display: none !important';
    // }

    if(flexSwitchCheckDefault.checked) {
        smileCat.style.cssText = 'display: block !important';
        sadCat.style.cssText = 'display: none !important';
        angryCat.style.cssText = 'display: none !important';
    } else if( counter >= 3 ){
        angryCat.style.cssText = 'display: block !important';
        sadCat.style.cssText = 'display: none !important';
        smileCat.style.cssText = 'display: none !important';
    } else {
        counter++;
        sadCat.style.cssText = 'display: block !important';
        smileCat.style.cssText = 'display: none !important';
        angryCat.style.cssText = 'display: none !important';
    }
});
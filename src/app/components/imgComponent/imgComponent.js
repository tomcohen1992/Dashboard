'use strict';

const appModule = angular.module('appModule');

appModule.component('appImgComponent', {
    templateUrl: '/app/components/imgComponent/imgComponent.html',
    controller: imgComponentController,
        bindings:{
        index:'<'
 }
});


function imgComponentController() {
    
    this.titles = ["CLEAR WEB","DARK WEB"];
    this.web_imgs = ["./assets/Clear_web.png",
               "./assets/Dark_web.png"
               ];
}

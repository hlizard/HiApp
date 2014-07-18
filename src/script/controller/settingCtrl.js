define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element:'#settingView',
        event: 'show',
        handler:renderSetting
    }];

    function init(){
        VM.module('settingView').init({
            bindings:bindings
        });

    }

    function renderSetting(){
        if($$('#settingView .page-content')[0])
            return;
        hiApp.showIndicator();
        xhr.simpleCall({
            func:'user_login'
        },function(response) {
            if (response['err_code'] === 0) {
                var user = response['data']['user'];

                VM.module('settingView').renderSetting(user);
            }
        })
    }

    return{
        init:init
    }
});
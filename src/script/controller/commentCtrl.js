define(['utils/appFunc','utils/xhr','view/module'],function(appFunc,xhr,VM){

    var bindings = [{
        element:'.item-comment-btn',
        event: 'click',
        handler:VM.module('commentView').commentPopup
    }];

    function init(){
        VM.module('commentView').init({
            bindings:bindings
        });

        getComments();
    }

    function getComments(){
        xhr.simpleCall({
            query: {
                callback: '?'
            },
            func: 'comments'
        }, function (response) {
            if (response['err_code'] === 0) {
                var random = Math.floor(Math.random()*2);
                if(!random)
                    response['data'] = null;

                VM.module('commentView').render({
                    comments: response['data']
                });
            }
        })
    }

    return{
        init:init
    }
});
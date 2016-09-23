var descContent = "我爱我家2016官方招聘"; // 微信分享描述
var shareTitle = '年轻就要有野心！'; // 微信分享标题
// 微信分享图片
var imgUrl = './img/weixin_share.jpg';

if (imgUrl.indexOf(window.location.protocol) < 0){
    if (imgUrl[0]=='.'){
        imgUrl =  '/' + imgUrl;
    }
    imgUrl = window.location.protocol + '//' + window.location.host + imgUrl;
}

var localUrl = window.location.origin + window.location.pathname;
var localSearch = window.location.search;

// 微信分享网址
var message_link = localUrl + localSearch;

function load_wx_config(callback){
    var url = encodeURIComponent(window.location.href);
    $.ajax({
        type: "GET",
        dataType: "jsonp",
        url: "http://company.dajie.com/weixin/jssdk/config?url=" + url + "&callback=?",
        data: {},
        success: function (result) {
            if (result.code == 0) {
                wx.error(function (res) {
                    //alert("wx.error:" + res);
                });
                wx.config($.extend(result.data, {debug: false}));
                callback && callback(result.data);
            }
        }
    });
}
function load_wx(config){
    wx.ready(function () {
        wx.onMenuShareAppMessage({
            title: shareTitle,
            desc: descContent,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });

        wx.onMenuShareTimeline({
            title: shareTitle,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });

        wx.onMenuShareQQ({
            title: shareTitle,
            desc: descContent,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            complete: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });

        wx.onMenuShareWeibo({
            title: shareTitle,
            desc: descContent,
            link: message_link,
            imgUrl: imgUrl,
            trigger: function (res) {
            },
            complete: function (res) {
            },
            success: function (res) {
            },
            cancel: function (res) {
            },
            fail: function (res) {
            }
        });
    });
}

load_wx_config(function(){
    load_wx();
});
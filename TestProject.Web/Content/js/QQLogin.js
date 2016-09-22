﻿function QQLogin(skipurl) {
    //应用的APPID，请改为你自己的
    var appID = "101332352";
    //成功授权后的回调地址，请改为你自己的
    var redirectURI = "http://127.0.0.1/Member/QQContentBlank";

    //构造请求
    if (window.location.hash.length == 0) {
        var path = 'https://graph.qq.com/oauth2.0/authorize?';
        var queryParams = ['client_id=' + appID, 'redirect_uri=' + redirectURI, ' scope=' + 'get_user_info,list_album,upload_pic,add_feeds,do_like', 'response_type=token'];

        var query = queryParams.join('&');
        var url = path + query;
        window.location.href=url;
    } else {
        //获取access token
        var accessToken = window.location.hash.substring(1);
        //使用Access Token来获取用户的OpenID
        var path = "https://graph.qq.com/oauth2.0/me?";
        var queryParams = [accessToken, 'callback=callback'];
        var query = queryParams.join('&');
        var url = path + query;
        var script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    }
}
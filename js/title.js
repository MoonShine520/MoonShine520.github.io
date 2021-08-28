var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/funny.ico");
        document.title = '别走啊~~';
        clearTimeout(titleTime);
    }
    else {
        document.querySelector('[rel="icon"]').setAttribute('href', "/img/favicon.ico");
        document.title = '回来了~' + OriginTitle;
        titleTime = setTimeout(function () {
            document.title = OriginTitle;
        }, 2000);
    }
});
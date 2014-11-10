$(document).ready(function() {
    var didPost = 0;

    $("<div id='shu'>你已经水微博<p id='timer'></p><div id='insert'></div></div>").insertBefore($(".WB_miniblog"));
    $("<div id='wrap'><div id='leave-div'><p id='already'>你已经刷微博<br/><span id='time'></span></p><br/><p id='record'>记录下你收获了什么？</p><br/><textarea id='content'></textarea><br/><div id='post'>发布微博和大家分享！</div></div></div>").insertBefore($(".WB_miniblog"));


    //timer
    var startAt = new Date();

    var h, m,s;
    startTime();

    function startTime()
    {
        var currentAt = new Date();
        var ms = currentAt.getTime() - startAt.getTime();

        h = Math.floor(ms/(1000*60*60));
        m = Math.floor((ms - h*1000*60*60)/(1000*60));
        s = Math.floor((ms - h*1000*60*60 - m*1000*60)/1000);

        // add a zero in front of numbers<10
        h=checkTime(h);
        m=checkTime(m);
        s=checkTime(s);
        $('#timer').text(h+"时"+m+"分"+s+"秒");
        setTimeout(startTime,500)
    }

    function checkTime(i)
    {
        if (i<10)
        {i="0" + i}
        return i
    }

//leave

    var hGo, mGo, sGo;
    window.onbeforeunload = function(){
        hGo = h;
        mGo = m;
        sGo = s;

        if(didPost == 0) {
            $('#time').html(hGo + "小时" + mGo + "分" + sGo + "秒");
            $('#shu').fadeOut(1000);
            $('#wrap').fadeIn(1000);
            return '走之前和大家分享一下你刷微博的收获吧！';
        }

    };

    $('#post').click(function(){
        didPost = 1;
        $('#wrap').fadeOut(1000);
        var postContent = $('#content').val();

        $('.send_weibo textarea').text("我刚刚刷微博"+hGo+"时"+mGo+"分"+sGo+"秒"+"，我收获了："+postContent+"#你从微博收获了什么？#"+"https://chrome.google.com/webstore/detail/%E4%BD%A0%E4%BB%8E%E5%BE%AE%E5%8D%9A%E6%94%B6%E8%8E%B7%E4%BA%86%E4%BB%80%E4%B9%88%EF%BC%9F/fcimkbknjhjgicipaihclnmcfidaejnf");
        $("html,body").animate({scrollTop: 0}, 1000);
    });


});


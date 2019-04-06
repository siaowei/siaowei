//首页轮播图
var index=0;
var Play=null;
$(".button ul li").mouseover(function(){
    clearInterval(Play);//清除定时器
    index=$(this).index();//获取到序列号

   $(this).addClass("hover").siblings().removeClass("hover");
   $("#box ul li").eq(index).show().siblings("li").hide();
}).mouseout(function () {
    autoPlay();
});

function autoPlay() {
    //设置定时器
    Play=setInterval(function () {
        index++;
        if(index>3){
            index=-1;
        }
        else {
            $(".button ul li").eq(index).addClass("hover").siblings().removeClass("hover");
            $("#box ul li").eq(index).show().siblings("li").hide();
        }
    },2000)
}
autoPlay();

//角色介绍语言包
var beeplogo = $(".beeplogo")[0];
$(".musiclogo")
    .mouseover(function() {
        beeplogo.play();
    }).mouseout(function () {
    beeplogo.pause();
});


var beepzero = $(".beep0")[0];
$(".music0")
    .mouseover(function() {
        beepzero.play();
    }).mouseout(function () {
    beepzero.pause();
});
var beepone = $(".beep1")[0];
$(".music1")
    .mouseover(function() {
        beepone.play();
    }).mouseout(function () {
    beepone.pause();
});
var beeptwo = $(".beep2")[0];
$(".music2")
    .mouseover(function() {
        beeptwo.play();
    }).mouseout(function () {
    beeptwo.pause();
});
var beepThree = $(".beep3")[0];
$(".music3")
    .mouseover(function() {
        beepThree.play();
    }).mouseout(function () {
    beepThree.pause();
});



//视频页选集

$(".select button").mouseover(function(){
    var index=0;
    clearInterval(Play);//清除定时器
    index=$(this).index();//获取到序列号

    $(this).addClass("hover").siblings().removeClass("hover");
    $("#setvideo div").eq(index).show().siblings("li").hide();
}).mouseout(function () {
    autoPlay();
});

$(".select li").click(function () {
    index=$(this).index();
    $(".video li").eq(index).show().siblings("li").hide();
    $(this).addClass("hover").siblings().removeClass("hover");

});




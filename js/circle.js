//围绕圆旋转界面
function d2a(n){  //角度转弧度
    return n*Math.PI/180;
}

window.onload=function () {
    var obox = document.getElementById('box');
    var odiv = obox.children[0];
    var R = obox.offsetWidth / 2;
    var a = 0;
    var N = 6;
    // for (var i = 0; i < N; i++) {
    //     var obox = document.getElementById('box');
    //     var odiv = new Array(N);
    //     odiv[i] = obox.children[i];
    //     a = 360 / N * i;
    //     var x = R + Math.sin(d2a(a)) * R;
    //     var y = R - Math.cos(d2a(a)) * R;
    //     odiv[i].style.left = x + 'px';
    //     odiv[i].style.top = y + 'px';
    // }

    document.onclick = function () {
        var adiv = obox.children;
        for(var i=0;i<adiv.length;i++){
            var a=360/N*i;
            startMove(adiv[i],a);
        }

    };


    function startMove(obj, iTarget) {
        clearInterval(obj.timer);
        var count = Math.floor(1000 / 30);
        var start = 0;
        var dis = iTarget - start;
        var n = 0;
        obj.timer = setInterval(function () {
            n++;

            var c = 1 - n / count;
            var cur = start + dis * (1 - Math.pow(c, 3));
            var x = R + Math.sin(d2a(cur)) * R;
            var y = R - Math.cos(d2a(cur)) * R;

            obj.style.left = x + 'px';
            obj.style.top = y + 'px';

            if (n == count) {
                clearInterval(obj.timer)
            }
        }, 30);
    }
};
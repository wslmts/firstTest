$(function() {
	//快速点击
	FastClick.attach(document.body);

	var $win = $(window),
		$doc = $(document),
		sizebr = 330 / 500;


	//初始化		
	$win.on("load resize", init);

	//初始化
	function init() {
		var winH = $win.height(),
			winW = $win.width(),
			winSizebr = winW / winH,
			$page = $(".page");

		// 针对魅族等特殊比例
		if (winSizebr > sizebr) {
			$page.each(function(i) {
				$(this).addClass("meizuSize");
			});
		}
	}
	//touch.js 上下划屏
	function touchY() {
		document.addEventListener('touchmove', function(e) {
			e.preventDefault()
		})
		var pages = new PageSlide(document.querySelector('.pages'), 'Y');
		window.slide = pages
	}
	 // touchY();

	//loading 定时器通过类loader_spot的动态添加控制css3动画
    clearInterval(timers);
    $spotLoader = $("#loader_spot");
    var timers = setInterval(function(){
        $spotLoader.removeClass("loader_spot");
        setTimeout(function(){
            $spotLoader.addClass("loader_spot");
        },20);
    },2100);

    //loading
	var num = 0,
		$pages = $("#pages"),
		$loader = $("#loader"),
		$pagesImg = $pages.find("img"),
		$loaderNum = $loader.find(".loader_num"),
		imglen = $pagesImg.length/3;

	function imgLoader($img) {
		var _src = $img.attr("_src");
		$img.attr("src", _src);

		$img.on('load', function() {
			num++;
			if (num < imglen) {
				$loaderNum.html(Math.ceil((num) / (imglen) * 100) + "%");
				imgLoader($pagesImg.eq(num));
			}else if(num == Math.ceil(imglen)){
				$loaderNum.html(100 + "%");
				$pages.show();
				$loader.hide();
				imgLoader($pagesImg.eq(num));
				init();		//初始化
				touchY();	//划屏
			}else {
				imgLoader($pagesImg.eq(num));
			}
		});

		$img.on("error", function() {
			$pages.show();
			$loader.hide();
			init();		//初始化
			touchY();	//划屏
		})
	}
	imgLoader($pagesImg.eq(num));


	
});
//轮播图外部引用
// 新品推荐部分
// 新品推荐商品部分  
$(function () {
	// 获取元素
	// 男女鞋按钮
	var $shoe = $('#new_products .command-title .tabs .shoe');
	// 运动按钮
	var $active = $('#new_products .command-title .tabs .active');
	// 男女鞋商品显示部分盒子
	var $news_wrap = $('#new_products .new_products_shop .news_wrap');
	// console.log($news_wrap);
	//运动商品部分隐藏部分盒子
	var $news_wrap1 = $('#new_products .new_products_shop .news_wrap1');
	// console.log($news_wrap1);
	// 上一个按钮
	var $prev1 = $('#new_products .new_products_shop .shop_left_button');
	// console.log($prev1);
	//下一个按钮
	var $next1 = $('#new_products .new_products_shop .shop_right_button');
	// 获取ul
	var $ul = $('#new_products .new_products_shop .news_wrap ul')
	var $ul1 = $('#new_products .new_products_shop .news_wrap1 ul')
	// 获取li
	// var $ul_li = $('#new_products .new_products_shop ul li');
	// 下标
	var index = 0

	// 显示商品  隐藏部分
	$shoe.click(function () {
		$news_wrap.css({
			'display': 'block',
		})
		$news_wrap1.css({
			'display': 'none',
		})
	})

	$active.click(function () {
		$news_wrap1.css({
			'display': 'block',
		})
		$news_wrap.css({
			'display': 'none',
		})
	})

	// 点击轮播
	$next1.click(function () {
		var $left = $ul.scrollLeft();
		// var position = $ul.position()
		var $left = position.left();
		$ul.animate({
			left: '+ $left',
		}, 2000)

	})
	$prev1.click(function () {
		var left = $ul.position().left();


		$ul.animate({
			left: "990px",
		}, 2000)
	})
})




// 今日主推主图点击切换	
$(function () {
	// 获取男女鞋按钮元素
	var $shoe = $('#today_main .main-title .tabs .shoe');
	// 获取运动按钮元素
	var $active = $('#today_main .main-title .tabs .active')
	// 获取默认显示盒子
	var $main_img = $('#today_main .main_shop .main_img')
	// 获取默认隐藏盒子
	var $main_img1 = $('#today_main .main_shop .main_img1')
	$shoe.click(function () {
		$main_img.css({
			'display': 'block',
		})
		$main_img1.css({
			'display': 'none',
		})
	})
	$active.click(function () {
		$main_img.css({
			'display': 'none',
		})
		$main_img1.css({
			'display': 'block',
		})

	})

})
// 今日主推品牌图标无缝点击轮播
$(function () {
	// 获取大盒子
	// var $logo_wrap = $('#today_main .shop_logo_wrap');
	// 获取ul
	var $ul = $('#today_main .shop_logo_wrap .main_shop_logo');
	// console.log($ul);
	// 上一个
	var $prev = $('#today_main .shop_logo_wrap .prev');
	// 下一个
	var $next = $('#today_main .shop_logo_wrap .last');
	// console.log($next);
	// 获取li
	// var $ul_li = $('#today_main .shop_logo_wrap .main_shop_logo li');
	$next.click(function () {
		$ul.animate({ left: "-990px" }, 1000)
		// $ul.css({
		// 	'left': '-100%',
		// })
	})
	$prev.click(function () {
		$ul.animate({ left: "0" }, 1000)
		// $ul.css({
		// 	'left': 0,
		// })
	})

})
// 品牌潮流主要部分
$(function () {
	var $video = $('#Brand_Trend_Information .main_video .box video');
	var $video1 = $('#Brand_Trend_Information .main_video .box1  video');
	var $_box = $("#Brand_Trend_Information .main_video .box");
	var $_box1 = $("#Brand_Trend_Information .main_video .box1");
	$_box.click(function () {
		$video.css({
			'z-index': 1,
		})
		$video1.css({
			'z-index': 0,
		})
	})
	$_box1.click(function () {
		$video1.css({
			'z-index': 1,
		})
		$video.css({
			'z-index': 0,
		})
	})
})

//品牌潮流资讯 视频
$(function () {
	var $video = $('#Brand_Trend_Information .main_big_video video');
	var $_main = $("#Brand_Trend_Information .main_big_video");
	var $_img = $('#Brand_Trend_Information .main_big_video img');
	// console.log($_img);
	$_main.click(function () {
		$video.css({
			'z-index': 1
		})
		$_img.css({
			'display': 'none'
		})
	})
})


;(function($){
	var homeiScroll = new iScroll("Home",{
		onBeforeScrollStart: function (e) {
			var _target = e.target.nodeName.toLowerCase();
			if( _target!="input" && _target!="a" && _target!="select" && _target!="bottom"){
				 e.preventDefault();
			}
		 },
	});
	//跳转页面
	$("#footer").on("click","a",function(e){
			e.preventDefault();
		}).on("tap","a",function(){
			//alert(1)
			var ip = $(this).attr("href");
			var index = $(this).index();
			//标题变化
			var tit =$(this).attr("data-tit");
			$("#title").html(tit);
			//alert(ip)
			//跳转页面
			$(ip).css({"-webkit-transform":"translate3d(0,0,0)","-webkit-transition":"all 1s"})
				 .siblings().css({"-webkit-transform":"translate3d(100%,0,0)"});
		})

	// $.ajax({
	// 	url:"data/data.json",
	// 	dataType:"json",
	// 	success:function(e){
	// 		var str="";
	// 		var str1 = "";
	// 		var o = e.data.citylist;
	// 		for(var j in o){
	// 			var arr1 = o[j];
	// 			str1+= "<li><a href='#' class='sp2'>"+j+"</a></li>";
	// 			str+="<p class='p4'>"+j+"</p>";
	// 			for(var m in arr1){
	// 				var arr2 = arr1[m];
	// 				for(var n in arr2){
	// 					str+="<li>"+arr2[n]["name"]+"</li>";
	// 				}
	// 			}

				
	// 		}
	// 		$("#ul1").html(str);
	// 		$("#ul2").html(str1);
	// 		//字母点击事件
	// 		$(".sp2").on("click",function(){
	// 			  var st=$(this).html();
	// 				$(".p4").each(function(){
	// 					var scr=$(this).offset().top;
	// 					//alert(scr);
 //  						if($(this).html()==st){
 //  							$(".div").animate({"scrollTop":scr});
	// 					}	
	// 				})				
	// 			})
	// 	}
	// })
		var arr=[],
			$let=$("#ul2>li"),
		//获取zimu距浏览器上部的距离
			$zimus=$("#ul1>p");
		//遍历对象获取每个zimu距上部的距离
		var ul_1 = $(".div");
		$zimus.each(function(){
			var top=parseInt($(this).offset().top);
			arr.push(top);
			//alert(top);
		})
		$let.on("click",function(e){
			e.preventDefault();
			//alert(1);
			ind=$(this).index();
			//alert(ind);
			//$zimus.eq(ind).addClass("fix");
			$(".div")[0].scrollTop=arr[ind]-50;
		})

		
		ul_1.on("scroll",function(){
			var scrTop=$(this).scrollTop()+75;
			//alert(scrTop)
		//document.title=scrTop;
			$.each(arr,function(i){
				//console.log(i);
				if(i==arr.length-1){
					if(scrTop>arr[i]){
						$zimus.eq(i).addClass("fixed");
					}else{
						$zimus.eq(i).removeClass("fixed");
					}
				}else{
					if(scrTop>=arr[i]&&scrTop<arr[i+1]){
						$zimus.eq(i).addClass("fixed");
					}else{
						$zimus.eq(i).removeClass("fixed");
					}
				}
				
			})
		})
})(Zepto)
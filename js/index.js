window.onload=function(){
	// 购物车下拉列表
    let shop = document.getElementsByClassName("shop")[0];
    let shopA = document.getElementsByClassName("shopA")[0];
    let shopXiala = document.getElementsByClassName("shop-xiala")[0];
    shop.onmouseover = function(){
    	shopA.style =`background-color:#fff;color:#ff6700`;
    	shopXiala.style = `height:98px`;
    }
    shop.onmouseout = function(){
     	shopA.style =`background-color:#424242;color:#b0b0b0;transition:background-color 0s .3s;`;
     	shopXiala.style = `height:0`;
    }

    // 搜索框
    let tex = document.getElementsByClassName("text")[0];
    let right = document.getElementsByClassName("right")[0];
    let right1 = document.getElementsByClassName("right1")[0];
    let right1Xiala = document.getElementsByClassName("right1-xiala")[0];
    let right2 = document.getElementsByClassName("right2")[0];
    let right1Wenzi = document.getElementsByClassName("right1-wenzi")[0];

    let status = true;
	right1.onmouseover = function(){
		if(!status){
			return;
		}
		right1.style.borderColor="#b0b0b0";
		right2.style.borderColor="#b0b0b0";	
	}
	right1.onmouseout = function(){
		if(!status){
			return;
		}
		right1.style.borderColor="#e0e0e0";
		right2.style.borderColor="#e0e0e0";
	}
	right2.onmouseover = function(){
		if(!status){
			return;
		}
		right1.style.borderColor="#b0b0b0";
		right2.style.borderColor="#ff6700";
	}
	right2.onmouseout = function(){
		if(!status){
			return;
		}
		right1.style.borderColor="#e0e0e0";
		right2.style.borderColor="#e0e0e0";
	}
	tex.onfocus = function(){
		status = false;
		right1.style.borderColor="#ff6700";
		right2.style.borderColor="#ff6700";
		right1Xiala.style="display: block;";
		right1Wenzi.style="display: none;"
	}
	tex.onblur = function(){
		status = true;
		right1.style.borderColor="#e0e0e0";
		right2.style.borderColor="#e0e0e0";
		right1Xiala.style="display: none;";
		right1Wenzi.style="display: block;"
	}
	
	//小米明星单品
	let btnLeft = document.querySelector(".conone>.conone-top>.btns>.btn-left");
	let btnRight = document.querySelector(".conone>.conone-top>.btns>.btn-right");
	let conOne = document.querySelector(".conone-con");
	btnLeft.onclick = function(){
		conOne.style.left ="0";
		btnLeft.classList.add("active");
		btnRight.classList.remove("active");
	}
	btnRight.onclick = function(){
		conOne.style.left ="-1226px";
		btnLeft.classList.remove("active");
		btnRight.classList.add("active");
	}
	//为你推荐
	let leftBtn = document.querySelector(".contwo>.conone-top>.btns>.btn-left");
	let rightBtn = document.querySelector(".contwo>.conone-top>.btns>.btn-right");
	let rightBox = document.querySelector(".con-one-con-box"); 
	let num = 0;
	rightBtn.onclick = function(){
		num ++;
		leftBtn.classList.remove("active");
		if(num>=2){
			num = 2;
			rightBtn.classList.add("active");
			leftBtn.classList.remove("active");
		}
		rightBox.style.marginLeft = -1226*num+"px";
	}
	leftBtn.onclick = function(){
		num --;
		rightBtn.classList.remove("active");
		if(num<=0){
			num = 0;
			leftBtn.classList.add("active");
			rightBtn.classList.remove("active");
		}
		rightBox.style.marginLeft = -1226*num+"px";
	}
	// rightBtn.onclick = function(){
	// 	num -= 1226;
	// 	if(num<(-1226)*2){
	// 		num = -1226*2;
	// 	}
	// 	rightBox.style.marginLeft = num+"px";
	// }
	// leftBtn.onclick = function(){
	// 	num += 1226;
	// 	if(num>0){
	// 		num = 0;
	// 	}
	// 	rightBox.style.marginLeft = num+"px";
	// }
	
	
	//内容
	function neironlunbo(str){
		let leftBtn1 = document.querySelector(str+" .control-prev");
		let rightBtn1 = document.querySelector(str+" .control-next");
		let neironBox = document.querySelector(str+" .beiron-box"); 
		let yuandian = document.querySelectorAll(str+" .neiron-bottom>ul>li>a"); 
		let num1 = 0;
		let index1 = 0;	
		rightBtn1.onclick = function(){
			index1++;
			if(index1>3){
	            return index1=3;
	        }
			neironBox.style.marginLeft = -296*index1+"px";
			yuandian.forEach((item)=>{item.classList.remove("active")});
			yuandian[index1].classList.add("active");
		}
		leftBtn1.onclick = function(){
			index1--;
			if(index1<0){
	            return index1=0;
	        }
			neironBox.style.marginLeft = -296*index1+"px";
			yuandian.forEach((item)=>{item.classList.remove("active")});
			yuandian[index1].classList.add("active");
		}
		for(let i=0;i<yuandian.length;i++){
	        yuandian[i].onclick = function(){
	        	index1 = i;
	            yuandian.forEach((item)=>{item.classList.remove("active")});
	            yuandian[index1].classList.add("active");
	            neironBox.style.marginLeft = -296*index1+"px";
	        }
	    }	
	}
	neironlunbo(".neiron1");
	neironlunbo(".neiron2");
	neironlunbo(".neiron3");
	neironlunbo(".neiron4");

	
	//导航栏选项卡
	let navBox = document.querySelector(".mainnav>.center");
	let navTit = document.querySelectorAll(".mainnav>.center>ul>.nav-tit");
	let navXiala = document.querySelectorAll(".mainnav>.center>ul>li>.nav-xiala");
	navBox.onmouseenter = function(){
     	navXiala.forEach((itme)=>itme.classList.add("transition"));
    }
	for(let i=0;i<navTit.length;i++){
		navTit[i].onmouseover = function(){
			navXiala[i].classList.add("active");
		}
		navTit[i].onmouseout = function(){
			navXiala[i].classList.remove("active");
			navXiala.forEach((itmes)=>itmes.classList.remove("transition"));
     		navXiala[i].classList.add("transition");
		}
	}

	//banner左侧选项卡效果
	let bannerleftTit = document.querySelectorAll(".bannerleft1");
	let bannerleftcon = document.querySelectorAll(".childer");
	for(let i=0;i<bannerleftTit.length;i++){
		bannerleftTit[i].onmouseover = function(){
			bannerleftcon.forEach((itmes)=>itmes.style="display:none");
			bannerleftcon[i].style="display:block";
		}
		bannerleftTit[i].onmouseout = function(){
			bannerleftcon.forEach((itmes)=>itmes.style="display:none");
		}
	}

	//主页面选项卡效果
	function xuanxiangka(str){
		let conTit = document.querySelectorAll(str+">.remen-li");
		let conlis = document.querySelectorAll(str+">.con-con-right-con");
		for(let i=0;i<conTit.length;i++){
			conTit[i].onmouseover = function(){
				conTit.forEach((itmes)=>itmes.className="remen-li");
				conTit[i].className="remen-li active";
				conlis.forEach((itmes)=>itmes.className="con-con-right-con");
				conlis[i].className="con-con-right-con active";
			}
		}
	}
	xuanxiangka(".jiadian");
	xuanxiangka(".zhineng");
	xuanxiangka(".dapei");
	xuanxiangka(".peijian");
	xuanxiangka(".zhoubian");

	//banner轮播
	let son = document.querySelectorAll(".bannerimg");
    let banner = document.querySelector(".bannerimgboxs");
    let btn = document.querySelectorAll(".bannerright>ul>li>a");
    let prve = document.querySelector(".anniuleft");
    let next = document.querySelector(".anniuright");
    let t = setInterval(run,2000);
    let index = 0;
    function run(type="next"){
    	if(type=="next"){
            index++;
            if(index>4){
                index = 0;
            }
        }else if(type=="prve"){
            index--;
            if(index<0){
                index = 4;
            }
        }
        son.forEach((item)=>{item.classList.remove("active")});
        son[index].classList.add("active");   
        btn.forEach((item)=>{item.classList.remove("active")});
        btn[index].classList.add("active");      
    }

    banner.onmouseover = function(){
        clearInterval(t);
    }
    banner.onmouseout = function(){
        t = setInterval(run,3000);
    }
    for(let i=0;i<btn.length;i++){
        btn[i].onclick = function(){
        	index = i;
            son.forEach((item)=>{item.classList.remove("active")});
            btn.forEach((item)=>{item.classList.remove("active")});
            son[index].classList.add("active");
            btn[index].classList.add("active");
        }
    }

    next.onclick = function(){
        run();
    }
    prve.onclick = function(){
        run("prve");
    }
}

$(function(){
  var index = 0;  /*记录屏幕数字的计数器*/
  var timer = null; /*计时器*/
  var scrollball = $(".scrollball li"); /*得到scrollball里面的所有li,形成一个伪数组,赋值给scrollball变量*/

  scrollball.click(function(event){  /*创建点击事件函数*/
    index = $(this).index();      /*将scrollball中的下标值取出来,赋值给index变量*/
    change(index);  /*调用change函数,并把index的值传入函数*/
    special(index); /*调用special函数,并把index的值传入函数*/
  });

  /*创建鼠标滚轮事件函数,形参是事件e和反向值d这两个*/
  $(window).mousewheel(function(e,d){ /*d代表鼠标滚轮滚动的方向 -1表示向下 ,1表示向上*/
    clearTimeout(timer);   /*清除一次定时器*/
    timer = setTimeout(function(){ /*设置一个一次的定时器*/
      index-=d;      /*将d累计的值赋值给index*/
      if (index > scrollball.length-1 || index < 0) {
        index = 0;           /*判断index的大小,适当时候将index的值初始化为0*/
      }
      change(index);   /*调用change函数,并把index的值传入函数*/
      special(index);  /*调用special函数,并把index的值传入函数*/
    }, 500);     /*定时器的时间设置为500毫秒*/
  });

/*创建一个函数,使得第一屏的logo消失,而滚动标志显示;否则反之.*/
function special(index){
  if (index == 0) {            /*判断是否为第一屏*/
    $(".logo_small").hide();   /*使得第一屏的logo消失*/
    $(".scroll").show();       /*滚动标志显示*/
  } else {                    /*判断是否为非第一屏*/
    $(".logo_small").show();  /*使得第一屏的logo显示*/
    $(".scroll").hide();      /*滚动标志消失*/
  }
}

/*创建一个函数,使得左侧边栏的样式跟随着点击事件的变化而变化*/
function change(index){
  /*根据上面的判断得到点击那个小圆球的下标,先给给全部li加上样式,然后给这个点击的li加上样式后,它的兄弟元素去掉样式*/
  scrollball.eq(index).addClass('cur').siblings().removeClass('cur');
  /*找到section标签,得到点击的下标,展示出点击标签的那个section,其他的section隐藏掉*/
  $("section").eq(index).show().siblings("section").hide();
  /*设置定时器,重复以上的操作,只不过是移除这个点击到的section的一个current类,让其他兄弟元素加上这个类,时间设置为100毫秒*/
  setTimeout(function(){
  $("section").eq(index).removeClass('current').siblings('section').addClass('current');
  },100);
}

});

// ---------- Initialize Swiper ------------

//메인 슬라이드
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  effect: "fade",
  speed:800,   //부드럽게 사라지는 정도
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slideActiveClass: 'on',
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

//계열사 슬라이드
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 4,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {   //수정필요
    delay: 4000,
    disableOnInteraction: false,
  }
});

//웅진소식 슬라이드
var swiper = new Swiper(".mySwiper3", {
        slidesPerView: 5,
        spaceBetween: 50,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
});


//------------gnb 슬라이드 -----------

const gnb = $('.gnb');
const header = $('header');
let gnb_h = $('.gnb_box').outerHeight();

  $(document).ready(function(){

    //gnb 슬라이드 함수
    $(gnb).hover(function(){ //마우스 오버시
      $(header).stop().animate({'height':gnb_h},500);
      $('.h_inner').css('border-bottom','1px solid #ccc')
    },function(){ //마우스 아웃시
      $(header).stop().animate({'height':'100px'},500);
      $('.h_inner').css('border-bottom','1px solid rgba(51,51,51,0.2)')
    })

    //마우스 오버시 배경색,폰트컬러 변경 함수
    $(header).hover(function(){
      $(header).css('background','#fff')
      $('.gnb > li > a').css('color','var(--text_color_1)')
      $('.lnb > li > a').css('opacity','1')
    },function(){
      $(header).css('background','rgba(0,0,0,0.2)')
      $('.gnb > li > a').css('color','#fff')
      $('.lnb > li > a').css('opacity','0.3')
    })

  });


//-------------계열사 무한슬라이드------------

  // 롤링 배너 복제본 생성
    let roller =  document.querySelector('.rolling-list');
    roller.id = 'roller1'; // 아이디 부여

    let clone = roller.cloneNode(true)
    // cloneNode : 노드 복제. 기본값은 false. 자식 노드까지 복제를 원하면 true 사용
    clone.id = 'roller2';
    document.querySelector('.wrap').appendChild(clone); // wrap 하위 자식으로 부착

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
    // offsetWidth : 요소의 크기 확인(margin을 제외한 padding값, border값까지 계산한 값)

    roller.classList.add('original');
    clone.classList.add('clone');


  // 마우스가 요소 위로 진입했을 때 일시정지
  $('.wrap .rolling-list li').hover(function(){
    $('.rolling-list.original').css('animation-play-state', 'paused');
    $('.rolling-list.clone').css('animation-play-state', 'paused');
  },function(){
    $('.rolling-list.original').css('animation-play-state', 'running');
    $('.rolling-list.clone').css('animation-play-state', 'running');
  });



//------------1200px보다 화면이 작아질때, 컨텐츠크기를 1200px로 변경하여 스크롤바로 이동시 제대로 보이도록함--------------------
$(document).ready(function(){
  var screenWidth = $(window).width()

  function screen(){
    if(screenWidth >= 1200){
      //body컨텐츠의 하위 자식요소들 전부 속성 변경
      $('body').children().css('width','100%')
    }else{
      $('body').children().css('width','1200px')
    }
  }
  screen();

  $(window).resize(function(){
    screenWidth = $(window).width()
    screen();
  })
})


//------------헤더 좌우스크롤시 보여지게 하기----------
$(document).ready(function(){

  //새로고침시 헤더위치 변경
  let bwLeft = $(document).scrollLeft();
  $('.h_inner').css('left',`-${bwLeft}px`)

  //스크롤 할때마다 자동으로 헤더위치 변경
  $(window).scroll(function(){
    bwLeft = $(document).scrollLeft();
    $('.h_inner').css('left',`-${bwLeft}px`)
  })

})



//----------------풀페이지 스크롤 함수---------------------
/* $(document).ready(function(){

  window.addEventListener("wheel", function(e){
    e.preventDefault();
  },{passive : false}); //기본 휠 이벤트 제거(?)

  $html = $('html');
  $html.animate({scrollTop:0},10);


	fullset();
	quickClick();
  function fullset(){
    var pageindex = $("#fullpage > .fullsection").size(); //fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기
  
    for(var i=1;i<=pageindex;i++){
      $("#fullpage > .quick > ul").append("<li></li>");
    }
    $("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게
    //마우스 휠 이벤트
    $(window).on("mousewheel", function(event){
      var page = $(".quick ul li.on");
      //alert(page.index()+1);  // 현재 on 되어있는 페이지 번호
  
      if($html.is(":animated")) return false;
  
      //if($("main").find("#fullpage:animated").length >= 1) return false;
      //마우스 휠을 위로
      if(event.originalEvent.wheelDelta >= 0) {
        var before=page.index();
        if(page.index() >= 0) page.prev().addClass("on").siblings(".on").removeClass("on");//퀵버튼옮기기
        var pagelength=0;
        for(var i=1; i<(before); i++)
        {
          pagelength += $(".full"+i).height();
          console.log(pagelength)
        }
        if(page.index() > 0){ //첫번째 페이지가 아닐때 (index는 0부터 시작임)
          page=page.index()-1;
          $("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
        }else{
          alert("첫번째페이지 입니다.");
        }	
      }else{ // 마우스 휠을 아래로	
        var nextPage=parseInt(page.index()+1); //다음페이지번호
        var lastPageNum=parseInt($(".quick ul li").size()); //마지막 페이지번호
        //현재페이지번호 <= (마지막 페이지 번호 - 1)
        //이럴때 퀵버튼옮기기
        if(page.index() <= $(".quick ul li").size()-1){ 
          page.next().addClass("on").siblings(".on").removeClass("on");
        }
        
        if(nextPage < lastPageNum){ //마지막 페이지가 아닐때만 animate !
          var pagelength=0;
          for(var i = 1; i<(nextPage+1); i++){ 
            //총 페이지 길이 구하기
            //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
            pagelength += $(".full"+i).height();
          }
          $("#fullpage").animate({"top": -pagelength + "px"},1000, "swing");
        }
        else{ // 현재 마지막 페이지 일때는
          alert("마지막 페이지 입니다!");
        };		
        
      }
    });
    $(window).resize(function(){ 
      //페이지가 100%이기때문에 브라우저가 resize 될때마다 스크롤 위치가 그대로 남아있는것을 방지하기 위해
      var resizeindex = $(".quick ul li.on").index()+1;
      
      var pagelength=0;
      for(var i = 1; i<resizeindex; i++){ 
        //총 페이지 길이 구하기
        //ex) 현재 1번페이지에서 2번페이지로 내려갈때는 1번페이지 길이 + 2번페이지 길이가 더해짐
        pagelength += $(".full"+i).height();
      }
  
      $("#fullpage").animate({"top": -pagelength + "px"},0);
    });
  }
  // 사이드 퀵버튼 클릭 이동
  function quickClick(){
    $(".quick li").click(function(){
      var gnbindex = $(this).index()+1;
      var length=0;
      for(var i=1; i<(gnbindex); i++)
      {
        length+=$(".full"+i).height();
      }
      if($("body").find("#fullpage:animated").length >= 1) return false;
      $(this).addClass("on").siblings("li").removeClass("on");
      
      $("#fullpage").animate({"top": -length + "px"},800, "swing");
      return false;
    });
  }
}); */








// ------------- 풀페이지 스크롤 ---------------

//자바스크립트로 기본 스크롤 패시브 효과 제거
window.addEventListener("wheel", function(e){
e.preventDefault();
},{passive : false});

//변수 선언
var $html = $("html");
var page = 1;
var lastPage = $(".fullsection").length;
$html.animate({scrollTop:0},10);


//스크롤 하는 함수
$(window).on("wheel", function(e){
  if(page==1){
    $('.quick').fadeOut(300)
  }else{
    $('.quick').fadeIn(300)
  }
  
  //스크롤시 버튼 색상 변경
  $('.quick ul li').removeClass('on');
  $('.quick ul li').eq(page-1).addClass('on')
  
  if($html.is(":animated"))
  return;

  if(e.originalEvent.deltaY > 0){
    if(page == lastPage)
    return;
    page++;

    }else if(e.originalEvent.deltaY < 0){
      if(page == 1)
      return;
      page--;
    }

    var posTop = (page-1) * $(window).height();
    $html.animate({scrollTop : posTop},500);
});



//-----------------퀵버튼 항상 보이게 해놓기-----------
var pageindex = $("#fullpage > .fullsection").size(); //fullpage 안에 섹션이(.fullsection) 몇개인지 확인하기

for(var i=1;i<=pageindex;i++){
  $("#fullpage > .quick > ul").append("<li></li>");
}
$("#fullpage .quick ul :first-child").addClass("on"); //일단 화면이 로드 되었을때는 퀵버튼에 1번째에 불이 들어오게

// --------------------퀵버튼 클릭 시 이동--------------
$(".quick li").click(function(){
  //모든 메뉴서식을 제거하고
  $(".quick li").removeClass('on');
  //선택한 메뉴만 서식을 적용한다.
  $(this).addClass('on');

  //선택한 li의 인덱스 번호를 가져온다
  let pageNum = $(this).index();

  var posTop = (pageNum) * $(window).height();
  $html.animate({scrollTop : posTop},500);
})



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
  let gnb_h = $('.gnb_box').height(); //하단 여백 더 필요시 +로 추가할것

  $(document).ready(function(){
    //마우스 오버시
    $(gnb).hover(function(){
      $(header).stop().animate({'height':gnb_h},300);
      //마우스 아웃시
    },function(){
      $(header).stop().animate({'height':'100px'},300);
    })
  })


//-------------계열사 무한슬라이드------------

// 롤링 배너 복제본 생성
let roller = $('.rolling-list');
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



// ------------- 풀페이지 스크롤 ---------------

/*     //자바스크립트로 기본 스크롤 패시브 효과 제거
    window.addEventListener("wheel", function(e){
      e.preventDefault();
    },{passive : false});

    //변수 선언
    var $html = $("html");
    var page = 1;
    var lastPage = $(".section").length;
    $html.animate({scrollTop:0},500);

    //스크롤 하는 함수
    $(window).on("wheel", function(e){
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
      $html.animate({scrollTop : posTop});
    }); */







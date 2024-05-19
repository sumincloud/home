
//-------------헤더 부분--------------

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

// 헤더 메뉴 언어 설정버튼

  //select를 누르면 active를 추가해주는 함수
  function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
  }

  //select클릭이벤트와 active 함수 연결
  const selectBoxElements = document.querySelectorAll(".select");

  selectBoxElements.forEach(selectBoxElement => {
    selectBoxElement.addEventListener("click", function (e){
      const targetElement = e.target;
      const isOptionElement = targetElement.classList.contains("option");
  
      if(isOptionElement){
        selectOption(targetElement);
      }
      
      toggleSelectBox(selectBoxElement);
    });
  });

  //option선택시 해당값 선택
  function selectOption(optionElement) {
    const selectBox = optionElement.closest(".select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
  }

  //제이쿼리로 슬라이드 토글효과 만들기
  $(document).ready(function(){
    const langBtn = $(".selected");
    const optionBtn = $(".option");

    //언어버튼 클릭시 슬라이드 토글
    langBtn.click(function(){
      $(".util ul").slideToggle();
    });
    optionBtn.click(function(){
      $(".util ul").slideUp();
    })

    //화면 밖 여백 클릭시 토글 닫기
    $('html').click(function(e){
      //특정 부모의 자식이 아닐경우 이벤트 실행
      if($(e.target).parents('.select').length < 1){
        //console.log('슬라이드 밖이다')
        $(".util ul").slideUp();
      }
    })
  })
  


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
  //0 ~ 375일때 (모바일일때 설정)
  slidesPerView: 2,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints : { //반응형 설정
    375 : { //375 ~ 768일때 (태블릿일때 설정)
        slidesPerView : 2,
        spaceBetween: 30,
    },
    768 : {  //768 이상 일때 (pc일때 설정)
        slidesPerView : 3,
        spaceBetween: 50,
    }
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
      $('.lnb > li > a').css('opacity','1')
    },function(){
      $(header).css('background','rgba(255,255,255,0.5)')
      $('.lnb > li > a').css('opacity','0.3')
    })

  });


//------------gnb 호버시 서브메뉴 배경색-------------
$(document).ready(function(){
  $('.gnb > li').hover(function(){
    $(this).siblings().css('background','none');
    $(this).css({'background-image':'url(https://www.color-hex.com/palettes/7431.png)','background-position-y':'100px','background-repeat':'no-repeat'});
  },function(){
    $(this).css('background','none');
  })
})


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
    //애니메이션 정지
    $('.rolling-list.original').css('animation-play-state', 'paused');
    $('.rolling-list.clone').css('animation-play-state', 'paused');

    $(this).find('img').css('filter','brightness(0.5)')

    //계열사 버튼 삽입하는 것
    let group_name = $(this).find('img').attr('alt');
    $(this).append("<div class='group_btn'><p>"+group_name+"</p><div><i class='fas fa-angle-right'></i></div></div>");

  },function(){  //마우스 뗐을때
    $('.rolling-list.original').css('animation-play-state', 'running');
    $('.rolling-list.clone').css('animation-play-state', 'running');

    $(this).find('.group_btn').remove();
    $(this).find('img').css('filter','brightness(1)')

  });



//------------인재채용 마우스 오버시 버튼 나오게------------
$(document).ready(function(){
  $('.recruit_list li').hover(function(){
    $(this).find('.recruit_btn').stop().show()
  },function(){
    $(this).find('.recruit_btn').stop().hide()
  })
})



//------------1200px보다 화면이 작아질때, 컨텐츠크기를 1200px로 변경하여 스크롤바로 이동시 제대로 보이도록함--------------------
$(document).ready(function(){
  var screenWidth = $(window).width()

  function screen(){
    if(screenWidth >= 1200){
      //body컨텐츠의 하위 자식요소들 전부 속성 변경
      $('body').children().css('width','100%')
    }else if(screenWidth>768){
      $('body').children().css('width','1200px')
      //---------768이상일때 메인이미지 사이즈 변경(pc)----------
      $('#img1').attr('src','./images/main1.png')
      $('#img2').attr('src','./images/main2.png')
      $('#img3').attr('src','./images/main3.png')

      $('.wrap .rolling-list li').trigger('mouseleave');
    }else if(screenWidth>375){
      $('body').children().css('width','100%')
      //----------768~375일때 메인이미지 사이즈 변경(태블릿)---------
      $('#img1').attr('src','./images/ta_main1.png')
      $('#img2').attr('src','./images/ta_main2.png')
      $('#img3').attr('src','./images/ta_main3.png')

      // 마우스 오버한 듯한 효과적용하여 계열사 버튼 생성
      $('.wrap .rolling-list li').mouseover('a',function(){
        $('.rolling-list.original').css('animation-play-state', 'running');
        $('.rolling-list.clone').css('animation-play-state', 'running');
      });
      $('.wrap .rolling-list li').trigger('mouseover');

      //웅진소식에 가로터치스크롤 되게 만들기
      $('.mySwiper3').addClass('scroll-x');

    }else{
      //-------------375이하일때 메인이미지 사이즈 변경(모바일)------------
      $('#img1').attr('src','./images/mo_main1.png')
      $('#img2').attr('src','./images/mo_main2.png')
      $('#img3').attr('src','./images/mo_main3.png')

    }
  }
  screen();

  $(window).resize(function(){
    screenWidth = $(window).width()
    screen();
  })
})


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
  //처음페이지랑 마지막페이지에는 퀵버튼 안보이게
  if(page==1||page==lastPage){
    $('.quick').fadeOut(300)
  }else{
    $('.quick').fadeIn(300)
  }
  //처음페이지에는 탑버튼 안보이게
  if(page==1){
    $('.t_btn').fadeOut(300)
  }else{
    $('.t_btn').fadeIn(300)
  }
  
  //스크롤시 버튼 색상 변경
  $('.quick ul li').removeClass('on');
  $('.quick ul li').eq(page-1).addClass('on')
  
  if($html.is(":animated"))
  return;


  //스크롤할때 페이지 이동
  if(e.originalEvent.deltaY > 0){
    if(page == lastPage)
    return;
    //아래로 스크롤할때 페이지 2~7번째 헤더 색 하얗게 만들기
    if(page==1||page==2||page==3||page==4||page==5||page==6){
      $(header).css({'background':'#fff','border-bottom':'1px solid #ccc'})
      $('.lnb > li > a').css('opacity','1')
    }
    //페이지 번호 증가
    page++;
  }else if(e.originalEvent.deltaY < 0){
    if(page == 1)
    return;
    page--;
    //페이지를 위로 올릴때(첫페이지로 갈때) 헤더색 투명하게
    if(page==1){
      $(header).css({'background':'rgba(255,255,255,0.5)','border-bottom':'none'})
      $('.lnb > li > a').css('opacity','0.3')
    }
  }

  //페이지 위치 이동하는 부분
  var posTop = (page-1) * $(window).height();
  $html.animate({scrollTop : posTop},500);

  //탑버튼 클릭시 맨위로 이동하고
  $('.t_btn').click(function(){
    $html.animate({scrollTop : 0},500);
    page = 1;
    //퀵버튼 숨김
    $('.quick').fadeOut(300);
  })

  //페이지가 2~7일때 마우스 오버시 헤더 하얗게하기
  $(header).hover(function(){
    if(page==2||page==3||page==4||page==5||page==6||page==7){
      $(header).css('background','#fff')
      $('.lnb > li > a').css('opacity','1')
    }
  })

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

  //페이지 넘버값+1을 다시 page에 전달함
  page=pageNum+1;
})


//-----------------토글버튼 메뉴바 슬라이드 서식----------------
$('#t_gnb > li p').click(function(){
  //클릭할때마다 앵글다운 아이콘이 바뀌도록 수정할 것
  //$(this).find('i').css('transform','rotate(180deg)')
  $(this).parent().siblings().find('#t_sub').stop().slideUp()
  $(this).next().stop().slideToggle()
})





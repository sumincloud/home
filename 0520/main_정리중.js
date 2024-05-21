// 변수 선언
let bwLeft, langBtn, optionBtn, gnb, header, gnb_h;

$(document).ready(function(){
  // 헤더 부분
  bwLeft = $(document).scrollLeft();
  $('.h_inner').css('left',`-${bwLeft}px`);
  
  $(window).scroll(function(){
    bwLeft = $(document).scrollLeft();
    $('.h_inner').css('left',`-${bwLeft}px`);
  });

  // 헤더 메뉴 언어 설정버튼
  function toggleSelectBox(selectBox) {
    selectBox.classList.toggle("active");
  }

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

  function selectOption(optionElement) {
    const selectBox = optionElement.closest(".select");
    const selectedElement = selectBox.querySelector(".selected-value");
    selectedElement.textContent = optionElement.textContent;
  }

  langBtn = $(".selected");
  optionBtn = $(".option");

  langBtn.click(function(){
    $(".util ul").slideToggle();
  });
  optionBtn.click(function(){
    $(".util ul").slideUp();
  });

  $('html').click(function(e){
    if($(e.target).parents('.select').length < 1){
      $(".util ul").slideUp();
    }
  });

  // Initialize Swiper
  var swiper1 = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    speed:800,
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

  var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    }
  });

  var swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints : {
      768 : {
        slidesPerView : 3,
        spaceBetween: 30,
      },
      1024 : {
        slidesPerView : 3,
        spaceBetween: 50,
      }
    },
  });

  // GNB 슬라이드
  gnb = $('.gnb');
  header = $('header');
  gnb_h = $('.gnb_box').outerHeight();

  $(gnb).hover(function(){
    $(header).stop().animate({'height':gnb_h},500);
    $('.h_inner').css('border-bottom','1px solid #ccc');
  },function(){
    $(header).stop().animate({'height':'100px'},500);
    $('.h_inner').css('border-bottom','1px solid rgba(51,51,51,0.2)');
  });

  $(header).hover(function(){
    $(header).css('background','#fff');
    $('.lnb > li > a').css('opacity','1');
  },function(){
    $(header).css('background','rgba(255,255,255,0.5)');
    $('.lnb > li > a').css('opacity','0.3');
  });

  // GNB 호버시 서브메뉴 배경색
  $('.gnb > li').hover(function(){
    $(this).siblings().css('background','none');
    $(this).css({'background-image':'url(https://www.color-hex.com/palettes/7431.png)','background-position-y':'100px','background-repeat':'no-repeat'});
  },function(){
    $(this).css('background','none');
  });

  // 계열사 무한슬라이드
  // 롤링 배너 복제본 생성
  let roller =  document.querySelector('.rolling-list');
  roller.id = 'roller1';
  let clone = roller.cloneNode(true);
  clone.id = 'roller2';
  document.querySelector('.wrap').appendChild(clone);
  document.querySelector('#roller1').style.left = '0px';
  document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';
  roller.classList.add('original');
  clone.classList.add('clone');

  $('.wrap .rolling-list li').hover(function(){
    $('.rolling-list.original').css('animation-play-state', 'paused');
    $('.rolling-list.clone').css('animation-play-state', 'paused');
    $(this).find('img').css('filter','brightness(0.5)');
    let group_name = $(this).find('img').attr('alt');
    $(this).append("<div class='group_btn'><p>"+group_name+"</p><div><i class='fas fa-angle-right'></i></div></div>");
  },function(){
    var screenWidth = $(window).width();
    if(screenWidth>1024){
      $('.rolling-list.original').css('animation-play-state', 'running');
      $('.rolling-list.clone').css('animation-play-state', 'running');
      $(this).find('.group_btn').remove();
      $(this).find('img').css('filter','brightness(1)');
    }
  });

  /* 계열사 클릭시 사이트 이동하는 함수 */
  $('.rolling-list li').click(function(){
    location.href = './family_site.html';
  });

  /* 웅진소식 컨텐츠 클릭시 사이트 이동하는 함수 */
  $('.mySwiper3 > div > div').click(function(){
    location.href = 'http://chaesuehyun.dothome.co.kr/bbs/bbs/board.php?bo_table=news&wr_id=6';
  });

  // 인재채용 마우스 오버시 버튼 나오게
  $('.recruit_list li').hover(function(){
    $(this).find('.recruit_btn').stop().show();
  },function(){
    $(this).find('.recruit_btn').stop().hide();
  });

});

$(document).ready(function(){
  // 화면 크기에 따른 컨텐츠 크기 조정
  var screenWidth = $(window).width();
  function screen(){
    if(screenWidth >= 1200){
      $('body').children().css('width','100%');
    }else if(screenWidth>1024){
      $('body').children().css('width','1200px');
      $('#img1').attr('src','./images/main1.png');
      $('#img2').attr('src','./images/main2.png');
      $('#img3').attr('src','./images/main3.png');
      $('.wrap .rolling-list li').trigger('mouseleave');
    }else if(screenWidth<=1024){
      $('body').children().css('width','100%');
      $('#img1').attr('src','./images/ta_main1.png');
      $('#img2').attr('src','./images/ta_main2.png');
      $('#img3').attr('src','./images/ta_main3.png');
      $('.wrap .rolling-list li').mouseover('a',function(){
        $('.rolling-list.original').css('animation-play-state', 'running');
        $('.rolling-list.clone').css('animation-play-state', 'running');
      });
      $('.wrap .rolling-list li').trigger('mouseover');
      $('.mySwiper3').addClass('scroll-x');
    }else if(screenWidth<=768){
      $('#img1').attr('src','./images/mo_main1.png');
      $('#img2').attr('src','./images/mo_main2.png');
      $('#img3').attr('src','./images/mo_main3.png');
      $('.intro .title dd').html('웅진은 새로운 사업분야에 진출하여 끊임없는<br>도전을 성공으로 이끌어나가는 동시에<br>웅진의 창조혁신을 꽃피운 긍정과 사랑의 정신을<br>소중하게 키우고 있습니다.');
      $('.group .title dd').html('웅진의 기술과 즐거움으로 다가가<br>일상을 더 편하고 행복하게 물들여 갑니다.');
      $('.esg .title dd').html("웅진의 사회사랑은 나보다<br>'우리'를 생각하는데서 출발합니다.<br>웅진은 전사적 차원에서 환경사회공헌,<br>교육사회공헌, 이웃사회공헌에 중점을 두어<br>사회책임 활동을 확대해 나갈 것입니다.");
      $('.news .title dd').html("오늘의 작은 성장으로<br>미래의 큰 꿈을 실현해 나갑니다.<br>우리 생활 곳곳에서 항상 함께하는<br>웅진의 소식을 확인하실 수 있습니다.");
      $('.recruit .title dd').html('전문성과 열정이 조화를 이룬<br>인재를 찾는 일에 최선을 다합니다.');
      $('.wrap .rolling-list li').mouseover('a',function(){
        $('.rolling-list.original').css('animation-play-state', 'running');
        $('.rolling-list.clone').css('animation-play-state', 'running');
      });
      $('.wrap .rolling-list li').trigger('mouseover');
      $('.mySwiper3').addClass('scroll-x');
    }
  }
  screen();

  $(window).resize(function(){
    screenWidth = $(window).width();
    screen();
  });

});

// 풀페이지 스크롤
window.addEventListener("scroll", function(e) {
  e.preventDefault();
}, { passive: false });

var $html = $("html");
var page = 1;
var lastPage = $(".fullsection").length;
$html.animate({ scrollTop: 0 }, 10);

$(window).on("wheel", function(e) {
  if ($html.is(":animated")) return;
  var deltaY = e.originalEvent.deltaY;
  handleScroll(deltaY);
});

var touchStartY = 0;

window.addEventListener('touchstart', function(e) {
  touchStartY = e.touches[0].clientY;
});

window.addEventListener('touchmove', function(e) {
  if ($html.is(":animated")) return;
  var touchEndY = e.touches[0].clientY;
  var deltaY = touchStartY - touchEndY;
  handleScroll(deltaY);
  touchStartY = touchEndY;
});

function handleScroll(deltaY) {
  if (deltaY > 0) {
    if (page < lastPage) {
        page++;
    }
  } else if (deltaY < 0) {
    if (page > 1) {
        page--;
    }
  }

  if (page === 1 || page === lastPage) {
      $('.quick').fadeOut(300);
  } else {
      $('.quick').fadeIn(300);
  }

  if (page === 1) {
      $('.t_btn').fadeOut(300);
  } else {
      $('.t_btn').fadeIn(300);
  }

  $('.quick ul li').removeClass('on');
  $('.quick ul li').eq(page - 1).addClass('on');

  var posTop = (page - 1) * $(window).height();
  $html.animate({ scrollTop: posTop }, 500);

  if (page === 1) {
      $(header).css({ 'background': 'rgba(255,255,255,0.5)', 'border-bottom': 'none' });
      $('.lnb > li > a').css('opacity', '0.3');
  } else if (page === lastPage) {
      $(header).css({ 'background': '#fff', 'border-bottom': '1px solid #ccc' });
      $('.lnb > li > a').css('opacity', '1');
  }
}

var pageindex = $("#fullpage > .fullsection").size();

for(var i=1;i<=pageindex;i++){
  $("#fullpage > .quick > ul").append("<li></li>");
}
$("#fullpage .quick ul :first-child").addClass("on");

$(".quick li").click(function(){
  $(".quick li").removeClass('on');
  $(this).addClass('on');
  let pageNum = $(this).index();
  var posTop = (pageNum) * $(window).height();
  $html.animate({scrollTop : posTop},500);
  page=pageNum+1;
})

$('#t_gnb > li p').click(function(){
  $(this).parent().siblings().find('.t_sub').stop().slideUp()
  $(this).next().stop().slideToggle()
})

$('.fa-bars').click(function(){
  $('.t_btn').hide()
})

/*globals $ particlesJS moment */
/*eslint no-console: ["error", { allow: ["log"] }] */

// スクロールをスムーズに
$(function () {
  $('.smooth-anchor').click(function () {
    const speed = 500;
    const href = $(this).attr("href");
    const target = $(href === "#" || href === "" ? 'html' : href);
    const headerHeight = $('#navbar-header').height();
    const position = target.offset().top - headerHeight;
    $('body,html').animate({scrollTop: position}, speed, 'swing');
    return false;
  });
});

// カウントダウンの時計
$(function() {
  const icoStartDate = moment("2017-09-01T02:00:00Z");
  const $daysContainer = $('#countdown-timer-days');
  const $hoursContainer = $('#countdown-timer-hours');
  const $minutesContainer = $('#countdown-timer-minutes');
  const $secondsContainer = $('#countdown-timer-seconds');

  $('#countdown-timer').countdown(icoStartDate.toDate(), function (event) {
    $daysContainer.text(event.offset.totalDays);
    $hoursContainer.text(event.offset.hours);
    $minutesContainer.text(event.offset.minutes);
    $secondsContainer.text(event.offset.seconds);
  });
});

// カバーのビデオボタンマウスオーバーで色を変更
$(function () {
  $("#cover-button").mouseover(function () {
    $(this).toggleClass('cover__caption__btn cover__caption__btn_hover');
  }).mouseout(function () {
    $(this).toggleClass('cover__caption__btn cover__caption__btn_hover');
  });
});

// カバーのビデオボタンクリックでビデオモーダル表示
$(function () {
  $("#cover-button").on('click', () => {
    $.ajax('video-modal.html', {
      timeout: 3000,
      datatype: 'html'
    }).then(function (data) {
      let video_modal = $('#video-modal').html('');
      $($.parseHTML(data)).appendTo(video_modal).modal();
    })
  });
});

// カバーの背景
//noinspection ES6ModulesDependencies
particlesJS.load('cover-particles', '/json/cover-particles.json');

// for console branding.
(function () {
  console.log("%c\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660\u2660" +
    "\n%c\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\u2665\n%cALIS" +
    "\n%cThe decentralized media platform project in Japan.\n%c\u2663\u2663\u2663\u2663\u2663\u2663\u2663\u2663" +
    "\u2663\u2663\u2663\u2663\u2663\u2663\u2663\n%c\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666\u2666" +
    "\u2666\u2666\u2666\u2666", "color: lightblue; font-size: 3em; font-weight: bold;", "color: pink; font-size: 3em;" +
    " font-weight: bold;", "color: blue; font-size: 10em; font-weight: bold; font-family: american typewriter, " +
    "brush script mt, harrington, arial, sans-serif;", "color: grey; font-size: 2em; " +
    "font-family: edwardian script itc, harrington, arial, sans-serif;", "color: lightgreen; font-size: 3em; " +
    "font-weight: bold", "color: lightgrey; font-size: 3em; font-weight: bold");
})();

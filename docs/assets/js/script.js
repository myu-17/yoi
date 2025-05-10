const particle = () => {
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 43,
        density: { enable: true, value_area: 721.5354273894853 },
      },
      color: { value: "#ffffff" },
      shape: {
        type: "circle",
        stroke: { width: 0, color: "#000000" },
        polygon: { nb_sides: 4 },
        image: { src: "img/github.svg", width: 100, height: 100 },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 0.8932341572741748,
          opacity_min: 0.12180465781011475,
          sync: true,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
      },
      line_linked: {
        enable: false,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1.6,
        direction: "none",
        random: true,
        straight: true,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 240.5118091298284,
          rotateY: 160.3412060865523,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: false, mode: "repulse" },
        onclick: { enable: false, mode: "push" },
        resize: true,
      },
      modes: {
        grab: { distance: 400, line_linked: { opacity: 1 } },
        bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
        repulse: { distance: 200, duration: 0.4 },
        push: { particles_nb: 4 },
        remove: { particles_nb: 2 },
      },
    },
    retina_detect: false,
  });
};

document.addEventListener("DOMContentLoaded", () => {
  // タブボタンを全て取得
  const tabs = document.querySelectorAll(".tab-buttons button");

  // タブコンテンツを全て取得
  const contents = document.querySelectorAll(".tab-contents .content");

  // 各タブボタンにクリックイベントを設定
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // 全てのタブからactiveクラスを削除
      tabs.forEach((tab) => tab.classList.remove("active"));

      // 全てのコンテンツからactiveクラスを削除
      contents.forEach((content) => content.classList.remove("active"));

      // クリックされたタブとそれに対応するコンテンツにactiveクラスを付与
      tab.classList.add("active");
      contents[index].classList.add("active");
    });
  });

  particle();
  $(function () {
    var swiper1, swiper2;

    function initSwiper() {
      swiper1 = new Swiper(".swiper1", {
        direction: "vertical",
        loop: true,
        slidesPerView: 2,
        speed: 4500,
        allowTouchMove: false,
        spaceBetween: 20,
        autoplay: {
          delay: 0,
        },
      });
      swiper2 = new Swiper(".swiper2", {
        direction: "vertical",
        loop: true,
        slidesPerView: 2,
        speed: 4500,
        allowTouchMove: false,
        spaceBetween: 20,
        autoplay: {
          delay: 0,
          reverseDirection: true,
        },
      });
    }

    // 初期化
    initSwiper();

    var $nav = $("#navArea");
    var $wrapper = $(".nav-wrapper");
    var $mask = $("#mask");
    var open = "open";

    // トグルボタンでメニュー開閉
    $(".toggle_btn").on("click", function () {
      if ($nav.hasClass(open)) {
        $wrapper.fadeOut(500, function () {
          $nav.removeClass(open);
          // 既存のswiperインスタンスを破棄し再初期化
          swiper1.destroy(true, true);
          swiper2.destroy(true, true);
          initSwiper(); // 再初期化
        });
      } else {
        $nav.addClass(open);
        $wrapper.fadeIn(500, function () {});
      }
    });

    // マスククリックで閉じる
    $mask.on("click", function () {
      $wrapper.fadeOut(500, function () {
        $nav.removeClass(open);
        // 既存のswiperインスタンスを破棄し再初期化
        swiper1.destroy(true, true);
        swiper2.destroy(true, true);
        initSwiper(); // 再初期化
      });
    });
  });
});

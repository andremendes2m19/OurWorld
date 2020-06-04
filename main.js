$(document).ready(function () {
  const textPT =
    "A ENTRAJUDA propõe projetos pontuais ou continuados em instituições de solidariedade social, que podem envolver a participação dos colaboradores em ações de voluntariado-empresa.";

  // Sticky Header
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $(".main_h").addClass("sticky");
    } else {
      $(".main_h").removeClass("sticky");
    }
  });

  // Mobile Navigation
  $(".mobile-toggle").click(function () {
    if ($(".main_h").hasClass("open-nav")) {
      $(".main_h").removeClass("open-nav");
    } else {
      $(".main_h").addClass("open-nav");
    }
  });

  $(".main_h li a").click(function () {
    if ($(".main_h").hasClass("open-nav")) {
      $(".navigation").removeClass("open-nav");
      $(".main_h").removeClass("open-nav");
    }
  });

  // navigation scroll lijepo radi materem
  $("nav a").click(function (event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $("html, body").animate(
      {
        scrollTop: target,
      },
      500
    );
    event.preventDefault();
  });

  $(".europe").click(function (e) {
    /*switch(e.target.value) {
      case "PT"
    }*/
    if (e.target.value == "PT") {
      buildModel("Portugal", "charity", "link", textPT, "logo");
      modalPopUp("show");
    } else if (e.target.value == "ES") {
      buildModel("Espanha", "charity", "link", "text", "logo");
      modalPopUp("show");
    }
  });

  $(".overlay").click(function () {
    modalPopUp("hide");
  });

  $(".modal-close-btn").click(function () {
    modalPopUp("hide");
  });

  function modalPopUp(event) {
    if (event === "show") {
      $(".overlay").addClass("is-visible");
      $(".modal").addClass("is-visible");
    } else {
      $(".overlay").removeClass("is-visible");
      $(".modal").removeClass("is-visible");
    }
  }

  function buildModel(country, charity, link, text, logo) {
    let model = document.createElement("div");
    model.className = "modal";
    model.innerHTML = `
        <button class="modal-close-btn">
        <i>x</i>
      </button>
      <div class="subtittle">
        <h1>Help ${country}!</h1>
      </div>
      <div class="clearfix float-my-children">
        <h3>${charity}</h3>
        <a target="_blank" href="${link}">
          <img
            class="imgg"
            src="${logo}"
            width="75"
          />
        </a>
        <div>
        ${text}
        </div>
      </div>`;
    console.log("TEST: ", model);
    document.body.appendChild(model);
  }
});

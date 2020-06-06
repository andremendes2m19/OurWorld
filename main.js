$(document).ready(function () {
  const textPT =
    "A ENTRAJUDA propõe projetos pontuais ou continuados em instituições de solidariedade social, que podem envolver a participação dos colaboradores em ações de voluntariado-empresa.";

  const textES =
    "Os bancos de alimentos são instituições de caridade atacadistas responsáveis ​​pela captação de recursos , tanto na forma de alimentos quanto na economia, de doações de indivíduos e instituições públicas e privadas,  juntamente com o apoio prestado pela Federação.";

  const textFR =
    "Nosso trabalho para apoiar a pesquisa sobre esclerose múltipla deve continuar sem se enfraquecer, para intensificar nossas colaborações internacionais de pesquisa em EM, preservar nossas relações inter-associativas de esclerose múltipla.";

  const textIT =
    "É uma organização sem fins lucrativos que realiza projetos de cooperação para o desenvolvimento e ajuda humanitária em que a pessoa, consciente de seu valor e dignidade, é protagonista do desenvolvimento integral de sua comunidade.";

  const textUK =
    "We work side by side with people to help them rebuild their lives. From decades of experience of working with thousands of homeless people, we know what's needed to leave homelessness behind for good. We use this experience to shape the services we provide and the changes we campaign for.";

  const textDE =
    "We make soft drinks how they should be. Each bottle contains only the best organic ingredients and supports fair trade. So far, so delicious.";

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

  $(".gallery");

  $(".europe").click(function (e) {
    switch (e.target.value) {
      case "PT":
        buildModel(
          "Portugal",
          "ENTRAJUDA",
          "https://www.entrajuda.pt/",
          textPT,
          "https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/10391036_1021192537951491_2595566845267993833_n.png?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=w5o1wdRREKwAX9wE9dv&_nc_ht=scontent.fopo1-1.fna&oh=477a93f3b52ffbc6f535e0a1d3097e26&oe=5EFF3A21"
        );
        modalPopUp("show");
        break;
      case "ES":
        buildModel(
          "Spain",
          "Federación Española de Bancos de Alimentos",
          "https://www.fesbal.org.es//",
          textES,
          "https://pbs.twimg.com/profile_images/1251483474587979776/25cmW_Fb_400x400.jpg"
        );
        modalPopUp("show");
        break;
      case "FR":
        buildModel(
          "France",
          "Federación Española de Bancos de Alimentos",
          "https://www.arsep.org/",
          textFR,
          "https://scontent.fopo1-1.fna.fbcdn.net/v/t1.0-9/13511_661158293988082_7261246807168855141_n.png?_nc_cat=110&_nc_sid=09cbfe&_nc_ohc=IMcwroDSpHkAX9a1T2t&_nc_ht=scontent.fopo1-1.fna&oh=682c6919ce29c8d2036c733557c1e7d4&oe=5F006BC8"
        );
        modalPopUp("show");
        break;
      case "IT":
        buildModel(
          "Italy",
          "Fondazione AVSI",
          "https://www.avsi.org/it/",
          textIT,
          "https://media-exp1.licdn.com/dms/image/C4E0BAQHeK_wqPhThfA/company-logo_200_200/0?e=2159024400&v=beta&t=AJl8YGCcuH6ELxcoVt5S5dkGHbQlPxqBw1mZJgYpmAw"
        );
        modalPopUp("show");
        break;
      case "UK":
        buildModel(
          "United Kingdom",
          "Crisis",
          "https://www.crisis.org.uk/",
          textUK,
          "https://i1.wp.com/www.ymcaswansea.org.uk/wp-content/uploads/2016/02/Crisis-UK.png?resize=427%2C230"
        );
        modalPopUp("show");
        break;
      case "DE":
        buildModel(
          "Germany",
          "LEMONAID+",
          "https://lemon-aid.de/en/",
          textDE,
          "https://images.ethicalsuperstore.com/images/resize900/331325-LemonAid-Organic-Fairtrade-Passion-Fruit-Drink-330ml-new.jpg"
        );
        modalPopUp("show");
        break;
    }
  });

  $(".overlay").click(function () {
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
    let model = $(".modal");
    if (model.length > 0) {
      model.remove();
    }
    model = document.createElement("div");
    model.className = "modal";
    model.innerHTML = `
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
        <div >
        ${text}
        </div>
      </div>`;
    document.body.appendChild(model);
  }
});

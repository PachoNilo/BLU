document.addEventListener("DOMContentLoaded", function () {
  const Header = document.getElementById("Top");
  const HeaderLogo = document.getElementById("HeaderLogo");
  const searchLi = document.getElementById("searchLi");
  const searchButton = document.getElementById("searchButton");
  const searchBar = document.getElementById("searchBar");
  const searchInput = searchBar.querySelector("input");
  const searchBarIcon = document.getElementById("searchBarIcon");
  const checkboxes = document.querySelectorAll(".starForm__CheckboxInput");
  const closeMaintenancePopUp = document.getElementById(
    "closeMaintenancePopUp"
  );
  const maintenancePopUp = document.querySelector(".maintenancePopUp");
  const maintenanceOpenPop = document.getElementById("maintenanceOpenPop");
  const openEPaymentPop = document.getElementById("ePaymentOpenPop");
  const sectionCoreServiceTitle = document.querySelector(
    ".sectionCoreService__title"
  );
  const coreServiceTitles = document.querySelectorAll(".coreService__title");
  const ePaymentPopUp = document.querySelector(".ePaymentPopUp");
  const closeEPaymentPopUp = document.getElementById("closeEPaymentPopUp");
  const openEPaymentPopUp = document.getElementById("openEPaymentPopUp");
  const ScreeningOpenPop = document.getElementById("ScreeningOpenPop");
  const screeningPopUp = document.querySelector(".screeningPopUp");
  const closeScreeningPopUp = document.getElementById("closeScreeningPopUp");
  const nameInput = document.getElementById("nameInput");
  const emailInput = document.getElementById("emailInput");
  const phoneInput = document.getElementById("phoneInput");

  // Nuevas variables para el pop-up de evaluación gratuita
  const freeValuationOpenPop = document.getElementById("freeValuationOpenPop");
  const freeValuationPopUp = document.querySelector(".freeValuationPopUp");
  const closefreeValuationPopUp = document.getElementById(
    "closefreeValuationPopUp"
  );

  // Función para mostrar el pop-up de servicios de venta
  function showSellingServicesPopUp() {
    const sellingServicesPopUp = document.querySelector(
      ".sellingServicesPopUp"
    );
    sellingServicesPopUp.classList.remove("displayNone");
  }

  // Función para ocultar el pop-up de servicios de venta
  function hideSellingServicesPopUp() {
    const sellingServicesPopUp = document.querySelector(
      ".sellingServicesPopUp"
    );
    sellingServicesPopUp.classList.add("displayNone");
  }

  // Función para mostrar el pop-up de adquisiciones
  function showAcquisitionsPopUp() {
    const acquisitionsPopUp = document.querySelector(".AcquisitionsPopUp");
    acquisitionsPopUp.classList.remove("displayNone");
  }

  // Función para ocultar el pop-up de adquisiciones
  function hideAcquisitionsPopUp() {
    const acquisitionsPopUp = document.querySelector(".AcquisitionsPopUp");
    acquisitionsPopUp.classList.add("displayNone");
  }

  // Event listener para #openAcquisitions
  const openAcquisitionsButton = document.getElementById("openAcquisitions");
  openAcquisitionsButton.addEventListener("click", function () {
    showAcquisitionsPopUp();
  });

  // Event listener para #AcquisitionsBack
  const acquisitionsBackButton = document.getElementById("AcquisitionsBack");
  acquisitionsBackButton.addEventListener("click", function () {
    hideAcquisitionsPopUp();
  });

  // Event listener para #openSelling
  const openSellingButton = document.getElementById("openSelling");
  openSellingButton.addEventListener("click", function () {
    showSellingServicesPopUp();
  });

  // Event listener para #sellingServicesBack
  const sellingServicesBackButton = document.getElementById(
    "sellingServicesBack"
  );
  sellingServicesBackButton.addEventListener("click", function () {
    hideSellingServicesPopUp();
  });

  closeMaintenancePopUp.addEventListener("click", function () {
    maintenancePopUp.classList.add("displayNone");
    sectionCoreServiceTitle.style.opacity = "1";
    coreServiceTitles.forEach((title) => (title.style.opacity = "1"));
  });

  maintenanceOpenPop.addEventListener("click", function () {
    maintenancePopUp.classList.remove("displayNone");
    sectionCoreServiceTitle.style.opacity = "0";
    coreServiceTitles.forEach((title) => (title.style.opacity = "0"));
  });

  function showSearchBar() {
    searchLi.style.display = "none";
    searchBar.style.display = "block";
    searchBar.classList.add("slideDown");
    searchBar.classList.remove("slideUp");
    Header.style.height = "210px";
    searchBar.style.width = "60%";
    HeaderLogo.style.width = "180px";
    searchInput.placeholder = "MLS";
    searchBar.style.border = "";
    searchBar.style.boxShadow = "";
    searchBarIcon.src = "assets/img/icon/searchBarIcon.svg";
  }

  function hideSearchBar() {
    searchBar.classList.add("slideUp");
    searchBar.classList.remove("slideDown");
    searchBar.style.width = "0px";
    searchBar.style.backgroundColor = "#2699fb";
    searchBar.style.borderRadius = "50%";
    searchBar.style.border = "none";
    searchBar.style.boxShadow = "none";
    searchInput.placeholder = "";
    searchBarIcon.src = "assets/img/icon/Search.svg";

    setTimeout(() => {
      searchBar.style.backgroundColor = "";
      searchBar.style.borderRadius = "";
      searchBar.style.display = "none";
      searchLi.style.display = "block";
      Header.style.height = "150px";
      HeaderLogo.style.width = "120px";
    }, 300);
  }

  searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    showSearchBar();
  });

  searchLi.addEventListener("click", function (event) {
    event.preventDefault();
    showSearchBar();
  });

  searchBarIcon.addEventListener("click", function (event) {
    event.preventDefault();
    hideSearchBar();
  });

  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", function () {
      if (this.checked) {
        checkboxes.forEach((otherCheckbox) => {
          if (otherCheckbox !== this) {
            otherCheckbox.checked = false;
          }
        });
      }
    });
  });

  function checkInputs() {
    if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
      phoneInput.style.opacity = "1";
      phoneInput.style.visibility = "visible";
      phoneInput.style.height = "60px";
    } else {
      phoneInput.style.opacity = "0";
      phoneInput.style.visibility = "hidden";
      phoneInput.style.height = "0px";
    }
  }

  nameInput.addEventListener("input", checkInputs);
  emailInput.addEventListener("input", checkInputs);

  // Manejo de citas aleatorias
  const quotes = [
    { quote: "Today is the day. If not today when?", author: "Eckhart Tolle" },
    {
      quote:
        "There is no one to be, there is nowhere to be other than who and where you are right now!",
      author: "Blu Team",
    },
    { quote: "Life is Now", author: "Eckhart Tolle" },
    { quote: "Today is the day. If not today when?", author: "Eckhart Tolle" },
    {
      quote:
        "Only a company like ours can provide you true Real Estate Tranquility",
      author: "Blu Team",
    },
    {
      quote: "What happen to the 11yr old child inside of you? Dream again!",
      author: "Blu Difference",
    },
    { quote: "Quality homes for quality people", author: "Blu Difference" },
    { quote: "We are amazing Human Beings!", author: "Blu Difference" },
    {
      quote: "Paying high Taxes? Not even on April Fools!",
      author: "Liane Hikind",
    },
    {
      quote: "We are the bridge between Real Estate investment & your goals",
      author: "Blu Difference",
    },
    {
      quote: "Happiness is in between what we have and what we want",
      author: "Earl Nightingale",
    },
    {
      quote: "You don’t attract what you want, you attract what you are",
      author: "Wayne Dyer",
    },
    {
      quote:
        "Having a solid property management team is essential to grow your portfolio",
      author: "Blu Team",
    },
    {
      quote: "Productive Reporting Available Online 24 hours",
      author: "Blu Difference",
    },
    { quote: "A stitch in time saves nine", author: "Unknown" },
    {
      quote: "If you can see it in your mind, you can hold it in your hand",
      author: "Bob Proctor",
    },
    { quote: "Life is sweeter when stress is minimal", author: "Liane Hikind" },
    {
      quote: "We all have 24 hours. The key is how to utilize every second",
      author: "Blu Team",
    },
    {
      quote: "The harder the struggle the more glorious the triumph",
      author: "Thomas Paine",
    },
    {
      quote: "You no longer have to hesitate to make that decision",
      author: "Blu Difference",
    },
    {
      quote: "He works so hard, he doesn’t have time to make money",
      author: "Carlos Arturo Jara",
    },
    {
      quote: "If you change what you say, you will change what you see",
      author: "Joel Osten",
    },
    {
      quote: "Grow your portfolio without the management worries",
      author: "Blu Difference",
    },
    {
      quote: "The best way to predict your future is to create it",
      author: "Abraham Lincoln",
    },
    {
      quote: "You can achieve your goals, by helping others achieve theirs",
      author: "Zig Ziglar",
    },
    {
      quote: "Always working towards earning your business and trust!",
      author: "Blu Team",
    },
    {
      quote:
        "Our Client Portal is available 24-hours 7 days a week so we can serve you better",
      author: "Blu Difference",
    },
  ];

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function displayQuote() {
    const randomQuote = getRandomQuote();
    const quoteText = randomQuote.quote;
    const authorText = randomQuote.author;

    const quote1 = document.getElementById("quote1");
    const quote2 = document.getElementById("quote2");
    const author = document.getElementById("author");

    quote1.innerText = quoteText;
    quote2.innerText = quoteText;
    author.innerText = `— ${authorText}`;

    const scrollContainer = document.getElementById("scroll-container");

    if (quoteText.length > 70) {
      quote2.style.display = "inline-block";
      scrollContainer.classList.add("scroll-long-quote");
    } else {
      quote2.style.display = "none";
      scrollContainer.classList.remove("scroll-long-quote");
    }
  }

  displayQuote();

  openEPaymentPop.addEventListener("click", function () {
    ePaymentPopUp.classList.remove("displayNone");
    sectionCoreServiceTitle.style.opacity = "0";
    coreServiceTitles.forEach((title) => (title.style.opacity = "0"));
  });

  closeEPaymentPopUp.addEventListener("click", function () {
    ePaymentPopUp.classList.add("displayNone");
    sectionCoreServiceTitle.style.opacity = "1";
    coreServiceTitles.forEach((title) => (title.style.opacity = "1"));
  });

  ScreeningOpenPop.addEventListener("click", function () {
    screeningPopUp.classList.remove("displayNone");
    sectionCoreServiceTitle.style.opacity = "0";
    coreServiceTitles.forEach((title) => {
      title.style.opacity = "0";
    });
  });

  // Función para cerrar el pop-up de Screening
  closeScreeningPopUp.addEventListener("click", function () {
    screeningPopUp.classList.add("displayNone");
    sectionCoreServiceTitle.style.opacity = "1";
    coreServiceTitles.forEach((title) => {
      title.style.opacity = "1";
    });
  });

  // Funcionalidad para el pop-up de evaluación gratuita
  freeValuationOpenPop.addEventListener("click", function () {
    freeValuationPopUp.classList.remove("displayNone");
    sectionCoreServiceTitle.style.opacity = "0";
    coreServiceTitles.forEach((title) => (title.style.opacity = "0"));
  });

  closefreeValuationPopUp.addEventListener("click", function () {
    if (!freeValuationPopUp.classList.contains("displayNone")) {
      freeValuationPopUp.classList.add("displayNone");
      sectionCoreServiceTitle.style.opacity = "1";
      coreServiceTitles.forEach((title) => (title.style.opacity = "1"));
    }
  });
});

document
  .querySelector(".footer__title")
  .addEventListener("mouseover", function () {
    const popUp = document.querySelector(".smarterDecisionsPopUp");
    popUp.classList.remove("displayNone");
    setTimeout(() => {
      popUp.classList.add("active");
    }, 10); // Un pequeño retraso para permitir que la transición ocurra
  });

document
  .querySelector("#closeSmarterPopUp")
  .addEventListener("click", function () {
    const popUp = document.querySelector(".smarterDecisionsPopUp");
    popUp.classList.remove("active");
    setTimeout(() => {
      popUp.classList.add("displayNone");
    }, 500); // Tiempo que coincide con la duración de la transición
  });

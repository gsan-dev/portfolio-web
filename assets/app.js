(function () {
  "use strict";

  // Footer year
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile menu
  var toggle = document.getElementById("menu-toggle");
  var menu = document.getElementById("mobile-menu");
  if (toggle && menu) {
    var closeIcon = '<svg class="icon w-5 h-5" aria-hidden="true"><use href="#i-close"></use></svg>';
    var openIcon = toggle.innerHTML;

    function setMenu(open) {
      menu.classList.toggle("hidden", !open);
      menu.classList.toggle("flex", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
      toggle.innerHTML = open ? closeIcon : openIcon;
    }

    toggle.addEventListener("click", function () {
      setMenu(menu.classList.contains("hidden"));
    });

    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });
  }

  // Scrollspy
  var navLinks = document.querySelectorAll(".nav-link");
  var sections = Array.prototype.slice
    .call(navLinks)
    .map(function (link) {
      return document.getElementById(link.dataset.path);
    })
    .filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var activeClasses = ["bg-surface-container-high", "text-on-surface", "font-medium"];

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            var isActive = link.dataset.path === id;
            link.classList.toggle("text-on-surface-variant", !isActive);
            activeClasses.forEach(function (cls) {
              link.classList.toggle(cls, isActive);
            });
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }

  // Contact form -> mailto (no backend; this is a static site)
  var form = document.getElementById("contact-form");
  var feedback = document.getElementById("form-feedback");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      var name = form.elements["name"].value.trim();
      var email = form.elements["email"].value.trim();
      var topicSelect = form.elements["topic"];
      var topic = topicSelect.options[topicSelect.selectedIndex].text;
      var message = form.elements["message"].value.trim();

      var subject = "Contacto desde el portfolio — " + topic;
      var bodyLines = [
        "Nombre / empresa: " + name,
        "Email de contacto: " + email,
        "",
        message,
      ];

      var mailto =
        "mailto:gdev@outlook.es" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(bodyLines.join("\n"));

      window.location.href = mailto;

      if (feedback) {
        feedback.classList.remove("hidden");
        feedback.classList.add("flex");
      }
    });
  }
})();

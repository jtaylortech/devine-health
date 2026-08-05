/* Devine Health — shared site behavior. Vanilla JS, no dependencies. */
(function () {
  "use strict";

  // --- Mobile nav toggle ---
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // --- Footer year ---
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // --- Prototype forms (no backend; Squarespace handles delivery live) ---
  document.querySelectorAll("form[data-prototype]").forEach(function (f) {
    var status = f.querySelector(".form-status");
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!f.checkValidity()) {
        if (status) status.textContent = "Please complete the required fields.";
        f.reportValidity();
        return;
      }
      if (status) {
        status.textContent =
          "Thank you! (Design preview — connect a Squarespace form to receive this.)";
      }
      f.reset();
    });
  });

  // --- FAQ accordion (accessible) ---
  document.querySelectorAll(".acc-btn").forEach(function (btn) {
    var panel = document.getElementById(btn.getAttribute("aria-controls"));
    if (!panel) return;
    btn.addEventListener("click", function () {
      var expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", expanded ? "false" : "true");
      panel.style.maxHeight = expanded ? "0" : panel.scrollHeight + "px";
    });
  });

  // Recalculate open panel height on resize (responsive text reflow)
  var rt;
  window.addEventListener("resize", function () {
    clearTimeout(rt);
    rt = setTimeout(function () {
      document.querySelectorAll('.acc-btn[aria-expanded="true"]').forEach(function (btn) {
        var panel = document.getElementById(btn.getAttribute("aria-controls"));
        if (panel) panel.style.maxHeight = panel.scrollHeight + "px";
      });
    }, 120);
  });
})();

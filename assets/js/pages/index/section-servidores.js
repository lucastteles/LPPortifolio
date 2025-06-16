(function() {
  const sectionServidores = document.querySelector("section.servidores");
  const toggle = sectionServidores.querySelector("div.toggle");
  const mundo = sectionServidores.querySelector("div.mundo");

  toggle.addEventListener("click", function() {
    mundo.classList.toggle("ativo");
  });
})();
(function() {
  const sectionVelocidade = document.querySelector("section.velocidade");
  const sectionParceiros = document.querySelector("section.parceiros");
  const video = sectionVelocidade.querySelector("video");

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();
        observer.disconnect();
      }
    });
  });

  // Observa a seção "teste"
  observer.observe(sectionParceiros);
}
})();
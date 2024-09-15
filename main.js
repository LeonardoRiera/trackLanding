
/* efecto parallax */
gsap.to('#textoPrincipal', {
    scrollTrigger: {
        scrub:1
    },
    y:200 
    
});



const imagen = document.getElementById('miMontaña');

const observer = new IntersectionObserver((entries) => {
  const entry = entries[0]; // Solo necesitamos observar la primera entrada (nuestra imagen)
  
  if (entry.isIntersecting) {
    entry.target.classList.add('visible'); // Agregar la clase visible cuando el elemento entra en el viewport
  } else {
    entry.target.classList.remove('visible'); // Remover la clase visible cuando el elemento sale del viewport
  }
}, {
  threshold: 0.1 // La animación se activa cuando al menos el 10% del elemento es visible
});

observer.observe(imagen); // Observamos la imagen
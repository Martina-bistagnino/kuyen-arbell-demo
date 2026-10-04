
/**
 * KUYEN ARBELL
 * Maqueta comercial de presentación.
 *
 * Los enlaces externos son únicamente demostrativos.
 * La navegación interna entre páginas permanece activa.
 */

// Desactivar los enlaces externos de la maqueta.
document.querySelectorAll('[data-demo="true"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

// Actualizar automáticamente el año del pie de página.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

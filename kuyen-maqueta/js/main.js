
/**
 * KUYEN ARBELL
 * Maqueta comercial de presentación.
 *
 * Los botones externos son únicamente visuales.
 * La navegación interna permanece habilitada.
 */

// Desactivar los botones demostrativos.
document.querySelectorAll('[data-demo]').forEach((link) => {
  link.setAttribute('aria-disabled', 'true');

  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

// Actualizar automáticamente el año del pie de página.
document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = new Date().getFullYear();
});

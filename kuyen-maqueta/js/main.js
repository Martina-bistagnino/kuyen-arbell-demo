/** Kuyen: única configuración de enlaces de la maqueta. Sin backend. */
const phone = '5491167180171';
const messages = {
  team: 'Hola Eluney, vi la maqueta de Kuyen y me interesa conocer cómo sumarme al equipo de revendedores.',
  products: 'Hola Eluney, vi la maqueta de Kuyen y quisiera conocer los productos y recibir el catálogo.',
  general: 'Hola Eluney, vi Kuyen Arbell y quisiera hacerte una consulta.'
};
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  const type = link.dataset.whatsapp;
  link.href = `https://wa.me/${phone}?text=${encodeURIComponent(messages[type] || messages.general)}`;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});
document.querySelectorAll('[data-year]').forEach(el => {el.textContent = new Date().getFullYear()});

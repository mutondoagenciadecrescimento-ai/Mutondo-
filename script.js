// MUTONDO - Agência de Crescimento | JS

// Menu mobile toggle
const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
});

// Close menu on link click
document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => {
    nav.classList.remove('open');
    const icon = menuToggle.querySelector('i');
    icon.classList.add('fa-bars');
    icon.classList.remove('fa-times');
  });
});

// Header shadow on scroll
window.addEventListener('scroll', () => {
  const h = document.getElementById('header');
  if (window.scrollY > 30) h.style.boxShadow = '0 6px 20px rgba(0,0,0,.1)';
  else h.style.boxShadow = '0 2px 12px rgba(0,0,0,.06)';
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.servico-card,.sobre-card,.novidade-card,.portfolio-item,.contacto-card')
  .forEach(el => { el.classList.add('reveal'); observer.observe(el); });

// Formulário de orçamento -> WhatsApp + Email
const form = document.getElementById('orcamentoForm');
const success = document.getElementById('formSuccess');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const empresa = document.getElementById('empresa').value.trim();
  const telefone = document.getElementById('telefone').value.trim();
  const email = document.getElementById('email').value.trim();
  const servico = document.getElementById('servico').value;
  const objectivo = document.getElementById('objectivo').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  const texto =
`*NOVO PEDIDO DE ORÇAMENTO - MUTONDO*

👤 *Nome:* ${nome}
🏢 *Empresa:* ${empresa || '—'}
📞 *Telefone:* ${telefone}
📧 *E-mail:* ${email}
🛠️ *Serviço:* ${servico}
🎯 *Objectivo:* ${objectivo || '—'}
💬 *Mensagem:* ${mensagem || '—'}`;

  // WhatsApp
  const waUrl = `https://wa.me/244950519952?text=${encodeURIComponent(texto)}`;
  window.open(waUrl, '_blank');

  // Email
  const subject = `Pedido de Orçamento - ${servico} - ${nome}`;
  const mailUrl = `mailto:mutondoagenciadecrescimento@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(texto)}`;
  setTimeout(() => { window.location.href = mailUrl; }, 600);

  // Feedback
  success.classList.add('show');
  form.reset();
  setTimeout(() => success.classList.remove('show'), 6000);
});

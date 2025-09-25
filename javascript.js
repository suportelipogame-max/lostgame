/* CARROSSEL SIMPLES */
(function(){
  const slides = document.querySelectorAll('.carousel .slide');
  const dotsWrap = document.getElementById('dots');
  let idx = 0;

  if(slides.length === 0) return;
  // cria dots
  slides.forEach((s,i) => {
    const b = document.createElement('button');
    b.addEventListener('click', () => { goTo(i); });
    b.className = i===0 ? 'active' : '';
    dotsWrap.appendChild(b);
  });

  const dots = Array.from(dotsWrap.querySelectorAll('button'));

  function update(){
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[idx].classList.add('active');
    dots[idx].classList.add('active');
  }

  function goTo(i){
    idx = i;
    update();
  }

  function next(){
    idx = (idx + 1) % slides.length;
    update();
  }

  update();
  setInterval(next, 3500);
})();

/* CONTADOR até 26/10/2026 00:00 */
(function(){
  const el = document.getElementById('countdown');
  const target = new Date("Oct 26, 2026 00:00:00").getTime();

  function tick(){
    const now = Date.now();
    let diff = target - now;
    if(diff <= 0){
      el.textContent = "🚀 O grande dia chegou!";
      return;
    }
    const days = Math.floor(diff / (1000*60*60*24));
    diff -= days * (1000*60*60*24);
    const hours = Math.floor(diff / (1000*60*60));
    diff -= hours * (1000*60*60);
    const mins = Math.floor(diff / (1000*60));
    diff -= mins * (1000*60);
    const secs = Math.floor(diff / 1000);

    el.textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
  }

  setInterval(tick, 1000);
  tick();
})();

/* MODAIS de Suporte/Termos/Lançamento */
function abrirGuia(name){
  const modal = document.getElementById('modal');
  const body = document.getElementById('modalBody');
  modal.classList.add('show');

  if(name === 'suporte'){
    body.innerHTML = `<h3>Suporte</h3>
      <p>Envie e-mail para: <a href="mailto:suportelipogame@gmail.com">suportelipogame@gmail.com</a></p>
      <p>Atendimento em breve. Central de recarga ainda indisponível.</p>`;
  } else if(name === 'termos'){
    body.innerHTML = `<h3>Termos de Uso (Resumo)</h3>
      <p>Ao usar a central de recarga você aceita os termos. A venda é disponibilizada quando oficialmente ativada.</p>`;
  } else if(name === 'lancamento'){
    body.innerHTML = `<h3>Lançamento</h3>
      <p>Data oficial: <strong>27/10/2025</strong></p>
      <p>O lançamento é a prévia. Contagem regressiva ativa até 26/10/2026.</p>`;
  } else {
    body.innerHTML = `<p>Em desenvolvimento...</p>`;
  }
}

function fecharModal(e){
  const modal = document.getElementById('modal');
  if(e.target === modal || e.target.classList.contains('close')){
    modal.classList.remove('show');
  }
}

/* Abas simuladas */
document.querySelectorAll('.tab').forEach(t => {
  t.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(x => x.classList.remove('active'));
    t.classList.add('active');
  });
});
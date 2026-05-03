(function(){
  const selector = '.btn-p, .btn-s, .btn-o, .btn-nav, .admin-save-btn';
  function addRipple(e){
    const btn = e.currentTarget;
    if(!btn || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement('span');
    ripple.className = 'kc-ripple';
    ripple.style.left = (e.clientX - rect.left) + 'px';
    ripple.style.top = (e.clientY - rect.top) + 'px';
    btn.appendChild(ripple);
    setTimeout(()=>ripple.remove(), 680);
  }
  function bind(){
    document.querySelectorAll(selector).forEach(btn=>{
      if(btn.dataset.kcRippleBound) return;
      btn.dataset.kcRippleBound = '1';
      btn.addEventListener('click', addRipple, {passive:true});
    });
  }
  bind();
  document.addEventListener('DOMContentLoaded', bind);
})();

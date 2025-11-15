(function(){
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  const html = document.documentElement;
  function applyTheme(v){
    if(v==='auto'){ html.setAttribute('data-theme', prefersDark ? 'dark' : 'light'); }
    else { html.setAttribute('data-theme', v); }
    const btn = document.getElementById('theme-toggle');
    if(btn){ btn.textContent = (html.getAttribute('data-theme')==='dark') ? '☀️' : '🌙'; }
  }
  applyTheme(theme);
  localStorage.setItem('theme', theme);

  document.addEventListener('DOMContentLoaded', ()=>{
    const yearEl = document.getElementById('year');
    if(yearEl) yearEl.textContent = new Date().getFullYear();

    // Scroll progress bar
    const bar = document.createElement('div');
    bar.className = 'scroll-progress';
    document.body.appendChild(bar);
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop)/(h.scrollHeight - h.clientHeight || 1);
      bar.style.width = (Math.min(Math.max(scrolled,0),1)*100).toFixed(2) + '%';
    };
    document.addEventListener('scroll', onScroll, {passive:true});
    onScroll();

    const tbtn = document.getElementById('theme-toggle');
    if(tbtn){
      tbtn.addEventListener('click', ()=>{
        const current = html.getAttribute('data-theme');
        const next = current==='dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
        tbtn.textContent = next==='dark' ? '☀️' : '🌙';
      });
    }

    // Language switcher
    const sel = document.getElementById('lang-switcher');
    if(sel){
      const initial = getSavedLang();
      sel.value = initial;
      i18n.setLang(initial);
      sel.addEventListener('change', ()=>{
        i18n.setLang(sel.value);
      });
    } else {
      // apply default language anyway
      i18n.setLang(getSavedLang());
    }

    // IntersectionObserver reveals
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, {threshold: 0.1});
    document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

    // Subtle fade-in utilities for cards and buttons
    document.querySelectorAll('.card, .proj-card, .btn').forEach((el,i)=>{
      el.classList.add('fade-in');
      if(i%3===1) el.classList.add('delay-1');
      if(i%3===2) el.classList.add('delay-2');
      if(i%3===0) el.classList.add('delay-3');
    });

    // Activate nav link
    const path = location.pathname.split('/').pop();
    document.querySelectorAll('.nav a').forEach(a=>{
      const href = a.getAttribute('href');
      a.classList.toggle('active', href===path || (path==='' && href==='index.html'));
    });
  });

  function getSavedLang(){
    return localStorage.getItem('lang') || 'ru';
  }

  window.i18n = window.i18n || {};
})();

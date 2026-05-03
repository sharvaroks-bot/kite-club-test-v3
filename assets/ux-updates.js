(function(){
  function headerOffset(){
    var nav = document.querySelector('nav');
    var h = nav ? nav.getBoundingClientRect().height : 76;
    return Math.ceil(h + 18);
  }
  function scrollToCourseStart(item){
    if(!item) return;
    var y = item.getBoundingClientRect().top + window.pageYOffset - headerOffset();
    window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
  }
  document.addEventListener('click', function(e){
    var toggle = e.target.closest && e.target.closest('.course-toggle');
    if(!toggle) return;
    var item = toggle.closest('.course-item');
    if(!item) return;

    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();

    var accordion = item.closest('.course-accordion');
    var wasOpen = item.classList.contains('open');

    if(accordion){
      accordion.querySelectorAll('.course-item.open').forEach(function(open){
        if(open !== item) open.classList.remove('open');
      });
    } else {
      document.querySelectorAll('.course-item.open').forEach(function(open){
        if(open !== item) open.classList.remove('open');
      });
    }

    item.classList.toggle('open', !wasOpen);

    if(!wasOpen){
      /* Wait until the accordion has started expanding, then align the very top of the card below the sticky mobile header. */
      window.setTimeout(function(){ scrollToCourseStart(item); }, 380);
      window.setTimeout(function(){ scrollToCourseStart(item); }, 720);
    }
  }, true);
})();

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
      anchor.addEventListener('click', function(e){
        const target = this.getAttribute('href');
        if(target === '#' || target === '') return;
        const el = document.querySelector(target);
        if(el){
          e.preventDefault(); 
          el.scrollIntoView({behavior:'smooth', block:'start'});
        }
      });
    });
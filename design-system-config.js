(function(){
  const STORAGE_KEY='yellowstone-design-system-config';
  const defaults={
    '--color-primary':'#1d211b','--color-secondary':'#4f5b48','--color-background':'#d8ddc4','--color-surface':'#f2efda','--color-surface-raised':'#fbf8e8','--color-text':'#27271f','--color-text-muted':'#737866','--color-accent':'#9a7b42','--color-border':'#b9bea6','--color-success':'#45634a','--color-warning':'#a26f39','--color-danger':'#9a4e45','--color-info':'#4e6c75',
    '--font-display':"'Playfair Display', Georgia, serif",'--font-body':"'DM Sans', Arial, sans-serif",'--font-mono':"'DM Mono', monospace",
    '--text-body':'1rem','--text-lg':'1.125rem','--text-xl':'1.375rem','--text-2xl':'1.75rem','--text-3xl':'2.25rem','--text-4xl':'clamp(3rem, 8vw, 7rem)',
    '--space-xs':'.5rem','--space-sm':'.75rem','--space-md':'1rem','--space-lg':'1.5rem','--space-xl':'2rem','--space-2xl':'3rem','--space-3xl':'5rem',
    '--radius-sm':'3px','--radius-md':'8px','--radius-lg':'16px','--shadow-sm':'0 1px 2px rgba(29,33,27,.08)','--shadow-md':'0 12px 30px rgba(29,33,27,.12)','--shadow-lg':'0 24px 60px rgba(29,33,27,.16)','--motion-base':'220ms'
  };
  function read(){try{return {...defaults,...JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}}catch{return {...defaults}}}
  function apply(config, persist=true){const next={...defaults,...config};Object.entries(next).forEach(([key,value])=>document.documentElement.style.setProperty(key,value));if(persist)try{localStorage.setItem(STORAGE_KEY,JSON.stringify(next))}catch{};document.dispatchEvent(new CustomEvent('designsystemchange',{detail:next}));return next}
  function reset(){return apply(defaults,true)}
  function exportFiles(config){const next={...defaults,...config};const css=`:root{\n${Object.entries(next).map(([key,value])=>`  ${key}: ${value};`).join('\n')}\n}`;const blob=new Blob([JSON.stringify({tokens:next,css},null,2)],{type:'application/json'});const url=URL.createObjectURL(blob);const link=document.createElement('a');link.href=url;link.download='yellowstone-design-tokens.json';link.click();URL.revokeObjectURL(url);return {tokens:next,css}}
  const api={defaults,read,apply,reset,export:exportFiles,storageKey:STORAGE_KEY};
  window.DesignSystem=api;apply(read(),false);
  window.addEventListener('storage',event=>{if(event.key===STORAGE_KEY)apply(read(),false)});
})();

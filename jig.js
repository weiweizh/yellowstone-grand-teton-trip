(function(){
  const STORAGE_KEY='yellowstone-jig-config';
  const root=document.documentElement;
  let saved={};
  try{saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch{saved={}}
  saved.tokens=saved.tokens||{};
  if(!document.getElementById('jigCustomStyle')){
    const tag=document.createElement('style');
    tag.id='jigCustomStyle';
    document.head.appendChild(tag);
    tag.textContent=saved.customCss||'';
  }

  const FONT_OPTIONS=[
    ["'Amarna', sans-serif","Amarna"],
    ["'Atkinson Hyperlegible Next', sans-serif","Atkinson Hyperlegible Next"],
    ["'AR One Sans', sans-serif","AR One Sans"],
    ["'DM Mono', monospace","DM Mono"],
    ["'Playfair Display', Georgia, serif","Playfair Display"],
    ["'DM Sans', Arial, sans-serif","DM Sans"],
    ["Georgia, serif","Georgia"],
    ["ui-monospace, monospace","System Mono"]
  ];

  const esc=str=>String(str).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

  function tokenList(){
    const out=[];
    for(const sheet of document.styleSheets){
      try{
        for(const rule of sheet.cssRules){
          if(rule.style&&rule.selectorText===':root'){
            for(let i=0;i<rule.style.length;i++){
              const name=rule.style[i];
              if(!name.startsWith('--'))continue;
              out.push({name,value:rule.style.getPropertyValue(name).trim()});
            }
          }
        }
      }catch{}
    }
    return out.filter((t,i,arr)=>arr.findIndex(x=>x.name===t.name)===i);
  }

  function classify(name,value){
    if(name.startsWith('--color-'))return {type:'color'};
    if(name.startsWith('--font-'))return {type:'font'};
    if(name.startsWith('--radius-pill'))return {type:'text'};
    if(name.startsWith('--shadow-')||name.startsWith('--ease-')||name==='--text-4xl')return {type:'text'};
    if(name.includes('weight'))return {type:'number',unit:'',step:100,min:100,max:900};
    if(name.startsWith('--text-')){const num=parseFloat(value)||1;return {type:'number',unit:'rem',step:.0625,min:num/2,max:Math.max(num*2,4)}}
    if(name.startsWith('--leading-')||name.startsWith('--tracking-')){
      const match=/^(-?[.0-9]+)([a-z%]+)$/.exec(value);
      const unit=match&&match[2]?match[2]:'';
      const num=parseFloat(value)||0;
      return {type:'number',unit,step:.01,min:num-Math.max(Math.abs(num),.2)-.2,max:num+Math.max(Math.abs(num),.2)+.2};
    }
    if(name.startsWith('--space-'))return {type:'number',unit:'px',step:4,min:0,max:200};
    if(name.startsWith('--radius-'))return {type:'number',unit:'px',step:1,min:0,max:48};
    if(name.includes('padding')||name.includes('height'))return {type:'number',unit:'rem',step:.125,min:0,max:8};
    if(name.startsWith('--motion-'))return {type:'number',unit:'ms',step:10,min:0,max:600};
    return null;
  }

  const GROUPS=[
    ['Colors',t=>t.spec.type==='color'],
    ['Typography',t=>t.spec.type==='font'||t.name.startsWith('--text-')||t.name.includes('weight')||t.name.startsWith('--leading-')||t.name.startsWith('--tracking-')],
    ['Spacing & rhythm',t=>t.name.startsWith('--space-')||t.name.includes('padding')||t.name.includes('height')],
    ['Shape, shadow & motion',t=>t.name.startsWith('--shadow-')||t.name.startsWith('--ease-')||t.name.startsWith('--radius-')||t.name.startsWith('--motion-')]
  ];

  let controls={};

  function buildPanel(){
    const tokens=tokenList();
    tokens.forEach(t=>t.spec=classify(t.name,t.value));
    const usable=tokens.filter(t=>t.spec);
    const sections=GROUPS.map(([title,predicate])=>{
      const items=usable.filter(predicate);
      if(!items.length)return '';
      const rows=items.map(t=>{
        const id=`jig-${t.name.slice(1)}`;
        const {name}=t;
        if(t.spec.type==='color'){
          const hex=/^#[0-9a-fA-F]{6}$/.test(t.value)?t.value:'#000000';
          return `<div class="jig-row"><label for="${id}">${esc(name)}</label><div style="display:flex;gap:4px"><input type="color" data-jig="${name}" id="${id}" value="${hex}"><input class="jig-hex" data-jig-hex="${name}" value="${hex}" aria-label="${esc(name)} hex"></div></div>`;
        }
        if(t.spec.type==='font'){
          const options=FONT_OPTIONS.map(([v,l])=>`<option value="${esc(v)}" ${t.value.startsWith(v.split(',')[0].trim())?'selected':''}>${l}</option>`).join('');
          return `<div class="jig-row"><label for="${id}">${esc(name)}</label><select data-jig="${name}" id="${id}">${options}</select></div>`;
        }
        if(t.spec.type==='text'){
          return `<div class="jig-row jig-wide"><label for="${id}">${esc(name)}</label><input class="jig-text" data-jig="${name}" id="${id}" type="text" value="${esc(t.value)}"></div>`;
        }
        const current=saved.tokens[name]!==undefined?saved.tokens[name]:t.value;
        const match=/^(-?[.0-9]+)([a-z%]*)$/.exec(String(current));
        const num=match?match[1]:t.spec.min;
        return `<div class="jig-row"><label for="${id}" title="${esc(name)} = ${esc(current)}">${esc(name)}</label><div style="display:flex;gap:6px;align-items:center"><input type="range" class="jig-range" data-jig="${name}" data-unit="${t.spec.unit}" id="${id}" min="${t.spec.min}" max="${t.spec.max}" step="${t.spec.step}" value="${num}"><input type="number" class="jig-num" data-jig-unit="${name}" data-unit="${t.spec.unit}" value="${num}" min="${t.spec.min}" max="${t.spec.max}" step="${t.spec.step}" aria-label="${esc(name)} value"></div></div>`;
      }).join('');
      return `<section class="jig-section"><h3>${esc(title)}</h3>${rows}</section>`;
    }).join('');
    const customCss=esc(saved.customCss||'');
    return `<div class="jig-head"><strong>VISUAL JIG</strong><button type="button" id="jigClose" aria-label="Close jig">×</button></div>${sections}<section class="jig-section"><h3>CUSTOM CSS (free-form)</h3><textarea class="jig-textarea" id="jigCustomCss" rows="5" placeholder=".item{padding:20px}"></textarea></section><div class="jig-actions"><button id="jigExport" type="button">EXPORT CSS</button><button id="jigReset" type="button" class="jig-ghost">RESET</button></div><p class="jig-note">Edits apply live and persist in this browser. RESET restores tokens.css defaults.</p>`;
  }

  function save(){
    const textarea=document.querySelector('#jigCustomCss');
    saved={tokens:{...saved.tokens,...controls},customCss:textarea?textarea.value:saved.customCss||''};
    try{localStorage.setItem(STORAGE_KEY,JSON.stringify(saved))}catch{}
  }
  function hydrateSaved(){
    Object.entries(saved.tokens).forEach(([k,v])=>root.style.setProperty(k,v));
  }

  function mountPanel(){
    const panel=document.createElement('aside');
    panel.className='jig-panel';
    panel.id='jigPanel';
    panel.setAttribute('aria-label','Visual adjustment jig');
    panel.innerHTML=buildPanel();
    const toggle=document.createElement('button');
    toggle.className='jig-toggle';
    toggle.id='jigToggleBtn';
    toggle.type='button';
    toggle.textContent='◆ Jig';
    document.body.append(panel,toggle);
    toggle.addEventListener('click',()=>panel.classList.toggle('jig-open'));
    panel.querySelector('#jigClose').addEventListener('click',()=>panel.classList.remove('jig-open'));
    panel.querySelector('#jigCustomCss').value=saved.customCss||'';
    panel.addEventListener('input',event=>{
      const target=event.target;
      if(target.id==='jigCustomCss'){
        document.getElementById('jigCustomStyle').textContent=target.value;
        save();
        return;
      }
      const name=target.dataset.jig;
      if(!name)return;
      if(target.type==='color'){
        const hex=target.value;
        root.style.setProperty(name,hex);
        controls[name]=hex;
        const hexInput=panel.querySelector(`[data-jig-hex="${name}"]`);
        if(hexInput)hexInput.value=hex;
        save();
        return;
      }
      if(target.type==='range'){
        const unit=target.dataset.unit||'';
        root.style.setProperty(name,target.value+unit);
        controls[name]=target.value+unit;
        const numInput=panel.querySelector(`[data-jig-unit="${name}"]`);
        if(numInput)numInput.value=target.value;
        save();
        return;
      }
      root.style.setProperty(name,target.value);
      controls[name]=target.value;
      save();
    });
    panel.addEventListener('change',event=>{
      const numInput=event.target.closest('[data-jig-unit]');
      if(!numInput)return;
      const name=numInput.dataset.jigUnit;
      const unit=numInput.dataset.unit||'';
      const range=panel.querySelector(`[data-jig="${name}"]`);
      if(range)range.value=numInput.value;
      root.style.setProperty(name,numInput.value+unit);
      controls[name]=numInput.value+unit;
      save();
    });
    panel.querySelector('#jigExport').addEventListener('click',()=>{
      const current={...saved.tokens,...controls};
      const css=`:root{\n${Object.entries(current).map(([k,v])=>`  ${k}: ${v};`).join('\n')}\n}`;
      const blob=new Blob([JSON.stringify({tokens:current,css},null,2)],{type:'application/json'});
      const url=URL.createObjectURL(blob);
      const link=document.createElement('a');
      link.href=url;
      link.download='yellowstone-jig-tokens.json';
      link.click();
      URL.revokeObjectURL(url);
    });
    panel.querySelector('#jigReset').addEventListener('click',()=>{
      try{localStorage.removeItem(STORAGE_KEY)}catch{}
      tokenList().forEach(t=>root.style.removeProperty(t.name));
      document.getElementById('jigCustomStyle').textContent='';
      saved={tokens:{},customCss:''};
      const open=panel.classList.contains('jig-open');
      toggle.remove();panel.remove();
      mountPanel();
      const fresh=document.getElementById('jigPanel');
      if(open)fresh.classList.add('jig-open');
    });
  }
  hydrateSaved();
  mountPanel();
})();

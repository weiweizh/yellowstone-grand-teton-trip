(function(){
  const config=window.DesignSystem;
  const $=selector=>document.querySelector(selector);
  const $$=selector=>Array.from(document.querySelectorAll(selector));
  const colorControls=$$('[data-color-control]');
  const rangeControls=$$('[data-token]');
  function hexToRgb(hex){const clean=hex.replace('#','');if(clean.length!==6)return null;return clean.match(/.{2}/g).map(part=>parseInt(part,16))}
  function displayValue(input){const unit=input.dataset.unit||'';return `${input.value}${unit}`}
  function hydrate(){const current=config.read();colorControls.forEach(control=>{const token=control.dataset.colorControl;const value=current[token]||'#000000';const color=control.querySelector('input[type=color]');const hex=control.querySelector('.hex');if(/^#[0-9a-f]{6}$/i.test(value)){color.value=value;hex.value=value}});rangeControls.forEach(input=>{if(!input.dataset.token)return;const value=current[input.dataset.token];if(value){const number=parseFloat(value);if(Number.isFinite(number))input.value=number}const output=input.parentElement.querySelector('output');if(output)output.textContent=displayValue(input)});renderGallery(current)}
  function collect(){const next={};colorControls.forEach(control=>{next[control.dataset.colorControl]=control.querySelector('.hex').value});rangeControls.forEach(input=>{if(input.dataset.token)next[input.dataset.token]=displayValue(input)});return next}
  function renderGallery(tokens){const swatches=[['--color-primary','Primary ink'],['--color-secondary','Secondary olive'],['--color-background','Background sage'],['--color-surface','Surface ivory'],['--color-surface-raised','Raised surface'],['--color-accent','Antique brass'],['--color-border','Border'],['--color-success','Success'],['--color-warning','Warning']];$('#swatches').innerHTML=swatches.map(([token,label])=>`<article class="swatch"><div class="swatch-color" style="background:${tokens[token]||`var(${token})`}"></div><strong>${token}</strong><small>${label} · ${tokens[token]||'linked token'}</small></article>`).join('');const spacing=[['--space-xs','Extra small'],['--space-sm','Small'],['--space-md','Medium'],['--space-lg','Large'],['--space-xl','Extra large'],['--space-2xl','Section']];$('#spacingMatrix').innerHTML=spacing.map(([token,label])=>`<div class="space-row"><span>${token}</span><div class="space-bar" style="width:${tokens[token]||`var(${token})`};max-width:100%"></div><span>${label}</span></div>`).join('')}
  colorControls.forEach(control=>{const color=control.querySelector('input[type=color]');const hex=control.querySelector('.hex');color.addEventListener('input',()=>{hex.value=color.value});hex.addEventListener('input',()=>{if(/^#[0-9a-f]{6}$/i.test(hex.value))color.value=hex.value})});
  rangeControls.forEach(input=>input.addEventListener('input',()=>{const output=input.parentElement.querySelector('output');if(output)output.textContent=displayValue(input)}));
  $('#applyTokens').addEventListener('click',()=>{config.apply(collect(),true);$('#syncNote').textContent='Applied and synced across open tabs.';setTimeout(()=>$('#syncNote').textContent='Synced across open tabs.',1800)});
  $('#exportTokens').addEventListener('click',()=>{config.export(collect());$('#syncNote').textContent='Token JSON exported.'});
  $('#resetTokens').addEventListener('click',()=>{config.reset();hydrate();$('#syncNote').textContent='Defaults restored.'});
  document.addEventListener('designsystemchange',event=>{hydrate();renderGallery(event.detail)});
  $('#modalTrigger').addEventListener('click',()=>$('#demoModal').showModal());$('#modalClose').addEventListener('click',()=>$('#demoModal').close());$('#modalDone').addEventListener('click',()=>$('#demoModal').close());
  hydrate();
})();

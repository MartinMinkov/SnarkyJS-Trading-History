import init,*as plonk_wasm from"/plonk_wasm.js";import{override_bindings}from"/worker_run.js";export const initSnarkyJS=async n=>{var e,r=await init(),i=new Promise((function(n){e=n})),o=new Worker("/worker_init.js",{type:"module"});return o.onmessage=function(){e()},o.postMessage({type:"init",memory:r.memory}),await i,window.plonk_wasm=override_bindings(plonk_wasm,o),new Promise((function(e){var r=document.createElement("script");r.src="/snarky_js_chrome.bc.js",document.body.appendChild(r),r.addEventListener("load",(()=>{var r=document.createElement("script");r.src="/snarky.js",r.id="snarkyjs",document.body.appendChild(r),e(),n&&r.addEventListener("load",(()=>{var e=document.createElement("script");e.src=n,document.body.appendChild(e)}))}))}))};window.initSnarkyJS=initSnarkyJS;
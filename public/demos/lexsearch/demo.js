const scr = document.getElementById('app-screen');
let stage = 1;

const urlMap = {
  SEARCH: 'app.lexsearch.cl/search',
  SEARCHING: 'app.lexsearch.cl/search?q=terminacion+anticipada',
  RESULTS: 'app.lexsearch.cl/results?q=terminacion+anticipada',
  DOC_DETAIL: 'app.lexsearch.cl/doc/contrato-arriendo-204#cl-12.3'
};
function updateUrl(s) {
  const bar = document.getElementById('app-url');
  if (bar) bar.innerHTML = '<span class="material-symbols-outlined text-[12px] align-middle mr-1">lock</span>' + (urlMap[s] || 'app.lexsearch.cl');
}

const results = [
  { doc: 'Contrato Arriendo — Local 204, Strip Center Vitacura', clausula: 'Cláusula 12.3 — Terminación Anticipada', texto: '"El arrendatario podrá poner término anticipado al contrato con un preaviso mínimo de <mark>90 días corridos</mark>, pagando una multa equivalente a <mark>3 meses de renta</mark>."', relevancia: 98, pagina: 'Pág. 8' },
  { doc: 'Contrato Marco Servicios — Minera Centinela SpA', clausula: 'Cláusula 15.1 — Resolución Unilateral', texto: '"Cualquiera de las partes podrá resolver el contrato de forma unilateral, mediando aviso escrito con <mark>60 días de anticipación</mark>. En caso de resolución por el mandante, se pagarán los servicios efectivamente prestados."', relevancia: 91, pagina: 'Pág. 14' },
  { doc: 'NDA — Proyecto Transformación Digital BancoEstado', clausula: 'Sección 7 — Vigencia y Terminación', texto: '"La obligación de confidencialidad <mark>sobrevivirá la terminación</mark> del acuerdo por un período de <mark>5 años</mark>, contados desde la fecha de término."', relevancia: 84, pagina: 'Pág. 4' },
];

function sidebar(active) {
  const items = [
    { id: 'SEARCH', icon: 'search', label: 'Búsqueda' },
    { id: 'LIBRARY', icon: 'folder_open', label: 'Biblioteca' },
    { id: 'HISTORY', icon: 'history', label: 'Historial' },
    { id: 'SETTINGS', icon: 'settings', label: 'Config' },
  ];
  return `<div class="w-48 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">LexSearch</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-violet-50 text-violet-600' : 'hover:bg-slate-50 text-slate-600';
      const click = it.id === 'SEARCH' ? `onclick="go('SEARCH')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">Base de Documentos</div>
      <div class="text-lg font-bold text-violet-600">1,247</div>
      <div class="text-[10px] text-slate-400">contratos indexados</div>
    </div>
  </div>`;
}

function go(state) {
  scr.innerHTML = '';
  updateUrl(state);
  switch(state) {
    case 'SEARCH':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('SEARCH')}
        <div class="flex-1 p-6 bg-slate-50 overflow-y-auto flex flex-col">
          <h1 class="text-2xl font-bold mb-1">Búsqueda Semántica</h1>
          <p class="text-slate-400 text-sm mb-5">Describe lo que buscas en lenguaje natural. La IA entiende contexto legal.</p>
          <div class="relative mb-6">
            <input id="q" type="text" placeholder='Ej: "¿Qué pasa si quiero terminar un contrato antes de plazo?"'
              class="w-full bg-white border-2 border-slate-200 rounded-xl px-4 py-3.5 pr-28 text-sm focus:outline-none focus:border-violet-400 transition placeholder:text-slate-300 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}"
              onkeydown="if(event.key==='Enter') go('SEARCHING')" />
            <button onclick="go('SEARCHING')" class="absolute right-2 top-1/2 -translate-y-1/2 bg-violet-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-violet-700 transition flex items-center gap-1">
              <span class="material-symbols-outlined text-[16px]">search</span> Buscar
            </button>
            ${stage===1?'<div class="absolute top-full mt-3 left-4 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce z-50">1. Escribe o haz clic en Buscar 👆</div>':''}
          </div>
          <div class="grid grid-cols-2 gap-3 mb-6">
            <div onclick="go('SEARCHING')" class="bg-white p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-violet-300 transition group">
              <div class="text-xs text-violet-500 font-semibold mb-1">Búsqueda Frecuente</div>
              <div class="text-sm text-slate-700 group-hover:text-violet-600 transition">Terminación anticipada de contrato</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 cursor-pointer hover:border-violet-300 transition group">
              <div class="text-xs text-violet-500 font-semibold mb-1">Búsqueda Frecuente</div>
              <div class="text-sm text-slate-700 group-hover:text-violet-600 transition">Cláusulas de confidencialidad NDA</div>
            </div>
          </div>
          <div class="flex-1 flex items-center justify-center">
            <div class="text-center text-slate-300">
              <span class="material-symbols-outlined text-5xl mb-2 block">policy</span>
              <p class="text-sm">Tus resultados aparecerán aquí</p>
            </div>
          </div>
        </div>
      </div>`;
      if(stage===1) setTimeout(()=>{const q=document.getElementById('q'); if(q) q.value='Terminación anticipada de contrato';}, 800);
      break;

    case 'SEARCHING':
      stage = 2;
      scr.innerHTML = `<div class="h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden animate-fade-in p-8 text-white">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div class="scan-line top-0 z-10"></div>
        <div class="z-20 w-full max-w-md">
          <div class="flex items-center justify-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center border border-violet-500/30 animate-pulse">
              <span class="material-symbols-outlined text-violet-400 text-xl">psychology</span>
            </div>
          </div>
          <h3 class="text-lg font-bold text-center mb-2">Analizando 1,247 documentos...</h3>
          <p class="text-slate-400 text-xs text-center mb-6">Búsqueda semántica con embeddings vectoriales</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Query convertido a embedding vectorial (768 dims)</span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-violet-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Comparando contra 48,392 cláusulas indexadas...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm"><strong>3 coincidencias</strong> con relevancia > 80%</span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(()=>{const e=document.getElementById('l1'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 600);
      setTimeout(()=>{const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">Similitud coseno calculada en <strong>1.2 seg</strong></span>`;},1000);
      }}, 1400);
      setTimeout(()=>{const e=document.getElementById('l3'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 3000);
      setTimeout(()=> go('RESULTS'), 4500);
      break;

    case 'RESULTS':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('SEARCH')}
        <div class="flex-1 p-6 bg-slate-50 overflow-y-auto">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-xl font-bold">Resultados</h2>
            <button onclick="go('SEARCH')" class="text-sm text-violet-600 font-medium hover:underline flex items-center gap-1">
              <span class="material-symbols-outlined text-[14px]">arrow_back</span> Nueva búsqueda
            </button>
          </div>
          <p class="text-slate-400 text-xs mb-1">"Terminación anticipada de contrato"</p>
          <div class="flex items-center gap-4 mb-5 text-xs text-slate-400">
            <span>⏱ 1.2 seg</span>
            <span>📄 1,247 documentos analizados</span>
            <span>🎯 3 coincidencias relevantes</span>
          </div>

          <div class="bg-violet-50 border border-violet-200 rounded-xl p-4 mb-5 flex items-start gap-3">
            <span class="material-symbols-outlined text-violet-500 mt-0.5">tips_and_updates</span>
            <div>
              <p class="text-sm font-semibold text-violet-800 mb-1">vs Búsqueda Tradicional (Keyword)</p>
              <p class="text-xs text-violet-600">Una búsqueda por palabras clave ("terminación anticipada") habría devuelto <strong>47 resultados</strong> incluyendo falsos positivos. LexSearch entiende el <em>concepto</em> y devuelve solo las cláusulas relevantes.</p>
            </div>
          </div>

          <div class="space-y-4">
            ${results.map((r, i) => `
               <div onclick="go('DOC_DETAIL')" class="bg-white rounded-xl border border-slate-200 p-5 hover:border-violet-300 hover:shadow-sm transition cursor-pointer group">
                <div class="flex items-start justify-between mb-2">
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="material-symbols-outlined text-slate-400 text-[16px]">description</span>
                      <span class="text-xs text-slate-500 font-medium">${r.doc}</span>
                    </div>
                    <h3 class="font-bold text-slate-800 group-hover:text-violet-600 transition">${r.clausula}</h3>
                  </div>
                  <div class="flex items-center gap-2 shrink-0">
                    <span class="text-[10px] text-slate-400">${r.pagina}</span>
                    <div class="w-10 h-10 rounded-full ${r.relevancia > 95 ? 'bg-green-100 text-green-700' : r.relevancia > 88 ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'} flex items-center justify-center text-xs font-bold">${r.relevancia}%</div>
                  </div>
                </div>
                <blockquote class="text-sm text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-lg border-l-3 border-violet-300 mt-3">${r.texto}</blockquote>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
      break;

    case 'DOC_DETAIL':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('SEARCH')}
        <div class="flex-1 p-6 bg-slate-50 overflow-y-auto">
          <button onclick="go('RESULTS')" class="text-sm text-violet-600 font-medium hover:underline flex items-center gap-1 mb-4">
            <span class="material-symbols-outlined text-[14px]">arrow_back</span> Volver a resultados
          </button>
          <div class="bg-white rounded-xl border border-slate-200 p-6 shadow-sm mb-4">
            <div class="flex items-center gap-2 mb-1 text-xs text-slate-400">
              <span class="material-symbols-outlined text-[14px]">description</span>
              Contrato Arriendo — Local 204, Strip Center Vitacura
            </div>
            <h2 class="text-xl font-bold text-slate-800 mb-1">Cláusula 12.3 — Terminación Anticipada</h2>
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">Relevancia: 98%</span>
              <span class="text-xs text-slate-400">Pág. 8 · Firmado 15/01/2024</span>
            </div>
            <div class="bg-violet-50 border border-violet-200 rounded-lg p-4 text-sm text-slate-700 leading-relaxed">
              <p class="mb-3">"El arrendatario podrá poner término anticipado al contrato con un preaviso mínimo de <mark>90 días corridos</mark>, pagando una multa equivalente a <mark>3 meses de renta</mark>. El arrendador deberá restituir la garantía dentro de los 30 días siguientes a la entrega del inmueble."</p>
              <p>"En caso de terminación por fuerza mayor debidamente acreditada, no se aplicará la multa del inciso anterior, debiendo las partes llegar a un acuerdo de buena fe sobre las condiciones de restitución."</p>
            </div>
          </div>
          <div class="bg-violet-50 border border-violet-200 rounded-xl p-4 flex items-start gap-3">
            <span class="material-symbols-outlined text-violet-500 mt-0.5">psychology</span>
            <div>
              <p class="text-sm font-semibold text-violet-800 mb-1">Resumen de la IA</p>
              <p class="text-xs text-violet-600">Esta cláusula permite terminar antes de plazo con <strong>90 días de aviso + multa de 3 meses</strong>. Existe una excepción por fuerza mayor que elimina la multa. Comparado con el estándar del mercado (60 días + 2 meses), las condiciones son ligeramente más restrictivas.</p>
            </div>
          </div>
        </div>
      </div>`;
      break;
  }
}

go('SEARCH');

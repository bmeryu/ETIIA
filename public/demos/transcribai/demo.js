const scr = document.getElementById('app-screen');
let stage = 1;

const urlMap = {
  UPLOAD: 'app.transcribai.cl/upload',
  PROCESSING: 'app.transcribai.cl/processing',
  RESULTS: 'app.transcribai.cl/transcript/minera-norte-300426'
};
function updateUrl(s) {
  const bar = document.getElementById('app-url');
  if (bar) bar.innerHTML = '<span class="material-symbols-outlined text-[12px] align-middle mr-1">lock</span>' + (urlMap[s] || 'app.transcribai.cl');
}

const speakers = [
  { id: 'S1', nombre: 'Gerente Comercial', color: 'blue' },
  { id: 'S2', nombre: 'Director Financiero', color: 'emerald' },
  { id: 'S3', nombre: 'Abogado Externo', color: 'violet' },
];

const transcript = [
  { speaker: 0, time: '00:42', texto: 'El contrato con Minera Norte debe cerrarse antes del 15 de mayo. Acordamos un precio de <mark>USD 2.4M</mark> por la fase 1.' },
  { speaker: 1, time: '01:15', texto: 'Confirmo. El presupuesto aprobado por directorio es de <mark>USD 2.4M</mark>, incluye implementación y soporte 12 meses.' },
  { speaker: 2, time: '02:08', texto: 'Ojo, la cláusula de penalización por atraso es del <mark>2% mensual</mark>. Necesitamos que el equipo técnico confirme el timeline.' },
  { speaker: 0, time: '03:31', texto: 'El equipo puede empezar el <mark>1 de junio</mark>. Estimo 4 meses de implementación, no 6 como dice el contrato.' },
  { speaker: 1, time: '04:02', texto: 'Si son 4 meses, el costo real baja a <mark>USD 1.9M</mark>. Habría que ajustar la propuesta.' },
  { speaker: 2, time: '04:45', texto: 'Espera — el contrato ya dice USD 2.4M. Si bajan el precio sin adenda, hay un problema legal.' },
];

const alertas = [
  { tipo: 'discrepancia', icon: 'warning', color: 'orange', titulo: 'Discrepancia de Precio', desc: 'Gerente Comercial dice USD 2.4M (min 00:42), Director Financiero sugiere bajar a USD 1.9M (min 04:02). Sin acuerdo formal.' },
  { tipo: 'riesgo', icon: 'gavel', color: 'red', titulo: 'Riesgo Legal Detectado', desc: 'Abogado advierte que cambiar precio sin adenda genera riesgo contractual (min 04:45). Requiere acción.' },
  { tipo: 'compromiso', icon: 'task_alt', color: 'blue', titulo: 'Compromiso sin Responsable', desc: '"Equipo técnico debe confirmar timeline" (min 02:08) — no se asignó responsable ni fecha límite.' },
];

function sidebar(active) {
  const items = [
    { id: 'UPLOAD', icon: 'mic', label: 'Subir Audio' },
    { id: 'TRANSCRIPTS', icon: 'description', label: 'Transcripciones' },
    { id: 'ALERTAS', icon: 'notifications', label: 'Alertas' },
    { id: 'SETTINGS', icon: 'settings', label: 'Config' },
  ];
  return `<div class="w-44 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">TranscribAI</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-cyan-50 text-cyan-600' : 'hover:bg-slate-50 text-slate-600';
      const click = it.id === 'UPLOAD' ? `onclick="go('UPLOAD')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">Audios Procesados</div>
      <div class="text-lg font-bold text-cyan-600">47</div>
      <div class="text-[10px] text-slate-400">este mes</div>
    </div>
  </div>`;
}

function go(state) {
  scr.innerHTML = '';
  updateUrl(state);
  switch(state) {
    case 'UPLOAD':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('UPLOAD')}
        <div class="flex-1 p-6 bg-slate-50 overflow-y-auto flex flex-col items-center justify-center">
          <h2 class="text-2xl font-bold mb-2">Subir Audio de Reunión</h2>
          <p class="text-slate-500 text-sm mb-6 text-center max-w-lg">Sube la grabación. Whisper transcribirá, diarizará por speaker y la IA analizará el contenido buscando discrepancias y compromisos.</p>
          <div onclick="go('PROCESSING')" class="border-2 border-dashed border-cyan-300 bg-cyan-50/50 rounded-2xl p-10 flex flex-col items-center cursor-pointer hover:bg-cyan-50 hover:border-cyan-400 transition group w-full max-w-md ${stage===1?'ring-4 ring-amber-400 ring-offset-4':''}">
            ${stage===1?'<div class="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce mb-4">1. Clic aquí 👇</div>':''}
            <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition">
              <span class="material-symbols-outlined text-cyan-500 text-3xl">mic</span>
            </div>
            <h3 class="font-bold text-cyan-900 text-lg">Arrastra el audio aquí</h3>
            <p class="text-cyan-600/70 text-xs mt-2 text-center">MP3, WAV, M4A, OGG — hasta 4 horas<br/>🔒 Procesamiento 100% privado</p>
          </div>
        </div>
      </div>`;
      break;

    case 'PROCESSING':
      stage = 2;
      scr.innerHTML = `<div class="h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden animate-fade-in p-8 text-white">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div class="scan-line top-0 z-10"></div>
        <div class="z-20 w-full max-w-md">
          <h3 class="text-lg font-bold text-center mb-2">Procesando audio: 1hr 23min</h3>
          <p class="text-slate-400 text-xs text-center mb-6">Whisper Large V3 + Diarización + Análisis NLP</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Transcripción Whisper: <strong>96.8% accuracy</strong></span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-cyan-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Diarización: identificando speakers...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm"><strong>3 participantes</strong> identificados y etiquetados</span>
            </div>
            <div id="l4" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-orange-400 text-sm">warning</span>
              <span class="text-sm"><strong>3 alertas</strong>: 1 discrepancia, 1 riesgo legal, 1 compromiso</span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(()=>{const e=document.getElementById('l1'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 600);
      setTimeout(()=>{const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">Diarización completada en <strong>3 min 42 seg</strong></span>`;},1100);
      }}, 1400);
      setTimeout(()=>{const e=document.getElementById('l3'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 3000);
      setTimeout(()=>{const e=document.getElementById('l4'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 4000);
      setTimeout(()=> go('RESULTS'), 5500);
      break;

    case 'RESULTS':
      const colorCls = { blue: 'bg-blue-100 text-blue-700 border-blue-300', emerald: 'bg-emerald-100 text-emerald-700 border-emerald-300', violet: 'bg-violet-100 text-violet-700 border-violet-300' };
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('TRANSCRIPTS')}
        <div class="flex-1 bg-slate-50 overflow-y-auto flex flex-col">
          <div class="p-4 border-b border-slate-200 bg-white">
            <div class="flex items-center justify-between">
              <div>
                <h2 class="text-lg font-bold">Reunión Proyecto Minera Norte</h2>
                <p class="text-[10px] text-slate-400">30 abril 2026 · 1hr 23min · 3 participantes</p>
              </div>
              <div class="flex gap-2">
                <button onclick="go('UPLOAD')" class="text-xs text-cyan-600 font-medium hover:underline">← Nuevo audio</button>
              </div>
            </div>
            <div class="flex gap-3 mt-3">
              ${speakers.map(s => `<span class="inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold ${colorCls[s.color]} border">${s.nombre}</span>`).join('')}
            </div>
          </div>

          <div class="flex flex-1 overflow-hidden">
            <div class="flex-1 p-4 overflow-y-auto border-r border-slate-200">
              <h3 class="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">Transcripción</h3>
              <div class="space-y-3">
                ${transcript.map(t => {
                  const s = speakers[t.speaker];
                  return `<div class="flex gap-2">
                    <div class="text-[10px] text-slate-300 w-10 shrink-0 pt-1 font-mono">${t.time}</div>
                    <div>
                      <div class="text-[10px] font-bold ${colorCls[s.color].split(' ')[1]} mb-0.5">${s.nombre}</div>
                      <p class="text-sm text-slate-700 leading-relaxed">${t.texto}</p>
                    </div>
                  </div>`;
                }).join('')}
              </div>
            </div>

            <div class="w-64 p-4 overflow-y-auto bg-white shrink-0">
              <h3 class="font-bold text-xs text-slate-400 uppercase tracking-wider mb-3">⚠️ Alertas (3)</h3>
              <div class="space-y-3">
                ${alertas.map(a => `<div class="border border-${a.color}-200 bg-${a.color}-50 rounded-xl p-3">
                  <div class="flex items-center gap-1.5 mb-1">
                    <span class="material-symbols-outlined text-${a.color}-500 text-sm">${a.icon}</span>
                    <span class="font-bold text-xs text-${a.color}-800">${a.titulo}</span>
                  </div>
                  <p class="text-[10px] text-${a.color}-700 leading-relaxed">${a.desc}</p>
                </div>`).join('')}
              </div>
              <h3 class="font-bold text-xs text-slate-400 uppercase tracking-wider mt-4 mb-3">📋 Resumen</h3>
              <div class="bg-slate-50 rounded-xl p-3 border border-slate-200 text-[11px] text-slate-600 leading-relaxed space-y-2">
                <p><strong>Tema:</strong> Cierre contrato Minera Norte — Fase 1</p>
                <p><strong>Precio discutido:</strong> USD 2.4M (propuesta inicial) vs USD 1.9M (ajuste sugerido)</p>
                <p><strong>Timeline:</strong> Inicio 1 junio, 4 meses (vs 6 en contrato)</p>
                <p><strong>Pendiente:</strong> Confirmar timeline con equipo técnico, resolver discrepancia de precio</p>
              </div>
            </div>
          </div>
        </div>
      </div>`;
      break;
  }
}
go('UPLOAD');

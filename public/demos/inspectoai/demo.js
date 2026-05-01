const scr = document.getElementById('app-screen');
let stage = 1;

const urlMap = {
  DASHBOARD: 'app.inspectoai.cl/dashboard',
  ANALYZING: 'app.inspectoai.cl/inspection/processing',
  RESULTS: 'app.inspectoai.cl/inspection/INS-2026-0412',
  DEFECT: 'app.inspectoai.cl/defect/DEF-0847-C3'
};
function updateUrl(s) {
  const bar = document.getElementById('app-url');
  if (bar) bar.innerHTML = '<span class="material-symbols-outlined text-[12px] align-middle mr-1">lock</span>' + (urlMap[s] || 'app.inspectoai.cl');
}

const equipos = [
  { id: 'CT-01', nombre: 'Correa Transportadora #1', zona: 'Zona A - Chancado', imgs: 312, defectos: 3, severidad: 'critico', riesgo: 92, detalle: 'Desgaste lateral severo tramo 47-52m' },
  { id: 'TB-14', nombre: 'Tubería Slurry Sec. B', zona: 'Zona B - Molienda', imgs: 184, defectos: 1, severidad: 'moderado', riesgo: 61, detalle: 'Corrosión superficial en codo 90°' },
  { id: 'CT-03', nombre: 'Correa Transportadora #3', zona: 'Zona A - Chancado', imgs: 208, defectos: 0, severidad: 'ok', riesgo: 12, detalle: 'Sin defectos detectados' },
  { id: 'ES-07', nombre: 'Estructura Soporte Torre 7', zona: 'Zona C - Acopio', imgs: 143, defectos: 2, severidad: 'alerta', riesgo: 45, detalle: 'Perno faltante + pintura deteriorada' },
];

const defectosDetalle = [
  { id: 'DEF-001', tipo: 'Desgaste por abrasión', severidad: 'Crítico', confianza: 97, ubicacion: 'Tramo 47-48m, lado norte', accion: 'Reemplazo parcial de banda — programar en próxima parada', plazo: '< 7 días', bbox: { top: '22%', left: '15%', w: '28%', h: '18%', color: '#ef4444' } },
  { id: 'DEF-002', tipo: 'Grieta longitudinal', severidad: 'Crítico', confianza: 94, ubicacion: 'Tramo 49m, centro', accion: 'Vulcanización de emergencia o reemplazo de sección', plazo: '< 3 días', bbox: { top: '52%', left: '40%', w: '22%', h: '12%', color: '#ef4444' } },
  { id: 'DEF-003', tipo: 'Desalineamiento rodillo', severidad: 'Moderado', confianza: 88, ubicacion: 'Estación de carga #4', accion: 'Ajuste de alineamiento en mantención programada', plazo: '< 30 días', bbox: { top: '70%', left: '60%', w: '18%', h: '14%', color: '#f59e0b' } },
];

function sidebar(active) {
  const items = [
    { id: 'DASHBOARD', icon: 'dashboard', label: 'Dashboard' },
    { id: 'INSPECTIONS', icon: 'image_search', label: 'Inspecciones' },
    { id: 'DEFECTS', icon: 'warning', label: 'Defectos' },
    { id: 'SCHEDULE', icon: 'event', label: 'Programación' },
  ];
  return `<div class="w-44 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">InspectoAI</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-orange-50 text-orange-600' : 'hover:bg-slate-50 text-slate-600';
      const click = it.id === 'DASHBOARD' ? `onclick="go('DASHBOARD')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">Última inspección</div>
      <div class="text-sm font-bold text-slate-700">Hace 2 hrs</div>
      <div class="text-[10px] text-slate-400">847 imágenes</div>
    </div>
  </div>`;
}

function go(state) {
  scr.innerHTML = '';
  updateUrl(state);
  switch(state) {
    case 'DASHBOARD':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('DASHBOARD')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h1 class="text-xl font-bold">Planta Minera Norte — Inspección</h1>
              <p class="text-xs text-slate-400">4 equipos monitoreados · Última inspección: 30 abr 2026, 09:14</p>
            </div>
            <button onclick="go('ANALYZING')" class="relative bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-800 transition shadow-sm flex items-center gap-2 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}">
              ${stage===1?'<div class="absolute top-full mt-3 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-50">1. Analizar imágenes 👆</div>':''}
              <span class="material-symbols-outlined text-[18px]">image_search</span> Analizar Imágenes
            </button>
          </div>
          <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-slate-700">847</div><div class="text-[10px] text-slate-400 font-semibold">Imágenes analizadas</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-red-500">6</div><div class="text-[10px] text-slate-400 font-semibold">Defectos detectados</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-orange-500">2</div><div class="text-[10px] text-slate-400 font-semibold">Críticos</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-green-600">94%</div><div class="text-[10px] text-slate-400 font-semibold">Precisión modelo</div>
            </div>
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">Equipos Monitoreados</h3>
          <div class="space-y-2">
            ${equipos.map(e => `<div class="bg-white border ${e.severidad==='critico'?'border-red-300':e.severidad==='alerta'?'border-amber-300':'border-slate-200'} rounded-xl p-3 flex items-center gap-3 text-sm">
              <div class="w-10 h-10 rounded-lg ${e.severidad==='ok'?'bg-green-100 text-green-600':e.severidad==='moderado'?'bg-blue-100 text-blue-600':e.severidad==='alerta'?'bg-amber-100 text-amber-600':'bg-red-100 text-red-600'} flex items-center justify-center">
                <span class="material-symbols-outlined text-lg">${e.severidad==='ok'?'check_circle':e.severidad==='moderado'?'info':'warning'}</span>
              </div>
              <div class="flex-1">
                <div class="font-bold text-slate-800">${e.id} · ${e.nombre}</div>
                <div class="text-[10px] text-slate-400">${e.zona} · ${e.imgs} imgs · ${e.defectos} defectos</div>
              </div>
              <div class="text-right">
                <div class="text-lg font-bold ${e.riesgo>70?'text-red-500':e.riesgo>40?'text-amber-500':'text-green-600'}">${e.riesgo}%</div>
                <div class="text-[10px] text-slate-400">riesgo</div>
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>`;
      break;

    case 'ANALYZING':
      stage = 2;
      scr.innerHTML = `<div class="h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden animate-fade-in p-8 text-white">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div class="scan-line top-0 z-10"></div>
        <div class="z-20 w-full max-w-md">
          <h3 class="text-lg font-bold text-center mb-2">Analizando 847 imágenes de drone...</h3>
          <p class="text-slate-400 text-xs text-center mb-6">YOLOv8 + Segmentación semántica + Clasificación de severidad</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Pre-procesamiento: <strong>847 imágenes</strong> normalizadas (4K → 1024px)</span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-orange-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Detección de defectos en progreso...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-red-400 text-sm">warning</span>
              <span class="text-sm"><strong>6 defectos</strong> detectados — 2 críticos en CT-01</span>
            </div>
            <div id="l4" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Plan de mantenimiento generado · Precisión: <strong>94%</strong></span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(()=>{const e=document.getElementById('l1'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 600);
      setTimeout(()=>{const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">Detección completada en <strong>6 min 18 seg</strong> (GPU T4)</span>`;},1200);}}, 1400);
      setTimeout(()=>{const e=document.getElementById('l3'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 3200);
      setTimeout(()=>{const e=document.getElementById('l4'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 4400);
      setTimeout(()=> go('RESULTS'), 6000);
      break;

    case 'RESULTS':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('INSPECTIONS')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Inspección INS-2026-0412</h2>
              <p class="text-xs text-slate-400">30 abril 2026 · 847 imgs · 4 equipos · Drone DJI Matrice 350</p>
            </div>
            <button onclick="go('DASHBOARD')" class="text-sm text-orange-600 font-medium hover:underline">← Panel</button>
          </div>
          <div class="grid grid-cols-3 gap-3 mb-4">
            <div class="bg-red-50 border border-red-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-red-600">2</div><div class="text-[10px] text-red-500 font-semibold uppercase">Críticos</div>
            </div>
            <div class="bg-amber-50 border border-amber-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-amber-600">3</div><div class="text-[10px] text-amber-500 font-semibold uppercase">Moderados</div>
            </div>
            <div class="bg-green-50 border border-green-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-green-600">1</div><div class="text-[10px] text-green-500 font-semibold uppercase">Equipo OK</div>
            </div>
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">Equipo Crítico: CT-01 — Correa Transportadora #1</h3>
          <div class="bg-white rounded-xl border border-red-200 p-4 mb-3">
            <div class="relative bg-slate-200 rounded-lg h-32 mb-3 overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                <span class="text-slate-500 text-xs font-mono">IMG_0847_CT01_TRAMO47.jpg</span>
              </div>
              ${defectosDetalle.map(d => `<div class="bbox" style="top:${d.bbox.top};left:${d.bbox.left};width:${d.bbox.w};height:${d.bbox.h};border-color:${d.bbox.color}">
                <span class="absolute -top-5 left-0 text-[8px] font-bold px-1 rounded" style="background:${d.bbox.color};color:white">${d.tipo} · ${d.confianza}%</span>
              </div>`).join('')}
            </div>
            <div class="space-y-2">
              ${defectosDetalle.map(d => `<div onclick="go('DEFECT')" class="flex items-center gap-2 p-2 rounded-lg ${d.severidad==='Crítico'?'bg-red-50 border border-red-200':'bg-amber-50 border border-amber-200'} cursor-pointer hover:shadow-sm transition text-sm">
                <span class="material-symbols-outlined ${d.severidad==='Crítico'?'text-red-500':'text-amber-500'} text-sm">warning</span>
                <div class="flex-1">
                  <span class="font-bold">${d.tipo}</span>
                  <span class="text-slate-400 text-[10px] ml-2">${d.ubicacion}</span>
                </div>
                <span class="text-[10px] font-bold ${d.severidad==='Crítico'?'text-red-600':'text-amber-600'}">${d.plazo}</span>
              </div>`).join('')}
            </div>
          </div>
        </div>
      </div>`;
      break;

    case 'DEFECT':
      const d = defectosDetalle[0];
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('DEFECTS')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <button onclick="go('RESULTS')" class="text-sm text-orange-600 font-medium hover:underline flex items-center gap-1 mb-4">
            <span class="material-symbols-outlined text-[14px]">arrow_back</span> Volver a inspección
          </button>
          <div class="bg-white rounded-xl border border-red-200 p-5 shadow-sm mb-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"><span class="material-symbols-outlined text-red-600 text-2xl">warning</span></div>
              <div>
                <h2 class="text-lg font-bold text-slate-800">${d.id} — ${d.tipo}</h2>
                <p class="text-sm text-slate-400">CT-01 · ${d.ubicacion} · Confianza: ${d.confianza}%</p>
              </div>
              <span class="ml-auto px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">${d.severidad}</span>
            </div>
            <div class="grid grid-cols-2 gap-4 mb-4">
              <div class="relative bg-slate-200 rounded-lg h-36 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                  <span class="text-slate-500 text-[10px] font-mono">Vista original</span>
                </div>
              </div>
              <div class="relative bg-slate-200 rounded-lg h-36 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-br from-slate-300 to-slate-400 flex items-center justify-center">
                  <span class="text-slate-500 text-[10px] font-mono">Detección IA</span>
                </div>
                <div class="bbox" style="top:20%;left:10%;width:80%;height:60%;border-color:#ef4444">
                  <span class="absolute -top-5 left-0 text-[8px] font-bold px-1 rounded bg-red-500 text-white">Desgaste severo · 97%</span>
                </div>
              </div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-4 mb-4">
            <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <h3 class="font-bold text-sm text-slate-700 mb-3">Datos del Defecto</h3>
              <div class="space-y-2 text-sm">
                <div class="flex justify-between"><span class="text-slate-400">Tipo</span><span class="font-bold">${d.tipo}</span></div>
                <div class="flex justify-between"><span class="text-slate-400">Severidad</span><span class="font-bold text-red-600">${d.severidad}</span></div>
                <div class="flex justify-between"><span class="text-slate-400">Confianza IA</span><span class="font-bold">${d.confianza}%</span></div>
                <div class="flex justify-between"><span class="text-slate-400">Ubicación</span><span class="font-bold text-xs">${d.ubicacion}</span></div>
                <div class="flex justify-between"><span class="text-slate-400">Plazo acción</span><span class="font-bold text-red-600">${d.plazo}</span></div>
              </div>
            </div>
            <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
              <h3 class="font-bold text-sm text-slate-700 mb-3">Historial del Equipo</h3>
              <div class="space-y-2 text-[11px]">
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-green-400 rounded-full"></span><span class="text-slate-400">Ene 2026</span><span class="font-medium">Sin defectos</span></div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-amber-400 rounded-full"></span><span class="text-slate-400">Feb 2026</span><span class="font-medium">Desgaste leve detectado</span></div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-amber-400 rounded-full"></span><span class="text-slate-400">Mar 2026</span><span class="font-medium">Desgaste moderado</span></div>
                <div class="flex items-center gap-2"><span class="w-2 h-2 bg-red-500 rounded-full"></span><span class="text-slate-400">Abr 2026</span><span class="font-bold text-red-600">Desgaste severo ⚠️</span></div>
              </div>
            </div>
          </div>
          <div class="bg-orange-50 border border-orange-200 rounded-xl p-4 flex items-start gap-3">
            <span class="material-symbols-outlined text-orange-500 mt-0.5">psychology</span>
            <div>
              <p class="text-sm font-semibold text-orange-800 mb-1">Análisis predictivo</p>
              <p class="text-xs text-orange-700">El desgaste progresó de <strong>leve a severo en 3 meses</strong>. A esta tasa, la banda fallará en las próximas <strong>2-4 semanas</strong>. Costo estimado de parada no planificada: <strong>USD $180K</strong>. Costo de reemplazo programado: <strong>USD $22K</strong>. Recomendación: intervenir en la próxima parada programada (5 mayo).</p>
            </div>
          </div>
        </div>
      </div>`;
      break;
  }
}
go('DASHBOARD');

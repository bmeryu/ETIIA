const scr = document.getElementById('app-screen');
let stage = 1;

const parcelas = [
  { id: 'P-01', variedad: 'Cabernet Sauvignon', ha: 12.4, estado: 'optimo', riego: 92, ndvi: 0.81, temp: 26, humedad: 45, prediccion: '8.2 ton/ha', vs_hist: '+18%', alerta: null },
  { id: 'P-02', variedad: 'Merlot', ha: 8.7, estado: 'alerta', riego: 68, ndvi: 0.62, temp: 29, humedad: 32, prediccion: '5.9 ton/ha', vs_hist: '-8%', alerta: 'Estrés hídrico detectado — riego insuficiente últimas 72hrs' },
  { id: 'P-03', variedad: 'Chardonnay', ha: 15.2, estado: 'optimo', riego: 88, ndvi: 0.78, temp: 24, humedad: 51, prediccion: '9.1 ton/ha', vs_hist: '+24%', alerta: null },
  { id: 'P-04', variedad: 'Syrah', ha: 6.3, estado: 'critico', riego: 41, ndvi: 0.44, temp: 31, humedad: 22, prediccion: '3.2 ton/ha', vs_hist: '-35%', alerta: 'Riesgo de merma severa — temperatura extrema + déficit hídrico' },
];

function sidebar(active) {
  const items = [
    { id: 'DASHBOARD', icon: 'dashboard', label: 'Panel' },
    { id: 'PARCELAS', icon: 'grid_view', label: 'Parcelas' },
    { id: 'PREDICCION', icon: 'trending_up', label: 'Predicción' },
    { id: 'ALERTAS', icon: 'notifications', label: 'Alertas' },
  ];
  return `<div class="w-44 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">CosechAI</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-green-50 text-green-600' : 'hover:bg-slate-50 text-slate-600';
      const click = it.id === 'DASHBOARD' ? `onclick="go('DASHBOARD')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">Temporada 2026</div>
      <div class="text-lg font-bold text-green-600">42.6 ha</div>
      <div class="text-[10px] text-slate-400">monitoreadas</div>
    </div>
  </div>`;
}

function go(state) {
  scr.innerHTML = '';
  switch(state) {
    case 'DASHBOARD':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('DASHBOARD')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h1 class="text-xl font-bold">Viña Valle Central — Panel General</h1>
              <p class="text-xs text-slate-400">Temporada 2026 · Última actualización: hace 14 min</p>
            </div>
            <button onclick="go('ANALYZING')" class="relative bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-700 transition shadow-sm flex items-center gap-2 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}">
              ${stage===1?'<div class="absolute top-full mt-3 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-50">1. Ejecutar análisis 👆</div>':''}
              <span class="material-symbols-outlined text-[18px]">satellite_alt</span> Analizar Parcelas
            </button>
          </div>
          <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-green-600">42.6</div><div class="text-[10px] text-slate-400 font-semibold">Hectáreas</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-slate-800">4</div><div class="text-[10px] text-slate-400 font-semibold">Parcelas</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-amber-500">2</div><div class="text-[10px] text-slate-400 font-semibold">Alertas</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-blue-600">6</div><div class="text-[10px] text-slate-400 font-semibold">Sensores IoT</div>
            </div>
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">Parcelas</h3>
          <div class="space-y-2">
            ${parcelas.map(p => `<div class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 text-sm">
              <div class="w-10 h-10 rounded-lg ${p.estado==='optimo'?'bg-green-100 text-green-600':p.estado==='alerta'?'bg-amber-100 text-amber-600':'bg-red-100 text-red-600'} flex items-center justify-center"><span class="material-symbols-outlined text-lg">${p.estado==='optimo'?'check_circle':p.estado==='alerta'?'warning':'error'}</span></div>
              <div class="flex-1"><div class="font-bold text-slate-800">${p.id} · ${p.variedad}</div><div class="text-[10px] text-slate-400">${p.ha} ha · NDVI: ${p.ndvi}</div></div>
              <div class="text-right"><div class="font-bold ${p.vs_hist.startsWith('+')?'text-green-600':'text-red-500'}">${p.vs_hist}</div><div class="text-[10px] text-slate-400">vs histórico</div></div>
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
          <h3 class="text-lg font-bold text-center mb-2">Analizando 42.6 hectáreas...</h3>
          <p class="text-slate-400 text-xs text-center mb-6">Datos satelitales + sensores IoT + modelo predictivo</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Imágenes satelitales NDVI procesadas (4 parcelas)</span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Cruzando con datos IoT: temperatura, humedad, riego...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-orange-400 text-sm">warning</span>
              <span class="text-sm"><strong>2 alertas</strong>: estrés hídrico en P-02 y P-04</span>
            </div>
            <div id="l4" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Predicción de rendimiento: <strong>+28% vs temporada anterior</strong></span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(()=>{const e=document.getElementById('l1'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 600);
      setTimeout(()=>{const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">6 sensores IoT: <strong>datos de 72hrs</strong> integrados</span>`;},1100);
      }}, 1400);
      setTimeout(()=>{const e=document.getElementById('l3'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 3000);
      setTimeout(()=>{const e=document.getElementById('l4'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 4000);
      setTimeout(()=> go('RESULTS'), 5500);
      break;

    case 'RESULTS':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('PREDICCION')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Predicción de Rendimiento</h2>
              <p class="text-xs text-slate-400">Temporada 2026 · Modelo sobre 5 temporadas previas</p>
            </div>
            <button onclick="go('DASHBOARD')" class="text-sm text-green-600 font-medium hover:underline">← Panel</button>
          </div>
          <div class="grid grid-cols-3 gap-3 mb-4">
            <div class="bg-green-50 border border-green-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-green-600">+28%</div><div class="text-[10px] text-green-500 font-semibold uppercase">Eficiencia vs 2025</div>
            </div>
            <div class="bg-orange-50 border border-orange-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-orange-600">2</div><div class="text-[10px] text-orange-500 font-semibold uppercase">Alertas Activas</div>
            </div>
            <div class="bg-blue-50 border border-blue-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-blue-600">26.4</div><div class="text-[10px] text-blue-500 font-semibold uppercase">Ton estimadas</div>
            </div>
          </div>
          <div class="space-y-3">
            ${parcelas.map(p => `<div class="bg-white rounded-xl border ${p.alerta?'border-orange-300':'border-slate-200'} p-4">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-lg ${p.estado==='optimo'?'bg-green-100 text-green-600':p.estado==='alerta'?'bg-amber-100 text-amber-600':'bg-red-100 text-red-600'} flex items-center justify-center text-sm"><span class="material-symbols-outlined text-base">${p.estado==='optimo'?'check_circle':'warning'}</span></div>
                  <div><div class="font-bold text-sm">${p.id} · ${p.variedad}</div><div class="text-[10px] text-slate-400">${p.ha} ha</div></div>
                </div>
                <div class="text-right"><div class="text-lg font-bold ${p.vs_hist.startsWith('+')?'text-green-600':'text-red-500'}">${p.vs_hist}</div><div class="text-[10px] text-slate-400">${p.prediccion}</div></div>
              </div>
              <div class="grid grid-cols-4 gap-2 text-[10px] mb-2">
                <div class="bg-slate-50 rounded p-1.5 text-center"><div class="text-slate-400">NDVI</div><div class="font-bold text-slate-700">${p.ndvi}</div></div>
                <div class="bg-slate-50 rounded p-1.5 text-center"><div class="text-slate-400">Temp</div><div class="font-bold text-slate-700">${p.temp}°C</div></div>
                <div class="bg-slate-50 rounded p-1.5 text-center"><div class="text-slate-400">Humedad</div><div class="font-bold text-slate-700">${p.humedad}%</div></div>
                <div class="bg-slate-50 rounded p-1.5 text-center"><div class="text-slate-400">Riego</div><div class="font-bold ${p.riego<50?'text-red-600':p.riego<70?'text-amber-600':'text-green-600'}">${p.riego}%</div></div>
              </div>
              ${p.alerta?`<div class="bg-orange-50 border border-orange-200 rounded-lg p-2 text-xs text-orange-700 flex items-center gap-2"><span class="material-symbols-outlined text-sm">warning</span>${p.alerta}</div>`:''}
            </div>`).join('')}
          </div>
        </div>
      </div>`;
      break;
  }
}
go('DASHBOARD');

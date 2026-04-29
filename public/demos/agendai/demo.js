const scr = document.getElementById('app-screen');
let stage = 1;

const pacientes = [
  { nombre: 'Carmen Soto V.', hora: '09:00', doctor: 'Dra. Muñoz', esp: 'Cardiología', riesgo: 87, motivo: '3 inasistencias previas, lluvia pronosticada', estado: 'riesgo', icon: '❤️' },
  { nombre: 'Roberto Díaz M.', hora: '09:30', doctor: 'Dr. Fernández', esp: 'Traumatología', riesgo: 72, motivo: 'Historial de cancelaciones lunes AM', estado: 'riesgo', icon: '🦴' },
  { nombre: 'Lucía Paredes R.', hora: '10:00', doctor: 'Dra. Muñoz', esp: 'Cardiología', riesgo: 15, motivo: 'Paciente recurrente, nunca falta', estado: 'ok', icon: '❤️' },
  { nombre: 'Martín Rojas C.', hora: '10:30', doctor: 'Dr. Fernández', esp: 'Traumatología', riesgo: 91, motivo: 'Primera consulta, sin confirmar, zona lejana', estado: 'critico', icon: '🦴' },
  { nombre: 'Ana Torres L.', hora: '11:00', doctor: 'Dra. Muñoz', esp: 'Cardiología', riesgo: 8, motivo: 'Confirmó por WhatsApp hace 2 hrs', estado: 'ok', icon: '❤️' },
];

const espera = [
  { nombre: 'Diego Vargas P.', telefono: '+56 9 8765 4321', espera: '12 días', esp: 'Cardiología' },
  { nombre: 'Sofía Mendoza K.', telefono: '+56 9 1234 5678', espera: '8 días', esp: 'Traumatología' },
];

function sidebar(active) {
  const items = [
    { id: 'AGENDA', icon: 'calendar_today', label: 'Agenda Hoy' },
    { id: 'PREDICCION', icon: 'psychology', label: 'Predicción' },
    { id: 'ESPERA', icon: 'hourglass_top', label: 'Lista Espera' },
    { id: 'HISTORIAL', icon: 'bar_chart', label: 'Métricas' },
  ];
  return `<div class="w-44 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">AgendAI</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-rose-50 text-rose-600' : 'hover:bg-slate-50 text-slate-600';
      const click = it.id === 'AGENDA' ? `onclick="go('AGENDA')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">No-shows (mes)</div>
      <div class="flex items-baseline gap-1"><span class="text-lg font-bold text-green-600">12%</span><span class="text-[10px] text-green-500">↓ era 31%</span></div>
    </div>
  </div>`;
}

function go(state) {
  scr.innerHTML = '';
  switch(state) {
    case 'AGENDA':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('AGENDA')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex justify-between items-center mb-4">
            <div>
              <h1 class="text-xl font-bold">Agenda — Lunes 29 Abril</h1>
              <p class="text-xs text-slate-400">Centro Médico San Joaquín · 18 citas programadas</p>
            </div>
            <button onclick="go('ANALYZING')" class="relative bg-rose-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-rose-600 transition shadow-sm flex items-center gap-2 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}">
              ${stage===1?'<div class="absolute top-full mt-3 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-50">1. Ejecutar predicción 👆</div>':''}
              <span class="material-symbols-outlined text-[18px]">psychology</span> Predecir Inasistencias
            </button>
          </div>
          <div class="space-y-2">
            ${pacientes.map(p => `<div class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 text-sm">
              <div class="text-center w-14 shrink-0"><div class="text-lg font-bold text-slate-800">${p.hora}</div><div class="text-[10px] text-slate-400">${p.esp}</div></div>
              <div class="flex-1"><div class="font-semibold text-slate-800">${p.nombre}</div><div class="text-xs text-slate-400">${p.doctor}</div></div>
              <span class="px-2 py-1 bg-slate-100 text-slate-400 rounded text-[10px] font-bold uppercase">Sin analizar</span>
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
          <h3 class="text-lg font-bold text-center mb-2">Analizando agenda del día...</h3>
          <p class="text-slate-400 text-xs text-center mb-6">Modelo predictivo sobre 14 meses de historial</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Historial cargado: <strong>4,280 citas</strong> de 14 meses</span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-rose-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Cruzando con clima, día, hora, historial por paciente...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-orange-400 text-sm">warning</span>
              <span class="text-sm"><strong>3 pacientes</strong> con riesgo alto de inasistencia (>70%)</span>
            </div>
            <div id="l4" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-blue-400 text-sm">contact_phone</span>
              <span class="text-sm"><strong>2 pacientes</strong> en lista de espera pueden tomar esas horas</span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(()=>{const e=document.getElementById('l1'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 600);
      setTimeout(()=>{const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">Modelo ejecutado: <strong>18 citas</strong> evaluadas con 6 variables</span>`;},1100);
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
              <h2 class="text-xl font-bold">Predicción de Inasistencias</h2>
              <p class="text-xs text-slate-400">Lunes 29 Abril · 18 citas · 3 alertas</p>
            </div>
            <button onclick="go('AGENDA')" class="text-sm text-rose-600 font-medium hover:underline">← Agenda</button>
          </div>
          <div class="grid grid-cols-3 gap-3 mb-4">
            <div class="bg-red-50 border border-red-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-red-600">3</div><div class="text-[10px] text-red-500 font-semibold uppercase">Riesgo Alto</div>
            </div>
            <div class="bg-green-50 border border-green-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-green-600">15</div><div class="text-[10px] text-green-500 font-semibold uppercase">Confirmadas</div>
            </div>
            <div class="bg-blue-50 border border-blue-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-blue-600">2</div><div class="text-[10px] text-blue-500 font-semibold uppercase">En lista espera</div>
            </div>
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">⚠️ Pacientes con riesgo de no-show</h3>
          <div class="space-y-2 mb-4">
            ${pacientes.filter(p=>p.estado!=='ok').map(p => `<div class="bg-white rounded-xl border ${p.riesgo>85?'border-red-300 bg-red-50/30':'border-orange-200'} p-3">
              <div class="flex items-center justify-between mb-1">
                <div class="flex items-center gap-2">
                  <span class="text-lg">${p.icon}</span>
                  <div><div class="font-bold text-sm text-slate-800">${p.nombre}</div><div class="text-[10px] text-slate-400">${p.hora} · ${p.doctor} · ${p.esp}</div></div>
                </div>
                <div class="w-12 h-12 rounded-full ${p.riesgo>85?'bg-red-100 text-red-700':'bg-orange-100 text-orange-700'} flex items-center justify-center text-sm font-bold">${p.riesgo}%</div>
              </div>
              <div class="text-xs text-slate-500 mb-2">📊 ${p.motivo}</div>
              <div class="flex gap-2">
                <button class="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-[11px] font-medium flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">call</span> Llamar</button>
                <button class="px-3 py-1.5 bg-green-600 text-white rounded-lg text-[11px] font-medium flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">chat</span> WhatsApp</button>
                <button class="px-3 py-1.5 border border-slate-300 text-slate-600 rounded-lg text-[11px] font-medium flex items-center gap-1"><span class="material-symbols-outlined text-[14px]">swap_horiz</span> Reasignar</button>
              </div>
            </div>`).join('')}
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">📋 Lista de espera disponible</h3>
          <div class="space-y-2">
            ${espera.map(e => `<div class="bg-white rounded-xl border border-blue-200 p-3 flex items-center justify-between">
              <div><div class="font-bold text-sm text-slate-800">${e.nombre}</div><div class="text-[10px] text-slate-400">${e.esp} · Esperando ${e.espera}</div></div>
              <button class="px-3 py-1.5 bg-rose-500 text-white rounded-lg text-[11px] font-medium">Contactar</button>
            </div>`).join('')}
          </div>
        </div>
      </div>`;
      break;
  }
}
go('AGENDA');

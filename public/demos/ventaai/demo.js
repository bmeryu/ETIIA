const scr = document.getElementById('app-screen');
let stage = 1;

const urlMap = {
  DASHBOARD: 'app.ventaai.cl/dashboard',
  ANALYZING: 'app.ventaai.cl/engine/processing',
  RESULTS: 'app.ventaai.cl/recommendations/abril-2026',
  CAMPAIGN: 'app.ventaai.cl/campaigns/cross-sell-auto'
};
function updateUrl(s) {
  const bar = document.getElementById('app-url');
  if (bar) bar.innerHTML = '<span class="material-symbols-outlined text-[12px] align-middle mr-1">lock</span>' + (urlMap[s] || 'app.ventaai.cl');
}

const clientes = [
  { id: 'C-2841', nombre: 'Carla Muñoz', segmento: 'VIP', ticket: '$142.000', visitas: 28, recs: 5, conversion: '3/5', prob: 89, productos: ['Blazer lino premium', 'Cartera cuero italiano', 'Zapatos Oxford'] },
  { id: 'C-1573', nombre: 'Diego Araya', segmento: 'Frecuente', ticket: '$68.000', visitas: 14, recs: 4, conversion: '2/4', prob: 74, productos: ['Polera algodón orgánico', 'Jeans slim fit', 'Cinturón cuero'] },
  { id: 'C-4102', nombre: 'Sofía Riquelme', segmento: 'Nuevo', ticket: '$45.000', visitas: 3, recs: 3, conversion: '1/3', prob: 61, productos: ['Pack calcetines x5', 'Poleron oversize'] },
  { id: 'C-0891', nombre: 'Tomás Henríquez', segmento: 'En riesgo', ticket: '$89.000', visitas: 2, recs: 6, conversion: '0/6', prob: 38, productos: ['Descuento 20% reactivación', 'Envío gratis'] },
];

function sidebar(active) {
  const items = [
    { id: 'DASHBOARD', icon: 'dashboard', label: 'Dashboard' },
    { id: 'RECS', icon: 'auto_awesome', label: 'Recomendaciones' },
    { id: 'SEGMENTS', icon: 'group', label: 'Segmentos' },
    { id: 'CAMPAIGNS', icon: 'campaign', label: 'Campañas' },
  ];
  return `<div class="w-44 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">VentaAI</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-indigo-50 text-indigo-600' : 'hover:bg-slate-50 text-slate-600';
      const click = it.id === 'DASHBOARD' ? `onclick="go('DASHBOARD')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">Catálogo</div>
      <div class="text-lg font-bold text-indigo-600">8,412</div>
      <div class="text-[10px] text-slate-400">SKUs activos</div>
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
              <h1 class="text-xl font-bold">Motor de Recomendaciones — Panel</h1>
              <p class="text-xs text-slate-400">Tienda Moda Central · 12,340 clientes · Abril 2026</p>
            </div>
            <button onclick="go('ANALYZING')" class="relative bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition shadow-sm flex items-center gap-2 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}">
              ${stage===1?'<div class="absolute top-full mt-3 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-50">1. Generar recomendaciones 👆</div>':''}
              <span class="material-symbols-outlined text-[18px]">auto_awesome</span> Generar Recomendaciones
            </button>
          </div>
          <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-indigo-600">12.4K</div><div class="text-[10px] text-slate-400 font-semibold">Recs generadas hoy</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-green-600">+34%</div><div class="text-[10px] text-slate-400 font-semibold">Cross-sell</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-violet-600">+18%</div><div class="text-[10px] text-slate-400 font-semibold">Ticket prom.</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-amber-500">$4.2M</div><div class="text-[10px] text-slate-400 font-semibold">Revenue atribuido</div>
            </div>
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">Segmentos de Clientes</h3>
          <div class="grid grid-cols-4 gap-2 mb-4">
            ${[
              { label: 'VIP', count: 842, color: 'indigo', pct: '+42%' },
              { label: 'Frecuente', count: 3210, color: 'blue', pct: '+28%' },
              { label: 'Nuevo', count: 5840, color: 'green', pct: '+15%' },
              { label: 'En riesgo', count: 2448, color: 'red', pct: '-12%' },
            ].map(s => `<div class="bg-white border border-slate-200 rounded-xl p-3 text-center">
              <div class="text-xs font-bold text-${s.color}-600 uppercase mb-1">${s.label}</div>
              <div class="text-lg font-bold text-slate-800">${s.count.toLocaleString()}</div>
              <div class="text-[10px] ${s.pct.startsWith('+')?'text-green-500':'text-red-500'} font-semibold">${s.pct} conversión</div>
            </div>`).join('')}
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">Productos más recomendados hoy</h3>
          <div class="space-y-1.5">
            ${[
              { name: 'Blazer lino premium', cat: 'Outerwear', recs: 1240, conv: '28%' },
              { name: 'Jeans slim fit', cat: 'Bottoms', recs: 980, conv: '34%' },
              { name: 'Cartera cuero italiano', cat: 'Accesorios', recs: 870, conv: '22%' },
            ].map(p => `<div class="bg-white border border-slate-200 rounded-lg p-2 flex items-center gap-3 text-sm">
              <div class="w-8 h-8 bg-indigo-50 rounded flex items-center justify-center"><span class="material-symbols-outlined text-indigo-400 text-sm">checkroom</span></div>
              <div class="flex-1"><span class="font-bold text-slate-800">${p.name}</span> <span class="text-slate-400 text-[10px]">${p.cat}</span></div>
              <div class="text-right text-[10px]"><div class="font-bold text-slate-700">${p.recs} recs</div><div class="text-green-500">${p.conv} conv</div></div>
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
          <h3 class="text-lg font-bold text-center mb-2">Generando recomendaciones personalizadas...</h3>
          <p class="text-slate-400 text-xs text-center mb-6">12,340 clientes × 8,412 SKUs × historial 6 meses</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Historial de compras cargado: <strong>48,200 transacciones</strong></span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-indigo-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Calculando matrices de similitud...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm"><strong>4 segmentos</strong> identificados por comportamiento</span>
            </div>
            <div id="l4" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm"><strong>12,400 recomendaciones</strong> generadas · Revenue pred: <strong>$4.2M</strong></span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(()=>{const e=document.getElementById('l1'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 600);
      setTimeout(()=>{const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">Collaborative filtering: <strong>matriz 12K×8K</strong> procesada</span>`;},1200);}}, 1400);
      setTimeout(()=>{const e=document.getElementById('l3'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 3000);
      setTimeout(()=>{const e=document.getElementById('l4'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 4200);
      setTimeout(()=> go('RESULTS'), 5800);
      break;

    case 'RESULTS':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('RECS')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Recomendaciones por Cliente</h2>
              <p class="text-xs text-slate-400">Generadas hace 2 min · Modelo v3.2 · 12,400 recs activas</p>
            </div>
            <button onclick="go('DASHBOARD')" class="text-sm text-indigo-600 font-medium hover:underline">← Panel</button>
          </div>
          <div class="grid grid-cols-3 gap-3 mb-4">
            <div class="bg-indigo-50 border border-indigo-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-indigo-600">+34%</div><div class="text-[10px] text-indigo-500 font-semibold uppercase">Cross-sell vs baseline</div>
            </div>
            <div class="bg-violet-50 border border-violet-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-violet-600">$4.2M</div><div class="text-[10px] text-violet-500 font-semibold uppercase">Revenue predicho</div>
            </div>
            <div class="bg-green-50 border border-green-200 p-3 rounded-xl text-center">
              <div class="text-2xl font-bold text-green-600">2,448</div><div class="text-[10px] text-green-500 font-semibold uppercase">Clientes en riesgo con rec</div>
            </div>
          </div>
          <div class="space-y-2">
            ${clientes.map(c => `<div onclick="go('CAMPAIGN')" class="bg-white rounded-xl border ${c.segmento==='En riesgo'?'border-red-200':'border-slate-200'} p-3 cursor-pointer hover:shadow-md transition">
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center gap-2">
                  <div class="w-8 h-8 rounded-full ${c.segmento==='VIP'?'bg-indigo-100 text-indigo-600':c.segmento==='Frecuente'?'bg-blue-100 text-blue-600':c.segmento==='Nuevo'?'bg-green-100 text-green-600':'bg-red-100 text-red-600'} flex items-center justify-center text-xs font-bold">${c.nombre.split(' ').map(n=>n[0]).join('')}</div>
                  <div><div class="font-bold text-sm">${c.nombre}</div><div class="text-[10px] text-slate-400">${c.id} · ${c.segmento} · Ticket prom: ${c.ticket}</div></div>
                </div>
                <div class="text-right">
                  <div class="text-lg font-bold ${c.prob>70?'text-green-600':c.prob>50?'text-amber-500':'text-red-500'}">${c.prob}%</div>
                  <div class="text-[10px] text-slate-400">prob. compra</div>
                </div>
              </div>
              <div class="flex gap-1.5 flex-wrap">
                ${c.productos.map(p => `<span class="bg-slate-100 text-slate-600 text-[10px] font-medium px-2 py-0.5 rounded-md">${p}</span>`).join('')}
              </div>
            </div>`).join('')}
          </div>
        </div>
      </div>`;
      break;

    case 'CAMPAIGN':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('CAMPAIGNS')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <button onclick="go('RESULTS')" class="text-sm text-indigo-600 font-medium hover:underline flex items-center gap-1 mb-4">
            <span class="material-symbols-outlined text-[14px]">arrow_back</span> Volver a recomendaciones
          </button>
          <div class="bg-white rounded-xl border border-indigo-200 p-5 shadow-sm mb-4">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center"><span class="material-symbols-outlined text-indigo-600">campaign</span></div>
              <div>
                <h2 class="text-lg font-bold">Campaña: Cross-sell VIP · Carla Muñoz</h2>
                <p class="text-xs text-slate-400">Generada automáticamente por VentaAI · Lista para enviar</p>
              </div>
            </div>
            <div class="grid grid-cols-4 gap-3 mb-4">
              <div class="bg-slate-50 p-2 rounded-lg text-center"><div class="text-xs text-slate-400">Canal</div><div class="font-bold text-sm text-slate-700">Email + Push</div></div>
              <div class="bg-slate-50 p-2 rounded-lg text-center"><div class="text-xs text-slate-400">Prob. compra</div><div class="font-bold text-sm text-green-600">89%</div></div>
              <div class="bg-slate-50 p-2 rounded-lg text-center"><div class="text-xs text-slate-400">Revenue pred.</div><div class="font-bold text-sm text-indigo-600">$142.000</div></div>
              <div class="bg-slate-50 p-2 rounded-lg text-center"><div class="text-xs text-slate-400">Timing</div><div class="font-bold text-sm text-slate-700">Hoy 19:00</div></div>
            </div>
          </div>
          <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm mb-4">
            <h3 class="font-bold text-sm text-slate-700 mb-3 flex items-center gap-1"><span class="material-symbols-outlined text-indigo-500 text-base">mail</span> Preview del email generado</h3>
            <div class="bg-slate-50 rounded-lg p-4 border border-slate-200">
              <p class="text-xs text-slate-400 mb-2">Para: carla.munoz@email.com</p>
              <p class="text-sm font-bold text-slate-800 mb-2">Carla, estos productos van perfecto con tu último look 💜</p>
              <div class="space-y-2">
                ${['Blazer lino premium — $89.990', 'Cartera cuero italiano — $64.990', 'Zapatos Oxford — $54.990'].map((p,i) => `<div class="flex items-center gap-3 bg-white p-2 rounded-lg border border-slate-200">
                  <div class="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center"><span class="material-symbols-outlined text-indigo-400 text-sm">checkroom</span></div>
                  <div class="flex-1 text-sm font-medium text-slate-700">${p}</div>
                  <span class="text-[10px] text-green-500 font-bold">${[89,76,72][i]}% match</span>
                </div>`).join('')}
              </div>
              <div class="mt-3 text-center">
                <div class="inline-block bg-indigo-600 text-white text-sm font-bold px-6 py-2 rounded-lg">Ver mis recomendaciones →</div>
              </div>
            </div>
          </div>
          <div class="bg-indigo-50 border border-indigo-200 rounded-xl p-4 flex items-start gap-3">
            <span class="material-symbols-outlined text-indigo-500 mt-0.5">psychology</span>
            <div>
              <p class="text-sm font-semibold text-indigo-800 mb-1">¿Por qué estas recomendaciones?</p>
              <p class="text-xs text-indigo-700">Carla compró un <strong>vestido de lino</strong> y <strong>sandalias cuero</strong> hace 2 semanas. El modelo identifica un patrón de compra "capsule wardrobe premium" y sugiere piezas complementarias del mismo rango de precio. Horario de envío (19:00) basado en su historial de apertura de emails.</p>
            </div>
          </div>
        </div>
      </div>`;
      break;
  }
}
go('DASHBOARD');

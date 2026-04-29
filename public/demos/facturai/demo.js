const scr = document.getElementById('app-screen');
let stage = 1;

const facturas = [
  { folio: '4892', rut: '76.543.210-K', proveedor: 'Distribuidora Los Andes Ltda.', monto: '$1.247.500', fecha: '12/03/2026', estado: 'match' },
  { folio: '4893', rut: '77.891.234-5', proveedor: 'Servicios Informáticos SpA', monto: '$890.000', fecha: '14/03/2026', estado: 'match' },
  { folio: '4895', rut: '79.456.789-0', proveedor: 'Transportes Ruta Sur Ltda.', monto: '$3.120.000', fecha: '15/03/2026', estado: 'match' },
  { folio: '4901', rut: '78.123.456-7', proveedor: 'Comercial El Puerto S.A.', monto: '$2.350.800', fecha: '18/03/2026', estado: 'diff', cartola: '$2.150.800' },
  { folio: '4908', rut: '80.321.654-3', proveedor: 'Alimentos del Valle SpA', monto: '$675.400', fecha: '22/03/2026', estado: 'match' },
];

function sidebar(active) {
  const items = [
    { id: 'DASHBOARD', icon: 'grid_view', label: 'Panel', tip: stage===2 },
    { id: 'UPLOAD', icon: 'upload_file', label: 'Subir Facturas' },
    { id: 'CONCILIACION', icon: 'compare_arrows', label: 'Conciliación' },
    { id: 'ERP', icon: 'dns', label: 'Logs ERP' },
  ];
  return `<div class="w-48 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 relative z-20">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">Menú</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-slate-50 text-slate-600';
      const click = it.id === 'UPLOAD' || it.id === 'DASHBOARD' ? `onclick="go('${it.id}')"` : '';
      const tip = it.tip ? `<div class="absolute left-full ml-4 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-[100]">👈 4. Revisa aquí</div>` : '';
      return `<div class="relative flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        ${tip}<span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
  </div>`;
}

function go(state) {
  scr.innerHTML = '';
  switch(state) {
    case 'DASHBOARD':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('DASHBOARD')}
        <div class="flex-1 p-6 bg-slate-50 overflow-y-auto relative">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Conciliación Mensual</h1>
            <button onclick="go('UPLOAD')" class="relative z-10 bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition shadow-sm flex items-center gap-2 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}">
              ${stage===1?'<div class="absolute top-full mt-4 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-[100]">1. Sube facturas aquí 👆</div>':''}
              <span class="material-symbols-outlined text-[18px]">add</span> Subir Facturas
            </button>
          </div>
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-slate-500 text-xs font-semibold mb-1">Facturas Procesadas (Mes)</div>
              <div class="text-3xl font-bold text-slate-800">247</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-slate-500 text-xs font-semibold mb-1">Conciliadas Automáticamente</div>
              <div class="text-3xl font-bold text-emerald-600">95%</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-slate-500 text-xs font-semibold mb-1">Diferencias Detectadas</div>
              <div class="text-3xl font-bold text-orange-500">12</div>
            </div>
          </div>
          <h3 class="font-bold text-slate-700 text-sm mb-3">Últimas facturas procesadas</h3>
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden text-sm shadow-sm">
            <table class="w-full text-left"><thead class="bg-slate-50 border-b border-slate-200">
              <tr><th class="p-3 font-semibold text-slate-600">Folio</th><th class="p-3 font-semibold text-slate-600">Proveedor</th><th class="p-3 font-semibold text-slate-600">Monto</th><th class="p-3 font-semibold text-slate-600">Estado</th></tr>
            </thead><tbody>
              <tr class="border-b border-slate-100"><td class="p-3 font-medium">#4892</td><td class="p-3 text-slate-500">Dist. Los Andes</td><td class="p-3">$1.247.500</td><td class="p-3"><span class="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold">Conciliada</span></td></tr>
              <tr><td class="p-3 font-medium">#4901</td><td class="p-3 text-slate-500">Comercial El Puerto</td><td class="p-3">$2.350.800</td><td class="p-3"><span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-bold">Diferencia</span></td></tr>
            </tbody></table>
          </div>
        </div>
      </div>`;
      break;

    case 'UPLOAD':
      scr.innerHTML = `<div class="flex h-full flex-col p-8 bg-slate-50 animate-fade-in items-center justify-center">
        <button onclick="go('DASHBOARD')" class="absolute top-4 left-4 text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-medium">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span> Volver
        </button>
        <h2 class="text-2xl font-bold text-slate-800 mb-2">Carga Masiva de Facturas</h2>
        <p class="text-slate-500 text-sm mb-8 text-center max-w-lg">Arrastra todas las facturas del mes de una sola vez + la cartola bancaria. La IA procesará cada una en paralelo, extraerá los datos y conciliará automáticamente.</p>
        <div class="flex gap-6 w-full max-w-2xl">
          <div onclick="go('PROCESSING')" class="flex-1 border-2 border-dashed border-emerald-300 bg-emerald-50/50 rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:bg-emerald-50 hover:border-emerald-400 transition group ${stage===1?'ring-4 ring-amber-400 ring-offset-4':''}">
            ${stage===1?'<div class="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce mb-4 z-[100]">2. Clic aquí 👇</div>':''}
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition">
              <span class="material-symbols-outlined text-emerald-500 text-2xl">picture_as_pdf</span>
            </div>
            <h3 class="font-bold text-emerald-900">Facturas del Mes</h3>
            <p class="text-emerald-600/70 text-xs mt-1 text-center">Arrastra hasta 500 PDFs<br/>OCR inteligente incluido</p>
          </div>
          <div class="flex-1 border-2 border-dashed border-blue-300 bg-blue-50/50 rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition group">
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition">
              <span class="material-symbols-outlined text-blue-500 text-2xl">account_balance</span>
            </div>
            <h3 class="font-bold text-blue-900">Cartola Bancaria</h3>
            <p class="text-blue-600/70 text-xs mt-1">Excel o PDF</p>
          </div>
        </div>
      </div>`;
      break;

    case 'PROCESSING':
      scr.innerHTML = `<div class="h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden animate-fade-in p-8 text-white">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div class="scan-line top-0 z-10"></div>
        <div class="z-20 w-full max-w-md">
          <div class="flex items-center justify-center gap-4 mb-8">
            <div class="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center border border-red-500/30">
              <span class="material-symbols-outlined text-red-400 text-2xl">picture_as_pdf</span>
            </div>
            <div class="typing-indicator flex items-center"><span></span><span></span><span></span></div>
            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30 animate-pulse">
              <span class="material-symbols-outlined text-emerald-400 text-2xl">smart_toy</span>
            </div>
            <div class="typing-indicator flex items-center"><span></span><span></span><span></span></div>
            <div class="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
              <span class="material-symbols-outlined text-blue-400 text-2xl">account_balance</span>
            </div>
          </div>
          <h3 class="text-xl font-bold text-center mb-2">Procesando 247 Facturas...</h3>
          <p class="text-slate-400 text-xs text-center mb-6">Procesamiento masivo en paralelo vía Google Cloud Vision</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">OCR masivo completado: <strong>247 facturas</strong> extraídas en 38 seg.</span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-emerald-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Cruzando 247 facturas con 312 movimientos de cartola...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm"><strong>235 facturas</strong> conciliadas automáticamente (match exacto ✓)</span>
            </div>
            <div id="l4" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-orange-400 text-sm">warning</span>
              <span class="text-sm"><strong>12 diferencias</strong> detectadas — requieren revisión manual</span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(() => { const e=document.getElementById('l1'); if(e) {e.classList.remove('translate-y-2','opacity-0');} }, 800);
      setTimeout(() => { const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">Cartola cargada: <strong>312 movimientos</strong> de BancoEstado marzo.</span>`;},1200);
      }}, 1800);
      setTimeout(() => { const e=document.getElementById('l3'); if(e) e.classList.remove('translate-y-2','opacity-0'); }, 3500);
      setTimeout(() => { const e=document.getElementById('l4'); if(e) e.classList.remove('translate-y-2','opacity-0'); }, 4500);
      setTimeout(() => go('RESULTS'), 6500);
      break;

    case 'RESULTS':
      stage = 2;
      scr.innerHTML = `<div class="h-full bg-slate-50 flex flex-col p-6 animate-fade-in relative">
        <div class="flex justify-between items-center mb-5">
          <div><h2 class="text-2xl font-bold text-slate-800">Conciliación Completada</h2><p class="text-slate-500 text-sm">247 facturas procesadas en 42 segundos — marzo 2026</p></div>
          <button onclick="go('DASHBOARD')" class="relative z-10 bg-slate-200 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-slate-300 transition ${stage===2?'ring-4 ring-amber-400 ring-offset-2':''}">
            ${stage===2?'<div class="absolute top-full mt-4 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-[100]">3. Volver al panel 👆</div>':''}
            Cerrar
          </button>
        </div>
        <div class="grid grid-cols-3 gap-4 mb-5">
          <div class="bg-green-50 border border-green-200 p-4 rounded-xl flex items-center gap-3">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600"><span class="material-symbols-outlined">check_circle</span></div>
            <div><div class="text-2xl font-bold text-green-700">235</div><div class="text-xs text-green-600 font-semibold uppercase">Match Exacto</div></div>
          </div>
          <div class="bg-orange-50 border border-orange-200 p-4 rounded-xl flex items-center gap-3">
            <div class="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"><span class="material-symbols-outlined">warning</span></div>
            <div><div class="text-2xl font-bold text-orange-700">12</div><div class="text-xs text-orange-600 font-semibold uppercase">Diferencias</div></div>
          </div>
          <div class="bg-blue-50 border border-blue-200 p-4 rounded-xl flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600"><span class="material-symbols-outlined">send</span></div>
            <div><div class="text-2xl font-bold text-blue-700">235</div><div class="text-xs text-blue-600 font-semibold uppercase">Listas para ERP</div></div>
          </div>
        </div>
        <div class="bg-white border border-slate-200 rounded-xl overflow-hidden text-sm shadow-sm flex-1 overflow-y-auto">
          <table class="w-full text-left"><thead class="bg-slate-50 border-b border-slate-200">
            <tr><th class="p-3 font-semibold text-slate-600">Folio</th><th class="p-3 font-semibold text-slate-600">Proveedor</th><th class="p-3 font-semibold text-slate-600">Monto Factura</th><th class="p-3 font-semibold text-slate-600">Cartola</th><th class="p-3 font-semibold text-slate-600">Estado</th></tr>
          </thead><tbody>
            ${facturas.map(f => `<tr class="border-b border-slate-100">
              <td class="p-3 font-medium">#${f.folio}</td>
              <td class="p-3 text-slate-500">${f.proveedor}</td>
              <td class="p-3 font-medium">${f.monto}</td>
              <td class="p-3 ${f.estado==='diff'?'text-orange-600 font-bold':'text-slate-500'}">${f.estado==='diff'?f.cartola:f.monto}</td>
              <td class="p-3">${f.estado==='match'
                ?'<span class="px-2 py-1 bg-green-100 text-green-700 rounded-md text-xs font-bold border border-green-200">✓ Conciliada</span>'
                :'<span class="px-2 py-1 bg-orange-100 text-orange-700 rounded-md text-xs font-bold border border-orange-200">⚠ Dif. $200.000</span>'
              }</td>
            </tr>`).join('')}
          </tbody></table>
        </div>
        <div class="mt-4 flex justify-end gap-3">
          <button class="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-100 transition">Exportar CSV</button>
          <button class="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition shadow-sm flex items-center gap-1">
            <span class="material-symbols-outlined text-[16px]">publish</span> Enviar a ERP
          </button>
        </div>
      </div>`;
      break;
  }
}

go('DASHBOARD');

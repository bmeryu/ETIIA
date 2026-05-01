const scr = document.getElementById('app-screen');
let stage = 1;

const urlMap = {
  DASHBOARD: 'app.talentparse.cl/dashboard',
  UPLOAD: 'app.talentparse.cl/proceso/upload',
  PROCESSING: 'app.talentparse.cl/proceso/scoring',
  RESULTS: 'app.talentparse.cl/ranking/data-engineer-sr',
  CANDIDATE_DETAIL: 'app.talentparse.cl/candidato/maria-gonzalez'
};
function updateUrl(s) {
  const bar = document.getElementById('app-url');
  if (bar) bar.innerHTML = '<span class="material-symbols-outlined text-[12px] align-middle mr-1">lock</span>' + (urlMap[s] || 'app.talentparse.cl');
}

const candidatos = [
  { nombre: 'María González Soto', score: 96, exp: '8 años', actual: 'Gerente de Proyectos TI — Falabella', skills: ['Python','AWS','Scrum','SQL','Power BI'], match: { experiencia: 98, tech: 95, liderazgo: 94 }, foto: '👩‍💼' },
  { nombre: 'Andrés Muñoz Parra', score: 89, exp: '6 años', actual: 'Lead Developer — Mercado Libre', skills: ['Node.js','AWS','Docker','React','MongoDB'], match: { experiencia: 85, tech: 97, liderazgo: 82 }, foto: '👨‍💻' },
  { nombre: 'Camila Reyes Fuentes', score: 82, exp: '5 años', actual: 'Analista Senior BI — BCI', skills: ['Python','Tableau','SQL','ETL','Azure'], match: { experiencia: 78, tech: 88, liderazgo: 75 }, foto: '👩‍🔬' },
  { nombre: 'Felipe Torres Díaz', score: 71, exp: '4 años', actual: 'Desarrollador Full Stack — Cornershop', skills: ['JavaScript','React','PostgreSQL','Git'], match: { experiencia: 65, tech: 82, liderazgo: 60 }, foto: '👨‍🎓' },
  { nombre: 'Valentina Rojas M.', score: 64, exp: '3 años', actual: 'QA Automation — Banco Santander', skills: ['Selenium','Python','Jira','CI/CD'], match: { experiencia: 58, tech: 72, liderazgo: 55 }, foto: '👩‍💻' },
];

function sidebar(active) {
  const items = [
    { id: 'DASHBOARD', icon: 'dashboard', label: 'Dashboard' },
    { id: 'UPLOAD', icon: 'upload_file', label: 'Cargar CVs' },
    { id: 'RANKING', icon: 'leaderboard', label: 'Ranking' },
    { id: 'JOBS', icon: 'work', label: 'Cargos' },
  ];
  return `<div class="w-48 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">TalentParse</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-amber-50 text-amber-600' : 'hover:bg-slate-50 text-slate-600';
      const click = (it.id === 'UPLOAD' || it.id === 'DASHBOARD') ? `onclick="go('${it.id}')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">Procesos Activos</div>
      <div class="text-lg font-bold text-amber-600">3</div>
      <div class="text-[10px] text-slate-400">cargos abiertos</div>
    </div>
  </div>`;
}

function scoreBar(val, color) {
  return `<div class="w-full bg-slate-100 rounded-full h-1.5"><div class="h-1.5 rounded-full ${color}" style="width:${val}%"></div></div>`;
}

function go(state) {
  scr.innerHTML = '';
  updateUrl(state);
  switch(state) {
    case 'DASHBOARD':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('DASHBOARD')}
        <div class="flex-1 p-6 bg-slate-50 overflow-y-auto">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Selección: Data Engineer Senior</h1>
            <button onclick="go('UPLOAD')" class="relative bg-amber-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-amber-600 transition shadow-sm flex items-center gap-2 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}">
              ${stage===1?'<div class="absolute top-full mt-3 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-50">1. Carga CVs aquí 👆</div>':''}
              <span class="material-symbols-outlined text-[18px]">add</span> Cargar CVs
            </button>
          </div>
          <div class="grid grid-cols-3 gap-4 mb-6">
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-slate-500 text-xs font-semibold mb-1">CVs Recibidos</div>
              <div class="text-3xl font-bold text-slate-800">312</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-slate-500 text-xs font-semibold mb-1">Procesados por IA</div>
              <div class="text-3xl font-bold text-amber-600">100%</div>
            </div>
            <div class="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
              <div class="text-slate-500 text-xs font-semibold mb-1">Tiempo Total</div>
              <div class="text-3xl font-bold text-green-600">8 min</div>
            </div>
          </div>
          <h3 class="font-bold text-slate-700 text-sm mb-3">Top 3 Candidatos</h3>
          <div class="space-y-2">
            ${candidatos.slice(0,3).map((c,i) => `<div class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 text-sm">
              <div class="text-2xl">${c.foto}</div>
              <div class="flex-1"><div class="font-bold text-slate-800">${c.nombre}</div><div class="text-xs text-slate-400">${c.actual}</div></div>
              <div class="w-12 h-12 rounded-full ${c.score>90?'bg-green-100 text-green-700':'bg-amber-100 text-amber-700'} flex items-center justify-center text-sm font-bold">${c.score}%</div>
            </div>`).join('')}
          </div>
        </div>
      </div>`;
      break;

    case 'UPLOAD':
      scr.innerHTML = `<div class="flex h-full flex-col p-8 bg-slate-50 animate-fade-in items-center justify-center">
        <button onclick="go('DASHBOARD')" class="absolute top-4 left-4 text-slate-500 hover:text-slate-800 flex items-center gap-1 text-sm font-medium">
          <span class="material-symbols-outlined text-[18px]">arrow_back</span> Volver
        </button>
        <h2 class="text-2xl font-bold text-slate-800 mb-2">Carga Masiva de CVs</h2>
        <p class="text-slate-500 text-sm mb-6 text-center max-w-lg">Arrastra todos los CVs del proceso. La IA extrae datos, los mapea contra el cargo y genera un ranking instantáneo.</p>
        <div class="flex gap-6 w-full max-w-2xl">
          <div onclick="go('PROCESSING')" class="flex-1 border-2 border-dashed border-amber-300 bg-amber-50/50 rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:bg-amber-50 hover:border-amber-400 transition group ${stage===1?'ring-4 ring-amber-400 ring-offset-4':''}">
            ${stage===1?'<div class="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-bounce mb-4">2. Clic aquí 👇</div>':''}
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition">
              <span class="material-symbols-outlined text-amber-500 text-2xl">folder_open</span>
            </div>
            <h3 class="font-bold text-amber-900">CVs del Proceso</h3>
            <p class="text-amber-600/70 text-xs mt-1 text-center">Hasta 500 archivos<br/>PDF, DOCX, imágenes</p>
          </div>
          <div class="flex-1 border-2 border-dashed border-blue-300 bg-blue-50/50 rounded-2xl p-8 flex flex-col items-center cursor-pointer hover:bg-blue-50 transition group">
            <div class="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm mb-3 group-hover:scale-110 transition">
              <span class="material-symbols-outlined text-blue-500 text-2xl">work</span>
            </div>
            <h3 class="font-bold text-blue-900">Descripción del Cargo</h3>
            <p class="text-blue-600/70 text-xs mt-1 text-center">La IA compara cada CV<br/>contra este perfil</p>
          </div>
        </div>
      </div>`;
      break;

    case 'PROCESSING':
      stage = 2;
      scr.innerHTML = `<div class="h-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden animate-fade-in p-8 text-white">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear_gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
        <div class="scan-line top-0 z-10"></div>
        <div class="z-20 w-full max-w-md">
          <h3 class="text-lg font-bold text-center mb-2">Procesando 312 CVs...</h3>
          <p class="text-slate-400 text-xs text-center mb-6">Extracción + scoring contra "Data Engineer Senior"</p>
          <div class="space-y-3">
            <div id="l1" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Parsing completado: <strong>312 CVs</strong> en 47 formatos distintos</span>
            </div>
            <div id="l2" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-amber-400 text-sm animate-spin">sync</span>
              <span class="text-sm">Extrayendo: experiencia, skills, educación, idiomas...</span>
            </div>
            <div id="l3" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-green-400 text-sm">check_circle</span>
              <span class="text-sm">Scoring contra perfil: <strong>Top 5 identificados</strong></span>
            </div>
            <div id="l4" class="bg-slate-800 p-3 rounded-lg flex items-center gap-3 border border-slate-700 opacity-0 translate-y-2 transition-all duration-500">
              <span class="material-symbols-outlined text-blue-400 text-sm">info</span>
              <span class="text-sm"><strong>23 candidatos</strong> descartados por requisitos mínimos</span>
            </div>
          </div>
        </div>
      </div>`;
      setTimeout(()=>{const e=document.getElementById('l1'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 700);
      setTimeout(()=>{const e=document.getElementById('l2'); if(e) {e.classList.remove('translate-y-2','opacity-0');
        setTimeout(()=>{if(e) e.innerHTML=`<span class="material-symbols-outlined text-green-400 text-sm">check_circle</span><span class="text-sm">Variables extraídas: <strong>2,496 data points</strong> mapeados</span>`;},1200);
      }}, 1500);
      setTimeout(()=>{const e=document.getElementById('l3'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 3200);
      setTimeout(()=>{const e=document.getElementById('l4'); if(e) e.classList.remove('translate-y-2','opacity-0');}, 4200);
      setTimeout(()=> go('RESULTS'), 5800);
      break;

    case 'RESULTS':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('RANKING')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex items-center justify-between mb-1">
            <h2 class="text-xl font-bold">Ranking — Data Engineer Senior</h2>
            <button onclick="go('DASHBOARD')" class="text-sm text-amber-600 font-medium hover:underline">← Dashboard</button>
          </div>
          <div class="flex items-center gap-4 mb-4 text-xs text-slate-400">
            <span>📄 312 CVs procesados</span><span>⏱ 8 min total</span><span>🎯 5 finalistas</span>
          </div>
          <div class="space-y-3">
            ${candidatos.map((c, i) => `
              <div onclick="go('CANDIDATE_DETAIL')" class="bg-white rounded-xl border border-slate-200 p-4 hover:border-amber-300 hover:shadow-sm transition cursor-pointer ${i===0?'ring-2 ring-amber-400':''}">
                <div class="flex items-start gap-3">
                  <div class="text-3xl">${c.foto}</div>
                  <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 mb-0.5">
                      ${i===0?'<span class="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">⭐ #1</span>':'<span class="px-1.5 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase">#'+(i+1)+'</span>'}
                      <h3 class="font-bold text-slate-800 text-sm">${c.nombre}</h3>
                    </div>
                    <p class="text-xs text-slate-400 mb-2">${c.actual} · ${c.exp}</p>
                    <div class="flex flex-wrap gap-1 mb-2">${c.skills.map(s => `<span class="bg-slate-100 text-slate-500 text-[10px] font-semibold px-1.5 py-0.5 rounded">${s}</span>`).join('')}</div>
                    <div class="grid grid-cols-3 gap-2 text-[10px]">
                      <div><span class="text-slate-400">Experiencia</span>${scoreBar(c.match.experiencia,'bg-green-500')}<span class="font-bold text-slate-600">${c.match.experiencia}%</span></div>
                      <div><span class="text-slate-400">Tech Stack</span>${scoreBar(c.match.tech,'bg-blue-500')}<span class="font-bold text-slate-600">${c.match.tech}%</span></div>
                      <div><span class="text-slate-400">Liderazgo</span>${scoreBar(c.match.liderazgo,'bg-amber-500')}<span class="font-bold text-slate-600">${c.match.liderazgo}%</span></div>
                    </div>
                  </div>
                  <div class="w-14 h-14 rounded-full ${c.score>90?'bg-green-100 text-green-700':c.score>80?'bg-amber-100 text-amber-700':'bg-slate-100 text-slate-600'} flex items-center justify-center text-lg font-bold shrink-0">${c.score}%</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>`;
      break;

    case 'CANDIDATE_DETAIL':
      const c = candidatos[0];
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('RANKING')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <button onclick="go('RESULTS')" class="text-sm text-amber-600 font-medium hover:underline flex items-center gap-1 mb-4">
            <span class="material-symbols-outlined text-[14px]">arrow_back</span> Volver al ranking
          </button>
          <div class="bg-white rounded-xl border border-slate-200 p-5 shadow-sm mb-4">
            <div class="flex items-center gap-4 mb-4">
              <div class="text-4xl">${c.foto}</div>
              <div class="flex-1">
                <div class="flex items-center gap-2"><span class="px-1.5 py-0.5 bg-amber-100 text-amber-700 text-[10px] font-bold rounded uppercase">⭐ #1</span><h2 class="text-xl font-bold text-slate-800">${c.nombre}</h2></div>
                <p class="text-sm text-slate-400">${c.actual} · ${c.exp}</p>
              </div>
              <div class="w-16 h-16 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl font-bold">${c.score}%</div>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="bg-slate-50 p-3 rounded-lg"><div class="text-xs text-slate-400 mb-1">Experiencia</div>${scoreBar(c.match.experiencia,'bg-green-500')}<div class="text-sm font-bold text-slate-700 mt-1">${c.match.experiencia}%</div></div>
              <div class="bg-slate-50 p-3 rounded-lg"><div class="text-xs text-slate-400 mb-1">Tech Stack</div>${scoreBar(c.match.tech,'bg-blue-500')}<div class="text-sm font-bold text-slate-700 mt-1">${c.match.tech}%</div></div>
              <div class="bg-slate-50 p-3 rounded-lg"><div class="text-xs text-slate-400 mb-1">Liderazgo</div>${scoreBar(c.match.liderazgo,'bg-amber-500')}<div class="text-sm font-bold text-slate-700 mt-1">${c.match.liderazgo}%</div></div>
            </div>
            <div class="mb-3"><span class="text-xs font-semibold text-slate-500 uppercase">Skills detectados</span></div>
            <div class="flex flex-wrap gap-1.5 mb-4">${c.skills.map(s => '<span class="bg-amber-50 text-amber-700 text-xs font-semibold px-2 py-1 rounded-lg border border-amber-200">'+s+'</span>').join('')}</div>
          </div>
          <div class="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-start gap-3">
            <span class="material-symbols-outlined text-amber-500 mt-0.5">psychology</span>
            <div>
              <p class="text-sm font-semibold text-amber-800 mb-1">Análisis de la IA</p>
              <p class="text-xs text-amber-700">Candidata con <strong>perfil altamente alineado</strong> al cargo. 8 años de experiencia progresiva en TI, incluyendo 3 años en posición de liderazgo. Domina el stack completo requerido (Python, AWS, SQL). Única candidata con experiencia en gestión de proyectos a gran escala en retail.</p>
            </div>
          </div>
        </div>
      </div>`;
      break;
  }
}

go('DASHBOARD');

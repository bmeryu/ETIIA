const scr = document.getElementById('app-screen');
let stage = 1;

const urlMap = {
  DASHBOARD: 'app.atendeai.cl/dashboard',
  CHAT_LIVE: 'app.atendeai.cl/chat/live/c-4821',
  RESOLUTION: 'app.atendeai.cl/chat/c-4821/resolved',
  METRICS: 'app.atendeai.cl/analytics'
};
function updateUrl(s) {
  const bar = document.getElementById('app-url');
  if (bar) bar.innerHTML = '<span class="material-symbols-outlined text-[12px] align-middle mr-1">lock</span>' + (urlMap[s] || 'app.atendeai.cl');
}

const chatMessages = [
  { from: 'client', text: 'Hola, necesito cambiar mi plan de internet. Me están cobrando 29.990 pero quiero el de 19.990', delay: 0 },
  { from: 'ai', text: 'Hola María 👋 Veo que tienes el plan Fibra 300 Mbps ($29.990/mes). El plan Fibra 100 Mbps está en $19.990/mes. ¿Quieres que haga el cambio ahora?', delay: 1800, action: '🔍 Consultando CRM... cliente ID #28471' },
  { from: 'client', text: 'si porfa, y quiero saber cuánto me van a cobrar este mes', delay: 3500 },
  { from: 'ai', text: 'Listo ✅ Tu plan se cambia a Fibra 100 Mbps desde el próximo ciclo (5 de junio).\n\nSobre tu factura de mayo:\n• Plan Fibra 300: $29.990\n• Cargo instalación (cuota 2/12): $4.990\n• Total: $34.980\n• Vencimiento: 15 de mayo\n\n¿Necesitas algo más?', delay: 5500, action: '⚡ Ejecutando cambio de plan en CRM...' },
  { from: 'client', text: 'ahh y me pueden mandar un técnico? el router anda lento', delay: 8000 },
  { from: 'ai', text: 'Agendé una visita técnica para ti:\n\n📅 Sábado 3 de mayo, 10:00-12:00\n📍 Av. Providencia 1234, depto 501\n👨‍🔧 Técnico: Carlos M.\n\nTe llegará un SMS de confirmación. Si necesitas cambiar la hora, escríbeme aquí. ¡Que estés bien, María! 😊', delay: 10000, action: '📅 Agendando técnico en sistema de despacho...' },
];

const liveMetrics = { resolved: 847, aiRate: 73, csat: 4.2, avgTime: '45s', active: 12, queue: 3 };

function sidebar(active) {
  const items = [
    { id: 'DASHBOARD', icon: 'dashboard', label: 'Dashboard' },
    { id: 'CHAT_LIVE', icon: 'chat', label: 'Chat en Vivo' },
    { id: 'METRICS', icon: 'analytics', label: 'Métricas' },
    { id: 'CONFIG', icon: 'settings', label: 'Config' },
  ];
  return `<div class="w-44 bg-white border-r border-slate-200 p-4 flex flex-col gap-2 shrink-0">
    <div class="font-bold text-sm mb-4 text-slate-400 uppercase tracking-wider">AtendeAI</div>
    ${items.map(it => {
      const isActive = it.id === active;
      const cls = isActive ? 'bg-teal-50 text-teal-600' : 'hover:bg-slate-50 text-slate-600';
      const click = (it.id === 'DASHBOARD' || it.id === 'METRICS') ? `onclick="go('${it.id}')"` : '';
      return `<div class="flex items-center gap-2 p-2 ${cls} rounded-lg cursor-pointer font-medium text-sm transition" ${click}>
        <span class="material-symbols-outlined text-[18px]">${it.icon}</span> ${it.label}
      </div>`;
    }).join('')}
    <div class="mt-auto pt-4 border-t border-slate-100">
      <div class="text-xs text-slate-400 mb-1">Hoy</div>
      <div class="flex items-baseline gap-1"><span class="text-lg font-bold text-teal-600">${liveMetrics.aiRate}%</span><span class="text-[10px] text-teal-500">resuelto por IA</span></div>
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
              <h1 class="text-xl font-bold">Centro de Atención — Hoy</h1>
              <p class="text-xs text-slate-400">Miércoles 30 Abril · 14:32 hrs</p>
            </div>
            <button onclick="go('CHAT_LIVE')" class="relative bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-teal-700 transition shadow-sm flex items-center gap-2 ${stage===1?'ring-4 ring-amber-400 ring-offset-2':''}">
              ${stage===1?'<div class="absolute top-full mt-3 right-0 bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg shadow-lg animate-bounce whitespace-nowrap z-50">1. Ver chat en vivo 👆</div>':''}
              <span class="material-symbols-outlined text-[18px]">chat</span> Chat en Vivo
              <span class="bg-white/20 rounded-full px-2 py-0.5 text-[10px] font-bold">${liveMetrics.active}</span>
            </button>
          </div>
          <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-teal-600">${liveMetrics.resolved}</div><div class="text-[10px] text-slate-400 font-semibold">Resueltos hoy</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-cyan-600">${liveMetrics.aiRate}%</div><div class="text-[10px] text-slate-400 font-semibold">Sin humano</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-amber-500">${liveMetrics.avgTime}</div><div class="text-[10px] text-slate-400 font-semibold">Tiempo prom.</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-green-600">${liveMetrics.csat}/5</div><div class="text-[10px] text-slate-400 font-semibold">CSAT</div>
            </div>
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-2">Chats activos ahora</h3>
          <div class="space-y-2">
            <div onclick="go('CHAT_LIVE')" class="bg-white border border-teal-200 rounded-xl p-3 flex items-center gap-3 text-sm cursor-pointer hover:bg-teal-50 transition ${stage===1?'ring-2 ring-amber-400':''}">
              <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600"><span class="material-symbols-outlined text-sm">smart_toy</span></div>
              <div class="flex-1"><div class="font-bold text-slate-800">María González — Cambio de plan</div><div class="text-[10px] text-slate-400">Chat web · Hace 2 min · IA respondiendo</div></div>
              <span class="px-2 py-1 bg-teal-100 text-teal-700 rounded text-[10px] font-bold">IA activa</span>
            </div>
            <div class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 text-sm">
              <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><span class="material-symbols-outlined text-sm">smart_toy</span></div>
              <div class="flex-1"><div class="font-bold text-slate-800">Pedro Soto — Estado de pedido #8847</div><div class="text-[10px] text-slate-400">WhatsApp · Hace 5 min · Resuelto</div></div>
              <span class="px-2 py-1 bg-green-100 text-green-700 rounded text-[10px] font-bold">Resuelto</span>
            </div>
            <div class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3 text-sm">
              <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"><span class="material-symbols-outlined text-sm">person</span></div>
              <div class="flex-1"><div class="font-bold text-slate-800">Luis Ramírez — Reclamo facturación</div><div class="text-[10px] text-slate-400">Chat web · Hace 8 min · Escalado a humano</div></div>
              <span class="px-2 py-1 bg-orange-100 text-orange-700 rounded text-[10px] font-bold">Escalado</span>
            </div>
          </div>
        </div>
      </div>`;
      break;

    case 'CHAT_LIVE':
      stage = 2;
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('CHAT_LIVE')}
        <div class="flex-1 flex flex-col bg-white">
          <div class="p-3 border-b border-slate-200 flex items-center justify-between bg-slate-50">
            <div class="flex items-center gap-3">
              <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 text-sm font-bold">MG</div>
              <div><div class="font-bold text-sm text-slate-800">María González</div><div class="text-[10px] text-slate-400">Chat web · #C-4821 · Cliente desde 2022</div></div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-1 bg-teal-100 text-teal-700 rounded text-[10px] font-bold flex items-center gap-1"><span class="material-symbols-outlined text-[12px]">smart_toy</span> IA respondiendo</span>
            </div>
          </div>
          <div id="chat-area" class="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50/50"></div>
          <div class="p-3 border-t border-slate-200 bg-white flex items-center gap-2">
            <input type="text" class="flex-1 bg-slate-100 rounded-lg px-4 py-2 text-sm outline-none" placeholder="Escribe un mensaje..." disabled/>
            <button class="bg-teal-600 text-white p-2 rounded-lg"><span class="material-symbols-outlined text-sm">send</span></button>
          </div>
        </div>
        <div class="w-56 bg-white border-l border-slate-200 p-3 overflow-y-auto shrink-0">
          <h4 class="font-bold text-[10px] text-slate-400 uppercase tracking-wider mb-2">Perfil Cliente</h4>
          <div class="space-y-2 text-[11px]">
            <div class="bg-slate-50 rounded-lg p-2"><span class="text-slate-400">Nombre</span><div class="font-bold text-slate-700">María González S.</div></div>
            <div class="bg-slate-50 rounded-lg p-2"><span class="text-slate-400">RUT</span><div class="font-bold text-slate-700">15.432.876-K</div></div>
            <div class="bg-slate-50 rounded-lg p-2"><span class="text-slate-400">Plan actual</span><div class="font-bold text-slate-700">Fibra 300 Mbps</div></div>
            <div class="bg-slate-50 rounded-lg p-2"><span class="text-slate-400">Antigüedad</span><div class="font-bold text-slate-700">2 años, 8 meses</div></div>
            <div class="bg-slate-50 rounded-lg p-2"><span class="text-slate-400">Último contacto</span><div class="font-bold text-slate-700">12 marzo 2026</div></div>
          </div>
          <h4 class="font-bold text-[10px] text-slate-400 uppercase tracking-wider mt-3 mb-2">Acciones IA</h4>
          <div id="ai-actions" class="space-y-1.5"></div>
        </div>
      </div>`;
      runChat();
      break;

    case 'RESOLUTION':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('CHAT_LIVE')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <button onclick="go('DASHBOARD')" class="text-sm text-teal-600 font-medium hover:underline flex items-center gap-1 mb-4">
            <span class="material-symbols-outlined text-[14px]">arrow_back</span> Volver al dashboard
          </button>
          <div class="bg-white rounded-xl border border-green-200 p-5 shadow-sm mb-4">
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center"><span class="material-symbols-outlined text-green-600 text-2xl">check_circle</span></div>
              <div>
                <h2 class="text-xl font-bold text-slate-800">Chat #C-4821 — Resuelto por IA</h2>
                <p class="text-sm text-slate-400">María González · Duración: 1 min 48 seg · Sin escalamiento</p>
              </div>
            </div>
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="bg-slate-50 p-3 rounded-lg text-center"><div class="text-xs text-slate-400 mb-1">CSAT</div><div class="text-xl font-bold text-green-600">5/5 ⭐</div></div>
              <div class="bg-slate-50 p-3 rounded-lg text-center"><div class="text-xs text-slate-400 mb-1">Intención</div><div class="text-sm font-bold text-slate-700">Cambio plan + Agenda técnico</div></div>
              <div class="bg-slate-50 p-3 rounded-lg text-center"><div class="text-xs text-slate-400 mb-1">Canal</div><div class="text-sm font-bold text-slate-700">Chat Web</div></div>
            </div>
          </div>
          <div class="bg-white rounded-xl border border-slate-200 p-4 shadow-sm mb-4">
            <h3 class="font-bold text-sm text-slate-700 mb-3 flex items-center gap-1"><span class="material-symbols-outlined text-teal-500 text-base">checklist</span> Acciones ejecutadas por la IA</h3>
            <div class="space-y-2">
              <div class="flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span> Cambio de plan: Fibra 300 → Fibra 100 (efectivo 5 junio)</div>
              <div class="flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span> Consulta de factura: informó detalle mayo ($34.980)</div>
              <div class="flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span> Visita técnica agendada: Sáb 3 mayo, 10:00-12:00</div>
              <div class="flex items-center gap-2 text-sm"><span class="material-symbols-outlined text-green-500 text-sm">check_circle</span> SMS de confirmación enviado al +56 9 8765 4321</div>
            </div>
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-start gap-3">
            <span class="material-symbols-outlined text-teal-500 mt-0.5">psychology</span>
            <div>
              <p class="text-sm font-semibold text-teal-800 mb-1">Resumen de la IA</p>
              <p class="text-xs text-teal-700">Cliente solicitó <strong>3 acciones</strong> en una sola conversación. Todas resueltas sin escalamiento. El cambio de plan genera un ahorro de $10.000/mes para la cliente, lo que reduce riesgo de churn. Se detectó oportunidad de retención: ofrecer descuento fidelidad en próxima interacción.</p>
            </div>
          </div>
        </div>
      </div>`;
      break;

    case 'METRICS':
      scr.innerHTML = `<div class="flex h-full animate-fade-in text-slate-800">
        ${sidebar('METRICS')}
        <div class="flex-1 p-5 bg-slate-50 overflow-y-auto">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h2 class="text-xl font-bold">Métricas — Abril 2026</h2>
              <p class="text-xs text-slate-400">4,821 conversaciones · 30 días</p>
            </div>
            <button onclick="go('DASHBOARD')" class="text-sm text-teal-600 font-medium hover:underline">← Dashboard</button>
          </div>
          <div class="grid grid-cols-4 gap-3 mb-5">
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-teal-600">4,821</div><div class="text-[10px] text-slate-400 font-semibold">Total conversaciones</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-green-600">3,519</div><div class="text-[10px] text-slate-400 font-semibold">Resueltas por IA</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-orange-500">1,302</div><div class="text-[10px] text-slate-400 font-semibold">Escaladas a humano</div>
            </div>
            <div class="bg-white p-3 rounded-xl border border-slate-200 shadow-sm text-center">
              <div class="text-2xl font-bold text-blue-600">$3.8M</div><div class="text-[10px] text-slate-400 font-semibold">Ahorro vs call center</div>
            </div>
          </div>
          <h3 class="font-bold text-sm text-slate-700 mb-3">Resolución por tipo de consulta</h3>
          <div class="space-y-2 mb-5">
            ${[
              { tipo: 'Cambio de plan', total: 892, ai: 94, color: 'teal' },
              { tipo: 'Estado de pedido', total: 1240, ai: 98, color: 'green' },
              { tipo: 'Facturación / Boleta', total: 743, ai: 87, color: 'cyan' },
              { tipo: 'Soporte técnico', total: 1102, ai: 62, color: 'amber' },
              { tipo: 'Reclamos', total: 844, ai: 31, color: 'red' },
            ].map(r => `<div class="bg-white border border-slate-200 rounded-xl p-3 flex items-center gap-3">
              <div class="flex-1">
                <div class="flex justify-between mb-1"><span class="font-bold text-sm text-slate-800">${r.tipo}</span><span class="text-xs text-slate-400">${r.total} conv.</span></div>
                <div class="w-full bg-slate-100 rounded-full h-2"><div class="h-2 rounded-full bg-${r.color}-500" style="width:${r.ai}%"></div></div>
              </div>
              <div class="w-14 text-center"><span class="font-bold text-sm ${r.ai>80?'text-green-600':r.ai>50?'text-amber-600':'text-red-500'}">${r.ai}%</span><div class="text-[9px] text-slate-400">IA</div></div>
            </div>`).join('')}
          </div>
          <div class="bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-start gap-3">
            <span class="material-symbols-outlined text-teal-500 mt-0.5">lightbulb</span>
            <div>
              <p class="text-sm font-semibold text-teal-800 mb-1">Insight del mes</p>
              <p class="text-xs text-teal-700"><strong>Reclamos</strong> tiene la tasa IA más baja (31%). Recomendación: mejorar el knowledge base de políticas de compensación para subir a 50%+ el próximo mes.</p>
            </div>
          </div>
        </div>
      </div>`;
      break;
  }
}

function runChat() {
  const area = document.getElementById('chat-area');
  const actions = document.getElementById('ai-actions');
  if (!area) return;

  let msgIndex = 0;

  function showMessage() {
    if (msgIndex >= chatMessages.length) {
      setTimeout(() => go('RESOLUTION'), 2500);
      return;
    }
    const msg = chatMessages[msgIndex];
    const isAI = msg.from === 'ai';

    if (isAI && msg.action) {
      const actionEl = document.createElement('div');
      actionEl.className = 'bg-teal-50 border border-teal-200 rounded-lg p-2 text-[10px] text-teal-700 font-medium animate-fade-in';
      actionEl.textContent = msg.action;
      if (actions) actions.appendChild(actionEl);
    }

    // Show typing indicator for AI
    if (isAI) {
      const typing = document.createElement('div');
      typing.className = 'flex justify-start';
      typing.id = 'typing-indicator';
      typing.innerHTML = `<div class="bg-white border border-slate-200 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[70%] shadow-sm">
        <div class="flex items-center gap-1"><span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span></div>
      </div>`;
      area.appendChild(typing);
      area.scrollTop = area.scrollHeight;

      setTimeout(() => {
        const t = document.getElementById('typing-indicator');
        if (t) t.remove();
        appendBubble(msg, isAI);
      }, 1200);
    } else {
      appendBubble(msg, isAI);
    }
  }

  function appendBubble(msg, isAI) {
    const bubble = document.createElement('div');
    bubble.className = `flex ${isAI ? 'justify-start' : 'justify-end'} animate-fade-in`;
    const bgCls = isAI ? 'bg-white border border-slate-200 rounded-2xl rounded-bl-sm' : 'bg-teal-600 text-white rounded-2xl rounded-br-sm';
    const textFormatted = msg.text.replace(/\n/g, '<br>');
    bubble.innerHTML = `<div class="${bgCls} px-4 py-2.5 max-w-[70%] shadow-sm">
      ${isAI ? '<div class="flex items-center gap-1 mb-1"><span class="material-symbols-outlined text-teal-500 text-[12px]">smart_toy</span><span class="text-[10px] font-bold text-teal-600">AtendeAI</span></div>' : ''}
      <p class="text-sm leading-relaxed">${textFormatted}</p>
    </div>`;
    area.appendChild(bubble);
    area.scrollTop = area.scrollHeight;

    msgIndex++;
    if (msgIndex < chatMessages.length) {
      setTimeout(showMessage, chatMessages[msgIndex].delay - (chatMessages[msgIndex-1]?.delay || 0));
    } else {
      setTimeout(() => go('RESOLUTION'), 2500);
    }
  }

  setTimeout(showMessage, 600);
}

go('DASHBOARD');

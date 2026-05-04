const mockProspects = [
    {
        name: "Martina Rojas",
        title: "CMO",
        company: "TiendaNube",
        linkedin: "linkedin.com/in/mrojas-tn",
        email: "martina.rojas@tiendanube.com",
        avatar: "https://i.pravatar.cc/150?img=47",
        message: "Hola Martina,\n\nEstuve leyendo tu último artículo sobre cómo el ecosistema de TiendaNube creció un 40% este año en Argentina. Fascinante el enfoque en PyMEs.\n\nHe ayudado a otros equipos de marketing B2B a reducir su CAC usando IA predictiva. Dado tu rol como CMO, creo que te interesaría ver cómo automatizamos la segmentación de leads.\n\n¿Tienes 10 minutos el martes para mostrarte cómo funciona?\n\nSaludos."
    },
    {
        name: "Tomás O'Donnell",
        title: "VP of Marketing",
        company: "Mercado Libre",
        linkedin: "linkedin.com/in/todonnell-meli",
        email: "tomas.odonnell@mercadolibre.com",
        avatar: "https://i.pravatar.cc/150?img=11",
        message: "Hola Tomás,\n\nVi tu participación en el panel de eCommerce Day de la semana pasada. Me quedé pensando en tu punto sobre la saturación de los canales de pauta tradicionales.\n\nEn ETIIA hemos desarrollado agentes de IA que automatizan la prospección outbound sin depender de Ads. Pensando en la escala de Mercado Libre, esto podría optimizar mucho la captura de vendedores grandes.\n\n¿Te parece si te envío un video de 2 minutos mostrando la herramienta en acción?\n\nAbrazo."
    },
    {
        name: "Lucía Fabbri",
        title: "Directora de Marketing",
        company: "Frávega",
        linkedin: "linkedin.com/in/lfabbri",
        email: "lucia.fabbri@fravega.com.ar",
        avatar: "https://i.pravatar.cc/150?img=32",
        message: "Lucía,\n\nNoté que Frávega está empujando muy fuerte su canal de venta online omnicanal este trimestre.\n\nTrabajamos con directores de marketing en retail para escalar sus campañas de retención mediante análisis de sentimiento automatizado con IA. He visto que esto aumenta la conversión cruzada en un 15%.\n\nMe encantaría compartirte un caso de estudio. ¿Te resulta interesante?\n\nSaludos,"
    },
    {
        name: "Santiago Varela",
        title: "Head of Growth",
        company: "Dafiti",
        linkedin: "linkedin.com/in/svarela-growth",
        email: "santiago.varela@dafiti.com.ar",
        avatar: "https://i.pravatar.cc/150?img=68",
        message: "Hola Santiago,\n\nComo Head of Growth, sé que tu foco principal debe estar en optimizar cada etapa del funnel.\n\nHe estado siguiendo la expansión del catálogo de Dafiti. Hemos creado un sistema de enriquecimiento de leads con IA que ahorra unas 15 horas semanales a los equipos de growth, permitiendo mayor personalización a escala.\n\n¿Estarías abierto a una breve charla el próximo jueves sobre cómo esto encaja en tu stack?\n\nSaludos."
    },
    {
        name: "Valeria Rossi",
        title: "CMO",
        company: "Farmacity",
        linkedin: "linkedin.com/in/vrossi-pharma",
        email: "vrossi@farmacity.com.ar",
        avatar: "https://i.pravatar.cc/150?img=44",
        message: "Hola Valeria,\n\nMe encantó tu post reciente sobre la evolución del eCommerce farmacéutico en LATAM y el desafío de la fidelización.\n\nPrecisamente, nuestra agencia ayuda a líderes de marketing a implementar modelos predictivos para anticipar el churn de clientes clave. Pensando en el ecosistema de Farmacity, creo que hay una sinergia enorme.\n\n¿Te enviaría un resumen ejecutivo para que lo evalúes?\n\nUn saludo."
    }
];

const btnHunt = document.getElementById('btn-hunt');
const statusContainer = document.getElementById('status-container');
const resultsContainer = document.getElementById('results-container');
const tableBody = document.getElementById('table-body');
const resultCount = document.getElementById('result-count');
const modal = document.getElementById('message-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close-modal');

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const addLog = (text, type = "info") => {
    const line = document.createElement('div');
    line.className = `mb-1 ${type === 'error' ? 'text-rose-400' : type === 'success' ? 'text-emerald-400' : 'text-slate-300'}`;
    line.innerHTML = `> ${text}`;
    statusContainer.appendChild(line);
    statusContainer.scrollTop = statusContainer.scrollHeight;
};

btnHunt.addEventListener('click', async () => {
    // Reset UI
    btnHunt.disabled = true;
    btnHunt.innerHTML = `<span class="material-symbols-outlined spinner text-sm">sync</span> Buscando...`;
    statusContainer.innerHTML = '';
    tableBody.innerHTML = '';
    statusContainer.classList.remove('hidden');
    resultsContainer.classList.add('hidden');
    resultCount.textContent = `0 / 5 encontrados`;

    // Start Simulation
    addLog("Iniciando Agente ProspectAI v2.4...", "success");
    await sleep(800);
    addLog("Interpretando query: 'CMO, ecommerce, Argentina'");
    await sleep(1000);
    addLog("Consultando bases de datos de Apollo y LinkedIn Sales Navigator...", "info");
    await sleep(1500);
    addLog("Filtrando prospectos por nivel de seniority e industria...", "info");
    await sleep(1200);
    
    resultsContainer.classList.remove('hidden');
    
    // Process each prospect
    for (let i = 0; i < mockProspects.length; i++) {
        const prospect = mockProspects[i];
        
        addLog(`[Prospecto ${i+1}] Analizando perfil de ${prospect.name} (${prospect.company})...`);
        await sleep(800);
        
        addLog(`[Prospecto ${i+1}] Extrayendo últimos posts y biografía... OK`, "success");
        await sleep(600);
        
        addLog(`[Prospecto ${i+1}] Buscando email corporativo...`);
        await sleep(1000);
        addLog(`[Prospecto ${i+1}] Verificando SMTP para ${prospect.email}... Seguro ✅`, "success");
        await sleep(500);
        
        addLog(`[Prospecto ${i+1}] Redactando mensaje hiper-personalizado con LLM...`);
        await sleep(1200);

        // Inject Row
        const tr = document.createElement('tr');
        tr.className = "animate-fade-in hover:bg-slate-50 transition-colors";
        tr.innerHTML = `
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                        <img class="h-10 w-10 rounded-full border border-slate-200" src="${prospect.avatar}" alt="">
                    </div>
                    <div class="ml-4">
                        <div class="text-sm font-semibold text-slate-900">${prospect.name}</div>
                        <div class="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                            <span class="material-symbols-outlined text-[14px]">link</span> ${prospect.linkedin}
                        </div>
                    </div>
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm text-slate-900 font-medium">${prospect.title}</div>
                <div class="text-sm text-slate-500">${prospect.company}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
                <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-medium">
                    <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    ${prospect.email}
                </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button onclick="viewMessage(${i})" class="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition flex items-center gap-1 border border-blue-100">
                    <span class="material-symbols-outlined text-[16px]">visibility</span> Ver Draft
                </button>
            </td>
        `;
        tableBody.appendChild(tr);
        resultCount.textContent = `${i+1} / 5 encontrados`;
        
        addLog(`[Prospecto ${i+1}] Finalizado y añadido a la tabla.`, "success");
        await sleep(400);
    }

    addLog("Búsqueda y generación completada exitosamente.", "success");
    btnHunt.disabled = false;
    btnHunt.innerHTML = `Buscar <span class="material-symbols-outlined text-sm">send</span>`;
});

// Modal Logic
window.viewMessage = (index) => {
    modalContent.textContent = mockProspects[index].message;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
};

closeModal.addEventListener('click', () => {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
});

modal.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
});

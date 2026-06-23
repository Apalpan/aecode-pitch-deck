const slides = [
  {
    label: "Hook",
    theme: "dark",
    title: "La tecnología avanza más rápido que la capacidad de las personas para adoptarla.",
    points: ["Herramientas ≠ adopción", "Aprender ≠ aplicar", "Adopción = productividad"],
    visual: "mascot",
    notes: [
      "La tecnología avanza más rápido que la capacidad de las personas para adoptarla.",
      "La transformación digital no falla solo por falta de herramientas. Muchas veces falla porque los equipos no logran adoptarlas.",
      "AECODE nace para cerrar esa brecha en construcción.",
    ],
  },
  {
    label: "Oportunidad",
    theme: "light",
    title: "Mientras el mundo siga construyendo, su gente tendrá que aprender nuevas formas de trabajar.",
    points: ["+280M personas trabajan en construcción", "Digitalización BIM · Automatización · IA · Herramientas digitales"],
    proof: [
      ["Talento global", "+280M", "Dato de trabajo para dimensionar el mercado laboral de construcción."],
      ["Cambio estructural", "AEC", "Diseño, coordinación, planificación y gestión están cambiando por tecnología."],
    ],
    visual: "loop",
    loop: ["Arquitectos", "Ingenieros", "Técnicos", "Empresas"],
    notes: [
      "La construcción no se detiene.",
      "Se seguirán construyendo viviendas, hospitales, carreteras, puentes e infraestructura.",
      "Más de 280 millones de personas trabajan en construcción en el mundo.",
      "Y todas enfrentan una transformación: la forma de diseñar, coordinar, planificar y gestionar proyectos está cambiando por la tecnología.",
    ],
  },
  {
    label: "Cambio inevitable",
    theme: "dark",
    title: "Adoptar tecnología ya no es opcional.",
    points: ["Digitalización BIM", "Automatización", "IA", "Productividad"],
    visual: "loop",
    loop: ["Diseñar", "Coordinar", "Gestionar", "Construir"],
    notes: [
      "La industria está entrando a una etapa donde la digitalización BIM, la automatización y la IA ya forman parte del trabajo real.",
      "El reto no es solo conocer nuevas herramientas.",
      "El reto es saber aplicarlas para ahorrar tiempo, coordinar mejor, reducir tareas repetitivas y tomar mejores decisiones.",
    ],
  },
  {
    label: "Problema",
    theme: "light",
    title: "No falta contenido. Falta una ruta clara para aplicar.",
    points: ["Muchos cursos", "Poca claridad", "Poca práctica", "Baja adopción"],
    visual: "loop",
    loop: ["Contenido", "Tutoriales", "Webinars", "IA"],
    notes: [
      "Hoy no faltan cursos, tutoriales, webinars, comunidades ni respuestas con IA.",
      "El problema es que el aprendizaje está fragmentado.",
      "Muchos profesionales no saben qué aprender primero, qué les sirve realmente o cómo aplicarlo para mejorar su trabajo.",
      "Y muchas empresas capacitan, pero no siempre logran que esa capacitación cambie la forma de trabajar.",
    ],
  },
  {
    label: "Costo real",
    theme: "dark",
    title: "Cuando el aprendizaje no se aplica, el costo llega al proyecto.",
    points: ["Sobrecostos · retrasos · retrabajo · baja productividad"],
    proof: [
      ["Grandes proyectos", "+20% tiempo", "McKinsey: grandes proyectos suelen terminar 20% más tarde."],
      ["Presupuesto", "hasta +80%", "McKinsey: pueden llegar hasta 80% sobre presupuesto."],
      ["Profesionales", "35% tiempo", "Autodesk/FMI: más de 14 horas por semana en actividades no productivas."],
    ],
    source: "Fuentes backup: McKinsey; Autodesk/FMI.",
    visual: "loop",
    loop: ["Errores", "Retrabajo", "Procesos manuales", "Pérdida de tiempo"],
    notes: [
      "En construcción, aprender tarde cuesta caro.",
      "Un error puede convertirse en retrabajo. Una mala coordinación puede retrasar una entrega. Un proceso manual puede consumir horas que el proyecto ya no tiene.",
      "McKinsey reporta que grandes proyectos suelen tomar 20% más tiempo y pueden estar hasta 80% sobre presupuesto.",
      "Autodesk/FMI reporta que profesionales de construcción pueden dedicar 35% de su tiempo, más de 14 horas por semana, a actividades no productivas.",
      "El problema no es solo educativo. Es operativo: afecta al profesional, a la empresa y al proyecto.",
    ],
  },
  {
    label: "Solución",
    theme: "dark",
    title: "AECODE acelera la adopción tecnológica en construcción.",
    points: ["Aprende tecnología", "Aplícala en proyectos reales", "Construye mejor"],
    visual: "mascot",
    notes: [
      "AECODE ayuda a profesionales y empresas de construcción a aprender y aplicar digitalización BIM, automatización, IA y herramientas digitales en el trabajo real.",
      "No vendemos solo cursos.",
      "Convertimos aprendizaje técnico en adopción tecnológica, productividad y mejores resultados.",
    ],
  },
  {
    label: "Producto",
    theme: "light",
    title: "Rutas prácticas por rol.",
    points: ["Diagnóstico → Ruta → Microlearning → Práctica → Evidencia"],
    visual: "loop",
    loop: ["Diagnóstico", "Ruta", "Microlearning", "Práctica", "Evidencia"],
    notes: [
      "El usuario identifica su nivel, elige un rol o especialidad y avanza por una ruta práctica.",
      "Aprende con cápsulas cortas, practica con casos reales y genera evidencia de avance.",
      "Así pasamos de aprendizaje disperso a progreso guiado.",
    ],
  },
  {
    label: "Demo",
    theme: "dark",
    title: "Del aprendizaje disperso al progreso guiado.",
    points: ["Dashboard · Ruta · Práctica · Evidencia · Progreso"],
    visual: "loop",
    loop: ["Dashboard", "Ruta", "Práctica", "Evidencia", "Progreso"],
    notes: [
      "Aquí mostramos cómo el usuario entra, recibe una ruta, consume cápsulas, desarrolla una práctica y visualiza su avance.",
      "El objetivo es que el aprendizaje no se quede en contenido.",
      "Debe avanzar hacia aplicación.",
    ],
  },
  {
    label: "IA",
    theme: "light",
    title: "IA como coach profesional.",
    points: ["Diagnostica", "Recomienda", "Guía", "Mide"],
    visual: "mascot",
    notes: [
      "La IA no es decoración.",
      "Diagnostica brechas, recomienda qué aprender, sugiere prácticas y mide progreso.",
      "ChatGPT puede ser la biblioteca.",
      "AECODE es el sistema que entrena al profesional para aplicar tecnología en construcción.",
    ],
  },
  {
    label: "Mercado",
    theme: "dark",
    title: "Mercado inicial: formación digital AEC LATAM.",
    points: ["TAM: US$360M", "SAM: US$87.5M", "SOM 3 años: US$2.5M"],
    proof: [
      ["TAM", "US$360M", "Mercado objetivo de formación digital AEC LATAM."],
      ["SAM", "US$87.5M", "Segmento servible inicial."],
      ["SOM", "US$2.5M", "Meta de captura a 3 años."],
    ],
    visual: "loop",
    loop: ["AEC", "LATAM", "Upskilling", "Adopción"],
    notes: [
      "Nuestro mercado inicial es formación digital especializada para construcción en Latinoamérica.",
      "Estimamos un TAM de 360 millones de dólares, un SAM de 87.5 millones y una meta de capturar 2.5 millones en tres años.",
      "Eso representa menos del 3% del mercado servible.",
    ],
  },
  {
    label: "B2B2C",
    theme: "light",
    title: "Empresa paga. Profesional aprende. Industria valida.",
    points: ["CAC ↓ · LTV ↑ · Productividad ↑"],
    visual: "loop",
    loop: ["Empresa", "Profesional", "Industria", "AECODE"],
    notes: [
      "El modelo B2B2C conecta todo.",
      "La empresa paga o impulsa la capacitación.",
      "El profesional aprende y aplica.",
      "Y la industria valida mejor el talento.",
      "Esto reduce CAC, aumenta LTV y conecta aprendizaje con productividad.",
    ],
  },
  {
    label: "Modelo",
    theme: "dark",
    title: "Live valida. B2B ancla. On-demand AI escala.",
    points: ["B2C Live", "B2B", "On-demand AI"],
    visual: "loop",
    loop: ["Caja", "Contratos", "Activos digitales", "Escala"],
    notes: [
      "B2C Live genera caja, comunidad y validación.",
      "B2B aporta contratos de mayor valor y recurrencia.",
      "On-demand AI convierte conocimiento validado en activos digitales escalables.",
    ],
  },
  {
    label: "Tracción",
    theme: "light",
    title: "US$30K → US$120K → US$220K E.",
    points: ["2025: x4 crecimiento", "La demanda ya está validada"],
    proof: [
      ["2024", "US$30K", "Validación inicial."],
      ["2025", "US$120K", "x4 crecimiento."],
      ["2026E", "US$220K", "Modelo más diversificado."],
    ],
    visual: "loop",
    loop: ["2024", "2025", "2026E", "2027"],
    notes: [
      "En 2024 vendimos 30 mil dólares.",
      "En 2025 crecimos a 120 mil dólares, cuatro veces más.",
      "Para 2026 proyectamos 220 mil dólares.",
      "La demanda ya está validada.",
    ],
  },
  {
    label: "Revenue mix",
    theme: "dark",
    title: "El revenue se vuelve más escalable.",
    points: ["2024: 100% B2C Live", "2026E: 40% B2B + On-demand", "2027 Target: 62% B2B + On-demand"],
    visual: "loop",
    loop: ["Live", "B2B", "On-demand", "LATAM"],
    notes: [
      "Lo importante no es solo crecer.",
      "Es crecer mejor.",
      "Estamos migrando de un modelo basado en live training hacia B2B y On-demand AI, líneas de mayor margen y escalabilidad.",
    ],
  },
  {
    label: "Growth",
    theme: "light",
    title: "Comunidad reduce CAC.",
    points: ["Comunidad → Live → Microlearning → B2B2C → LATAM"],
    visual: "loop",
    loop: ["Comunidad", "Live", "Microlearning", "B2B2C", "LATAM"],
    notes: [
      "No partimos de tráfico frío.",
      "Partimos de una comunidad vertical, programas validados, expertos y alianzas.",
      "Ese motor nos permite activar demanda, vender y escalar.",
    ],
  },
  {
    label: "Métrica norte",
    theme: "dark",
    title: "Medimos adopción real.",
    points: ["Prácticas aplicadas / mes", "% revenue B2B + On-demand"],
    visual: "loop",
    loop: ["Aplicación", "Evidencia", "Retención", "Revenue escalable"],
    notes: [
      "No medimos solo videos vistos.",
      "Medimos prácticas aplicadas completadas por mes.",
      "Y como negocio, medimos cuánto revenue viene de líneas escalables.",
    ],
  },
  {
    label: "Diferenciación",
    theme: "light",
    title: "No competimos por más videos. Competimos por adopción tecnológica.",
    points: ["Vertical AEC", "Rutas prácticas", "Expertos del sector", "Comunidad", "IA especializada"],
    visual: "mascot",
    notes: [
      "Las plataformas horizontales venden contenido.",
      "AECODE compite con profundidad vertical en construcción: rutas prácticas, expertos del sector, comunidad e IA especializada.",
    ],
  },
  {
    label: "Roadmap",
    theme: "dark",
    title: "De validación a plataforma escalable.",
    points: ["2024: validación", "2025: x4 crecimiento", "2026: B2B + On-demand AI", "2027: expansión LATAM"],
    visual: "loop",
    loop: ["Validación", "Crecimiento", "Plataforma", "Expansión"],
    notes: [
      "Primero validamos demanda.",
      "Luego diversificamos ingresos.",
      "Ahora estamos convirtiendo esa operación en una plataforma escalable para la región.",
    ],
  },
  {
    label: "Equipo",
    theme: "light",
    title: "Equipo completo para construir, vender y escalar.",
    points: ["+12 personas", "Producto · Tech · IA", "Comercial · Growth · Finanzas"],
    visual: "loop",
    loop: ["Producto", "Tech", "IA", "Comercial", "Growth", "Finanzas"],
    notes: [
      "Tenemos un equipo de más de 12 personas con capacidades en producto, desarrollo, sistemas, IA, data, comercial, growth, academia y finanzas.",
      "No es un equipo que recién va a validar.",
      "Es el equipo que ya vendió y creció cuatro veces.",
    ],
  },
  {
    label: "Ask",
    theme: "dark",
    title: "US$125K para escalar lo validado.",
    points: ["60% IA + plataforma", "30% growth B2B2C / LATAM", "10% microlearning"],
    proof: [
      ["IA + plataforma", "60%", "AI Coach, rutas, dashboard, evidencia, analytics."],
      ["Growth", "30%", "Adquisición, alianzas y ventas B2B2C/LATAM."],
      ["Microlearning", "10%", "Cápsulas, prácticas y rutas reutilizables."],
    ],
    visual: "mascot",
    notes: [
      "Buscamos US$125K para acelerar IA, plataforma, microlearning y B2B2C.",
      "El capital no financia una idea.",
      "Financia la conversión de una operación validada en una plataforma escalable.",
    ],
  },
  {
    label: "Cierre",
    theme: "dark",
    title: "AECODE: aprende, aplica, construye mejor.",
    points: ["La construcción se transforma cuando su gente aplica tecnología en el trabajo real."],
    visual: "mascot",
    notes: [
      "La construcción no se transforma solo con más contenido ni más herramientas.",
      "Se transforma cuando su gente aprende a aplicar tecnología en el trabajo real.",
      "AECODE existe para acelerar esa adopción tecnológica en construcción.",
      "Aprende, aplica, construye mejor.",
    ],
  },
];

const slideCard = document.querySelector("#slide-card");
const slideList = document.querySelector("#slide-list");
const notesPanel = document.querySelector("#notes-panel");
const notesTitle = document.querySelector("#notes-title");
const speakerNotes = document.querySelector("#speaker-notes");
const progressLine = document.querySelector("#progress-line");
const mobileCounter = document.querySelector("#mobile-counter");
const timerToggle = document.querySelector("#timer-toggle");
const printDeck = document.querySelector("#print-deck");

let current = 0;
let timerId = null;
let remaining = 300;

const escapeHtml = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderVisual = (slide) => {
  if (slide.visual === "mascot") {
    return `<img class="mascot" src="./assets/aecodito.png" alt="" aria-hidden="true" />`;
  }

  const items = slide.loop || [];
  return `<div class="loop-stack">${items.map((item) => `<div class="loop-item">${escapeHtml(item)}</div>`).join("")}</div>`;
};

const renderProof = (slide) =>
  slide.proof
    ? `<div class="proof-grid">${slide.proof
        .map(
          ([label, value, text]) => `
            <article class="proof-card">
              <span>${escapeHtml(label)}</span>
              <strong>${escapeHtml(value)}</strong>
              <p>${escapeHtml(text)}</p>
            </article>`
        )
        .join("")}</div>`
    : "";

const renderSlide = () => {
  const slide = slides[current];
  slideCard.className = `slide-card ${slide.theme === "light" ? "light" : ""}`;
  slideCard.innerHTML = `
    <div class="slide-content">
      <span class="slide-kicker">${String(current + 1).padStart(2, "0")} / ${escapeHtml(slide.label)}</span>
      <h1 class="slide-title">${escapeHtml(slide.title)}</h1>
      <ul class="slide-points">${slide.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
      ${renderProof(slide)}
      ${slide.source ? `<span class="source-chip">${escapeHtml(slide.source)}</span>` : ""}
    </div>
    <div class="visual-panel">${renderVisual(slide)}</div>
  `;

  notesTitle.textContent = `${String(current + 1).padStart(2, "0")} · ${slide.label}`;
  speakerNotes.innerHTML = slide.notes.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  mobileCounter.textContent = `${current + 1} / ${slides.length}`;
  progressLine.style.width = `${((current + 1) / slides.length) * 100}%`;

  document.querySelectorAll(".slide-link").forEach((button, index) => {
    button.classList.toggle("active", index === current);
  });
};

const goTo = (index) => {
  current = Math.max(0, Math.min(slides.length - 1, index));
  renderSlide();
  if (window.innerWidth <= 1180) {
    window.scrollTo(0, 0);
  }
};

const next = () => goTo(current + 1);
const prev = () => goTo(current - 1);

slideList.innerHTML = slides
  .map(
    (slide, index) => `
      <button class="slide-link" type="button" data-index="${index}">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong>${escapeHtml(slide.label)}</strong>
      </button>`
  )
  .join("");

slideList.addEventListener("click", (event) => {
  const button = event.target.closest(".slide-link");
  if (!button) return;
  goTo(Number(button.dataset.index));
});

document.querySelector("#next-btn").addEventListener("click", next);
document.querySelector("#prev-btn").addEventListener("click", prev);
document.querySelector("#mobile-next").addEventListener("click", next);
document.querySelector("#mobile-prev").addEventListener("click", prev);
document.querySelector("#print-btn").addEventListener("click", () => window.print());

document.querySelector("#notes-toggle").addEventListener("click", () => {
  notesPanel.classList.toggle("hidden");
  document.querySelector(".deck-shell").classList.toggle("notes-hidden");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" || event.key === " ") next();
  if (event.key === "ArrowLeft") prev();
  if (event.key === "Home") goTo(0);
  if (event.key === "End") goTo(slides.length - 1);
});

const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
};

const stopTimer = () => {
  clearInterval(timerId);
  timerId = null;
  document.body.classList.remove("timer-running");
  timerToggle.textContent = formatTime(remaining);
};

timerToggle.addEventListener("click", () => {
  if (timerId) {
    stopTimer();
    return;
  }
  if (remaining <= 0) remaining = 300;
  document.body.classList.add("timer-running");
  timerToggle.textContent = formatTime(remaining);
  timerId = setInterval(() => {
    remaining -= 1;
    timerToggle.textContent = formatTime(Math.max(remaining, 0));
    if (remaining <= 0) stopTimer();
  }, 1000);
});

printDeck.innerHTML = slides
  .map(
    (slide, index) => `
      <article class="print-slide">
        <p>${String(index + 1).padStart(2, "0")} / ${escapeHtml(slide.label)}</p>
        <h2>${escapeHtml(slide.title)}</h2>
        <ul>${slide.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
        <h3>Guion</h3>
        ${slide.notes.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("")}
      </article>`
  )
  .join("");

renderSlide();

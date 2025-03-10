// Contenido en inglés y español
const contentData = {
    en: {
        heroTitle: "Software Developer Career",
        heroSubtitle: "Building the future, one line of code at a time",
        introTitle: "What does this profession involve?",
        introText: "Building, testing, and maintaining software applications using programming languages and frameworks.",
        footerText: "RAYO PALATIANOS - IES CINOC",
        sections: [
            {
                title: "Main Responsibilities",
                items: [
                    "Writing clean, efficient code",
                    "Designing software architecture and databases",
                    "Debugging and troubleshooting issues",
                    "Collaborating with designers and developers",
                    "Running tests to ensure quality",
                    "Keeping up with new technologies"
                ]
            },
            {
                title: "Required Skills",
                items: [
                    "Programming: Python, JavaScript",
                    "Database Management: SQL, NoSQL",
                    "Web Development: HTML, CSS, React"
                ]
            },
            {
                title: "Work Opportunities",
                items: [
                    "Tech companies and startups",
                    "Software giants (Google, Microsoft, Amazon)",
                    "Banks, hospitals, and enterprises",
                    "Freelance or remote work"
                ]
            },
            {
                title: "Why Choose This Career?",
                items: [
                    "Passion for technology and problem-solving",
                    "High demand and great salary potential",
                    "Opportunity to work on innovative projects",
                    "Flexibility with remote options"
                ]
            }
        ]
    },
    es: {
        heroTitle: "Carrera de Desarrollador de Software",
        heroSubtitle: "Construyendo el futuro, una línea de código a la vez",
        introTitle: "¿De qué trata esta profesión?",
        introText: "Construcción, prueba y mantenimiento de aplicaciones de software utilizando lenguajes de programación y frameworks.",
        footerText: "RAYO PALATIANOS - IES CINOC",
        sections: [
            {
                title: "Responsabilidades Principales",
                items: [
                    "Escribir código limpio y eficiente",
                    "Diseñar arquitecturas de software y bases de datos",
                    "Depurar y solucionar problemas",
                    "Colaborar con diseñadores y desarrolladores",
                    "Realizar pruebas para asegurar calidad",
                    "Mantenerse actualizado con nuevas tecnologías"
                ]
            },
            {
                title: "Habilidades Requeridas",
                items: [
                    "Programación: Python, JavaScript",
                    "Gestión de Bases de Datos: SQL, NoSQL",
                    "Desarrollo Web: HTML, CSS, React"
                ]
            },
            {
                title: "Oportunidades Laborales",
                items: [
                    "Empresas tecnológicas y startups",
                    "Gigantes del software (Google, Microsoft, Amazon)",
                    "Bancos, hospitales y grandes empresas",
                    "Trabajo freelance o remoto"
                ]
            },
            {
                title: "¿Por qué elegir esta carrera?",
                items: [
                    "Pasión por la tecnología y la resolución de problemas",
                    "Alta demanda y excelente potencial salarial",
                    "Oportunidad de trabajar en proyectos innovadores",
                    "Flexibilidad con opciones remotas"
                ]
            }
        ]
    }
};

// Función para actualizar el contenido según el idioma seleccionado
function updateContent(language) {
    const data = contentData[language];

    document.getElementById("hero-title").innerText = data.heroTitle;
    document.getElementById("hero-subtitle").innerText = data.heroSubtitle;
    document.getElementById("footer-text").innerText = data.footerText;

    let contentHTML = `<h2>${data.introTitle}</h2><p>${data.introText}</p>`;

    data.sections.forEach(section => {
        contentHTML += `
            <div class="accordion">
                <div class="accordion-header">
                    <h3 class="accordion-title">${section.title}</h3>
                    <i class="fas fa-chevron-down accordion-icon"></i>
                </div>
                <div class="accordion-content">
                    <ul>
                        ${section.items.map(item => `<li>${item}</li>`).join("")}
                    </ul>
                </div>
            </div>
        `;
    });

    document.getElementById("content").innerHTML = contentHTML;

    // Reasigna los eventos a los acordeones
    addAccordionFunctionality();
}

/// Función para manejar los acordeones
function addAccordionFunctionality() {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener("click", function () {
            const content = this.querySelector('.accordion-content');
            const icon = this.querySelector('.accordion-icon');

            // Alternar el acordeón actual
            const isActive = content.style.maxHeight;

            // Cierra todos los acordeones y les aplica opacidad
            accordions.forEach(acc => {
                acc.classList.remove("active");
                acc.classList.add("inactive");
                acc.querySelector('.accordion-content').style.maxHeight = null;
            });

            if (!isActive) {
                // Si el acordeón estaba cerrado, lo abrimos
                content.style.maxHeight = content.scrollHeight + "px";
                this.classList.add("active");
                this.classList.remove("inactive");
            }

            // Verificar si todos están cerrados y restablecer la opacidad
            const anyOpen = [...accordions].some(acc => acc.classList.contains("active"));
            if (!anyOpen) {
                accordions.forEach(acc => acc.classList.remove("inactive"));
            }
        });
    });
}

// Evento para cambiar el idioma
document.getElementById("languageToggle").addEventListener("change", function () {
    updateContent(this.checked ? "es" : "en");
});

// Cargar el contenido en inglés por defecto
updateContent("en");

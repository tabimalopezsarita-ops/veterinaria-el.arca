/* =========================================================
   1. TRADUCCIONES
   Cada idioma tiene las mismas "claves". La clave coincide con
   el atributo data-i18n que pusimos en el HTML.
   ========================================================= */
const traducciones = {

    es: {
        nav_servicios: "◉ Servicios",
        nav_contacto: "☎ Hablemos",
        nav_ubicacion: "⌖ Ubícanos",
        nav_redes: "♡ Síguenos",
        hero_etiqueta: "CLÍNICA VETERINARIA CERCANA",
        hero_titulo: "Cuidamos a tus mejores amigos",
        hero_texto: "Atención veterinaria cercana y profesional para acompañar cada etapa de la vida de tu mascota.",
        agendar: "📅 Agendar una cita",
        conocenos: "Conócenos",
        nosotros_boton: "🐾 Nosotros",
        nosotros_cuadro_titulo: "Nosotros",
        nosotros_cuadro_texto1: "Somos El Arca, una veterinaria en Pereira, Risaralda, dedicada al cuidado integral de tus mascotas en cada etapa de su vida.",
        nosotros_cuadro_texto2: "Te acompañamos con consulta general, vacunación, cirugía y baño, con atención cercana y responsable de lunes a sábado, de 8:00 a.m. a 5:00 p.m.",
        servicios_etiqueta: "NUESTROS SERVICIOS",
        servicios_titulo: "Todo para el bienestar de tu mascota",
        consulta_titulo: "Consulta general",
        consulta_texto: "Orientación y revisión para acompañar su bienestar.",
        vacunacion_titulo: "Vacunación",
        vacunacion_texto: "Acompañamiento para mantener al día sus cuidados.",
        cirugia_titulo: "Cirugía",
        cirugia_texto: "Atención programada con un enfoque responsable.",
        bano_titulo: "Baño",
        bano_texto: "Un momento de higiene y cuidado para tu mascota.",
        contacto_etiqueta: "CONTACTO",
        contacto_titulo: "Estamos aquí para ayudarte",
        contacto_texto: "Escríbenos o llámanos para conocer disponibilidad y resolver tus dudas.",
        telefono: "Teléfono",
        correo: "Correo",
        horario: "Horario",
        horario_valor: "Lun-Sáb: 8:00 a.m.-5:00 p.m.",
        ubicacion_etiqueta: "UBICACIÓN",
        ubicacion_titulo: "Tu clínica amiga, cerca de ti",
        ver_mapa: "↗ Ver en el mapa",
        redes_etiqueta: "REDES SOCIALES",
        redes_titulo: "La comunidad de El Arca",
        redes_texto: "Comparte con nosotros los momentos más tiernos de tus mejores amigos.",
        pie: "Cuidamos con amor",
        idioma_titulo: "Cambiar idioma:"
    },

    en: {
        nav_servicios: "◉ Services",
        nav_contacto: "☎ Contact us",
        nav_ubicacion: "⌖ Find us",
        nav_redes: "♡ Follow us",
        hero_etiqueta: "YOUR LOCAL VETERINARY CLINIC",
        hero_titulo: "We care for your best friends",
        hero_texto: "Close and professional veterinary care to support every stage of your pet's life.",
        agendar: "📅 Book an appointment",
        conocenos: "Get to know us",
        nosotros_boton: "🐾 About us",
        nosotros_cuadro_titulo: "About us",
        nosotros_cuadro_texto1: "We are El Arca, a veterinary clinic in Pereira, Risaralda, dedicated to the complete care of your pets at every stage of their lives.",
        nosotros_cuadro_texto2: "We support you with general check-ups, vaccination, surgery and bath, with close and responsible care Monday to Saturday, 8:00 a.m. to 5:00 p.m.",
        servicios_etiqueta: "OUR SERVICES",
        servicios_titulo: "Everything for your pet's well-being",
        consulta_titulo: "General check-up",
        consulta_texto: "Guidance and examination to support their well-being.",
        vacunacion_titulo: "Vaccination",
        vacunacion_texto: "Support to keep their care up to date.",
        cirugia_titulo: "Surgery",
        cirugia_texto: "Scheduled care with a responsible approach.",
        bano_titulo: "Bath",
        bano_texto: "A moment of hygiene and care for your pet.",
        contacto_etiqueta: "CONTACT",
        contacto_titulo: "We're here to help you",
        contacto_texto: "Write or call us to check availability and answer your questions.",
        telefono: "Phone",
        correo: "Email",
        horario: "Hours",
        horario_valor: "Mon-Sat: 8:00 a.m.-5:00 p.m.",
        ubicacion_etiqueta: "LOCATION",
        ubicacion_titulo: "Your friendly clinic, close to you",
        ver_mapa: "↗ View on map",
        redes_etiqueta: "SOCIAL MEDIA",
        redes_titulo: "The El Arca community",
        redes_texto: "Share with us the sweetest moments of your best friends.",
        pie: "We care with love",
        idioma_titulo: "Change language:"
    },

    fr: {
        nav_servicios: "◉ Services",
        nav_contacto: "☎ Contactez-nous",
        nav_ubicacion: "⌖ Nous trouver",
        nav_redes: "♡ Suivez-nous",
        hero_etiqueta: "VOTRE CLINIQUE VÉTÉRINAIRE DE PROXIMITÉ",
        hero_titulo: "Nous prenons soin de vos meilleurs amis",
        hero_texto: "Des soins vétérinaires de proximité et professionnels pour accompagner chaque étape de la vie de votre animal.",
        agendar: "📅 Prendre rendez-vous",
        conocenos: "Faites notre connaissance",
        nosotros_boton: "🐾 À propos",
        nosotros_cuadro_titulo: "À propos de nous",
        nosotros_cuadro_texto1: "Nous sommes El Arca, une clinique vétérinaire à Pereira, Risaralda, dédiée aux soins complets de vos animaux à chaque étape de leur vie.",
        nosotros_cuadro_texto2: "Nous vous accompagnons avec des consultations générales, la vaccination, la chirurgie et le bain, avec une attention de proximité et responsable du lundi au samedi, de 8h00 à 17h00.",
        servicios_etiqueta: "NOS SERVICES",
        servicios_titulo: "Tout pour le bien-être de votre animal",
        consulta_titulo: "Consultation générale",
        consulta_texto: "Conseils et examen pour accompagner son bien-être.",
        vacunacion_titulo: "Vaccination",
        vacunacion_texto: "Un suivi pour garder ses soins à jour.",
        cirugia_titulo: "Chirurgie",
        cirugia_texto: "Des soins programmés avec une approche responsable.",
        bano_titulo: "Bain",
        bano_texto: "Un moment d'hygiène et de soin pour votre animal.",
        contacto_etiqueta: "CONTACT",
        contacto_titulo: "Nous sommes là pour vous aider",
        contacto_texto: "Écrivez-nous ou appelez-nous pour connaître nos disponibilités et répondre à vos questions.",
        telefono: "Téléphone",
        correo: "E-mail",
        horario: "Horaires",
        horario_valor: "Lun-Sam : 8h00-17h00",
        ubicacion_etiqueta: "LOCALISATION",
        ubicacion_titulo: "Votre clinique amie, près de chez vous",
        ver_mapa: "↗ Voir sur la carte",
        redes_etiqueta: "RÉSEAUX SOCIAUX",
        redes_titulo: "La communauté d'El Arca",
        redes_texto: "Partagez avec nous les moments les plus tendres de vos meilleurs amis.",
        pie: "Nous soignons avec amour",
        idioma_titulo: "Changer de langue :"
    },

    zh: {
        nav_servicios: "◉ 服务",
        nav_contacto: "☎ 联系我们",
        nav_ubicacion: "⌖ 找到我们",
        nav_redes: "♡ 关注我们",
        hero_etiqueta: "贴心的宠物诊所",
        hero_titulo: "我们呵护您最好的朋友",
        hero_texto: "亲切专业的兽医服务，陪伴您的宠物度过生命中的每个阶段。",
        agendar: "📅 预约就诊",
        conocenos: "了解我们",
        nosotros_boton: "🐾 关于我们",
        nosotros_cuadro_titulo: "关于我们",
        nosotros_cuadro_texto1: "我们是 El Arca，一家位于佩雷拉（里萨拉尔达省）的兽医诊所，致力于在宠物生命的每个阶段提供全方位的关怀。",
        nosotros_cuadro_texto2: "我们提供常规检查、疫苗接种、外科手术和洗澡服务，周一至周六上午8:00至下午5:00，为您提供亲切而负责任的照护。",
        servicios_etiqueta: "我们的服务",
        servicios_titulo: "为您宠物的健康提供全方位关怀",
        consulta_titulo: "常规检查",
        consulta_texto: "提供指导与检查，守护它的健康。",
        vacunacion_titulo: "疫苗接种",
        vacunacion_texto: "帮助您按时完成它的各项保健。",
        cirugia_titulo: "外科手术",
        cirugia_texto: "以负责任的态度提供预约手术服务。",
        bano_titulo: "洗澡",
        bano_texto: "为您的宠物带来清洁与呵护的时刻。",
        contacto_etiqueta: "联系方式",
        contacto_titulo: "我们随时为您提供帮助",
        contacto_texto: "欢迎来信或来电，了解预约时间并解答您的疑问。",
        telefono: "电话",
        correo: "邮箱",
        horario: "营业时间",
        horario_valor: "周一至周六：上午8:00-下午5:00",
        ubicacion_etiqueta: "位置",
        ubicacion_titulo: "近在身边的友好诊所",
        ver_mapa: "↗ 在地图上查看",
        redes_etiqueta: "社交媒体",
        redes_titulo: "El Arca 大家庭",
        redes_texto: "与我们分享您最好朋友们最温馨的时刻。",
        pie: "用爱呵护",
        idioma_titulo: "切换语言："
    }
};


/* =========================================================
   2. FUNCIÓN QUE CAMBIA EL IDIOMA
   ========================================================= */
function cambiarIdioma(idioma) {

    // Busca todos los elementos que tengan data-i18n y cambia su texto
    document.querySelectorAll("[data-i18n]").forEach(function (elemento) {
        const clave = elemento.getAttribute("data-i18n");
        elemento.textContent = traducciones[idioma][clave];
    });

    // Actualiza el idioma declarado de la página
    document.documentElement.lang = idioma;

    // Marca en negrita el idioma activo dentro del menú
    document.querySelectorAll("#menuIdiomas button").forEach(function (boton) {
        boton.classList.toggle("activo", boton.getAttribute("data-idioma") === idioma);
    });

    // Guarda la elección para la próxima vez que abran la página
    try {
        localStorage.setItem("idioma", idioma);
    } catch (error) {
        // Si el navegador no permite guardar, simplemente no se guarda
    }
}


/* =========================================================
   3. MENÚ HAMBURGUESA
   El CSS se encarga de abrir la lista (casilla oculta #chkMenu).
   Aquí solo cerramos el menú y cambiamos el idioma.
   ========================================================= */
const casillaMenu = document.getElementById("chkMenu");

function cerrarMenu() {
    if (casillaMenu) {
        casillaMenu.checked = false;
    }
}

// Al elegir un idioma: lo cambia y cierra el menú
document.querySelectorAll("#menuIdiomas button").forEach(function (boton) {
    boton.addEventListener("click", function () {
        cambiarIdioma(boton.getAttribute("data-idioma"));
        cerrarMenu();
    });
});

// Si pulsan fuera del selector de idioma, el menú se cierra
document.addEventListener("click", function (evento) {
    if (!evento.target.closest(".selector-idioma")) {
        cerrarMenu();
    }
});


/* =========================================================
   4. SCROLL SUAVE PARA LOS ENLACES DEL MENÚ
   ========================================================= */
document.querySelectorAll('a[href^="#"]').forEach(function (enlace) {
    enlace.addEventListener("click", function (evento) {
        const ruta = enlace.getAttribute("href");

        // Ignora enlaces vacíos como href="#"
        if (ruta.length <= 1) {
            return;
        }

        const destino = document.querySelector(ruta);

        if (destino) {
            evento.preventDefault();
            destino.scrollIntoView({ behavior: "smooth" });
        }
    });
});


/* =========================================================
   5. AL CARGAR LA PÁGINA
   Usa el idioma guardado; si no hay ninguno, español.
   ========================================================= */
let idiomaGuardado = "es";

try {
    idiomaGuardado = localStorage.getItem("idioma") || "es";
} catch (error) {
    idiomaGuardado = "es";
}

cambiarIdioma(idiomaGuardado);
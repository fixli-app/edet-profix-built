export const languages = [
  { code: "sv", short: "SV", label: "Svenska" },
  { code: "en", short: "EN", label: "English" },
  { code: "ar", short: "AR", label: "العربية" },
  { code: "da", short: "DA", label: "Dansk" },
  { code: "bs", short: "SC", label: "Srpskohrvatski" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

type Service = { title: string; text: string; examples: string[] };

export type SiteTranslation = {
  languageLabel: string;
  homeLabel: string;
  menuOpen: string;
  menuClose: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  nav: { services: string; about: string; gallery: string; why: string; contact: string };
  freeQuote: string;
  areaKicker: string;
  heroTitle: string;
  heroAccent: string;
  heroText: string;
  requestQuote: string;
  seeServices: string;
  values: Array<{ title: string; text: string }>;
  servicesEyebrow: string;
  servicesTitle: string;
  examplesLabel: string;
  servicesIntro: string;
  services: Service[];
  aboutEyebrow: string;
  aboutTitle: string;
  aboutTextOne: string;
  aboutTextTwo: string;
  missionTitle: string;
  missionText: string;
  valuesTitle: string;
  valuesText: string;
  whyEyebrow: string;
  whyTitle: string;
  whyText: string;
  photoAlt: string;
  photoCaption: string;
  reasons: string[];
  benefitsTitle: string;
  rotLine: string;
  guaranteeLine: string;
  responseLine: string;
  processEyebrow: string;
  processTitle: string;
  processSteps: Array<{ title: string; text: string }>;
  faqEyebrow: string;
  faqTitle: string;
  faq: Array<{ question: string; answer: string }>;
  privacyTitle: string;
  privacyText: string;
  offertaLabel: string;
  contactEyebrow: string;
  contactTitle: string;
  contactText: string;
  location: string;
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  send: string;
  mailHelp: string;
  mailSubject: (name: string) => string;
  mailBody: (name: string, email: string, message: string) => string;
  footerMotto: string;
  backToTop: string;
  galleryEyebrow: string;
  galleryTitle: string;
  galleryIntro: string;
  beforeLabel: string;
  afterLabel: string;
  bathroomProject: string;
  facadeProject: string;
  facadeAltBefore: string;
  facadeAltAfter: string;
  roofProject: string;
  roofAltBefore: string;
  roofAltAfter: string;
  wipProject: string;
  wipLabel: string;
  wipAlt: string;
  houseProject: string;
  houseAlt: string;
  terraceProject: string;
  terraceAlt: string;
  toiletProject: string;
  toiletAltBefore: string;
  toiletAltAfter: string;
  galleryAltBefore: string;
  galleryAltAfter: string;
  galleryCtaTitle: string;
  galleryCtaText: string;
  expandLabel: string;
  collapseLabel: string;
};

export const translations: Record<LanguageCode, SiteTranslation> = {
  sv: {
    languageLabel: "Välj språk",
    homeLabel: "Edet Profix Bygg, startsida",
    menuOpen: "Öppna meny",
    menuClose: "Stäng meny",
    mainNavLabel: "Huvudnavigation",
    mobileNavLabel: "Mobilnavigation",
    nav: { services: "Tjänster", about: "Om oss", why: "Varför oss", gallery: "Galleri", contact: "Kontakt" },
    freeQuote: "Kostnadsfri offert",
    areaKicker: "Utgångspunkt Åstorp · Hela Skåne · Flexibla vid rätt uppdrag",
    heroTitle: "Bygg och renovering i Skåne",
    heroAccent: "med start i Åstorp.",
    heroText:
      "Från reparationer och renovering till markarbete och byggstädning. Vi utgår från Åstorp, arbetar i hela Skåne och kan resa längre beroende på uppdraget.",
    requestQuote: "Begär en offert",
    seeServices: "Se våra tjänster",
    values: [
      { title: "Kvalitet", text: "Hantverk som håller" },
      { title: "Pålitlighet", text: "Vi håller vad vi lovar" },
      { title: "Resultat", text: "Omsorg i varje detalj" },
    ],
    servicesEyebrow: "Vad vi gör",
    examplesLabel: "T.ex.",
    servicesTitle: "Från renovering till färdigt markarbete",
    servicesIntro:
      "Från mindre reparationer och invändiga renoveringar till plattsättning, dränering och byggstädning. Vi tar oss an både små och stora projekt för bostäder och kommersiella fastigheter.",
    services: [
      {
        title: "Renovering & bygg",
        text: "Invändiga renoveringar, ombyggnationer och kompletta bygglösningar.",
        examples: ["Badrumsrenovering", "Köksrenovering", "Golvläggning", "Altan & uterum"],
      },
      {
        title: "Fastighetsunderhåll",
        text: "Löpande underhåll och reparationer som håller fastigheten i bästa skick.",
        examples: ["Tak & fasad", "Fönster & dörrar", "Snickerier", "Reparationer"],
      },
      {
        title: "Mark & anläggning",
        text: "Plattsättning, dränering och trädgårdsanläggning utfört med precision.",
        examples: ["Plattsättning", "Dränering", "Stenläggning", "Trädgård"],
      },
      {
        title: "Byggstädning",
        text: "Noggrann städning som lämnar projektet rent, säkert och redo att användas.",
        examples: ["Grovstädning", "Finstädning", "Fönsterputs", "Efter renovering"],
      },
    ],
    aboutEyebrow: "Om Edet Profix Bygg",
    aboutTitle: "Ett byggföretag med bas i Åstorp",
    aboutTextOne:
      "Behöver du renovera inomhus, reparera en fastighet, lägga plattor eller ordna byggstädningen? Vi tar oss an flera delar av projektet och pratar igenom arbetets omfattning innan vi lämnar offert.",
    aboutTextTwo:
      "Åstorp är vår utgångspunkt. Vi tar uppdrag i hela Skåne, bland annat i Helsingborg, Ängelholm, Höganäs, Landskrona, Lund och Malmö. För rätt uppdrag kan vi vara flexibla även utanför området.",
    missionTitle: "Vårt uppdrag",
    missionText:
      "Att förbättra värdet, funktionaliteten och utseendet på varje fastighet genom kvalitet och kundnöjdhet.",
    valuesTitle: "Våra värderingar",
    valuesText: "Integritet, kvalitet, pålitlighet och professionalism i varje beslut, handling och detalj.",
    whyEyebrow: "Varför välja oss",
    whyTitle: "Ett samtal om hela jobbet",
    whyText:
      "Vi arbetar med både bygg, löpande underhåll, markarbete och städning efteråt. Berätta vad som behöver göras, så går vi igenom nästa steg och vad som passar just ditt projekt.",
    photoAlt: "Byggare från Edet Profix Bygg i ett färdigställt träarbete",
    photoCaption: "Byggarbete på plats – från första genomgång till färdigt resultat.",
    reasons: [
      "En förfrågan kan omfatta flera typer av byggarbete",
      "Från små reparationer till större renoveringar",
      "Markarbete och byggstädning när det behövs",
      "Åstorp som bas – uppdrag i hela Skåne",
      "Vi arbetar i hela Skåne – till exempel i Helsingborg, Ängelholm, Höganäs, Landskrona, Lund och Malmö",
      "Möjlighet att diskutera jobb utanför Skåne",
    ],
    benefitsTitle: "För dig som privatperson",
    rotLine: "ROT-avdrag: Du kan ha rätt till avdrag för godkänt arbetsarbete enligt Skatteverkets regler. Vi går igenom vad som gäller för ditt uppdrag.",
    guaranteeLine: "Garanti för privatpersoner: Fråga oss om garantins omfattning och villkor för ditt arbete – det framgår av offerten.",
    responseLine: "Svarslöfte: Vi återkommer på din förfrågan inom 24 timmar.",
    processEyebrow: "Så går det till",
    processTitle: "Fyra steg från idé till färdigt arbete",
    processSteps: [
      { title: "Förfrågan", text: "Berätta vad du vill få gjort och var arbetet ska utföras." },
      { title: "Platsbesök", text: "Vid behov tittar vi på förutsättningarna tillsammans på plats." },
      { title: "Offert", text: "Du får ett förslag på arbetets omfattning och kostnad." },
      { title: "Genomförande", text: "När vi är överens planerar vi och utför arbetet." },
    ],
    faqEyebrow: "Vanliga frågor",
    faqTitle: "Bra att veta innan du hör av dig",
    faq: [
      { question: "Kostar det att be om en offert?", answer: "Nej, du kan skicka en offertförfrågan utan kostnad. Beskriv gärna arbetet så konkret du kan." },
      { question: "Kan jag använda ROT-avdrag?", answer: "Som privatperson kan du ha rätt till ROT-avdrag för arbete som uppfyller Skatteverkets villkor. Vi hjälper dig att reda ut vad som kan gälla för ditt projekt." },
      { question: "Var arbetar ni?", answer: "Vi utgår från Åstorp och arbetar i hela Skåne, exempelvis Helsingborg, Ängelholm, Höganäs, Landskrona, Lund och Malmö. Andra orter kan vara möjliga beroende på uppdraget." },
      { question: "Hur fungerar betalningen?", answer: "Betalningsvillkor och eventuellt ROT-avdrag går vi igenom i samband med offerten, så att du vet vad som gäller innan arbetet börjar." },
    ],
    privacyTitle: "Personuppgifter",
    privacyText: "När du öppnar e-postutkastet fylls namn, e-postadress och meddelande i ditt e-postprogram. Inget skickas till oss förrän du själv skickar mejlet. Vi använder uppgifterna för att besvara din förfrågan. Kontakta oss via e-post om du vill veta mer eller begära att dina uppgifter raderas.",
    offertaLabel: "Edet Profix Bygg på Offerta",
    contactEyebrow: "Kontakta oss",
    contactTitle: "Låt oss prata om ditt nästa projekt",
    contactText:
      "Beskriv vad du behöver hjälp med så återkommer vi för att prata vidare om en lösning som passar ditt projekt.",
    location: "Utgångspunkt Åstorp · Hela Skåne · Flexibla beroende på uppdrag",
    nameLabel: "Namn",
    namePlaceholder: "Ditt namn",
    emailLabel: "E-post",
    emailPlaceholder: "namn@exempel.se",
    messageLabel: "Meddelande",
    messagePlaceholder: "Berätta kort om projektet...",
    send: "Skicka förfrågan",
    mailHelp: "När du skickar öppnas ditt e-postprogram med mottagare och meddelande färdigifyllt.",
    mailSubject: (name) => `Förfrågan från ${name}`,
    mailBody: (name, email, message) => `Namn: ${name}\nE-post: ${email}\n\n${message}`,
    galleryEyebrow: "Våra projekt",
    galleryTitle: "Före & efter",
    galleryIntro: "Exempel på projekt vi har utfört i Skåne. Här ser du skillnaden vi gör – från slitet och gammalt till nytt och fräscht. Vi fyller på med fler projekt löpande.",
    beforeLabel: "Före",
    afterLabel: "Efter",
    bathroomProject: "Badrumsrenovering",
    facadeProject: "Fasadmålning & balkong",
    facadeAltBefore: "Fasaden och balkongen före målning",
    facadeAltAfter: "Fasaden och balkongen efter målning",
    roofProject: "Takläggning – platt tak",
    roofAltBefore: "Taket före – bart underlag och förberedelsearbete",
    roofAltAfter: "Taket efter – nytt tätskiktsmembran lagt",
    wipProject: "Interiörrenovering & kamin",
    wipLabel: "Under arbete",
    wipAlt: "Pågående interiörrenovering – gipsväggar och tak, spackling och nymurad kamin",
    houseProject: "Husrenovering – hela huset",
    houseAlt: "Pågående totalrenovering av hus – nya golv, målade väggar och tak, badrum och köksmontage",
    terraceProject: "Betongterrass",
    terraceAlt: "Gjutning av betongterrass med trappsteg – armering, formsättning och slät yta",
    toiletProject: "Toalettronovation",
    toiletAltBefore: "Toalett före renovering",
    toiletAltAfter: "Renoverad toalett med nya plattor och målad vägg",
    galleryAltBefore: "Badrummet före renoveringen",
    galleryAltAfter: "Badrummet efter renoveringen",
    galleryCtaTitle: "Ska vi förvandla ditt badrum?",
    galleryCtaText: "Berätta om ditt projekt så återkommer vi med ett förslag. Vi svarar alltid inom 24 timmar.",
    footerMotto: "Kvalitet. Pålitlighet. Resultat.",
    backToTop: "Tillbaka till toppen",
  },
  en: {
    languageLabel: "Choose language",
    homeLabel: "Edet Profix Bygg, home",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    mainNavLabel: "Main navigation",
    mobileNavLabel: "Mobile navigation",
    nav: { services: "Services", about: "About us", why: "Why us", gallery: "Gallery", contact: "Contact" },
    freeQuote: "Free quote",
    areaKicker: "Based in Åstorp · All of Skåne · Flexible for the right project",
    heroTitle: "Building and renovation in Skåne",
    heroAccent: "based in Åstorp.",
    heroText:
      "From repairs and renovations to groundworks and post-build cleaning. We are based in Åstorp, work across Skåne and can travel further depending on the job.",
    requestQuote: "Request a quote",
    seeServices: "View our services",
    values: [
      { title: "Quality", text: "Craftsmanship that lasts" },
      { title: "Reliability", text: "We keep our promises" },
      { title: "Results", text: "Care in every detail" },
    ],
    servicesEyebrow: "What we do",
    examplesLabel: "e.g.",
    servicesTitle: "From renovations to finished groundworks",
    servicesIntro:
      "From minor repairs and interior renovations to paving, drainage and post-construction cleaning. We handle projects of all sizes for homes and commercial properties.",
    services: [
      {
        title: "Renovation & construction",
        text: "Interior renovations, remodelling and complete construction solutions.",
        examples: ["Bathroom renovation", "Kitchen renovation", "Flooring", "Deck & conservatory"],
      },
      {
        title: "Property maintenance",
        text: "Ongoing maintenance and repairs that keep your property in excellent condition.",
        examples: ["Roof & facade", "Windows & doors", "Carpentry", "Repairs"],
      },
      {
        title: "Groundworks & landscaping",
        text: "Paving, drainage and garden construction completed with precision.",
        examples: ["Paving", "Drainage", "Stone laying", "Garden"],
      },
      {
        title: "Post-construction cleaning",
        text: "Thorough cleaning that leaves the project clean, safe and ready to use.",
        examples: ["Rough cleaning", "Final cleaning", "Window cleaning", "After renovation"],
      },
    ],
    aboutEyebrow: "About Edet Profix Bygg",
    aboutTitle: "A building company based in Åstorp",
    aboutTextOne:
      "Need an interior renovation, property repair, paving or post-build cleaning? We can take on several parts of a project and discuss the scope before providing a quote.",
    aboutTextTwo:
      "We start from Åstorp and take on work throughout Skåne, including Helsingborg, Ängelholm, Höganäs, Landskrona, Lund and Malmö. For the right project, we can be flexible beyond the region.",
    missionTitle: "Our mission",
    missionText:
      "To improve the value, function and appearance of every property through quality and customer satisfaction.",
    valuesTitle: "Our values",
    valuesText: "Integrity, quality, reliability and professionalism in every decision, action and detail.",
    whyEyebrow: "Why choose us",
    whyTitle: "One conversation about the whole job",
    whyText:
      "We handle building work, ongoing maintenance, groundworks and cleaning afterwards. Tell us what needs doing and we will talk through the next steps for your project.",
    photoAlt: "Edet Profix Bygg craftsman beside completed woodwork",
    photoCaption: "Building work on site, from the first discussion to completion.",
    reasons: [
      "One enquiry can cover several types of building work",
      "From small repairs to larger renovations",
      "Groundworks and post-build cleaning when needed",
      "Based in Åstorp, working across Skåne",
      "We work throughout Skåne – for example in Helsingborg, Ängelholm, Höganäs, Landskrona, Lund and Malmö",
      "Open to discussing projects outside Skåne",
    ],
    benefitsTitle: "For private homeowners",
    rotLine: "ROT tax deduction: You may qualify for a deduction on eligible labour under Swedish Tax Agency rules. We can discuss what applies to your project.",
    guaranteeLine: "Guarantee for private customers: Ask us about the scope and terms for your work; these will be stated in the quote.",
    responseLine: "Our response promise: We will get back to you within 24 hours of your enquiry.",
    processEyebrow: "How it works",
    processTitle: "Four steps from idea to completed work",
    processSteps: [
      { title: "Enquiry", text: "Tell us what you need done and where the work will take place." },
      { title: "Site visit", text: "If needed, we review the conditions together on site." },
      { title: "Quote", text: "You receive a proposal outlining the work and the cost." },
      { title: "Work begins", text: "Once we agree, we plan and carry out the work." },
    ],
    faqEyebrow: "Frequently asked questions",
    faqTitle: "Good to know before contacting us",
    faq: [
      { question: "Does requesting a quote cost anything?", answer: "No, you can request a quote free of charge. Please describe the work as specifically as possible." },
      { question: "Can I use the ROT tax deduction?", answer: "Private customers may qualify for ROT on work that meets Swedish Tax Agency requirements. We can help discuss what may apply to your project." },
      { question: "Where do you work?", answer: "We are based in Åstorp and work throughout Skåne, including Helsingborg, Ängelholm, Höganäs, Landskrona, Lund and Malmö. Other locations may be possible depending on the project." },
      { question: "How does payment work?", answer: "We discuss payment terms and any ROT deduction with the quote, so you know what applies before work begins." },
    ],
    privacyTitle: "Personal information",
    privacyText: "Opening the email draft fills your name, email address and message into your email app. Nothing is sent to us until you send the email yourself. We use your information to reply to your enquiry. Contact us by email to ask about or request deletion of your data.",
    offertaLabel: "Edet Profix Bygg on Offerta",
    contactEyebrow: "Contact us",
    contactTitle: "Let’s talk about your next project",
    contactText: "Tell us what you need help with and we will get back to discuss a solution that suits your project.",
    location: "Based in Åstorp · All of Skåne · Flexible depending on the project",
    nameLabel: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "name@example.com",
    messageLabel: "Message",
    messagePlaceholder: "Tell us briefly about your project...",
    send: "Send enquiry",
    mailHelp: "When you send, your email app opens with the recipient and message ready.",
    mailSubject: (name) => `Enquiry from ${name}`,
    mailBody: (name, email, message) => `Name: ${name}\nEmail: ${email}\n\n${message}`,
    galleryEyebrow: "Our projects",
    galleryTitle: "Before & after",
    galleryIntro: "Examples of projects we have completed in Skåne. Here you can see the difference we make – from worn and dated to fresh and new. More projects are added on an ongoing basis.",
    beforeLabel: "Before",
    afterLabel: "After",
    bathroomProject: "Bathroom renovation",
    facadeProject: "Facade painting & balcony",
    facadeAltBefore: "The facade and balcony before painting",
    facadeAltAfter: "The facade and balcony after painting",
    roofProject: "Roofing – flat roof",
    roofAltBefore: "The roof before – bare decking and preparation",
    roofAltAfter: "The roof after – new waterproofing membrane",
    wipProject: "Interior renovation & fireplace",
    wipLabel: "In progress",
    wipAlt: "Ongoing interior renovation – drywall walls and ceilings, plastering and a newly built fireplace",
    houseProject: "House renovation – whole house",
    houseAlt: "Ongoing full house renovation – new floors, painted walls and ceilings, bathrooms and kitchen installation",
    terraceProject: "Concrete terrace",
    terraceAlt: "Concrete terrace with steps under construction – reinforcement, formwork and smooth finish",
    toiletProject: "Toilet renovation",
    toiletAltBefore: "Toilet before renovation",
    toiletAltAfter: "Renovated toilet with new tiles and a painted wall",
    galleryAltBefore: "The bathroom before renovation",
    galleryAltAfter: "The bathroom after renovation",
    galleryCtaTitle: "Shall we transform your bathroom?",
    galleryCtaText: "Tell us about your project and we will come back with a proposal. We always reply within 24 hours.",
    footerMotto: "Quality. Reliability. Results.",
    backToTop: "Back to top",
  },
  ar: {
    languageLabel: "اختر اللغة",
    homeLabel: "الصفحة الرئيسية لشركة Edet Profix Bygg",
    menuOpen: "فتح القائمة",
    menuClose: "إغلاق القائمة",
    mainNavLabel: "التنقل الرئيسي",
    mobileNavLabel: "قائمة الهاتف",
    nav: { services: "خدماتنا", about: "من نحن", why: "لماذا نحن", gallery: "المعرض", contact: "تواصل معنا" },
    freeQuote: "عرض سعر مجاني",
    areaKicker: "ننطلق من أوستورب · نخدم سكونه بالكامل · مرونة حسب المشروع",
    heroTitle: "البناء والترميم في سكونه",
    heroAccent: "انطلاقًا من أوستورب.",
    heroText:
      "من الإصلاحات والترميم إلى أعمال الأرض والتنظيف بعد البناء. ننطلق من أوستورب ونعمل في أنحاء سكونه، ويمكننا السفر أبعد حسب المهمة.",
    requestQuote: "اطلب عرض سعر",
    seeServices: "اطّلع على خدماتنا",
    values: [
      { title: "الجودة", text: "حرفية تدوم" },
      { title: "الموثوقية", text: "نفي بما نعد" },
      { title: "النتائج", text: "عناية بكل تفصيل" },
    ],
    servicesEyebrow: "ماذا نقدم",
    examplesLabel: "مثل",
    servicesTitle: "من الترميم إلى أعمال الأرض المكتملة",
    servicesIntro:
      "من الإصلاحات الصغيرة والتجديدات الداخلية إلى الرصف والصرف الصحي وتنظيف مواقع البناء. نتولى المشاريع الصغيرة والكبيرة للمنازل والعقارات التجارية.",
    services: [
      {
        title: "التجديد والبناء",
        text: "تجديدات داخلية وإعادة تصميم وحلول بناء متكاملة.",
        examples: ["ترميم الحمام", "ترميم المطبخ", "تركيب الأرضيات", "شرفة وفناء"],
      },
      {
        title: "صيانة العقارات",
        text: "صيانة وإصلاحات مستمرة تحافظ على العقار بأفضل حالة.",
        examples: ["السقف والواجهة", "النوافذ والأبواب", "أعمال النجارة", "إصلاحات"],
      },
      {
        title: "أعمال الأرض والتنسيق",
        text: "رصف وتصريف وتنسيق حدائق يُنفّذ بدقة.",
        examples: ["الرصف", "الصرف", "رصف الحجارة", "تنسيق الحدائق"],
      },
      {
        title: "تنظيف ما بعد البناء",
        text: "تنظيف دقيق يترك المشروع نظيفًا وآمنًا وجاهزًا للاستخدام.",
        examples: ["تنظيف أولي", "تنظيف نهائي", "تنظيف النوافذ", "بعد الترميم"],
      },
    ],
    aboutEyebrow: "عن Edet Profix Bygg",
    aboutTitle: "شركة بناء مقرها أوستورب",
    aboutTextOne:
      "هل تحتاج إلى ترميم داخلي أو إصلاح عقار أو رصف أو تنظيف بعد البناء؟ نستطيع تولّي عدة أجزاء من المشروع ونتفق على نطاق العمل قبل تقديم عرض السعر.",
    aboutTextTwo:
      "ننطلق من أوستورب ونتولى أعمالًا في جميع أنحاء سكونه، ومنها هلسنبوري وأنجلهولم وهوغاناس ولاندسكرونا ولوند ومالمو. ويمكننا النظر في مشاريع خارج المنطقة حسب طبيعتها.",
    missionTitle: "مهمتنا",
    missionText: "تحسين قيمة كل عقار ووظيفته ومظهره من خلال الجودة ورضا العملاء.",
    valuesTitle: "قيمنا",
    valuesText: "النزاهة والجودة والموثوقية والاحترافية في كل قرار وعمل وتفصيل.",
    whyEyebrow: "لماذا تختارنا",
    whyTitle: "محادثة واحدة عن العمل كله",
    whyText:
      "نعمل في البناء والصيانة المستمرة وأعمال الأرض والتنظيف بعد الإنجاز. أخبرنا بما تحتاجه لنناقش الخطوات المناسبة لمشروعك.",
    photoAlt: "حرفي من Edet Profix Bygg بجانب أعمال خشبية مكتملة",
    photoCaption: "أعمال البناء في الموقع، من النقاش الأول حتى الإنجاز.",
    reasons: [
      "طلب واحد يمكن أن يشمل عدة أنواع من أعمال البناء",
      "من الإصلاحات الصغيرة إلى الترميمات الكبيرة",
      "أعمال الأرض والتنظيف بعد البناء عند الحاجة",
      "مقرنا أوستورب ونعمل في أنحاء سكونه",
      "نعمل في جميع أنحاء سكونه – مثل هلسنبوري وأنجلهولم وهوغاناس ولاندسكرونا ولوند ومالمو",
      "يمكن مناقشة مشاريع خارج سكونه",
    ],
    benefitsTitle: "لأصحاب المنازل",
    rotLine: "خصم ROT الضريبي: قد يحق لك خصم على أجور العمل المؤهل وفق قواعد مصلحة الضرائب السويدية. نناقش ما ينطبق على مشروعك.",
    guaranteeLine: "ضمان للعملاء الأفراد: اسألنا عن نطاق الضمان وشروطه لعملك؛ وتُذكر في عرض السعر.",
    responseLine: "وعد الرد: نرد على استفسارك خلال 24 ساعة.",
    processEyebrow: "طريقة العمل",
    processTitle: "أربع خطوات من الفكرة إلى الإنجاز",
    processSteps: [
      { title: "الاستفسار", text: "صف العمل المطلوب ومكان تنفيذه." },
      { title: "زيارة الموقع", text: "عند الحاجة نعاين ظروف العمل معك في الموقع." },
      { title: "عرض السعر", text: "تتلقى عرضًا يوضح نطاق العمل والتكلفة." },
      { title: "التنفيذ", text: "بعد الاتفاق نخطط للعمل وننفذه." },
    ],
    faqEyebrow: "أسئلة شائعة",
    faqTitle: "معلومات قبل التواصل معنا",
    faq: [
      { question: "هل طلب عرض السعر مجاني؟", answer: "نعم، يمكنك طلب عرض سعر دون تكلفة. صف العمل بأكبر قدر ممكن من الوضوح." },
      { question: "هل يمكنني الاستفادة من خصم ROT؟", answer: "قد يستحق العملاء الأفراد خصم ROT للأعمال المستوفية لشروط مصلحة الضرائب السويدية. نناقش ما قد ينطبق على مشروعك." },
      { question: "أين تعملون؟", answer: "ننطلق من أوستورب ونعمل في أنحاء سكونه، بما فيها هلسنبوري وأنجلهولم وهوغاناس ولاندسكرونا ولوند ومالمو. وقد نقبل مناطق أخرى حسب المشروع." },
      { question: "كيف يتم الدفع؟", answer: "نوضح شروط الدفع وأي خصم ROT مع عرض السعر، لتعرف التفاصيل قبل بدء العمل." },
    ],
    privacyTitle: "البيانات الشخصية",
    privacyText: "عند فتح مسودة البريد، يُملأ اسمك وبريدك ورسالتك في تطبيق البريد لديك. لا يصلنا شيء حتى ترسل البريد بنفسك. نستخدم معلوماتك للرد على استفسارك. راسلنا للسؤال عن بياناتك أو طلب حذفها.",
    offertaLabel: "Edet Profix Bygg على Offerta",
    contactEyebrow: "تواصل معنا",
    contactTitle: "لنتحدث عن مشروعك القادم",
    contactText: "صِف لنا ما تحتاج إلى المساعدة فيه وسنتواصل معك لمناقشة حل يناسب مشروعك.",
    location: "ننطلق من أوستورب · نخدم سكونه بالكامل · مرونة حسب المشروع",
    nameLabel: "الاسم",
    namePlaceholder: "اسمك",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "name@example.com",
    messageLabel: "الرسالة",
    messagePlaceholder: "أخبرنا باختصار عن مشروعك...",
    send: "إرسال الطلب",
    mailHelp: "عند الإرسال، سيفتح برنامج البريد مع عنوان المستلم والرسالة جاهزين.",
    mailSubject: (name) => `طلب من ${name}`,
    mailBody: (name, email, message) => `الاسم: ${name}\nالبريد الإلكتروني: ${email}\n\n${message}`,
    galleryEyebrow: "مشاريعنا",
    galleryTitle: "قبل وبعد",
    galleryIntro: "أمثلة على مشاريع نفذناها في سكونه. هنا ترى الفرق الذي نصنعه – من مهترئ وقديم إلى جديد وجميل. نضيف المزيد من المشاريع باستمرار.",
    beforeLabel: "قبل",
    afterLabel: "بعد",
    bathroomProject: "تجديد الحمام",
    facadeProject: "دهان الواجهة والشرفة",
    facadeAltBefore: "الواجهة والشرفة قبل الدهان",
    facadeAltAfter: "الواجهة والشرفة بعد الدهان",
    roofProject: "أعمال التسقيف – سطح مستوٍ",
    roofAltBefore: "السطح قبل البدء – القاعدة العارية وأعمال التحضير",
    roofAltAfter: "السطح بعد الانتهاء – غشاء العزل المائي الجديد",
    wipProject: "تجديد داخلي ومدفأة",
    wipLabel: "قيد التنفيذ",
    wipAlt: "تجديد داخلي جارٍ – جدران وأسقف جبسية، معجون وموقد مبني حديثًا",
    houseProject: "تجديد المنزل بالكامل",
    houseAlt: "تجديد شامل جارٍ للمنزل – أرضيات جديدة، جدران وأسقف مطليّة، حمّامات وتركيب مطبخ",
    terraceProject: "شرفة خرسانية",
    terraceAlt: "صب شرفة خرسانية مع درجات قيد التنفيذ – التسليح والقوالب وسطح أملس",
    toiletProject: "تجديد دورة المياه",
    toiletAltBefore: "دورة المياه قبل التجديد",
    toiletAltAfter: "دورة مياه مجددة مع بلاط جديد وجدار مطلي",
    galleryAltBefore: "الحمام قبل التجديد",
    galleryAltAfter: "الحمام بعد التجديد",
    galleryCtaTitle: "هل نحوّل حمامك؟",
    galleryCtaText: "أخبرنا عن مشروعك وسنعود إليك باقتراح. نرد دائمًا خلال 24 ساعة.",
    footerMotto: "الجودة. الموثوقية. النتائج.",
    backToTop: "العودة إلى الأعلى",
  },
  da: {
    languageLabel: "Vælg sprog",
    homeLabel: "Edet Profix Bygg, forside",
    menuOpen: "Åbn menu",
    menuClose: "Luk menu",
    mainNavLabel: "Hovednavigation",
    mobileNavLabel: "Mobilnavigation",
    nav: { services: "Ydelser", about: "Om os", why: "Hvorfor os", gallery: "Galleri", contact: "Kontakt" },
    freeQuote: "Gratis tilbud",
    areaKicker: "Udgangspunkt i Åstorp · Hele Skåne · Fleksible ved den rette opgave",
    heroTitle: "Byggeri og renovering i Skåne",
    heroAccent: "med base i Åstorp.",
    heroText:
      "Fra reparationer og renovering til anlægsarbejde og byggerengøring. Vi starter i Åstorp, arbejder i hele Skåne og kan køre længere afhængigt af opgaven.",
    requestQuote: "Få et tilbud",
    seeServices: "Se vores ydelser",
    values: [
      { title: "Kvalitet", text: "Håndværk der holder" },
      { title: "Pålidelighed", text: "Vi holder, hvad vi lover" },
      { title: "Resultater", text: "Omhu i hver detalje" },
    ],
    servicesEyebrow: "Det laver vi",
    examplesLabel: "f.eks.",
    servicesTitle: "Fra renovering til færdigt anlægsarbejde",
    servicesIntro:
      "Fra mindre reparationer og indvendige renoveringer til belægning, dræning og byggerengøring. Vi påtager os både små og store projekter for boliger og erhvervsejendomme.",
    services: [
      {
        title: "Renovering & byggeri",
        text: "Indvendige renoveringer, ombygninger og komplette byggeløsninger.",
        examples: ["Badeværelsesrenovering", "Køkkenrenovering", "Gulvlægning", "Terrasse & vinterhave"],
      },
      {
        title: "Ejendomsvedligeholdelse",
        text: "Løbende vedligeholdelse og reparationer, der holder ejendommen i topform.",
        examples: ["Tag & facade", "Vinduer & døre", "Snedkeri", "Reparationer"],
      },
      {
        title: "Jord- & anlægsarbejde",
        text: "Belægning, dræning og haveanlæg udført med præcision.",
        examples: ["Belægning", "Dræning", "Stenlægning", "Have"],
      },
      {
        title: "Byggerengøring",
        text: "Grundig rengøring, der efterlader projektet rent, sikkert og klar til brug.",
        examples: ["Grovrengøring", "Finrengøring", "Vinduespudsning", "Efter renovering"],
      },
    ],
    aboutEyebrow: "Om Edet Profix Bygg",
    aboutTitle: "Et byggefirma med base i Åstorp",
    aboutTextOne:
      "Skal du renovere indendørs, reparere en ejendom, lægge fliser eller have gjort rent efter byggeri? Vi kan tage os af flere dele af opgaven og afklare omfanget, før vi giver et tilbud.",
    aboutTextTwo:
      "Vi starter i Åstorp og tager opgaver i hele Skåne, blandt andet i Helsingborg, Ängelholm, Höganäs, Landskrona, Lund og Malmö. Ved den rette opgave kan vi også arbejde uden for området.",
    missionTitle: "Vores mission",
    missionText: "At forbedre værdien, funktionen og udseendet af enhver ejendom gennem kvalitet og kundetilfredshed.",
    valuesTitle: "Vores værdier",
    valuesText: "Integritet, kvalitet, pålidelighed og professionalisme i enhver beslutning, handling og detalje.",
    whyEyebrow: "Hvorfor vælge os",
    whyTitle: "Én samtale om hele opgaven",
    whyText:
      "Vi arbejder med byggeri, løbende vedligeholdelse, anlægsarbejde og rengøring bagefter. Fortæl os, hvad der skal laves, så gennemgår vi de næste skridt sammen.",
    photoAlt: "Håndværker fra Edet Profix Bygg ved færdigt træarbejde",
    photoCaption: "Byggearbejde på stedet, fra første samtale til afslutning.",
    reasons: [
      "Én forespørgsel kan omfatte flere slags byggearbejde",
      "Fra små reparationer til større renoveringer",
      "Anlægsarbejde og byggerengøring ved behov",
      "Base i Åstorp – opgaver i hele Skåne",
      "Vi arbejder i hele Skåne – for eksempel i Helsingborg, Ängelholm, Höganäs, Landskrona, Lund og Malmö",
      "Mulighed for at drøfte opgaver uden for Skåne",
    ],
    benefitsTitle: "For private boligejere",
    rotLine: "ROT-fradrag: Du kan have ret til fradrag for godkendt arbejdsløn efter det svenske skattevæsens regler. Vi gennemgår, hvad der gælder for din opgave.",
    guaranteeLine: "Garanti for private kunder: Spørg os om garantiens omfang og vilkår for dit arbejde; de fremgår af tilbuddet.",
    responseLine: "Svarløfte: Vi vender tilbage på din forespørgsel inden for 24 timer.",
    processEyebrow: "Sådan foregår det",
    processTitle: "Fire trin fra idé til færdigt arbejde",
    processSteps: [
      { title: "Forespørgsel", text: "Fortæl, hvad du ønsker udført, og hvor arbejdet skal ske." },
      { title: "Besøg på stedet", text: "Ved behov gennemgår vi forholdene sammen på stedet." },
      { title: "Tilbud", text: "Du får et forslag til arbejdets omfang og pris." },
      { title: "Udførelse", text: "Når vi er enige, planlægger og udfører vi arbejdet." },
    ],
    faqEyebrow: "Ofte stillede spørgsmål",
    faqTitle: "Godt at vide, før du kontakter os",
    faq: [
      { question: "Koster det noget at bede om et tilbud?", answer: "Nej, du kan bede om et tilbud uden beregning. Beskriv gerne opgaven så konkret som muligt." },
      { question: "Kan jeg bruge ROT-fradraget?", answer: "Private kunder kan være berettigede til ROT for arbejde, der opfylder det svenske skattevæsens krav. Vi gennemgår, hvad der kan gælde for din opgave." },
      { question: "Hvor arbejder I?", answer: "Vi starter i Åstorp og arbejder i hele Skåne, f.eks. Helsingborg, Ängelholm, Höganäs, Landskrona, Lund og Malmö. Andre steder kan være mulige afhængigt af opgaven." },
      { question: "Hvordan foregår betalingen?", answer: "Betalingsvilkår og et eventuelt ROT-fradrag gennemgår vi sammen med tilbuddet, før arbejdet begynder." },
    ],
    privacyTitle: "Personoplysninger",
    privacyText: "Når du åbner e-mailudkastet, udfyldes navn, e-mail og besked i dit eget e-mailprogram. Intet sendes til os, før du selv sender mailen. Vi bruger oplysningerne til at besvare din forespørgsel. Kontakt os på mail for at spørge til eller bede om sletning af dine oplysninger.",
    offertaLabel: "Edet Profix Bygg på Offerta",
    contactEyebrow: "Kontakt os",
    contactTitle: "Lad os tale om dit næste projekt",
    contactText:
      "Beskriv, hvad du har brug for hjælp til, så vender vi tilbage for at drøfte en løsning, der passer til dit projekt.",
    location: "Udgangspunkt i Åstorp · Hele Skåne · Fleksible afhængigt af opgaven",
    nameLabel: "Navn",
    namePlaceholder: "Dit navn",
    emailLabel: "E-mail",
    emailPlaceholder: "navn@eksempel.dk",
    messageLabel: "Besked",
    messagePlaceholder: "Fortæl kort om projektet...",
    send: "Send forespørgsel",
    mailHelp: "Når du sender, åbnes dit e-mailprogram med modtager og besked udfyldt.",
    mailSubject: (name) => `Forespørgsel fra ${name}`,
    mailBody: (name, email, message) => `Navn: ${name}\nE-mail: ${email}\n\n${message}`,
    galleryEyebrow: "Vores projekter",
    galleryTitle: "Før & efter",
    galleryIntro: "Eksempler på projekter, vi har udført i Skåne. Her ser du forskellen, vi gør – fra slidt og gammelt til nyt og flot. Vi tilføjer flere projekter løbende.",
    beforeLabel: "Før",
    afterLabel: "Efter",
    bathroomProject: "Badeværelsesrenovering",
    facadeProject: "Facademaling & altan",
    facadeAltBefore: "Fasaden og altanen før malingen",
    facadeAltAfter: "Fasaden og altanen efter malingen",
    roofProject: "Taglægning – fladt tag",
    roofAltBefore: "Taget før – bart underlag og forberedelse",
    roofAltAfter: "Taget efter – nyt vandtæt membran",
    wipProject: "Indvendig renovering & kamin",
    wipLabel: "Under arbejde",
    wipAlt: "Igangværende indvendig renovering – gipsvægge og lofter, pudsning og nymuret kamin",
    houseProject: "Husrenovering – hele huset",
    houseAlt: "Igangværende totalrenovering af hus – nye gulve, malede vægge og lofter, badeværelser og køkkenmontering",
    terraceProject: "Betonterrasse",
    terraceAlt: "Støbning af betonterrasse med trin under udførelse – armering, forskalling og glat overflade",
    toiletProject: "Toiletrenovering",
    toiletAltBefore: "Toilet før renovering",
    toiletAltAfter: "Renoveret toilet med nye fliser og malet væg",
    galleryAltBefore: "Badeværelset før renoveringen",
    galleryAltAfter: "Badeværelset efter renoveringen",
    galleryCtaTitle: "Skal vi forvandle dit badeværelse?",
    galleryCtaText: "Fortæl os om dit projekt, så vender vi tilbage med et forslag. Vi svarer altid inden for 24 timer.",
    footerMotto: "Kvalitet. Pålidelighed. Resultater.",
    backToTop: "Tilbage til toppen",
  },
  bs: {
    languageLabel: "Izaberite jezik",
    homeLabel: "Edet Profix Bygg, početna stranica",
    menuOpen: "Otvori meni",
    menuClose: "Zatvori meni",
    mainNavLabel: "Glavna navigacija",
    mobileNavLabel: "Mobilna navigacija",
    nav: { services: "Usluge", about: "O nama", why: "Zašto mi", gallery: "Galerija", contact: "Kontakt" },
    freeQuote: "Besplatna ponuda",
    areaKicker: "Polazimo iz Åstorpa · Cijela Skåne · Fleksibilni za pravi posao",
    heroTitle: "Gradnja i renoviranje u Skåne",
    heroAccent: "s polazištem u Åstorpu.",
    heroText:
      "Od popravki i renoviranja do zemljanih radova i čišćenja nakon gradnje. Polazimo iz Åstorpa, radimo širom pokrajine Skåne i možemo putovati dalje zavisno od posla.",
    requestQuote: "Zatražite ponudu",
    seeServices: "Pogledajte usluge",
    values: [
      { title: "Kvalitet", text: "Izrada koja traje" },
      { title: "Pouzdanost", text: "Držimo se dogovora" },
      { title: "Rezultat", text: "Pažnja u svakom detalju" },
    ],
    servicesEyebrow: "Šta radimo",
    examplesLabel: "npr.",
    servicesTitle: "Od renoviranja do završenih vanjskih radova",
    servicesIntro:
      "Od manjih popravki i unutrašnjih renoviranja do popločavanja, drenaže i čišćenja nakon gradnje. Preuzimamo male i velike projekte za domove i poslovne objekte.",
    services: [
      {
        title: "Renoviranje i gradnja",
        text: "Unutrašnja renoviranja, preuređenja i kompletna građevinska rješenja.",
        examples: ["Renoviranje kupatila", "Renoviranje kuhinje", "Postavljanje podova", "Terasa i zimski vrt"],
      },
      {
        title: "Održavanje nekretnina",
        text: "Redovno održavanje i popravke koje čuvaju nekretninu u odličnom stanju.",
        examples: ["Krov i fasada", "Prozori i vrata", "Stolarija", "Popravke"],
      },
      {
        title: "Zemljani i vanjski radovi",
        text: "Popločavanje, drenaža i uređenje vrtova izvedeni precizno.",
        examples: ["Popločavanje", "Drenaža", "Polaganje kamena", "Vrt"],
      },
      {
        title: "Čišćenje nakon gradnje",
        text: "Temeljito čišćenje koje ostavlja projekat čistim, sigurnim i spremnim za korištenje.",
        examples: ["Grubo čišćenje", "Finalno čišćenje", "Pranje prozora", "Nakon renoviranja"],
      },
    ],
    aboutEyebrow: "O Edet Profix Bygg",
    aboutTitle: "Građevinska firma sa sjedištem u Åstorpu",
    aboutTextOne:
      "Trebaju vam unutrašnje renoviranje, popravka objekta, popločavanje ili čišćenje nakon gradnje? Možemo preuzeti više dijelova posla i dogovoriti obim prije slanja ponude.",
    aboutTextTwo:
      "Polazimo iz Åstorpa i radimo širom pokrajine Skåne, uključujući Helsingborg, Ängelholm, Höganäs, Landskronu, Lund i Malmö. Za odgovarajući posao možemo biti fleksibilni i izvan regije.",
    missionTitle: "Naša misija",
    missionText:
      "Poboljšati vrijednost, funkcionalnost i izgled svake nekretnine kroz kvalitet i zadovoljstvo klijenata.",
    valuesTitle: "Naše vrijednosti",
    valuesText: "Integritet, kvalitet, pouzdanost i profesionalnost u svakoj odluci, postupku i detalju.",
    whyEyebrow: "Zašto izabrati nas",
    whyTitle: "Jedan razgovor o cijelom poslu",
    whyText:
      "Radimo građevinske poslove, redovno održavanje, zemljane radove i čišćenje po završetku. Recite nam šta treba uraditi pa ćemo razgovarati o narednim koracima.",
    photoAlt: "Majstor Edet Profix Bygg pored završenih drvenih radova",
    photoCaption: "Građevinski radovi na terenu, od prvog razgovora do završetka.",
    reasons: [
      "Jedan upit može obuhvatiti više vrsta građevinskih radova",
      "Od malih popravki do većih renoviranja",
      "Zemljani radovi i čišćenje po potrebi",
      "Sjedište u Åstorpu – poslovi širom pokrajine Skåne",
      "Radimo u cijelom Skåneu – na primjer u Helsingborgu, Ängelholmu, Höganäsu, Landskroni, Lundu i Malmöu",
      "Moguć dogovor za poslove izvan pokrajine Skåne",
    ],
    benefitsTitle: "Za vlasnike privatnih domova",
    rotLine: "Poreska olakšica ROT: Možete imati pravo na odbitak za prihvatljiv rad prema pravilima švedske poreske uprave. Razgovarat ćemo o tome šta važi za vaš posao.",
    guaranteeLine: "Garancija za privatne klijente: Pitajte nas o obimu i uslovima garancije za vaš posao; oni se navode u ponudi.",
    responseLine: "Obećanje odgovora: Odgovaramo na vaš upit u roku od 24 sata.",
    processEyebrow: "Kako radimo",
    processTitle: "Četiri koraka od ideje do završetka",
    processSteps: [
      { title: "Upit", text: "Opišite šta vam treba i gdje se posao obavlja." },
      { title: "Posjeta lokaciji", text: "Po potrebi zajedno pregledamo uslove na licu mjesta." },
      { title: "Ponuda", text: "Dobijate prijedlog obima radova i cijene." },
      { title: "Izvođenje", text: "Kad se dogovorimo, planiramo i izvodimo radove." },
    ],
    faqEyebrow: "Česta pitanja",
    faqTitle: "Šta treba znati prije javljanja",
    faq: [
      { question: "Da li se naplaćuje traženje ponude?", answer: "Ne, ponudu možete zatražiti besplatno. Opišite posao što konkretnije." },
      { question: "Mogu li koristiti ROT olakšicu?", answer: "Privatni klijenti mogu ostvariti ROT za radove koji ispunjavaju uslove švedske poreske uprave. Razgovarat ćemo o tome šta se može primijeniti na vaš posao." },
      { question: "Gdje radite?", answer: "Polazimo iz Åstorpa i radimo širom pokrajine Skåne, uključujući Helsingborg, Ängelholm, Höganäs, Landskronu, Lund i Malmö. Druge lokacije su moguće zavisno od posla." },
      { question: "Kako funkcioniše plaćanje?", answer: "Uslove plaćanja i moguću ROT olakšicu prolazimo uz ponudu, prije početka radova." },
    ],
    privacyTitle: "Lični podaci",
    privacyText: "Otvaranjem nacrta e-maila vaše ime, adresa i poruka unose se u vaš e-mail program. Ništa nam se ne šalje dok sami ne pošaljete poruku. Podatke koristimo za odgovor na upit. Javite nam se e-mailom za informacije ili zahtjev za brisanje podataka.",
    offertaLabel: "Edet Profix Bygg na Offerta",
    contactEyebrow: "Kontaktirajte nas",
    contactTitle: "Razgovarajmo o vašem sljedećem projektu",
    contactText:
      "Opišite kakva vam je pomoć potrebna, a mi ćemo vam se javiti da razgovaramo o rješenju koje odgovara vašem projektu.",
    location: "Polazimo iz Åstorpa · Cijela Skåne · Fleksibilni zavisno od posla",
    nameLabel: "Ime",
    namePlaceholder: "Vaše ime",
    emailLabel: "E-mail",
    emailPlaceholder: "ime@primjer.com",
    messageLabel: "Poruka",
    messagePlaceholder: "Ukratko opišite projekat...",
    send: "Pošaljite upit",
    mailHelp: "Slanjem se otvara vaš e-mail program s popunjenim primaocem i porukom.",
    mailSubject: (name) => `Upit od ${name}`,
    mailBody: (name, email, message) => `Ime: ${name}\nE-mail: ${email}\n\n${message}`,
    galleryEyebrow: "Naši projekti",
    galleryTitle: "Prije i poslije",
    galleryIntro: "Primjeri projekata koje smo izveli u Skåneu. Ovdje vidite razliku koju pravimo – od istrošenog i starog do novog i lijepog. Redovno dodajemo nove projekte.",
    beforeLabel: "Prije",
    afterLabel: "Poslije",
    bathroomProject: "Renoviranje kupatila",
    facadeProject: "Farbanje fasade i balkona",
    facadeAltBefore: "Fasada i balkon prije farbanja",
    facadeAltAfter: "Fasada i balkon poslije farbanja",
    roofProject: "Pokrivanje krova – ravan krov",
    roofAltBefore: "Krov prije – gola podloga i priprema",
    roofAltAfter: "Krov poslije – nova hidroizolaciona membrana",
    wipProject: "Unutrašnja renovacija i kamin",
    wipLabel: "U toku",
    wipAlt: "Tekuća unutrašnja renovacija – gipsani zidovi i plafoni, malterisanje i novozidana kamin",
    houseProject: "Renovacija kuće – cijela kuća",
    houseAlt: "Tekuća potpuna renovacija kuće – novi podovi, bojeni zidovi i plafoni, kupatila i montaža kuhinje",
    terraceProject: "Betonska terasa",
    terraceAlt: "Izlivavanje betonske terase sa stepenicima u toku – armatura, oplata i glatka površina",
    toiletProject: "Renovacija toaleta",
    toiletAltBefore: "Toalet prije renovacije",
    toiletAltAfter: "Renovirani toalet sa novim pločicama i obojenim zidom",
    galleryAltBefore: "Kupatilo prije renoviranja",
    galleryAltAfter: "Kupatilo poslije renoviranja",
    galleryCtaTitle: "Želite li novo kupatilo?",
    galleryCtaText: "Recite nam o svom projektu i javit ćemo vam se s prijedlogom. Uvijek odgovaramo u roku od 24 sata.",
    footerMotto: "Kvalitet. Pouzdanost. Rezultat.",
    backToTop: "Nazad na vrh",
  },
};

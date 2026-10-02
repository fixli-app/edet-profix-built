export const languages = [
  { code: "sv", short: "SV", label: "Svenska" },
  { code: "en", short: "EN", label: "English" },
  { code: "ar", short: "AR", label: "العربية" },
  { code: "da", short: "DA", label: "Dansk" },
  { code: "bs", short: "SC", label: "Srpskohrvatski" },
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

type Service = { title: string; text: string };

export type SiteTranslation = {
  languageLabel: string;
  homeLabel: string;
  menuOpen: string;
  menuClose: string;
  mainNavLabel: string;
  mobileNavLabel: string;
  nav: { services: string; about: string; why: string; contact: string };
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
};

export const translations: Record<LanguageCode, SiteTranslation> = {
  sv: {
    languageLabel: "Välj språk",
    homeLabel: "Edet Profix Bygg, startsida",
    menuOpen: "Öppna meny",
    menuClose: "Stäng meny",
    mainNavLabel: "Huvudnavigation",
    mobileNavLabel: "Mobilnavigation",
    nav: { services: "Tjänster", about: "Om oss", why: "Varför oss", contact: "Kontakt" },
    freeQuote: "Kostnadsfri offert",
    areaKicker: "Utgångspunkt Åstorp · Hela Skåne · Flexibla vid rätt uppdrag",
    heroTitle: "Pålitliga fastighets- & byggtjänster",
    heroAccent: "du kan lita på.",
    heroText:
      "Vi utgår från Åstorp, arbetar i hela Skåne och kan vara flexibla beroende på uppdraget. Professionellt hantverk från start till mål.",
    requestQuote: "Begär en offert",
    seeServices: "Se våra tjänster",
    values: [
      { title: "Kvalitet", text: "Hantverk som håller" },
      { title: "Pålitlighet", text: "Vi håller vad vi lovar" },
      { title: "Resultat", text: "Omsorg i varje detalj" },
    ],
    servicesEyebrow: "Vad vi gör",
    servicesTitle: "Kompletta lösningar för din fastighet",
    servicesIntro:
      "Från mindre reparationer och invändiga renoveringar till plattsättning, dränering och byggstädning. Vi tar oss an både små och stora projekt för bostäder och kommersiella fastigheter.",
    services: [
      { title: "Renovering & bygg", text: "Invändiga renoveringar, ombyggnationer och kompletta bygglösningar." },
      {
        title: "Fastighetsunderhåll",
        text: "Löpande underhåll och reparationer som håller fastigheten i bästa skick.",
      },
      { title: "Mark & anläggning", text: "Plattsättning, dränering och trädgårdsanläggning utfört med precision." },
      { title: "Byggstädning", text: "Noggrann städning som lämnar projektet rent, säkert och redo att användas." },
    ],
    aboutEyebrow: "Drivna av kvalitet",
    aboutTitle: "Byggda på förtroende",
    aboutTextOne:
      "Vårt arbetssätt bygger på pålitligt hantverk, tydlig kommunikation och bestående resultat. Varje projekt planeras noggrant och genomförs med precision, från första möte till slutgiltig överlämning.",
    aboutTextTwo:
      "Vi är ett engagerat team med erfarenhet inom fastighetsunderhåll, renovering, byggtjänster och trädgårdsanläggning. Målet är alltid långsiktiga kundrelationer och resultat som håller över tid.",
    missionTitle: "Vårt uppdrag",
    missionText:
      "Att förbättra värdet, funktionaliteten och utseendet på varje fastighet genom kvalitet och kundnöjdhet.",
    valuesTitle: "Våra värderingar",
    valuesText: "Integritet, kvalitet, pålitlighet och professionalism i varje beslut, handling och detalj.",
    whyEyebrow: "Varför välja oss",
    whyTitle: "Din pålitliga partner i hela Skåne",
    whyText:
      "Vår utgångspunkt är Åstorp och vi arbetar i hela Skåne. Beroende på uppdragets omfattning och förutsättningar är vi även flexibla med var vi tar oss an arbeten.",
    photoAlt: "Byggare från Edet Profix Bygg i ett färdigställt träarbete",
    photoCaption: "Professionellt hantverk med omsorg om varje detalj.",
    reasons: [
      "Erfarna och skickliga yrkespersoner",
      "Högkvalitativt hantverk i varje projekt",
      "Pålitlig service med leverans i tid",
      "Transparent kommunikation från start till mål",
      "Skräddarsydda lösningar för bostäder och företag",
      "Kvalitetsmaterial och beprövade arbetsmetoder",
    ],
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
    nav: { services: "Services", about: "About us", why: "Why us", contact: "Contact" },
    freeQuote: "Free quote",
    areaKicker: "Based in Åstorp · All of Skåne · Flexible for the right project",
    heroTitle: "Reliable property & construction services",
    heroAccent: "you can count on.",
    heroText:
      "Based in Åstorp, we work throughout Skåne and can be flexible depending on the project. Professional craftsmanship from start to finish.",
    requestQuote: "Request a quote",
    seeServices: "View our services",
    values: [
      { title: "Quality", text: "Craftsmanship that lasts" },
      { title: "Reliability", text: "We keep our promises" },
      { title: "Results", text: "Care in every detail" },
    ],
    servicesEyebrow: "What we do",
    servicesTitle: "Complete solutions for your property",
    servicesIntro:
      "From minor repairs and interior renovations to paving, drainage and post-construction cleaning. We handle projects of all sizes for homes and commercial properties.",
    services: [
      {
        title: "Renovation & construction",
        text: "Interior renovations, remodelling and complete construction solutions.",
      },
      {
        title: "Property maintenance",
        text: "Ongoing maintenance and repairs that keep your property in excellent condition.",
      },
      {
        title: "Groundworks & landscaping",
        text: "Paving, drainage and garden construction completed with precision.",
      },
      {
        title: "Post-construction cleaning",
        text: "Thorough cleaning that leaves the project clean, safe and ready to use.",
      },
    ],
    aboutEyebrow: "Driven by quality",
    aboutTitle: "Built on trust",
    aboutTextOne:
      "Our approach is based on reliable craftsmanship, clear communication and lasting results. Every project is carefully planned and completed with precision — from the first meeting to final handover.",
    aboutTextTwo:
      "We are a committed team with experience in property maintenance, renovation, construction and landscaping. Our goal is always long-term customer relationships and results that stand the test of time.",
    missionTitle: "Our mission",
    missionText:
      "To improve the value, function and appearance of every property through quality and customer satisfaction.",
    valuesTitle: "Our values",
    valuesText: "Integrity, quality, reliability and professionalism in every decision, action and detail.",
    whyEyebrow: "Why choose us",
    whyTitle: "Your reliable partner across Skåne",
    whyText:
      "We are based in Åstorp and work throughout Skåne. Depending on the scale and requirements of the project, we can also be flexible about where we take on work.",
    photoAlt: "Edet Profix Bygg craftsman beside completed woodwork",
    photoCaption: "Professional craftsmanship with care in every detail.",
    reasons: [
      "Experienced and skilled professionals",
      "High-quality workmanship on every project",
      "Reliable service delivered on time",
      "Clear communication from start to finish",
      "Tailored solutions for homes and businesses",
      "Quality materials and proven methods",
    ],
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
    nav: { services: "خدماتنا", about: "من نحن", why: "لماذا نحن", contact: "تواصل معنا" },
    freeQuote: "عرض سعر مجاني",
    areaKicker: "ننطلق من أوستورب · نخدم سكونه بالكامل · مرونة حسب المشروع",
    heroTitle: "خدمات موثوقة للعقارات والبناء",
    heroAccent: "يمكنك الاعتماد عليها.",
    heroText:
      "ننطلق من أوستورب ونعمل في جميع أنحاء سكونه، ويمكننا أن نكون مرنين حسب طبيعة المشروع. حرفية احترافية من البداية إلى النهاية.",
    requestQuote: "اطلب عرض سعر",
    seeServices: "اطّلع على خدماتنا",
    values: [
      { title: "الجودة", text: "حرفية تدوم" },
      { title: "الموثوقية", text: "نفي بما نعد" },
      { title: "النتائج", text: "عناية بكل تفصيل" },
    ],
    servicesEyebrow: "ماذا نقدم",
    servicesTitle: "حلول متكاملة لعقارك",
    servicesIntro:
      "من الإصلاحات الصغيرة والتجديدات الداخلية إلى الرصف والصرف الصحي وتنظيف مواقع البناء. نتولى المشاريع الصغيرة والكبيرة للمنازل والعقارات التجارية.",
    services: [
      { title: "التجديد والبناء", text: "تجديدات داخلية وإعادة تصميم وحلول بناء متكاملة." },
      { title: "صيانة العقارات", text: "صيانة وإصلاحات مستمرة تحافظ على العقار بأفضل حالة." },
      { title: "أعمال الأرض والتنسيق", text: "رصف وتصريف وتنسيق حدائق يُنفّذ بدقة." },
      { title: "تنظيف ما بعد البناء", text: "تنظيف دقيق يترك المشروع نظيفًا وآمنًا وجاهزًا للاستخدام." },
    ],
    aboutEyebrow: "الجودة دافعنا",
    aboutTitle: "أساسنا الثقة",
    aboutTextOne:
      "يعتمد أسلوب عملنا على الحرفية الموثوقة والتواصل الواضح والنتائج الدائمة. نخطط لكل مشروع بعناية وننفذه بدقة من الاجتماع الأول حتى التسليم النهائي.",
    aboutTextTwo:
      "نحن فريق ملتزم يتمتع بخبرة في صيانة العقارات والتجديد والبناء وتنسيق الحدائق. هدفنا دائمًا علاقات طويلة الأمد مع العملاء ونتائج تدوم.",
    missionTitle: "مهمتنا",
    missionText: "تحسين قيمة كل عقار ووظيفته ومظهره من خلال الجودة ورضا العملاء.",
    valuesTitle: "قيمنا",
    valuesText: "النزاهة والجودة والموثوقية والاحترافية في كل قرار وعمل وتفصيل.",
    whyEyebrow: "لماذا تختارنا",
    whyTitle: "شريكك الموثوق في جميع أنحاء سكونه",
    whyText:
      "ننطلق من أوستورب ونعمل في جميع أنحاء سكونه. وبحسب حجم المشروع ومتطلباته، يمكننا أيضًا أن نكون مرنين بشأن المناطق التي ننفذ فيها الأعمال.",
    photoAlt: "حرفي من Edet Profix Bygg بجانب أعمال خشبية مكتملة",
    photoCaption: "حرفية احترافية مع عناية بكل تفصيل.",
    reasons: [
      "حرفيون ذوو خبرة ومهارة",
      "جودة عالية في كل مشروع",
      "خدمة موثوقة وتسليم في الموعد",
      "تواصل واضح من البداية إلى النهاية",
      "حلول مخصصة للمنازل والشركات",
      "مواد عالية الجودة وأساليب مجرّبة",
    ],
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
    nav: { services: "Ydelser", about: "Om os", why: "Hvorfor os", contact: "Kontakt" },
    freeQuote: "Gratis tilbud",
    areaKicker: "Udgangspunkt i Åstorp · Hele Skåne · Fleksible ved den rette opgave",
    heroTitle: "Pålidelige ejendoms- og byggeydelser",
    heroAccent: "du kan stole på.",
    heroText:
      "Vi har udgangspunkt i Åstorp, arbejder i hele Skåne og kan være fleksible afhængigt af opgaven. Professionelt håndværk fra start til slut.",
    requestQuote: "Få et tilbud",
    seeServices: "Se vores ydelser",
    values: [
      { title: "Kvalitet", text: "Håndværk der holder" },
      { title: "Pålidelighed", text: "Vi holder, hvad vi lover" },
      { title: "Resultater", text: "Omhu i hver detalje" },
    ],
    servicesEyebrow: "Det laver vi",
    servicesTitle: "Komplette løsninger til din ejendom",
    servicesIntro:
      "Fra mindre reparationer og indvendige renoveringer til belægning, dræning og byggerengøring. Vi påtager os både små og store projekter for boliger og erhvervsejendomme.",
    services: [
      { title: "Renovering & byggeri", text: "Indvendige renoveringer, ombygninger og komplette byggeløsninger." },
      {
        title: "Ejendomsvedligeholdelse",
        text: "Løbende vedligeholdelse og reparationer, der holder ejendommen i topform.",
      },
      { title: "Jord- & anlægsarbejde", text: "Belægning, dræning og haveanlæg udført med præcision." },
      { title: "Byggerengøring", text: "Grundig rengøring, der efterlader projektet rent, sikkert og klar til brug." },
    ],
    aboutEyebrow: "Drevet af kvalitet",
    aboutTitle: "Bygget på tillid",
    aboutTextOne:
      "Vores arbejdsform bygger på pålideligt håndværk, tydelig kommunikation og varige resultater. Hvert projekt planlægges grundigt og udføres præcist — fra første møde til endelig aflevering.",
    aboutTextTwo:
      "Vi er et engageret team med erfaring inden for ejendomsvedligeholdelse, renovering, byggeri og haveanlæg. Målet er altid langvarige kunderelationer og resultater, der holder.",
    missionTitle: "Vores mission",
    missionText: "At forbedre værdien, funktionen og udseendet af enhver ejendom gennem kvalitet og kundetilfredshed.",
    valuesTitle: "Vores værdier",
    valuesText: "Integritet, kvalitet, pålidelighed og professionalisme i enhver beslutning, handling og detalje.",
    whyEyebrow: "Hvorfor vælge os",
    whyTitle: "Din pålidelige partner i hele Skåne",
    whyText:
      "Vi har udgangspunkt i Åstorp og arbejder i hele Skåne. Afhængigt af opgavens omfang og krav kan vi også være fleksible med, hvor vi påtager os arbejde.",
    photoAlt: "Håndværker fra Edet Profix Bygg ved færdigt træarbejde",
    photoCaption: "Professionelt håndværk med omhu for hver detalje.",
    reasons: [
      "Erfarne og dygtige fagfolk",
      "Håndværk af høj kvalitet i hvert projekt",
      "Pålidelig service leveret til tiden",
      "Tydelig kommunikation fra start til slut",
      "Skræddersyede løsninger til boliger og virksomheder",
      "Kvalitetsmaterialer og gennemprøvede metoder",
    ],
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
    nav: { services: "Usluge", about: "O nama", why: "Zašto mi", contact: "Kontakt" },
    freeQuote: "Besplatna ponuda",
    areaKicker: "Polazimo iz Åstorpa · Cijela Skåne · Fleksibilni za pravi posao",
    heroTitle: "Pouzdane usluge održavanja i gradnje",
    heroAccent: "na koje možete računati.",
    heroText:
      "Polazimo iz Åstorpa, radimo širom pokrajine Skåne i možemo biti fleksibilni zavisno od posla. Profesionalan rad od početka do kraja.",
    requestQuote: "Zatražite ponudu",
    seeServices: "Pogledajte usluge",
    values: [
      { title: "Kvalitet", text: "Izrada koja traje" },
      { title: "Pouzdanost", text: "Držimo se dogovora" },
      { title: "Rezultat", text: "Pažnja u svakom detalju" },
    ],
    servicesEyebrow: "Šta radimo",
    servicesTitle: "Kompletna rješenja za vašu nekretninu",
    servicesIntro:
      "Od manjih popravki i unutrašnjih renoviranja do popločavanja, drenaže i čišćenja nakon gradnje. Preuzimamo male i velike projekte za domove i poslovne objekte.",
    services: [
      { title: "Renoviranje i gradnja", text: "Unutrašnja renoviranja, preuređenja i kompletna građevinska rješenja." },
      {
        title: "Održavanje nekretnina",
        text: "Redovno održavanje i popravke koje čuvaju nekretninu u odličnom stanju.",
      },
      { title: "Zemljani i vanjski radovi", text: "Popločavanje, drenaža i uređenje vrtova izvedeni precizno." },
      {
        title: "Čišćenje nakon gradnje",
        text: "Temeljito čišćenje koje ostavlja projekat čistim, sigurnim i spremnim za korištenje.",
      },
    ],
    aboutEyebrow: "Pokreće nas kvalitet",
    aboutTitle: "Gradimo povjerenje",
    aboutTextOne:
      "Naš rad se zasniva na pouzdanoj izradi, jasnoj komunikaciji i trajnim rezultatima. Svaki projekat pažljivo planiramo i precizno izvodimo — od prvog sastanka do konačne predaje.",
    aboutTextTwo:
      "Mi smo posvećen tim s iskustvom u održavanju nekretnina, renoviranju, građevinskim radovima i uređenju vrtova. Cilj su nam dugoročni odnosi s klijentima i rezultati koji traju.",
    missionTitle: "Naša misija",
    missionText:
      "Poboljšati vrijednost, funkcionalnost i izgled svake nekretnine kroz kvalitet i zadovoljstvo klijenata.",
    valuesTitle: "Naše vrijednosti",
    valuesText: "Integritet, kvalitet, pouzdanost i profesionalnost u svakoj odluci, postupku i detalju.",
    whyEyebrow: "Zašto izabrati nas",
    whyTitle: "Vaš pouzdan partner širom Skåne",
    whyText:
      "Naša polazna tačka je Åstorp, a radimo u cijeloj pokrajini Skåne. Zavisno od obima i uslova posla, fleksibilni smo i u pogledu lokacije na kojoj prihvatamo radove.",
    photoAlt: "Majstor Edet Profix Bygg pored završenih drvenih radova",
    photoCaption: "Profesionalna izrada s pažnjom prema svakom detalju.",
    reasons: [
      "Iskusni i vješti majstori",
      "Visok kvalitet izrade na svakom projektu",
      "Pouzdana usluga i poštovanje rokova",
      "Jasna komunikacija od početka do kraja",
      "Rješenja prilagođena domovima i firmama",
      "Kvalitetni materijali i provjerene metode",
    ],
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
    footerMotto: "Kvalitet. Pouzdanost. Rezultat.",
    backToTop: "Nazad na vrh",
  },
};

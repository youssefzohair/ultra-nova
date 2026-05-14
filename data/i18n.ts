export type Locale = "en" | "ar";

export const locales: Locale[] = ["en", "ar"];

export const copy = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      industries: "Industries",
      contact: "Contact",
      whatsapp: "WhatsApp",
      switchLanguage: "العربية",
    },
    company: {
      name: "Ultra Nova Machinery Repairing",
      shortName: "Ultra Nova",
      description:
        "Ultra Nova provides machinery repairing, preventive maintenance, troubleshooting, installation support, and machine sourcing from China for light and heavy machinery used in packaging, construction, food and beverage production, water plastic products, tea cup production, pumps, and industrial production lines.",
      address: "Office No. F-38, Al Karama, Dubai, United Arab Emirates",
      location: "Al Karama, Dubai",
    },
    home: {
      title: "Machinery Repairing, Maintenance & Installation",
      primaryCta: "Request Service",
      secondaryCta: "View Services",
      labels: {
        mobile: "Mobile",
        location: "Location",
      },
      heroGallery: [
        {
          title: "Factory Machinery",
          image:
            "https://images.pexels.com/photos/18920790/pexels-photo-18920790.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "Industrial Control",
          image:
            "https://images.pexels.com/photos/5953729/pexels-photo-5953729.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          title: "Production Floor",
          image:
            "https://images.pexels.com/photos/13974251/pexels-photo-13974251.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          title: "Mechanical Service",
          image:
            "https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
      ],
      galleryLabel: "Gallery",
      galleryTitle: "Machinery support in action",
      galleryItems: [
        {
          title: "Coffee Cup Machine",
          description: "Support for paper cup and coffee cup production machines.",
          image:
            "https://ecdn6-nc.globalso.com/upload/p/3132/image_product/2025-03/0e5dbf32-1fc1-4851-bc29-c189de05b839.jpg",
        },
        {
          title: "Plastic Bottle Machine",
          description: "Maintenance support for plastic bottle and packaging machinery.",
          image:
            "https://images.pexels.com/photos/18631423/pexels-photo-18631423.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "Machine Repair",
          description: "Technicians repairing industrial equipment and control systems.",
          image:
            "https://images.pexels.com/photos/34054460/pexels-photo-34054460.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "Packaging Line",
          description: "Service support for conveyors and automated packaging systems.",
          image:
            "https://images.pexels.com/photos/36423805/pexels-photo-36423805.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "Bottle Filling Line",
          description: "Maintenance for water filling, capping, and bottle handling lines.",
          image:
            "https://images.pexels.com/photos/31985602/pexels-photo-31985602.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "Industrial Maintenance",
          description: "Routine service for electrical, mechanical, and control components.",
          image:
            "https://images.pexels.com/photos/32208781/pexels-photo-32208781.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ],
      exploreLabel: "Explore",
      exploreTitle: "Find the right support quickly",
      highlights: [
        {
          title: "Repair & Maintenance",
          text: "Support for light and heavy machinery faults, breakdowns, and scheduled care.",
          href: "/services",
        },
        {
          title: "Machine Sourcing",
          text: "Practical support for selecting machines from China based on production needs.",
          href: "/services",
        },
        {
          title: "Installation Support",
          text: "Machine setup, linking, testing, commissioning, and operational handover.",
          href: "/services",
        },
      ],
    },
    about: {
      label: "About Ultra Nova",
      title: "Technical support for machinery-driven businesses in Dubai.",
      description:
        "Ultra Nova Machinery Repairing helps companies keep equipment running through repair, maintenance, installation, commissioning, and practical sourcing support.",
      sectionTitle: "Focused on uptime, safety, and practical machine care.",
      secondParagraph:
        "We work with light and heavy machinery across production, packaging, construction, pump, generator, repair service, and industrial line environments.",
    },
    services: {
      label: "Services",
      title: "Repair, maintenance, sourcing, and installation support.",
      description:
        "Explore the core services Ultra Nova provides for businesses using light machinery, heavy machinery, and industrial production equipment.",
      introLabel: "Comprehensive support",
      introTitle: "From urgent repair to preventive maintenance.",
      cardHighlightLabel1: "Core advantage",
      cardHighlightTitle1: "Fast field response",
      cardHighlightText1:
        "Our technicians deliver quick troubleshooting, repairs, and commissioning services to keep machinery moving.",
      cardHighlightLabel2: "Practical sourcing",
      cardHighlightTitle2: "Machines sourced from China",
      cardHighlightText2:
        "We help select, inspect, and import suitable equipment for your production, packaging, and facility needs.",
      deliverTitle: "What we deliver",
      items: [
        {
          title: "Light Machinery Repairing & Maintenance",
          description:
            "Repair and maintenance for light machinery used in medical, packaging, transport, construction, safety, and similar sectors.",
        },
        {
          title: "Heavy Machinery Repairing & Maintenance",
          description:
            "Repair, maintenance, and operation support for heavy equipment including elevators, escalators, boilers, packaging machinery, generators, water pumps, tower cranes, and related machinery.",
        },
        {
          title: "Machine Sourcing from China",
          description:
            "Support for selecting and purchasing machines from China based on production needs, including machines for tea cups, plastic water products, packaging, and light manufacturing.",
        },
        {
          title: "Installation & Commissioning",
          description:
            "Machine linking, setup, testing, commissioning, and operational handover after delivery.",
        },
        {
          title: "Preventive Maintenance",
          description:
            "Scheduled inspection and maintenance to reduce downtime and extend machine lifespan.",
        },
        {
          title: "Emergency Troubleshooting",
          description:
            "Fast technical support for machine faults, breakdowns, performance issues, and urgent operational problems.",
        },
      ],
    },
    industries: {
      label: "Industries",
      title: "Machines and sectors we support.",
      description:
        "Ultra Nova works with companies that rely on machinery for production, facility operations, packaging, construction, machine repair, and industrial lines.",
      coverageLabel: "Industry coverage",
      coverageTitle: "We support machines across the most demanding sectors.",
      summaryText:
        "We bring fast machine care across packaging, plastic water products, construction equipment, pumps, generators, and industrial production lines.",
      items: [
        "Packaging",
        "Plastic Water Products",
        "Tea Cup Production",
        "Construction Equipment",
        "Machine Repair Services",
        "Packaging Equipment",
        "Pumps & Generators",
        "Industrial Production Lines",
      ],
    },
    contact: {
      label: "Contact",
      title: "Need machinery support?",
      description:
        "Contact Ultra Nova Machinery Repairing for repair, maintenance, machine sourcing, and installation support in Dubai.",
      sectionTitle: "Talk to us about your machine, fault, or project.",
      sectionText:
        "Share the machine type, issue, location, and urgency so we can guide the next step clearly.",
      formTitle: "Send a request",
      formDescription:
        "Use the form to open your email client and send your request directly to our team.",
      fields: {
        name: "Name",
        email: "Email",
        subject: "Subject",
        message: "Message",
        submit: "Send Message",
      },
      phone: "Phone / WhatsApp",
      email: "Email",
      address: "Address",
    },
  },
  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      industries: "القطاعات",
      contact: "تواصل معنا",
      whatsapp: "واتساب",
      switchLanguage: "English",
    },
    company: {
      name: "الترا نوفا لصيانة المكائن",
      shortName: "الترا نوفا",
      description:
        "تقدم الترا نوفا خدمات إصلاح وصيانة المكائن، والصيانة الوقائية، وتشخيص الأعطال، ودعم التركيب والتشغيل، والمساعدة في توريد المكائن من الصين للمعدات الخفيفة والثقيلة المستخدمة في التغليف، والإنشاءات، وإنتاج الأغذية والمشروبات، والمنتجات البلاستيكية، وإنتاج أكواب الشاي، والمضخات، وخطوط الإنتاج الصناعية.",
      address: "مكتب رقم F-38، الكرامة، دبي، الإمارات العربية المتحدة",
      location: "الكرامة، دبي",
    },
    home: {
      title: "إصلاح وصيانة وتركيب المكائن",
      primaryCta: "اطلب الخدمة",
      secondaryCta: "عرض الخدمات",
      labels: {
        mobile: "الهاتف",
        location: "الموقع",
      },
      heroGallery: [
        {
          title: "مكائن المصانع",
          image:
            "https://images.pexels.com/photos/18920790/pexels-photo-18920790.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "أنظمة التحكم الصناعية",
          image:
            "https://images.pexels.com/photos/5953729/pexels-photo-5953729.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          title: "أرضية الإنتاج",
          image:
            "https://images.pexels.com/photos/13974251/pexels-photo-13974251.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
        {
          title: "الخدمة الميكانيكية",
          image:
            "https://images.pexels.com/photos/8973132/pexels-photo-8973132.jpeg?auto=compress&cs=tinysrgb&w=1200",
        },
      ],
      galleryLabel: "المعرض",
      galleryTitle: "دعم المكائن أثناء العمل",
      galleryItems: [
        {
          title: "ماكينة أكواب القهوة",
          description: "دعم مكائن إنتاج الأكواب الورقية وأكواب القهوة.",
          image:
            "https://ecdn6-nc.globalso.com/upload/p/3132/image_product/2025-03/0e5dbf32-1fc1-4851-bc29-c189de05b839.jpg",
        },
        {
          title: "ماكينة العبوات البلاستيكية",
          description: "دعم صيانة مكائن العبوات البلاستيكية ومعدات التغليف.",
          image:
            "https://images.pexels.com/photos/18631423/pexels-photo-18631423.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "إصلاح المكائن",
          description: "فنيون يعملون على إصلاح المعدات الصناعية وأنظمة التحكم.",
          image:
            "https://images.pexels.com/photos/34054460/pexels-photo-34054460.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "خط التغليف",
          description: "دعم صيانة للناقلات وأنظمة التغليف الآلية.",
          image:
            "https://images.pexels.com/photos/36423805/pexels-photo-36423805.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "خط تعبئة العبوات",
          description: "صيانة لخطوط تعبئة المياه، والإغلاق، ومناولة العبوات.",
          image:
            "https://images.pexels.com/photos/31985602/pexels-photo-31985602.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
        {
          title: "الصيانة الصناعية",
          description: "خدمة دورية للمكونات الكهربائية والميكانيكية وأنظمة التحكم.",
          image:
            "https://images.pexels.com/photos/32208781/pexels-photo-32208781.jpeg?auto=compress&cs=tinysrgb&w=1600",
        },
      ],
      exploreLabel: "استكشف",
      exploreTitle: "اعثر على الدعم المناسب بسرعة",
      highlights: [
        {
          title: "الإصلاح والصيانة",
          text: "دعم لأعطال المكائن الخفيفة والثقيلة، والتوقفات المفاجئة، والصيانة المجدولة.",
          href: "/ar/services",
        },
        {
          title: "توريد المكائن",
          text: "مساعدة عملية في اختيار المكائن من الصين حسب احتياجات الإنتاج.",
          href: "/ar/services",
        },
        {
          title: "دعم التركيب",
          text: "إعداد المكائن، وربطها، واختبارها، وتشغيلها، وتسليمها للتشغيل.",
          href: "/ar/services",
        },
      ],
    },
    about: {
      label: "عن الترا نوفا",
      title: "دعم فني للشركات التي تعتمد على المكائن في دبي.",
      description:
        "تساعد الترا نوفا لصيانة المكائن الشركات على استمرار عمل المعدات من خلال الإصلاح، والصيانة، والتركيب، والتشغيل، ودعم التوريد العملي.",
      sectionTitle: "تركيزنا على استمرارية التشغيل والسلامة والعناية العملية بالمكائن.",
      secondParagraph:
        "نعمل مع المكائن الخفيفة والثقيلة في بيئات الإنتاج، والتغليف، والإنشاءات، والمضخات، والمولدات، وخطوط الإنتاج الصناعية.",
    },
    services: {
      label: "الخدمات",
      title: "دعم للإصلاح والصيانة والتوريد والتركيب.",
      description:
        "تعرف على الخدمات الأساسية التي تقدمها الترا نوفا للشركات التي تستخدم المكائن الخفيفة والثقيلة ومعدات الإنتاج الصناعي.",
      introLabel: "دعم شامل",
      introTitle: "من الإصلاح العاجل إلى الصيانة الوقائية.",
      cardHighlightLabel1: "الميزة الأساسية",
      cardHighlightTitle1: "استجابة ميدانية سريعة",
      cardHighlightText1:
        "يقدم فنيونا خدمات التشخيص السريع والإصلاح والتشغيل لضمان استمرار عمل المكائن.",
      cardHighlightLabel2: "توريد عملي",
      cardHighlightTitle2: "توريد مكائن من الصين",
      cardHighlightText2:
        "نساعد في اختيار وفحص واستيراد المعدات المناسبة لاحتياجات الإنتاج والتغليف والمرافق.",
      deliverTitle: "ما نقدمه",
      items: [
        {
          title: "إصلاح وصيانة المكائن الخفيفة",
          description:
            "إصلاح وصيانة المكائن الخفيفة المستخدمة في القطاعات الطبية، والتغليف، والنقل، والإنشاءات، والسلامة، والقطاعات المشابهة.",
        },
        {
          title: "إصلاح وصيانة المكائن الثقيلة",
          description:
            "إصلاح وصيانة ودعم تشغيل المعدات الثقيلة مثل المصاعد، والسلالم المتحركة، والغلايات، ومعدات التغليف، والمولدات، ومضخات المياه، والرافعات البرجية، والمعدات المرتبطة بها.",
        },
        {
          title: "توريد المكائن من الصين",
          description:
            "دعم اختيار وشراء المكائن من الصين حسب احتياجات الإنتاج، بما في ذلك مكائن أكواب الشاي، ومنتجات المياه البلاستيكية، والتغليف، والتصنيع الخفيف.",
        },
        {
          title: "التركيب والتشغيل",
          description:
            "ربط المكائن، وإعدادها، واختبارها، وتشغيلها، وتسليمها بعد وصولها.",
        },
        {
          title: "الصيانة الوقائية",
          description:
            "فحص وصيانة مجدولة لتقليل التوقفات وإطالة عمر المكائن.",
        },
        {
          title: "تشخيص الأعطال الطارئة",
          description:
            "دعم فني سريع لأعطال المكائن، والتوقفات، ومشكلات الأداء، والمشكلات التشغيلية العاجلة.",
        },
      ],
    },
    industries: {
      label: "القطاعات",
      title: "المكائن والقطاعات التي نخدمها.",
      description:
        "تعمل الترا نوفا مع الشركات التي تعتمد على المكائن في الإنتاج، وتشغيل المرافق، والتغليف، والإنشاءات، وإصلاح المكائن، وخطوط الإنتاج الصناعية.",
      coverageLabel: "تغطية القطاعات",
      coverageTitle: "ندعم المكائن في أكثر القطاعات تحدياً.",
      summaryText:
        "نقدم رعاية سريعة للمكائن في التغليف، ومنتجات المياه البلاستيكية، ومعدات الإنشاءات، والمضخات، والمولدات، وخطوط الإنتاج الصناعية.",
      items: [
        "التغليف",
        "منتجات المياه البلاستيكية",
        "إنتاج أكواب الشاي",
        "معدات الإنشاءات",
        "خدمات إصلاح المكائن",
        "معدات التعبئة",
        "المضخات والمولدات",
        "خطوط الإنتاج الصناعية",
      ],
    },
    contact: {
      label: "تواصل معنا",
      title: "هل تحتاج إلى دعم للمكائن؟",
      description:
        "تواصل مع الترا نوفا لصيانة المكائن لخدمات الإصلاح، والصيانة، وتوريد المكائن، ودعم التركيب في دبي.",
      sectionTitle: "حدثنا عن الماكينة أو العطل أو المشروع.",
      sectionText:
        "شاركنا نوع الماكينة، والمشكلة، والموقع، ومدى الاستعجال حتى نرشدك إلى الخطوة التالية بوضوح.",
      formTitle: "أرسل طلبك",
      formDescription:
        "استخدم النموذج لفتح برنامج البريد وإرسال طلبك مباشرة إلى فريقنا.",
      fields: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        subject: "الموضوع",
        message: "الرسالة",
        submit: "إرسال الرسالة",
      },
      phone: "الهاتف / واتساب",
      email: "البريد الإلكتروني",
      address: "العنوان",
    },
  },
} as const;

export function localizedPath(locale: Locale, path: string) {
  if (locale === "ar") {
    return path === "/" ? "/ar" : `/ar${path}`;
  }

  return path;
}

export function alternateLocalePath(locale: Locale, path: string) {
  if (locale === "ar") {
    return path === "/" ? "/" : path.replace(/^\/ar/, "") || "/";
  }

  return path === "/" ? "/ar" : `/ar${path}`;
}

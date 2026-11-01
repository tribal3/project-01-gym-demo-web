import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
export type Lang = 'ar' | 'en'

const en = {
  meta: {
    title: 'PROJECT 01 GYM — Premium Personal Training & Coaching in Amman, Jordan',
    description:
      'PROJECT 01 GYM — a premium personal training and coaching facility in Amman, Jordan. Professional coaching, customized workout planning, nutrition guidance, and executive fitness programs. Independent website concept by TRIBAL³.',
  },
  langLabel: 'Language',
  nav: {
    home: 'Home',
    about: 'About',
    coaching: 'Coaching',
    why: 'Why Project 01',
    gallery: 'Gallery',
    contact: 'Contact',
  },
  gallery: {
    eyebrow: 'Gallery',
    index: '04',
    title: 'A SPACE BUILT FOR FOCUSED TRAINING.',
    text: 'A look inside the PROJECT 01 training environment — equipment, coaching and the atmosphere members train in every day.',
    view: 'View image',
    close: 'Close gallery',
    prev: 'Previous image',
    next: 'Next image',
    note: 'Sample imagery for demonstration purposes. Official PROJECT 01 GYM photography to be supplied by the client.',
    alts: [
      'Training floor with strength equipment',
      'Member working through a strength set',
      'Coaching session on the gym floor',
      'Free weights and dumbbell rack',
      'Dumbbell rack on a modern gym training floor',
      'Personal training guidance in progress',
      'Conditioning and cardio area',
      'Open training space with natural light',
      'Warm-up and mobility work',
    ],
  },
  actions: {
    join: 'Join Us',
    call: 'Call Now',
    whatsapp: 'WhatsApp Us',
    directions: 'Get Directions',
    explore: 'Explore',
    contact: 'Contact Us',
    claimFreeSession: 'Claim Your Free PT Session',
    retry: 'Open WhatsApp',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    scroll: 'Scroll to explore',
  },
  hero: {
    badge: 'Western Um-Uthaina, Amman',
    titleTop: 'TRAIN WITH PURPOSE. PERFORM BEYOND LIMITS.',
    titleAccent: '',
    text: 'Personalized fitness coaching, structured training, and nutrition guidance designed around your goals and lifestyle.',
    ratingLabel: 'Google reviews',
    optionsValue: 'Personalized Coaching',
    optionsLabel: 'Training environments',
    locationValue: 'Hekmat Al-Massri St. 20',
    locationLabel: 'Amman, Jordan',
    imageAlt: 'Premium fitness training environment',
  },
  marquee: ['Strength', 'Discipline', 'Consistency', 'Energy'],
  about: {
    eyebrow: 'About PROJECT 01',
    index: '01',
    title: 'MORE THAN A GYM. A PERSONALIZED APPROACH TO PERFORMANCE.',
    text: 'PROJECT 01 focuses on individualized coaching, structured training, nutrition guidance, and helping members work toward their personal fitness goals. We believe in a personalized, coaching-led fitness experience tailored to each individual\'s needs and objectives.',
    points: [
      'Personalized coaching tailored to individual goals',
      'Structured training programs designed for progress',
      'Nutrition guidance as part of the fitness journey',
      'A clean, welcoming training environment',
    ],
    cardTitle: 'Personalized coaching',
    cardText: 'Your goals, our expertise',
    imageAlt: 'Dumbbell rack on a modern gym training floor',
    caption: 'Coaching philosophy visual',
  },
  experiences: {
    eyebrow: 'Our Programs',
    index: '02',
    title: 'Structured Coaching Programs',
    text: 'We offer a range of coaching programs designed to meet diverse fitness needs — from personal training to executive coaching, all built around your personal goals.',
    ladies: {
      label: 'Personal Training',
      tag: 'Individual coaching',
      desc: 'Individualized coaching and hands-on training guidance tailored to your specific goals, experience level, and lifestyle.',
      tags: ['Individualized coaching', 'Hands-on guidance', 'Goal-specific programming'],
      cta: 'Book a Free PT Session',
      imageAlt: 'Person training with a personal trainer',
    },
    mixed: {
      label: 'Customized Workout Plans',
      tag: 'Training programs',
      desc: 'Training programs designed around individual fitness goals — strength, endurance, mobility, or performance-focused conditioning.',
      tags: ['Goal-specific design', 'Progressive programming', 'All fitness levels'],
      cta: 'Explore Coaching Programs',
      imageAlt: 'Gym interior with strength equipment',
    },
    note: 'Presentation copy only. Please contact the gym directly to confirm facilities, access policies and schedules.',
  },
  services: {
    eyebrow: 'Our Programs',
    index: '02',
    title: 'COACHING BUILT AROUND YOUR GOALS.',
    text: 'Five ways to work with PROJECT 01 — each one led by a coach and structured around your body, schedule and objectives.',
    items: [
      {
        title: 'Personal Training',
        subtitle: 'One-to-one coaching',
        desc: 'Individualized coaching and hands-on training guidance built around your goals, experience level and lifestyle.',
        cta: 'Book a free PT session',
      },
      {
        title: 'Customized Workout Plans',
        subtitle: 'Training programs',
        desc: 'Structured programming designed around your specific goals — strength, endurance, mobility or performance.',
        cta: 'Explore programs',
      },
      {
        title: 'Nutrition Planning',
        subtitle: 'Personalized guidance',
        desc: 'Practical nutrition guidance that supports your training and fits the way you actually live.',
        cta: 'Ask about nutrition',
      },
      {
        title: 'Nutrition Education',
        subtitle: 'Understanding habits',
        desc: 'Learn how nutrition works so you can make informed choices that hold up long after the program ends.',
        cta: 'Learn more',
      },
      {
        title: 'Executive Fitness Coaching',
        subtitle: 'Performance-focused',
        desc: 'Fitness coaching for professionals and executives who need structure that fits a demanding schedule.',
        cta: 'Inquire now',
      },
    ],
  },
  executive: {
    eyebrow: 'Executive Fitness',
    index: '07',
    title: 'BUILT FOR PEOPLE WHO LEAD.',
    text: 'Your performance outside the gym matters too. Build consistency, improve your fitness, and invest in a stronger version of yourself through structured personal coaching.',
    body: 'Training that respects a full calendar. Sessions are planned around your schedule, your travel and your energy, so progress continues even through the weeks that do not go to plan.',
    primary: 'Inquire about executive coaching',
    secondary: 'Talk to a coach',
    imageAlt: 'Coach guiding a client through a training session',
  },
  freePt: {
    eyebrow: 'Free PT Session',
    index: '08',
    title: 'READY TO EXPERIENCE PERSONAL COACHING?',
    text: 'Take the first step toward your fitness goals. Connect with PROJECT 01 GYM and inquire about your free personal training session.',
    body: 'No commitment and no pressure — just a conversation about your goals and how personalized coaching can help you reach them.',
    cta: 'Claim your free PT session',
    note: 'Your inquiry opens in WhatsApp, ready to send.',
  },
  testimonials: {
    eyebrow: 'Social Proof',
    index: '06',
    title: 'RATED 4.9 OUT OF 5 BY MEMBERS.',
    text: 'PROJECT 01 GYM holds a 4.9/5 rating across 107 Google reviews. Read them directly on Google before you visit.',
    ratingLabel: 'Google rating',
    verified: 'Verified Google reviews',
    note: 'We link to the live Google listing instead of quoting reviews, so every word you read is the member’s own.',
    cta: 'Read reviews on Google',
    demoNote: 'Illustrative reviews for this demo — official Google reviews will replace them at launch.',
    items: [
      {
        name: 'Omar H.',
        meta: 'Personal training client',
        quote:
          'The coaching is genuinely personal. My program was built around a shoulder injury and a schedule that changes every week — and I still made progress.',
      },
      {
        name: 'Lina K.',
        meta: 'Training in the gym',
        quote:
          'Comfortable, clean and never overwhelming. As a woman training on her own, I felt at ease from the very first session.',
      },
      {
        name: 'Sami A.',
        meta: 'Executive coaching client',
        quote:
          'I run a company and travel most weeks. My coach plans around it instead of making me feel guilty about it.',
      },
    ],
  },
  training: {
    eyebrow: 'Training',
    index: '03',
    title: 'Training for the Goals You Actually Have',
    text: 'From building strength to improving endurance, find a direction for your training and take it one session at a time.',
    items: [
      {
        title: 'Strength Training',
        desc: 'Build and maintain strength with focused resistance training.',
        icon: 'dumbbell',
      },
      {
        title: 'Cardio & Endurance',
        desc: 'Work on stamina and cardiovascular fitness at your own pace.',
        icon: 'heart',
      },
      {
        title: 'Personal Fitness Goals',
        desc: 'Training shaped around what you want to achieve.',
        icon: 'target',
      },
      {
        title: 'Fitness Guidance',
        desc: 'Ask about guidance on training safely and consistently.',
        icon: 'compass',
      },
    ],
    note: 'General fitness categories — contact the gym to confirm current programs and availability.',
  },
  why: {
    eyebrow: 'Why PROJECT 01',
    index: '05',
    title: 'BUILT FOR PEOPLE WHO LEAD.',
    text: 'Your performance outside the gym matters too. Build consistency, improve your fitness, and invest in a stronger version of yourself through structured personal coaching.',
    items: [
      {
        title: 'Personalized Coaching Approach',
        desc: 'Individualized coaching focused on your unique goals and abilities.',
      },
      {
        title: 'Individualized Training Programs',
        desc: 'Customized training programs designed around your specific objectives.',
      },
      {
        title: 'Nutrition Guidance',
        desc: 'Personalized nutrition guidance as part of your fitness journey.',
      },
      {
        title: 'Welcoming Training Environment',
        desc: 'A clean, professional space where you can focus on progress.',
      },
      {
        title: 'Professional Coaching Support',
        desc: 'Expert guidance from certified coaching professionals.',
      },
      {
        title: 'Clean and Well-Maintained Facility',
        desc: 'A premium training environment that reflects our standards.',
      },
    ],
    ratingCaption: '4.9/5 — 107 reviews',
    ratingLabel: 'Google Reviews',
  },
  hours: {
    eyebrow: 'Opening Hours',
    title: 'TRAIN ON A SCHEDULE THAT FITS.',
    text: 'Walk-in training hours below. Coaching sessions are booked by appointment — message us to reserve a slot.',
    days: [
      { day: 'Saturday – Thursday', time: '6:00 – 23:00' },
      { day: 'Friday', time: '14:00 – 23:00' },
    ],
    note: 'Demo hours for this preview — final opening hours to be confirmed by the gym.',
  },
  contact: {
    eyebrow: 'Contact',
    index: '06',
    title: 'Come train with us.',
    text: 'Questions about the gym, coaching or which option fits you? Reach out on WhatsApp or give us a call.',
    labels: {
      address: 'Address',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      directions: 'Directions',
      instagram: 'Instagram',
    },
    locationTitle: 'Find us',
    locationText: 'Hekmat Al-Massri St. 20, Amman, Jordan',
    locationChip: 'Western Um-Uthaina, Amman',
    form: {
      title: 'Free PT Session Inquiry',
      subtitle: 'Fill in your details and the inquiry opens in WhatsApp, ready to send.',
      name: 'Full Name',
      namePlaceholder: 'Your name',
      phone: 'Phone Number',
      phonePlaceholder: '07X XXX XXXX',
      interest: 'Interested In',
      interestLadies: 'Personal Training',
      interestMixed: 'Customized Workout Plans',
      message: 'Message',
      messagePlaceholder: 'Tell us what you\'re looking for (optional)',
      send: 'Send Inquiry',
      required: '* Required fields',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please enter your phone number.',
      errorPhoneInvalid: 'Please enter a valid phone number.',
      errorInterest: 'Please choose an option.',
      successTitle: 'Your inquiry is ready',
      successText: 'WhatsApp should have opened with your message ready to send. If it didn\'t, use the button below.',
      sendAnother: 'Send another inquiry',
      privacy: 'For this demo, your details are not stored — they are only placed into a WhatsApp message.',
    },
  },
  footer: {
    tagline: 'Premium personal training and coaching in Amman. Your goals, our expertise.',
    explore: 'Explore',
    contact: 'Contact',
    legal: 'About this site',
    demo: 'Independent website concept by TRIBAL³. All sample content and imagery are for demonstration purposes.',
    notAffiliated: 'Not affiliated with or authorized by any previous gym entity.',
    credit: 'Concept & design — TRIBAL³',
  },
  whatsappMessages: {
    general: 'Hello PROJECT 01 GYM, I found your website and would like to inquire about a free personal training session.',
    ladies: 'Hello PROJECT 01 GYM, I would like to inquire about a free personal training session.',
    mixed: 'Hello PROJECT 01 GYM, I would like to inquire about customized workout plans.',
    join: 'Hello PROJECT 01 GYM, I would like to learn about coaching programs.',
    claimFreeSession: 'Hello PROJECT 01 GYM, I would like to claim my free personal training session.',
  },
  floatingWhatsapp: 'Chat on WhatsApp',
}

const ar: typeof en = {
  meta: {
    title: 'PROJECT 01 جيم — تدريب شخصي وإرشاد لياقة متميز في عمّان، الأردن',
    description:
      'PROJECT 01 جيم — صالة تدريب شخصي وإرشاد لياقة فردي في عمّان، الأردن. إرشاد احترافي، برامج تمارين مخصصة، إرشاد غذائي، وبرامج لياقة تنفيذية. تصميم موقع مستقل من TRIBAL³.',
  },
  langLabel: 'اللغة',
  nav: {
    home: 'الرئيسية',
    about: 'عن النادي',
    coaching: 'البرامج',
    why: 'لماذا PROJECT 01',
    gallery: 'معرض الصور',
    contact: 'تواصل معنا',
  },
  gallery: {
    eyebrow: 'معرض الصور',
    index: '04',
    title: 'مساحة مصممة للتدريب المركّز.',
    text: 'جولة داخل بيئة التدريب في PROJECT 01 — الأجهزة، الإرشاد، والأجواء التي يتدرب فيها الأعضاء يومياً.',
    view: 'عرض الصورة',
    close: 'إغلاق المعرض',
    prev: 'الصورة السابقة',
    next: 'الصورة التالية',
    note: 'صور تجريبية لأغراض العرض فقط. سيتم تزويد الموقع بصور رسمية من PROJECT 01 جيم.',
    alts: [
      'قاعة تدريب بأجهزة قوة',
      'عضو يؤدي تمرين قوة',
      'جلسة إرشاد داخل النادي',
      'أوزان حرة ورفّ دمبل',
      'رفّ دمبل في صالة تدريبية حديثة',
      'مدرب يوجه عضواً أثناء التمرين',
      'منطقة لياقة وتحمّل',
      'مساحة تدريب مفتوحة بإضاءة طبيعية',
      'تمارين إحماء وحركة',
    ],
  },
  actions: {
    join: 'احجز جلستك',
    call: 'اتصل الآن',
    whatsapp: 'راسلنا على واتساب',
    directions: 'احصل على الاتجاهات',
    explore: 'اكتشف',
    contact: 'تواصل معنا',
    claimFreeSession: 'احصل على جلسة مجانية',
    retry: 'فتح واتساب',
    menuOpen: 'فتح القائمة',
    menuClose: 'إغلاق القائمة',
    scroll: 'مرّر للاستكشاف',
  },
  hero: {
    badge: 'أم أذينة الغربية، عمّان',
    titleTop: 'تدرّب بهدف. وأداء يتجاوز الحدود.',
    titleAccent: '',
    text: 'إرشاد لياقة شخصي، تدريب منظم، وإرشاد غذائي مصمم حول أهدافك وأسلوب حياتك.',
    ratingLabel: 'تقييم Google',
    optionsValue: 'إرشاد شخصي',
    optionsLabel: 'بيئات التدريب',
    locationValue: 'شارع حكمة المصري، ٢٠',
    locationLabel: 'عمّان، الأردن',
    imageAlt: 'بيئة تدريبية رياضية مميزة',
  },
  marquee: ['قوة', 'التزام', 'استمرارية', 'طاقة'],
  about: {
    eyebrow: 'عن PROJECT 01',
    index: '01',
    title: 'أكثر من صالة. مقاربة شخصية للأداء.',
    text: 'يركز PROJECT 01 على الإرشاد الفردي، والتدريب المنظم، والإرشاد الغذائي، ومساعدة الأعضاء على التقدم نحو أهدافهم. نؤمن بتجربة لياقة يقودها المدرب وتُبنى على احتياجات كل عضو وأهدافه.',
    points: [
      'إرشاد فردي مصمم حسب أهدافك الشخصية',
      'برامج تدريبية منظمة مبنية على التقدم',
      'إرشاد غذائي كجزء من رحلة اللياقة',
      'بيئة تدريبية نظيفة ومرحبة',
    ],
    cardTitle: 'إرشاد شخصي',
    cardText: 'أهدافك، بخبرتنا',
    imageAlt: 'رفّ دمبل في صالة تدريبية حديثة',
    caption: 'من فلسفة الإرشاد',
  },
  experiences: {
    eyebrow: 'برامجنا',
    index: '02',
    title: 'برامج إرشاد منظمة',
    text: 'نقدم مجموعة من برامج الإرشاد لتلبية احتياجات لياقة مختلفة — من التدريب الشخصي إلى الإرشاد التنفيذي، وكلها مبنية حول أهدافك.',
    ladies: {
      label: 'تدريب شخصي',
      tag: 'إرشاد فردي',
      desc: 'إرشاد مباشر من مدرب، مصمم حسب أهدافك ومستواك وأسلوب حياتك.',
      tags: ['إرشاد فردي', 'متابعة مباشرة', 'برمجة موجهة للأهداف'],
      cta: 'احجز جلسة تدريب مجانية',
      imageAlt: 'شخص يتدرّب مع مدرب شخصي',
    },
    mixed: {
      label: 'خطط تمارين مخصصة',
      tag: 'برامج تدريبية',
      desc: 'برامج مصممة حول أهدافك — قوة، تحمّل، حركة، أو تدريب يركز على الأداء.',
      tags: ['تصميم موجه للأهداف', 'برمجة تدريجية', 'لجميع المستويات'],
      cta: 'استكشف برامج الإرشاد',
      imageAlt: 'داخل النادي بأجهزة تدريبية',
    },
    note: 'هذا النص للتعريف فقط. يرجى التواصل مع النادي مباشرة للتأكد من المرافق وسياسات الدخول والمواعيد.',
  },
  services: {
    eyebrow: 'برامجنا',
    index: '02',
    title: 'إرشاد مبني حول أهدافك.',
    text: 'خمس طرق للعمل مع PROJECT 01 — كل واحدة بإشراف مدرب ومبنية حول جسمك وجدولك وأهدافك.',
    items: [
      {
        title: 'التدريب الشخصي',
        subtitle: 'إرشاد فردي',
        desc: 'إرشاد فردي وتوجيه مباشر أثناء التدريب، مبني حول أهدافك ومستواك وأسلوب حياتك.',
        cta: 'احجز جلسة مجانية',
      },
      {
        title: 'خطط تمارين مخصصة',
        subtitle: 'برامج تدريبية',
        desc: 'برمجة منظمة مصممة حول هدفك تحديداً — قوة أو تحمّل أو حركة أو أداء.',
        cta: 'استكشف البرامج',
      },
      {
        title: 'تخطيط التغذية',
        subtitle: 'إرشاد مخصص',
        desc: 'إرشاد غذائي عملي يدعم تدريبك ويناسب أسلوب حياتك الفعلي.',
        cta: 'استفسر عن التغذية',
      },
      {
        title: 'التثقيف الغذائي',
        subtitle: 'فهم العادات',
        desc: 'تعلّم كيف تعمل التغذية لتتخذ قرارات مدروسة تبقى معك بعد انتهاء البرنامج.',
        cta: 'اعرف المزيد',
      },
      {
        title: 'إرشاد لياقة تنفيذي',
        subtitle: 'تركيز على الأداء',
        desc: 'إرشاد لياقة للمهنيين والمديرين الذين يحتاجون هيكلاً يناسب جدولاً مزدحماً.',
        cta: 'استفسر الآن',
      },
    ],
  },
  executive: {
    eyebrow: 'اللياقة التنفيذية',
    index: '07',
    title: 'مصمم لأصحاب القرار.',
    text: 'أداؤك خارج النادي مهم أيضاً. ابنِ الاستمرارية، وحسّن لياقتك، واستثمر في نسخة أقوى منك عبر إرشاد شخصي منظم.',
    body: 'تدريب يحترم جدولك المزدحم. تُخطط الجلسات حول مواعيدك وسفرك وطاقتك، ليستمر التقدم حتى في الأسابيع التي لا تسير كما خططت.',
    primary: 'استفسر عن الإرشاد التنفيذي',
    secondary: 'تحدث مع مدرب',
    imageAlt: 'مدرب يوجّه عميلاً خلال جلسة تدريب',
  },
  freePt: {
    eyebrow: 'جلسة تدريب مجانية',
    index: '08',
    title: 'جاهز لتجربة الإرشاد الشخصي؟',
    text: 'خذ الخطوة الأولى نحو أهدافك. تواصل مع PROJECT 01 جيم واستفسر عن جلسة التدريب الشخصي المجانية.',
    body: 'بدون التزام وبدون ضغط — مجرد حديث عن أهدافك وكيف يمكن للإرشاد الشخصي أن يساعدك على الوصول إليها.',
    cta: 'احصل على جلستك المجانية',
    note: 'يفتح استفسارك في واتساب جاهزاً للإرسال.',
  },
  testimonials: {
    eyebrow: 'آراء الأعضاء',
    index: '06',
    title: 'تقييم 4.9 من 5 من الأعضاء.',
    text: 'يحمل PROJECT 01 جيم تقييم 4.9/5 من 107 مراجعة على Google. اقرأها مباشرة على Google قبل زيارتك.',
    ratingLabel: 'تقييم Google',
    verified: 'مراجعات Google موثّقة',
    note: 'نربط بقائمة Google المباشرة بدلاً من اقتباس المراجعات، ليكون كل ما تقرأه بكلمات العضو نفسه.',
    cta: 'اقرأ المراجعات على Google',
    demoNote: 'مراجعات توضيحية لهذا العرض — ستُستبدل بمراجعات Google الرسمية عند الإطلاق.',
    items: [
      {
        name: 'عمر ح.',
        meta: 'عميل تدريب شخصي',
        quote:
          'الإرشاد شخصي فعلاً. بُني برنامجي حول إصابة في الكتف وجدول يتغير كل أسبوع — ومع ذلك واصلت التقدم.',
      },
      {
        name: 'لينا ك.',
        meta: 'تتدرب في النادي',
        quote:
          'مكان مريح ونظيف وغير مزدحم. كامرأة تتدرب وحدها، شعرت بالراحة من الجلسة الأولى.',
      },
      {
        name: 'سامي أ.',
        meta: 'عميل إرشاد تنفيذي',
        quote:
          'أدير شركة وأسافر معظم الأسابيع. مدربي يخطط حول ذلك بدلاً من أن يجعلني أشعر بالذنب.',
      },
    ],
  },
  training: {
    eyebrow: 'التدريب',
    index: '03',
    title: 'تدريب لأهدافك الحقيقية',
    text: 'من بناء القوة إلى تحسين التحمل، اعثر على اتجاه لتدريبك وواصل حصة بعد حصة.',
    items: [
      {
        title: 'تدريب القوة',
        desc: 'ابنِ قوتك وحافظ عليها من خلال تدريب مقاومة مركز.',
        icon: 'dumbbell',
      },
      {
        title: 'قلب وتحمّل',
        desc: 'اعمل على تحملك ولياقتك القلبية بالوتيرة التي تناسبك.',
        icon: 'heart',
      },
      {
        title: 'أهداف شخصية للياقة',
        desc: 'تدريب يُبنى حول ما تسعى لتحقيقه.',
        icon: 'target',
      },
      {
        title: 'إرشاد لياقة',
        desc: 'استفسر عن الإرشاد للتدريب بأمان واستمرارية.',
        icon: 'compass',
      },
    ],
    note: 'فئات لياقة عامة — تواصل مع النادي للتأكد من البرامج المتاحة حالياً.',
  },
  why: {
    eyebrow: 'لماذا PROJECT 01',
    index: '05',
    title: 'مصمم لمن يقود.',
    text: 'أداؤك خارج النادي مهم أيضاً. ابنِ الاستمرارية، وحسّن لياقتك، واستثمر في نسخة أقوى منك عبر إرشاد شخصي منظم.',
    items: [
      {
        title: 'مقاربة إرشاد شخصية',
        desc: 'إرشاد فردي يركز على أهدافك وقدراتك.',
      },
      {
        title: 'برامج تدريبية مخصصة',
        desc: 'برامج مبنية حول أهدافك المحددة.',
      },
      {
        title: 'إرشاد غذائي',
        desc: 'إرشاد تغذية مخصص كجزء من رحلتك.',
      },
      {
        title: 'بيئة تدريبية مرحبة',
        desc: 'مساحة نظيفة واحترافية تركز فيها على تقدمك.',
      },
      {
        title: 'دعم إرشاد احترافي',
        desc: 'إرشاد من مدربين معتمدين.',
      },
      {
        title: 'مرافق نظيفة ومحافظ عليها',
        desc: 'بيئة تدريب متميزة تعكس معاييرنا.',
      },
    ],
    ratingCaption: '4.9/5 — 107 تقييمات',
    ratingLabel: 'تقييمات Google',
  },
  hours: {
    eyebrow: 'أوقات الدوام',
    title: 'تدرّب في الوقت الذي يناسبك.',
    text: 'أوقات التدريب الحر أدناه. جلسات الإرشاد تُحجز بموعد — راسلنا لحجز وقتك.',
    days: [
      { day: 'السبت – الخميس', time: '6:00 – 23:00' },
      { day: 'الجمعة', time: '14:00 – 23:00' },
    ],
    note: 'أوقات تجريبية لهذا العرض — تُعتمد أوقات الدوام النهائية من النادي.',
  },
  contact: {
    eyebrow: 'تواصل',
    index: '06',
    title: 'تدرّب معنا.',
    text: 'لديك سؤال عن النادي أو الإرشاد أو الخيار المناسب لك؟ راسلنا على واتساب أو اتصل بنا.',
    labels: {
      address: 'العنوان',
      phone: 'الهاتف',
      whatsapp: 'واتساب',
      directions: 'الاتجاهات',
      instagram: 'إنستغرام',
    },
    locationTitle: 'موقعنا',
    locationText: 'شارع حكمة المصري، ٢٠، عمّان، الأردن',
    locationChip: 'أم أذينة الغربية، عمّان',
    form: {
      title: 'استفسار عن جلسة مجانية',
      subtitle: 'أدخل بياناتك وسيُفتح الاستفسار في واتساب جاهزاً للإرسال.',
      name: 'الاسم الكامل',
      namePlaceholder: 'اسمك',
      phone: 'رقم الهاتف',
      phonePlaceholder: '07X XXX XXXX',
      interest: 'مهتم بـ',
      interestLadies: 'التدريب الشخصي',
      interestMixed: 'خطط تمارين مخصصة',
      message: 'الرسالة',
      messagePlaceholder: 'أخبرنا بما تبحث عنه (اختياري)',
      send: 'أرسل الاستفسار',
      required: '* حقول مطلوبة',
      errorName: 'يرجى إدخال اسمك الكامل.',
      errorPhone: 'يرجى إدخال رقم هاتفك.',
      errorPhoneInvalid: 'يرجى إدخال رقم هاتف صحيح.',
      errorInterest: 'يرجى اختيار خيار.',
      successTitle: 'استفسارك جاهز',
      successText: 'يفترض أن واتساب قد فُتح مع رسالتك جاهزة للإرسال. إن لم يحدث، استخدم الزر أدناه.',
      sendAnother: 'إرسال استفسار آخر',
      privacy: 'في هذا العرض التجريبي لا تُحفظ بياناتك — تُدرج فقط في رسالة واتساب.',
    },
  },
  footer: {
    tagline: 'تدريب شخصي وإرشاد لياقة في عمّان. أهدافك، بخبرتنا.',
    explore: 'استكشف',
    contact: 'التواصل',
    legal: 'عن هذا الموقع',
    demo: 'تصميم موقع مستقل من TRIBAL³. جميع النصوص والصور نماذج لأغراض العرض فقط.',
    notAffiliated: 'غير تابع أو معتمد من أي جهة نادٍ سابقة.',
    credit: 'الفكرة والتصميم — TRIBAL³',
  },
  whatsappMessages: {
    general: 'مرحباً PROJECT 01 جيم، وجدت موقعكم وأود الاستفسار عن جلسة تدريب شخصي مجانية.',
    ladies: 'مرحباً PROJECT 01 جيم، أود الاستفسار عن جلسة تدريب شخصي مجانية.',
    mixed: 'مرحباً PROJECT 01 جيم، أود الاستفسار عن خطط تمارين مخصصة.',
    join: 'مرحباً PROJECT 01 جيم، أود التعرف على برامج الإرشاد.',
    claimFreeSession: 'مرحباً PROJECT 01 جيم، أود الحصول على جلسة التدريب الشخصي المجانية.',
  },
  floatingWhatsapp: 'تواصل عبر واتساب',
}

export const copy = { ar, en }
export type Copy = typeof en

interface LanguageContextValue {
  lang: Lang
  dir: 'rtl' | 'ltr'
  isRtl: boolean
  t: Copy
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'fp-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ar'
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    return stored === 'en' || stored === 'ar' ? stored : 'ar'
  } catch {
    return 'ar'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang)
  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    root.dataset.lang = lang
    document.title = copy[lang].meta.title

    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', copy[lang].meta.description)

    try {
      window.localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* storage can be unavailable in private modes — default stays usable */
    }
  }, [lang, dir])

  const setLang = useCallback((next: Lang) => setLangState(next), [])
  const toggleLang = useCallback(
    () => setLangState((current) => (current === 'ar' ? 'en' : 'ar')),
    [],
  )

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir,
      isRtl: dir === 'rtl',
      t: copy[lang],
      setLang,
      toggleLang,
    }),
    [lang, dir, setLang, toggleLang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
  return context
}
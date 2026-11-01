export const BUSINESS = {
  nameEn: 'PROJECT 01 GYM',
  nameAr: 'PROJECT 01 جيم',
  phoneDisplay: '+962 7 7879 9106',
  phoneHref: 'tel:+962778799106',
  whatsappNumber: '962778799106',
  addressEn: 'Hekmat Al-Massri St. 20, Amman, Jordan',
  addressAr: 'شارع حكمة المصري، ٢٠، عمّان، الأردن',
  rating: '4.9',
  reviewCount: 107,
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=PROJECT+01+Gym+Hekmat+Al-Massri+St+20+Amman+Jordan',
  instagram: 'https://www.instagram.com/project01gym/',
  linkedin: 'https://www.linkedin.com/company/project-01-gym/',
  facebook: 'https://www.facebook.com/p/Project-01-Athletics-100095387043807/',
} as const

export const WHATSAPP_BASE = `https://wa.me/${BUSINESS.whatsappNumber}`

/** Build a WhatsApp deep link with a pre-filled message. */
export const wa = (message: string) => `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`

const unsplash = (id: string, width: number) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${width}&q=80`

export const IMAGES = {
  hero: unsplash('1571902943202-507ec2618e8f', 2000),
  about: unsplash('1534438327276-14e5300c3a48', 1200),
  aboutDetail: unsplash('1540497077202-7c8a3999166f', 800),
  ladies: unsplash('1550345332-09e3ac987658', 1200),
  mixed: unsplash('1567013127542-490d757e51fc', 1200),
  strength: unsplash('1584735935682-2f2b69dff9d2', 900),
  cardio: unsplash('1593079831268-3381b0db4a77', 900),
  goals: unsplash('1571019613454-1cb2f99b2d8b', 900),
  guidance: unsplash('1581009146145-b5ef050c2e1e', 900),
  gallery: [
    { id: '1571902943202-507ec2618e8f', w: 1400 },
    { id: '1605296867304-46d5465a13f1', w: 1000 },
    { id: '1540497077202-7c8a3999166f', w: 1000 },
    { id: '1594381898411-846e7d193883', w: 1000 },
    { id: '1534438327276-14e5300c3a48', w: 1000 },
    { id: '1571019613454-1cb2f99b2d8b', w: 1000 },
    { id: '1599058917765-a780eda07a3e', w: 1000 },
    { id: '1552674605-db6ffd4facb5', w: 1000 },
    { id: '1518611012118-696072aa579a', w: 1000 },
  ],
}

export const galleryImage = (id: string, width: number) => unsplash(id, width)
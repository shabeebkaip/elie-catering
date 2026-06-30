import type { Testimonial } from "./types";

/**
 * Client testimonials — surfaced on event pages via `EventType.testimonialIds`.
 *
 * Replace these starter entries with real quotes (with permission). Keep them
 * specific — generic "great service!" praise is forgettable.
 */
export const testimonials: Testimonial[] = [
  {
    id: "weddings-1",
    author: { en: "Reem Al-Saud", ar: "ريم آل سعود" },
    role: { en: "Mother of the Bride", ar: "والدة العروس" },
    quote: {
      en: "We hosted 800 guests across two ballrooms. Elie's team made it feel like 80. Service was so quiet I never saw it happen.",
      ar: "استضفنا 800 ضيف عبر قاعتين. جعل فريق إيلي الأمر يبدو وكأنه 80. كانت الخدمة هادئة جداً لدرجة أنني لم أرَها تحدث.",
    },
    eventTypeIds: ["weddings"],
  },
  {
    id: "weddings-2",
    author: { en: "Ahmed Al-Otaibi", ar: "أحمد العتيبي" },
    role: { en: "Groom", ar: "العريس" },
    quote: {
      en: "The lamb ouzi tableside moment was the photograph my mother still has on her wall. Worth every minute of the consultation.",
      ar: "لحظة الأوزي على المائدة كانت الصورة التي لا تزال والدتي تحتفظ بها على جدارها. تستحق كل دقيقة من جلسة الاستشارة.",
    },
    eventTypeIds: ["weddings"],
  },
  {
    id: "corporate-1",
    author: { en: "Sara Al-Mutairi", ar: "سارة المطيري" },
    role: { en: "Head of Events, Major Saudi Bank", ar: "رئيسة الفعاليات، بنك سعودي رئيسي" },
    quote: {
      en: "We've run forty events with Elie over three years. Not one missed timing, not one wrong dietary brief. That's what we pay for.",
      ar: "أدرنا أربعين فعالية مع إيلي خلال ثلاث سنوات. لم يضع توقيت واحد، ولم يخطئ في إيجاز غذائي واحد. هذا ما ندفع مقابله.",
    },
    eventTypeIds: ["corporate"],
  },
];

export const testimonialIds = testimonials.map((t) => t.id);

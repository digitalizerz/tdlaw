import { site } from "./site";

export const firmCopy = {
  aristotle:
    "The virtue of justice consists in moderation, as regulated by wisdom.",
  aristotleAttribution: "Aristotle",
  theFirm:
    "At T.D. Armstrong Law Firm, P.C., our clients are our top priority. We care about the rights and liberties of every individual and we vow to fight for every one of our clients to the best of our abilities. Our personalized care and attention to detail at every step will be second to none. We will exercise every resource and draw from the many years of experience in order to give you the most favorable outcome possible. We work tirelessly and are on call 24/7 to satisfy our client’s needs. Feel free to schedule a consultation… welcome to the family.",
  theFirmParagraphs: [
    "At T.D. Armstrong Law Firm, P.C., our clients are our top priority. We care about the rights and liberties of every individual and we vow to fight for every one of our clients to the best of our abilities.",
    "Our personalized care and attention to detail at every step will be second to none. We will exercise every resource and draw from the many years of experience in order to give you the most favorable outcome possible. We work tirelessly and are on call 24/7 to satisfy our client’s needs. Feel free to schedule a consultation… welcome to the family.",
  ],
  heroLines: [
    "Our clients are our top priority.",
    "Personalized care and attention to detail.",
    "We work tirelessly and are on call 24/7.",
  ],
} as const;

export const attorney = {
  name: "Taylor D. Armstrong",
  role: "Managing Attorney",
  bio: "Taylor D. Armstrong is a 2018 graduate of Fordham University School of Law. Taylor holds both State of Texas Bar and United States District Court (Southern District of Texas) licenses. Prior to forming his own law firm, Taylor worked as a law clerk in the Southern District of Texas and later as an Assistant District Attorney in Harris County, Texas. Taylor has experience managing cases at every stage of litigation in state and federal courts, and his varied practice allows him to have unique insight on a vast range of matters. Taylor believes his client’s success depends heavily on his preparation and dedication. He spends tireless hours making sure each client leaves more knowledgeable and better positioned to navigate their future business and personal relationships.",
  motto:
    "He lives by the motto ‘each one teach one’ and is ready to prove to you why he’s one of Texas’s most talented attorneys.",
  excerpt:
    "Taylor D. Armstrong is a 2018 graduate of Fordham University School of Law. Taylor holds both State of Texas Bar and United States District Court (Southern District of Texas) licenses. Prior to forming his own law firm, Taylor worked as a law clerk in the Southern District of Texas and later as an Assistant District Attorney in Harris County, Texas.",
  credentials: [
    "2018 graduate of Fordham University School of Law",
    "State of Texas Bar",
    "United States District Court (Southern District of Texas)",
    "Former law clerk, Southern District of Texas",
    "Former Assistant District Attorney, Harris County, Texas",
  ],
} as const;

export const credibilityItems = [
  {
    title: "Relentless Preparation",
    icon: "shield",
    teaser: "We thoroughly prepare each case.",
    description:
      "We thoroughly prepare each case to give you all available legal options.",
  },
  {
    title: "Strategic Advocacy",
    icon: "target",
    teaser: "From arrest through trial and beyond.",
    description:
      "From arrest through trial and beyond, we are ready to defend your rights.",
  },
  {
    title: "Personalized Attention",
    icon: "people",
    teaser: "Personalized care at every step.",
    description:
      "Our personalized care and attention to detail at every step will be second to none.",
  },
  {
    title: "Experienced Representation",
    icon: "scales",
    teaser: "Experience at every stage of litigation.",
    description:
      "Taylor has experience managing cases at every stage of litigation in state and federal courts.",
  },
] as const;

export const practiceAreas = [
  {
    slug: "civil-litigation",
    number: "01",
    name: "Civil Litigation",
    summary:
      "We represent clients in actions related to breach of contract, fraud, conversion, breach of fiduciary duty and interference with prospective or existing economic relationships.",
    body: [
      "We represent clients in actions related to breach of contract, fraud, conversion, breach of fiduciary duty and interference with prospective or existing economic relationships. We have represented both plaintiffs and defendants in business litigation cases involving written, oral and implied contracts. These cases have included construction disputes, commercial disputes, real estate disputes, product liability disputes and business interruption claims.",
      "We align our litigation strategy with the client’s interests and objectives. Our goal is to achieve an early resolution of the case by a favorable settlement. Unfortunately, every case cannot be resolved in an amicable fashion. Alternatively, we have experience fighting for our clients until a decision is rendered at the trial stage.",
      "We pride ourselves on our transparency. We discuss with all of our clients the strengths, weaknesses, cost, and benefits of their case, so they can make informed decisions about the case as we work to achieve the best result possible for the client under the circumstances of each case. We strive to achieve exceptional results for clients at reasonable costs. We understand the economic realities of today’s business climate and we respect all income and asset ranges. In addition to working on an hourly basis, we can fashion alternative fee arrangements when appropriate to handle matters on a hybrid or contingent fee basis.",
    ],
  },
  {
    slug: "criminal-defense",
    number: "02",
    name: "Criminal Defense",
    summary:
      "From arrest through trial and beyond, we are ready to defend your rights, preserve your reputation, and resolve your criminal charges in the most favorable manner possible.",
    body: [
      "We represent clients from all walks of life who have been charged with nearly any crime. From arrest through trial and beyond, we are ready to defend your rights, preserve your reputation, and resolve your criminal charges in the most favorable manner possible.",
      "Some firms focus on plea deals and want to resolve each case quickly, to move onto other clients. That’s not how we do things. We thoroughly prepare each case to give you all available legal options. We are not afraid of complex cases requiring extensive discovery, and we have significant trial experience. In short, we do what must be done to deliver the level of legal representation you need and deserve.",
    ],
    matters: [
      "Assault and Violent Crimes",
      "Domestic Violence",
      "Driving While Intoxicated (DWI)",
      "Drug Crimes",
      "Homicide and Vehicular Homicide",
      "Manslaughter",
      "Healthcare Fraud",
      "Organized Crime and Conspiracy Charges",
      "Sex Crimes",
      "Weapon Crimes",
      "White Collar Crime",
    ],
  },
  {
    slug: "estate-planning",
    number: "03",
    name: "Estate Planning",
    summary:
      "We take the time to get to know you and help you define your goals, then advise you of the estate planning strategies best suited to achieve them.",
    body: [
      "We take the time to get to know you and help you define your goals. We review your family situation, finances, home and real estate ownership, employment, investments, and business interests. We advise you of the estate planning strategies best suited to achieve those goals and ensure you have the information necessary to make well-reasoned decisions.",
      "Clients rely on our expertise to create estate plans that facilitate the handling of wills, trusts, taxes, insurance, property distribution, and the care of minor children. Our plans are sound and designed to withstand challenges. We know from our decades of extensive estate and trust litigation that inadequate estate plan documents can lead to expensive court battles.",
    ],
  },
  {
    slug: "family-law",
    number: "04",
    name: "Family Law",
    summary:
      "Our goal is to help resolve our client’s family issues in the least stressful and complicated way possible.",
    body: [
      "Family law involves complexities that affect your personal, public, and professional well-being. Our goal is to help resolve our client’s family issues in the least stressful and complicated way possible. Whether our client’s are facing divorce proceedings, child custody issues, or other family matters, we are here to protect the best interests of your family.",
      "We provide personalized care and support that gives our clients comfort to have the confidence they need to persevere during their difficult times.",
    ],
    matters: [
      "Divorce",
      "Child Support",
      "Child Custody",
      "Domestic Violence",
      "Grandparent Rights",
      "Modification of Prior Court Orders Due to Changes in Circumstances",
      "Prenuptial Agreements",
      "Paternity",
      "Restraining Orders",
      "Termination of Parental Rights",
      "Visitation",
    ],
  },
  {
    slug: "personal-injury",
    number: "05",
    name: "Personal Injury",
    summary:
      "When you suffer a personal injury due to third party liability you may be entitled to monetary compensation for physical injuries, medical bills, loss of work, pain and suffering, and damages to personal property.",
    body: [
      "When you suffer a personal injury due to third party liability you may be entitled to monetary compensation to help with your physical injuries, medical bills, loss of work, pain and suffering, and damages to personal property. As a result, you must be prepared to do battle with insurance companies, employers, drivers, pet owners, home owners and equipment manufacturers.",
      "Our law firm has experience representing and obtaining favorable results for our clients. We pride ourselves on relentlessly fighting for our clients in order to help them recover financially and physically from the suffering they endured due to third party negligence.",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "I came to Mr. Armstrong regarding my divorce. I was married for 11 years and had never been divorced in my life so this was all very nerve-racking. Fortunately, he was attentive and patient throughout the entire process. I will definitely recommend him to anyone who is going through a divorce.",
    name: "Shondra A",
    role: "Client",
  },
  {
    quote:
      "Mr. Armstrong is very knowledgeable with the laws and fought hard to get my felony drug case dismissed. If you’re dealing with anything criminal-related, he’s your guy!",
    name: "Nicholas G",
    role: "Client",
  },
  {
    quote:
      "I was arrested on DWI charge and thought my life was ruined. I have a CDL license and I couldn’t afford to have this on my record. Mr. Armstrong attacked the state’s case in so many ways. It was a joy to see someone working on your innocent as much as the government was working on ruining my life. After a few months, he got my case dismissed. I couldn’t have asked for a better person to work on my behalf. I consider him my lifetime lawyer and friend.",
    name: "Jordan M",
    role: "Client",
  },
  {
    quote:
      "I got into a really bad accident and the other driver’s insurance company said they weren’t going to pay for injuries because I was liable. Mr. Armstrong and his team worked for months negotiating a settlement amount that would cover my injuries and more. I couldn’t have asked for a better outcome from such an unfortunate situation.",
    name: "Tara K",
    role: "Client",
  },
] as const;

export const featuredTestimonial = testimonials[1];

export const practiceAreaOptions = [
  "Civil Litigation",
  "Criminal Defense",
  "Estate Planning",
  "Family Law",
  "Personal Injury",
  "Other Services",
] as const;

export const contactIntro = {
  headline: "Start with a strong defense.",
  availability: "We’re here 24/7.",
  officeNote: `${site.hours.weekday} · ${site.hours.saturday}`,
} as const;

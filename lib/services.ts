export type ServiceProcess = {
  step: number
  title: string
  detail: string
}

export type ServiceFAQ = {
  question: string
  answer: string
}

export type Service = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  h1: string
  tagline: string
  painPoint: string
  shortDesc: string
  bodyParagraphs: string[]
  process: ServiceProcess[]
  vehicleTypes: string[]
  keyTypes: string[]
  priceFrom: string
  timeOnSite: string
  availability: string
  faqs: ServiceFAQ[]
  relatedSlugs: string[]
  icon: string
  priority: number
}

export const SERVICES: Service[] = [
  {
    slug: 'lost-vehicle-key-replacement',
    name: 'Lost Vehicle Key Replacement',
    metaTitle: 'Lost Car Key Replacement | Excalibur — 07831 872 740',
    metaDescription:
      "Lost your car keys in Wigan or St Helens? Excalibur's mobile locksmith replaces all key types on-site, same day. Up to 60% cheaper than the dealer. Call 07831 872 740.",
    h1: 'Lost Vehicle Key Replacement — On-Site, Same Day',
    tagline: "We replace your lost car key wherever you are — no tow truck, no waiting days.",
    painPoint:
      "You've lost your only car key and you're stranded. The main dealer wants 3–14 days and hundreds of pounds. There is a better way.",
    shortDesc:
      'We replace lost vehicle keys for all makes and models at your location. Cut, coded and programmed on the spot — often within the hour.',
    bodyParagraphs: [
      "Losing your only set of car keys is one of the most stressful situations a driver can face. Whether you've lost them at home, at work, in a car park, or out shopping across the North West, you're suddenly without transport and facing what feels like an expensive, time-consuming problem. Excalibur Auto Locksmiths specialises in lost vehicle key replacement for every major car make and model — and we do it all from our fully equipped mobile workshop, at your location, the same day you call.",
      "The main dealer is most drivers' first instinct when they lose a key. The reality? You'll be quoted anything from £200 to £600, told to arrange a tow, and asked to wait between 3 and 14 working days for a new key to arrive and be programmed. In that time, you're without your vehicle, paying for alternative transport, and enduring the delay. There is no technical reason your key can't be replaced on-site — the equipment exists, and Ian and Adam at Excalibur carry it in their mobile workshop every single day.",
      "When you call Excalibur, Ian or Adam will take your vehicle's make, model, year, and VIN if available. They'll confirm the exact key type your vehicle uses — whether that's a standard transponder key, a proximity smart key, a flip key, or a coded key card — and give you a firm quote before travelling. On arrival, the new key blank is cut to your lock profile using specialist cutting equipment, then programmed directly to your vehicle's immobiliser and ECU using dealer-grade diagnostic tools. In most cases, this entire process takes between 30 and 90 minutes, and you're back on the road without having moved the car an inch.",
      "Ian Casson founded Excalibur over 30 years ago, and his son Adam joined the business to bring modern programming expertise to the already-deep knowledge base. Between them, they've replaced keys for tens of thousands of vehicles across Wigan, St Helens, and the wider North West region. When you call, you speak to one of them directly — not a call centre. You get a straight quote, a realistic arrival time, and the job done right first time. For most vehicles, Excalibur's price for lost key replacement is 40–60% less than the main dealer equivalent.",
    ],
    process: [
      {
        step: 1,
        title: 'Call and Describe Your Vehicle',
        detail:
          'Ring 07831 872 740 and tell Ian or Adam your vehicle make, model, and year. Have the V5C or VIN handy if possible — it speeds up key sourcing. You\'ll get a firm quote on the call.',
      },
      {
        step: 2,
        title: 'We Come to Your Location',
        detail:
          'Our fully equipped mobile workshop drives to wherever your vehicle is — your driveway, a car park, roadside, or workplace. No towing required.',
      },
      {
        step: 3,
        title: 'Key Blank Cut to Profile',
        detail:
          'Using specialist automotive key-cutting machinery, we cut a new key blank to match your vehicle\'s door and ignition lock profile precisely.',
      },
      {
        step: 4,
        title: 'Transponder & Immobiliser Programming',
        detail:
          'The new key\'s transponder chip is programmed to your car\'s immobiliser using dealer-grade diagnostic equipment. This is what unlocks and starts the engine.',
      },
      {
        step: 5,
        title: 'Test and Handover',
        detail:
          'We test the new key in all locks and the ignition, confirm remote functions where applicable, and hand over your working key. Job done — you drive away.',
      },
    ],
    vehicleTypes: [
      'Hatchback', 'Saloon', 'Estate', 'SUV', 'MPV', 'Coupe',
      'Convertible', 'Van', 'Pick-up Truck', 'Motorhome',
    ],
    keyTypes: [
      'Standard Transponder Key', 'Remote Key Fob', 'Flip Key',
      'Smart/Proximity Key', 'Key Card (Renault)', 'Tibbe Key',
      'Laser Cut Key', 'High-Security Blade Key',
    ],
    priceFrom: 'From £95',
    timeOnSite: '30–90 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'Can you replace my car key even if I have no spare?',
        answer:
          "Yes — in fact, this is the most common scenario we handle. When there is no spare key, we work from the vehicle identification number (VIN), the door lock profile, and the immobiliser data to create a brand-new key from scratch. We carry blank keys for all major makes and models in our mobile workshop, so there is rarely a delay in sourcing the correct blank.",
      },
      {
        question: 'How long does lost key replacement take on-site?',
        answer:
          "For most modern vehicles with a standard transponder or remote key, the entire process — cutting and programming — takes between 30 and 90 minutes. More complex systems such as proximity smart keys or vehicles with advanced immobiliser technology may take up to two hours. We will always give you a realistic time estimate before we begin.",
      },
      {
        question: 'Will the new key work exactly like the original?',
        answer:
          "Yes. We programme the new key using the same authorised diagnostic protocols used by main dealers. All functions that the original key had — including central locking, remote open/close, and the transponder for engine start — will be fully operational on the replacement key. We test every function before we leave.",
      },
      {
        question: "What if I've also locked the keys inside the car?",
        answer:
          "We can handle that too. If your keys are locked inside the vehicle, we can open the vehicle without damage in most cases, retrieve the original key, and also cut a spare if you'd like one at the same time. It is well worth having a spare cut while we're already on-site, as it's significantly cheaper than a second call-out.",
      },
      {
        question: 'Do you cover the whole of the North West for lost key replacement?',
        answer:
          "We cover the full North West region, including Wigan, St Helens, Bolton, Warrington, Liverpool, Southport, Leigh, Skelmersdale, Chorley, Ormskirk, Runcorn, Widnes, and all surrounding towns and villages. If you're unsure whether we cover your area, simply call 07831 872 740 and we'll confirm immediately.",
      },
    ],
    relatedSlugs: ['spare-vehicle-keys', 'car-key-cutting', 'immobiliser-programming'],
    icon: 'KeyRound',
    priority: 1,
  },
  {
    slug: 'car-key-cutting',
    name: 'Car Key Cutting',
    metaTitle: 'Car Key Cutting Wigan & North West | Excalibur Mobile',
    metaDescription:
      "Mobile car key cutting across the North West — Excalibur Auto Locksmiths. All key types cut at your location. No waiting. Call 07831 872 740 for a same-day quote.",
    h1: 'Mobile Car Key Cutting — All Makes, All Key Types',
    tagline: 'Precision key cutting at your location — no workshop visit, no waiting days.',
    painPoint:
      "You need a new key cut but don't want to spend a fortune at the dealer or waste half a day at a locksmith shop. There's a faster, cheaper way.",
    shortDesc:
      "Professional car key cutting for all makes and models at your location. Laser, standard, and high-security blades — cut precisely on our mobile workshop.",
    bodyParagraphs: [
      "Car key cutting is the mechanical foundation of any key replacement — it's the process of shaping a blank key to match the exact profile of your vehicle's locks. Modern automotive keys use several different cutting types: standard milled-blade keys, laser-cut (also called sidewinder) keys with their distinctive wavy internal cut, and high-security blades used by manufacturers including BMW, Mercedes-Benz, and Volkswagen Group. Excalibur carries dedicated cutting machinery for all key types, operating from a fully equipped mobile workshop that comes directly to your vehicle, wherever you are across the North West.",
      "Many drivers don't realise that car key cutting is only half of what's required for a working modern key. The key blank must be cut precisely — even a fraction of a millimetre out will cause a key to refuse a lock or wear prematurely. Beyond the cut itself, most keys manufactured after 2000 also contain a transponder chip that must be programmed to match your vehicle's immobiliser. Going to a high-street shoe-repair kiosk for key cutting risks imprecise work and, crucially, they won't be able to programme the electronics. Excalibur handles the complete job — cut and code — in a single visit.",
      "Ian and Adam's mobile workshop is equipped with industry-leading key-cutting machines including automotive-specific equipment for laser-cut and high-security keys. When you call, we confirm the exact key type for your vehicle, source the correct blank, cut it to your lock profile, and programme the transponder chip — all at your location. We test the finished key in every lock before we leave, so you're never left with a key that doesn't work. For vehicles where a visual key cut isn't possible due to damaged locks, we can decode the lock to generate the correct key code.",
      "Over 30 years in automotive locksmithing means Ian and Adam have cut keys for virtually every make and model sold in the UK. From a basic Ford Fiesta key to a BMW blade key with proximity function, the process is second nature. Excalibur's pricing for mobile key cutting — including transponder programming — consistently comes in 40 to 60% below the equivalent main dealer service, and you don't need to arrange a tow or take time off work. One call and we'll be with you the same day.",
    ],
    process: [
      {
        step: 1,
        title: 'Identify Key Type',
        detail:
          "We confirm your vehicle's exact key specification — standard blade, laser-cut sidewinder, or high-security — based on your make, model, and year.",
      },
      {
        step: 2,
        title: 'Source the Correct Blank',
        detail:
          'We carry a comprehensive stock of key blanks. For less common vehicles, we can source the correct blank on request — most are available same day.',
      },
      {
        step: 3,
        title: 'Precision Cutting on Mobile Equipment',
        detail:
          "Using our calibrated automotive key-cutting machines, we cut the blank to your lock's exact profile. All cuts are verified for accuracy before programming begins.",
      },
      {
        step: 4,
        title: 'Programme and Test',
        detail:
          "The cut key's transponder is programmed to your vehicle, and we test in all locks and the ignition to confirm the cut is perfect and the electronics respond correctly.",
      },
    ],
    vehicleTypes: [
      'Cars (all types)', 'Vans', 'Motorcycles', 'HGV Keys',
      'Classic Vehicles', 'Modified Imports',
    ],
    keyTypes: [
      'Standard Milled Blade', 'Laser-Cut (Sidewinder) Key',
      'High-Security Blade', 'Tibbe Key (Ford/Jaguar)',
      'Dimple Key', 'Track Key',
    ],
    priceFrom: 'From £45',
    timeOnSite: '20–60 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: "What's the difference between standard and laser-cut car keys?",
        answer:
          "A standard key has cuts milled along its edge — like a traditional front-door key. A laser-cut key (also called a sidewinder key) has a distinctive wavy channel cut into the centre of the blade on both sides. Laser-cut keys require specialist equipment to copy and are harder to duplicate fraudulently, which is why most cars made after 2010 use them. Both types are handled by Excalibur's mobile workshop.",
      },
      {
        question: 'Can you cut a car key from just the lock, with no existing key?',
        answer:
          "Yes. Using a process called lock decoding, we can remove and disassemble the lock cylinder to read the exact cut depths required. From that, we can cut a working key without ever having an original. This is particularly useful in cases where all keys have been lost, stolen, or badly damaged.",
      },
      {
        question: 'How accurate is mobile key cutting compared to a workshop?',
        answer:
          "Our mobile key-cutting equipment is identical in specification to machinery used in professional automotive workshops and dealer service centres. The machines are regularly calibrated and maintained. You should not see any difference in quality between a key cut in our mobile workshop and one cut anywhere else — and we test every key before we leave.",
      },
      {
        question: 'Do I need a new key cut if my key blade is worn?',
        answer:
          "Yes — a worn key blade can damage your locks over time and will eventually fail to operate them reliably. If your key feels stiff or you notice it sticking, it's worth having a fresh cut made before the problem becomes a roadside emergency. We can cut a new blade from your original if it's still usable as a template, or from a lock decode if it's too worn.",
      },
      {
        question: 'Can you cut a key for an older classic or vintage vehicle?',
        answer:
          "Yes, in many cases. Pre-transponder vehicles (generally pre-1995) are actually simpler to cut new keys for, as there is no electronic programming required — just a precise blade cut. We have key blanks for many classic vehicle makes. Call us with the make, model, and approximate year and we'll confirm whether we can assist.",
      },
    ],
    relatedSlugs: ['lost-vehicle-key-replacement', 'spare-vehicle-keys', 'coded-vehicle-keys'],
    icon: 'Scissors',
    priority: 2,
  },
  {
    slug: 'immobiliser-programming',
    name: 'Immobiliser Programming',
    metaTitle: 'Car Immobiliser Programming Wigan | Excalibur — 07831 872 740',
    metaDescription:
      "Car won't start? Immobiliser problem across the North West? Excalibur Auto Locksmiths programmes all makes on-site. 24/7 mobile service. Call 07831 872 740.",
    h1: 'Car Immobiliser Programming — On-Site Across the North West',
    tagline: "Your car won't start because the immobiliser doesn't recognise the key — we fix that on the spot.",
    painPoint:
      "Your car cranks but won't start, the immobiliser light is flashing, and you've been told it needs dealer programming. Before you pay dealer prices, call us.",
    shortDesc:
      "Mobile immobiliser programming for all major makes and models. We match your keys to your vehicle's ECU at your location — same day.",
    bodyParagraphs: [
      "Every modern vehicle sold in the UK since 1998 is legally required to have an electronic immobiliser fitted. The immobiliser works by communicating with a transponder chip embedded in your ignition key — if the key isn't recognised, the engine management system refuses to allow the car to start. While this is excellent anti-theft technology, it also means that any key-related issue — a new key, a faulty transponder, or after-market key fitting — requires the immobiliser to be re-programmed to recognise the new key or reset to accept a replacement. This is exactly what Excalibur specialises in.",
      "The main dealer charges a significant premium for immobiliser programming because it requires specialist software and licensing agreements. For many drivers, this is the largest unexpected expense after a key loss. Worse, dealers often insist on towing the vehicle to their workshop before even starting the diagnostic process. The truth is that immobiliser programming can be done at the roadside or on your driveway with the right equipment — the same dealer-grade software and OBD interface that we carry in Excalibur's mobile workshop every day.",
      "Ian and Adam use manufacturer-level diagnostic tools to communicate directly with your vehicle's ECU via the OBD-II port. For lost key situations, we write a new key to the immobiliser and delete the old key from its memory — meaning no one with the lost key can start your vehicle. For vehicles where the immobiliser has developed a fault or failed to recognise an existing key, we run a full diagnostic, identify the cause, and reprogram accordingly. We cover all major platforms including VAG (VW, Audi, SEAT, Škoda), Ford, GM/Vauxhall, BMW, Mercedes-Benz, Renault, and many more.",
      "Excalibur's 30-year track record in automotive locksmithing means Ian and Adam have encountered — and solved — virtually every immobiliser scenario imaginable. From a straightforward key-to-ECU sync to complex situations involving after-market alarm upgrades or ECU replacements, we approach each job methodically. Our pricing is consistent and transparent: we quote before we start, and we don't charge extra for the complexity of the programming process. Across the North West — from Wigan and St Helens to Liverpool and Bolton — drivers trust Excalibur to get the electronics right.",
    ],
    process: [
      {
        step: 1,
        title: 'Diagnostic Scan',
        detail:
          "We connect our dealer-grade diagnostic tool to your vehicle's OBD-II port and pull any fault codes related to the immobiliser or key recognition system.",
      },
      {
        step: 2,
        title: 'Identify the Programming Requirement',
        detail:
          "Based on the diagnostic, we determine whether we need to add a new key to the immobiliser memory, delete lost keys, or perform a full immobiliser reset/reprogram.",
      },
      {
        step: 3,
        title: 'Programme the New Key',
        detail:
          "Using the appropriate manufacturer-specific protocol, we write the new key's transponder data to the ECU, synchronising the key and the immobiliser.",
      },
      {
        step: 4,
        title: 'Delete Lost or Stolen Keys',
        detail:
          "If any previous keys have been lost or stolen, we delete them from the immobiliser memory as part of the same process, restoring full vehicle security.",
      },
      {
        step: 5,
        title: 'Confirm Engine Start and Lock Function',
        detail:
          "We test the new key in the ignition and confirm the engine starts cleanly without the immobiliser light illuminating. Full function test completed before handover.",
      },
    ],
    vehicleTypes: [
      'All passenger cars', 'Light commercial vehicles',
      'Vans (Ford Transit, VW Transporter, etc.)',
      'SUVs and 4×4s', 'Classic vehicles with retro-fit immobilisers',
    ],
    keyTypes: [
      'Transponder Key', 'Remote Key Fob',
      'Smart Key / Proximity Key', 'Key Card (Renault)',
      'Rolling Code Remote Keys',
    ],
    priceFrom: 'From £85',
    timeOnSite: '45–120 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: "My car cranks but won't start — is it definitely the immobiliser?",
        answer:
          "Not always, but it's a strong indicator. The clearest sign of an immobiliser issue is the engine attempting to start and immediately cutting out, combined with the immobiliser warning light (usually a padlock symbol or car outline with a key) remaining illuminated or flashing. If the car cranks but doesn't fire and you see that warning light, call us — we can diagnose and programme on-site.",
      },
      {
        question: 'Can you programme a key to my car if I bought a key blank online?',
        answer:
          "In many cases, yes — though the success depends on whether the aftermarket blank uses a compatible transponder chip. Some cheaper online blanks use inferior chips that can't be reliably programmed. We will always check the blank before attempting to programme it and advise you honestly. If the blank isn't suitable, we carry our own quality blanks and can source the correct one quickly.",
      },
      {
        question: "Do you need to take my car anywhere for immobiliser programming?",
        answer:
          "No. All immobiliser programming is done at your location using our mobile workshop's diagnostic equipment. The only requirement is that we need access to the OBD-II port inside the vehicle, which is typically located under the dashboard on the driver's side. No towing, no workshop visit, no delay.",
      },
      {
        question: 'What happens to my lost key after you reprogram the immobiliser?',
        answer:
          "As part of the programming process, we delete all lost or stolen keys from the immobiliser memory. This means that even if someone finds your old key, it will not start the vehicle. The new key you receive will be the only one recognised by your car's immobiliser, restoring complete security.",
      },
      {
        question: 'Do all modern cars require immobiliser programming for new keys?',
        answer:
          "Yes, virtually all vehicles manufactured since 1998 require transponder programming for any new key to start the engine. Even if a key is correctly cut and physically fits the ignition, without the correct transponder programming the immobiliser will prevent the engine from running. This is a non-negotiable step that any legitimate automotive locksmith must complete.",
      },
    ],
    relatedSlugs: ['coded-vehicle-keys', 'lost-vehicle-key-replacement', 'keyless-entry-keys'],
    icon: 'ShieldCheck',
    priority: 3,
  },
  {
    slug: 'coded-vehicle-keys',
    name: 'Coded Vehicle Keys',
    metaTitle: 'Coded Vehicle Keys Wigan & North West | Excalibur Mobile',
    metaDescription:
      'Coded vehicle key replacement for all makes across the North West. Excalibur Auto Locksmiths programmes coded keys on-site, same day. Call 07831 872 740.',
    h1: 'Coded Vehicle Keys — Cut and Programmed at Your Location',
    tagline: 'Coded keys for every modern vehicle — done on-site, not at the dealer.',
    painPoint:
      "Coded keys can't just be copied at a kiosk — they need specialist equipment to programme. The dealer quotes days and hundreds of pounds. We do it the same day.",
    shortDesc:
      'Specialist coded vehicle key service for all modern cars. We cut the key and programme the code to your vehicle on the spot — no dealer required.',
    bodyParagraphs: [
      "Coded vehicle keys — also known as programmed or chipped keys — are the standard for all modern cars manufactured in the UK since the mid-1990s. Unlike older mechanical keys, a coded key contains a transponder chip embedded in the head of the key. When the key is placed in the ignition, the transponder communicates a unique rolling or fixed code to the vehicle's ECU. If that code doesn't match, the immobiliser prevents engine start. Excalibur Auto Locksmiths provides a complete coded vehicle key service — key cutting and transponder programming — at your location, with no need to visit a dealer or workshop.",
      "What makes coded keys more complex than simple blanks is the programming step. It isn't enough to cut the key to the correct profile; the transponder chip must be registered to your specific vehicle. Each car's ECU holds a database of authorised key codes, and any new key must be written to that database before it will be accepted. Main dealers charge heavily for this because they hold the manufacturer licences for the programming software. However, Excalibur uses the same category of diagnostic tools as the dealers — and at a significantly lower cost to you.",
      "The process at Excalibur is streamlined by 30 years of practice. Ian or Adam will confirm your vehicle's exact key specification before travelling — make, model, year, and in some cases the VIN to ensure the correct key blank is sourced. On arrival, the key is cut and the transponder is programmed via the vehicle's OBD port using manufacturer-appropriate protocols. We always test the coded key fully — including starting the engine and operating all remote functions — before we consider the job complete.",
      "Ian and Adam have programmed coded keys for every major manufacturer sold in the UK: Ford, Vauxhall, Volkswagen Group, BMW, Mercedes-Benz, Renault, Toyota, Nissan, Honda, Fiat, Peugeot, Citroën, Hyundai, Kia, and more. Whether it's a 2006 Ford Focus or a 2023 Audi Q5, the approach is the same: diagnostic first, programming second, test before leaving. Excalibur is consistently 40–60% cheaper than main dealers for coded key services across the North West.",
    ],
    process: [
      {
        step: 1,
        title: 'Confirm Key Specification',
        detail:
          'We identify the exact key specification for your vehicle, including the correct transponder chip type and key blank profile, using your VIN and vehicle data.',
      },
      {
        step: 2,
        title: 'Cut the Key Blade',
        detail:
          "The key blank is cut to your vehicle's lock profile using precision automotive cutting equipment on our mobile workshop.",
      },
      {
        step: 3,
        title: 'Programme the Transponder Code',
        detail:
          "We connect to your vehicle's OBD port and write the new key's transponder code to the ECU using dealer-grade programming software.",
      },
      {
        step: 4,
        title: 'Programme Remote Functions',
        detail:
          'Where applicable, we also programme the remote locking/unlocking buttons on the key fob to operate your central locking system.',
      },
      {
        step: 5,
        title: 'Full Function Test',
        detail:
          "We test the key in all locks, the ignition (confirming engine start without immobiliser warning), and all remote functions before handing over.",
      },
    ],
    vehicleTypes: [
      'All modern passenger vehicles (1995–present)',
      'Commercial vans', 'SUVs', 'MPVs', 'Prestige vehicles',
    ],
    keyTypes: [
      'Fixed-Code Transponder Key', 'Rolling-Code Transponder Key',
      'Crypto/Megamos Transponder', 'PCF Transponder',
      'ID46 Transponder', 'ID48 Transponder',
    ],
    priceFrom: 'From £85',
    timeOnSite: '45–90 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'What is the difference between a coded key and a regular car key?',
        answer:
          "A regular mechanical key operates only the physical locks — it has no electronics. A coded key does the same, but also contains a transponder chip that must transmit the correct code to the car's ECU for the engine to start. All vehicles sold in the UK since 1998 require a coded key to start the engine, meaning a correctly cut blank with no programming simply won't work beyond opening the door.",
      },
      {
        question: "Why can't I just get a coded key cut at a supermarket kiosk?",
        answer:
          "High-street kiosks and key-cutting booths can cut the mechanical blade, but they do not have the automotive diagnostic equipment required to programme the transponder chip to your specific vehicle's ECU. Without programming, the cut key will operate your locks but not start the engine. Excalibur provides the complete service — cutting and programming — in a single visit.",
      },
      {
        question: 'How do you programme a coded key without the original?',
        answer:
          "When no original key exists, we use the vehicle's OBD port to access the ECU directly and generate the correct initialisation data for the new key's transponder. This requires manufacturer-specific software and authorisation — not all tools on the market can access all vehicles, but Excalibur's equipment covers all mainstream UK market makes and models.",
      },
      {
        question: 'Will a second programmed key affect the original key?',
        answer:
          "No — the ECU stores multiple authorised key codes, and adding a second key does not overwrite or deactivate the original. This is the basis of our spare key service. The only time an existing key is deactivated is when you specifically request it — for example, after a theft or loss.",
      },
      {
        question: 'What happens if the programming fails during the process?',
        answer:
          "In the rare event of a programming issue, Ian and Adam will diagnose the cause immediately. Programming failures are usually related to either a low vehicle battery (the ECU needs a stable power supply during programming) or an incompatible key blank. We always carry a battery booster and multiple blank types to address these scenarios on the spot.",
      },
    ],
    relatedSlugs: ['immobiliser-programming', 'car-key-cutting', 'lost-vehicle-key-replacement'],
    icon: 'Code',
    priority: 4,
  },
  {
    slug: 'remote-key-fob-replacement',
    name: 'Remote Key Fob Replacement',
    metaTitle: 'Remote Key Fob Replacement | Excalibur Auto Locksmiths',
    metaDescription:
      "Remote key fob stopped working? Excalibur replaces and programmes key fobs for all makes across the North West. Mobile, same-day service. Call 07831 872 740.",
    h1: 'Remote Key Fob Replacement — Programmed On-Site the Same Day',
    tagline: "Broken, lost, or water-damaged key fob? We replace and programme it at your location.",
    painPoint:
      "Your remote key fob has stopped working or been damaged and the dealer wants £150–£400 for a replacement. We can do it for significantly less, at your location, today.",
    shortDesc:
      'Mobile remote key fob replacement for all makes and models. We supply, cut, and programme new fobs at your location — often within the hour.',
    bodyParagraphs: [
      "Remote key fobs have become the standard way to interact with your vehicle — locking and unlocking doors, opening the boot, and in keyless-entry vehicles, starting the engine without physically inserting a key. When your key fob fails — whether through damage, water ingress, battery failure beyond replacement, or simply being lost — you're not just locked out of convenience features; on many modern vehicles with push-button start, you may not be able to drive the car at all. Excalibur Auto Locksmiths carries replacement key fobs and the programming equipment to match them to your vehicle, all from our mobile workshop across the North West.",
      "Main dealers charge a premium for key fob replacement because they supply OEM (original equipment manufacturer) parts with their own profit margin and programme them in-house. Many drivers are shocked to be quoted £200–£400 for what seems like a simple remote control. The reality is that the fob itself — which contains the transponder, the RF transmitter, and the emergency blade key — can be sourced at a fraction of dealer cost, and programming is a routine process with the right tools. Excalibur consistently offers key fob replacement at 40–60% less than main dealer pricing.",
      "When you call, Ian or Adam will ask for your vehicle's make, model, year, and frequency specification to confirm we have the correct replacement fob. On arrival, we program the new fob to your vehicle using the appropriate method — which varies by manufacturer, ranging from a simple sequence of button presses and ignition cycles to full OBD-level programming. For vehicles using rolling-code or crypto-encrypted remotes, we use our dealer-grade diagnostic tools to synchronise the new fob securely. We also programme the mechanical blade key within the fob to your locks where required.",
      "Over 30 years working across the North West, Ian and Adam have programmed key fobs for thousands of vehicles. Brands handled include Ford, Vauxhall, Volkswagen, Audi, BMW, Mercedes-Benz, Renault, Toyota, Honda, Nissan, Peugeot, Citroën, Hyundai, Kia, SEAT, Škoda, Land Rover, Volvo, and many more. Whether you need a replacement for a lost fob or an additional fob programmed as a spare, Excalibur provides a same-day service wherever your vehicle is parked across the North West region.",
    ],
    process: [
      {
        step: 1,
        title: 'Identify Correct Fob Specification',
        detail:
          'We confirm the correct fob type, frequency, and transponder specification for your vehicle based on make, model, year, and VIN where required.',
      },
      {
        step: 2,
        title: 'Source and Supply Replacement Fob',
        detail:
          'We supply the correct quality replacement fob from our mobile stock or same-day sourcing. We advise on both OEM and quality aftermarket options.',
      },
      {
        step: 3,
        title: 'Programme via OBD or Sequence Method',
        detail:
          "Using the correct method for your vehicle — OBD programming, dealer tool sequence, or manufacturer-specific button programming — we sync the new fob to your car.",
      },
      {
        step: 4,
        title: 'Cut Blade Key if Required',
        detail:
          "If your fob includes an emergency mechanical blade key, we cut it to your door and ignition lock profile using our mobile key-cutting equipment.",
      },
      {
        step: 5,
        title: 'Test All Fob Functions',
        detail:
          'We test lock, unlock, boot opening, panic alarm (where equipped), and engine start for push-button vehicles before confirming the job complete.',
      },
    ],
    vehicleTypes: [
      'All passenger vehicles with remote central locking',
      'Keyless entry vehicles', 'Push-button start vehicles',
      'Commercial vans with remote locking',
    ],
    keyTypes: [
      '2-Button Remote Fob', '3-Button Remote Fob', '4-Button Remote Fob',
      'Flip/Folding Remote Key', 'Smart Key with Fob',
      'Proximity Fob (no blade)',
    ],
    priceFrom: 'From £75',
    timeOnSite: '30–75 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'My key fob buttons have stopped working — can it be repaired or does it need replacing?',
        answer:
          "Often a key fob that appears dead simply needs a new battery — which is inexpensive and something you can do yourself if you're comfortable opening the fob. If a fresh battery doesn't restore function, the fob's internal circuit board may be damaged, the signal buttons may have failed, or the transponder chip may have been disrupted. In those cases, replacement and reprogramming is usually more cost-effective than attempting a repair. Call us and describe the symptoms — we can advise whether a new battery might resolve it or whether a replacement is needed.",
      },
      {
        question: 'Do I need to bring my car to you to programme a new key fob?',
        answer:
          "The opposite — we come to you. All key fob programming is carried out at your vehicle's location. We need access to the vehicle because the programming process communicates with the car's ECU directly. No towing, no workshop visit, no disruption to your day.",
      },
      {
        question: 'Will programming a new fob erase my existing working fob?',
        answer:
          "No. Most vehicles support multiple programmed fobs simultaneously, and adding a new fob does not overwrite existing ones. The only exception is certain older manufacturers that require all fobs to be programmed in a single session — in which case we programme all your fobs at the same time and advise you accordingly before starting.",
      },
      {
        question: 'My fob was submerged in water — is it definitely beyond repair?',
        answer:
          "Water damage varies in severity. Fresh water that was dried out quickly may leave the fob functional once the battery is replaced and any corrosion cleaned from contacts. Prolonged immersion or salt water exposure often causes irreparable internal damage. If you're not sure, bring the fob when we arrive and we'll assess it — if there's a chance of salvage we'll tell you honestly rather than pushing you towards a more expensive replacement.",
      },
      {
        question: 'Can you programme a key fob that I bought online?',
        answer:
          "Yes, in many cases — but compatibility is critical. The fob must match the correct frequency, chip type, and protocol for your specific vehicle. Many online listings describe fobs as universal or compatible when they may not be. If you've already purchased one, bring it and we'll assess compatibility. If it's suitable, we'll programme it. If it isn't, we can supply the correct alternative.",
      },
    ],
    relatedSlugs: ['keyless-entry-keys', 'coded-vehicle-keys', 'lost-vehicle-key-replacement'],
    icon: 'Radio',
    priority: 5,
  },
  {
    slug: 'broken-car-key-extraction',
    name: 'Broken Car Key Extraction',
    metaTitle: 'Broken Car Key Extraction | Excalibur Auto Locksmiths',
    metaDescription:
      'Broken key stuck in ignition or door lock? Excalibur extracts broken car keys across the North West. Mobile, no damage. Call 07831 872 740 now.',
    h1: 'Broken Car Key Extraction — Removed Without Damage',
    tagline: 'Key snapped in the lock or ignition? We extract it cleanly at your location.',
    painPoint:
      "A broken key in the ignition or lock barrel is a nightmare — you can't move the car, and forced DIY attempts usually make it worse. Don't break anything else. Call us.",
    shortDesc:
      'Professional broken key extraction from door locks and ignition barrels — for all makes and models. Clean, damage-free removal at your location.',
    bodyParagraphs: [
      "A key breaking off in a car door lock or ignition barrel is more common than many drivers expect, particularly with older keys that have developed micro-fractures through daily use, or keys that have been bent or subjected to sideways force. When it happens, the broken section blocks the lock, meaning neither the original key stub nor a replacement key can operate the barrel. Attempting to extract the fragment with household tools — tweezers, strong glue on a stick, or similar — almost always drives the fragment deeper or scratches the barrel, complicating a routine job into a potentially costly lock replacement. Excalibur's first recommendation: don't try it yourself. Call us instead.",
      "Broken key extraction is a precision job. The lock barrel is a finely engineered mechanism with tight tolerances, and the broken fragment must be removed without damaging the barrel's internal pins or the lock housing. For a damaged or forced barrel, the cost escalates from a simple extraction to a full barrel replacement — which means parts, more labour, and significant cost. Professional extraction tools — including specialist hook picks and thin-profile extractors designed specifically for automotive barrels — allow the fragment to be removed cleanly in most cases, preserving the lock for normal use with a new key.",
      "Ian and Adam carry a comprehensive set of broken key extraction tools as a standard part of their mobile workshop. On arrival, they assess whether the key is broken flush with the barrel face (the most straightforward extraction) or recessed deeper (requiring a different approach). The majority of extractions are completed within 20 to 40 minutes without barrel removal. Once the fragment is clear, we can immediately cut a new key to replace the broken one — meaning you're driving again within an hour of calling, in most cases.",
      "When the break is at the ignition barrel, there is an additional consideration: depending on how the break occurred, the barrel may still be in the 'on' position, keeping the electrics live. Ian and Adam are experienced in handling ignition barrel extractions safely, including preventing any accidental drain on the vehicle's battery during the process. After extraction, they'll advise on the condition of the barrel and whether a replacement is recommended. After 30 years and thousands of extractions across the North West, there are very few broken key scenarios they haven't encountered and resolved.",
    ],
    process: [
      {
        step: 1,
        title: 'Assess the Break',
        detail:
          "We examine the lock to determine where the break is, how deep the fragment has gone, and whether the lock barrel itself has been damaged before our arrival.",
      },
      {
        step: 2,
        title: 'Select the Correct Extraction Tools',
        detail:
          'Using specialist automotive key extraction tools matched to the barrel type and fragment position, we begin the careful removal process.',
      },
      {
        step: 3,
        title: 'Extract the Fragment',
        detail:
          "The broken fragment is carefully removed without damaging the barrel's internal pins. In most cases the barrel remains fully serviceable after extraction.",
      },
      {
        step: 4,
        title: 'Inspect the Barrel',
        detail:
          'Once extracted, we check the barrel for any damage caused by the break or any prior DIY extraction attempts. We advise honestly on barrel condition.',
      },
      {
        step: 5,
        title: 'Cut and Programme Replacement Key',
        detail:
          'We cut and programme a new replacement key immediately after extraction, so you leave with a working key and a serviceable lock.',
      },
    ],
    vehicleTypes: [
      'All passenger cars', 'Vans', 'Classic vehicles',
      'SUVs', 'Prestige vehicles',
    ],
    keyTypes: [
      'Standard blade keys', 'Laser-cut keys', 'Tibbe keys',
      'High-security blades', 'Any key type that fits an automotive barrel',
    ],
    priceFrom: 'From £55',
    timeOnSite: '20–60 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'Can the broken key fragment damage the lock barrel?',
        answer:
          "The fragment itself rarely damages the barrel unless it's been forced in deeply or twisted. The greater risk of damage comes from DIY extraction attempts — particularly using superglue, which can bond to the barrel pins, or tools that are too wide and push the fragment further in. If you've already attempted extraction, tell us when you call so we can bring the right equipment for a potentially more complex job.",
      },
      {
        question: 'What if the key broke in the ignition rather than the door lock?',
        answer:
          "Ignition barrel extraction follows the same principles as door lock extraction but requires extra care because the ignition is directly connected to the vehicle's electrical system. Ian and Adam are experienced in ignition extractions and approach them with the care the electrical components require. In most cases the extraction is completed without barrel removal, but if the barrel has been damaged, we can advise on replacement options at the same visit.",
      },
      {
        question: 'Will I be able to use the lock normally after extraction?',
        answer:
          "In the majority of cases, yes. If the key broke cleanly without the fragment being forced or rotated, the barrel pins are usually undamaged and the lock will function normally with a new key. We always test the lock with the new key before we leave to confirm full functionality.",
      },
      {
        question: 'Why did my key break in the lock?',
        answer:
          "Keys most commonly break due to metal fatigue from repeated bending stress — particularly keys that have been dropped, sat on, or that have a previous bend in the blade. Another common cause is forcing a key that has been incorrectly cut or one that is worn to the point of not quite operating the lock cleanly. A fresh, precisely cut replacement key is always recommended after an extraction.",
      },
      {
        question: 'Can you extract a broken key if I can still turn the ignition partially?',
        answer:
          "Yes, though this requires a slightly different approach as the barrel may be partially engaged. Do not force the ignition further in either direction — this can cause internal barrel damage that complicates extraction. Leave it in the position it's in and call us. We'll handle it safely from whatever position the barrel is in.",
      },
    ],
    relatedSlugs: ['car-key-cutting', 'lock-changes', 'lost-vehicle-key-replacement'],
    icon: 'Wrench',
    priority: 6,
  },
  {
    slug: 'spare-vehicle-keys',
    name: 'Spare Vehicle Keys',
    metaTitle: 'Spare Car Key Cut & Programmed | Excalibur — 07831 872 740',
    metaDescription:
      "Get a spare car key cut and programmed for any make or model across the North West. Excalibur's mobile service comes to you. From £65. Call 07831 872 740.",
    h1: 'Spare Vehicle Keys — Cut and Programmed at Your Location',
    tagline: 'Having a spare key is the cheapest insurance against the most expensive emergency.',
    painPoint:
      "Most drivers only think about a spare key after they've lost their only one and faced a £300+ bill. Prevent that — a spare key today costs a fraction of an emergency tomorrow.",
    shortDesc:
      "Get a spare key cut and programmed for your vehicle at your home, workplace, or anywhere across the North West. Fast, affordable, and fully functional.",
    bodyParagraphs: [
      "A spare vehicle key is one of the smartest investments a car owner can make — and one of the most frequently postponed. The reason most people don't have a spare is simple: when you have a working key, the urgency doesn't feel pressing, and the dealer quotes can be off-putting enough to put it in the 'do it later' pile indefinitely. Then the day comes when the key is lost, broken, or stolen, and that 'later' decision becomes an expensive emergency. Excalibur Auto Locksmiths provides spare key cutting and programming for all vehicle makes and models at your location — and the cost of a spare key is always a fraction of the cost of an emergency replacement.",
      "The process for cutting a spare when you have an existing working key is faster and often cheaper than a full lost-key replacement, because we don't need to do the full diagnostic work — we have a working reference key to copy the mechanical cut from, and the programming process is a straightforward add-to-existing-memory operation rather than a full initialisation. This means you can have a spare key cut and programmed while you're at home, at work, or anywhere else convenient — it typically takes 30 to 60 minutes and can be booked in advance rather than reactively.",
      "Ian and Adam recommend booking a spare key when you call for any other service. If we're already on-site for a lost key replacement, a spare cut and programmed at the same visit costs significantly less in combined labour than two separate call-outs. Similarly, if your car is newer and you haven't yet had a spare cut, a proactive booking — at your convenience — gives you the peace of mind of knowing you're never a single key loss away from an expensive rescue situation. We advise every customer to have at least two working keys for their vehicle.",
      "Excalibur's spare key service covers the full spectrum of modern key types: standard transponder keys, remote key fobs, flip/folding keys, laser-cut blades, smart keys, proximity keys, and Renault key cards. Whatever your vehicle requires, Ian and Adam have the equipment to supply, cut, and programme it. Our pricing is transparent and consistent — we quote before we start, we don't have hidden charges for programming, and we're always significantly cheaper than the main dealer equivalent. Across Wigan, St Helens, and the wider North West region, hundreds of drivers have chosen Excalibur for a preventative spare rather than an expensive emergency.",
    ],
    process: [
      {
        step: 1,
        title: 'Book a Convenient Time',
        detail:
          "Unlike an emergency, a spare key can be planned. Call 07831 872 740 to arrange a time that suits you — we'll come to your home, workplace, or any other location.",
      },
      {
        step: 2,
        title: 'Bring Your Existing Key',
        detail:
          "Your current working key provides the reference for the mechanical cut. We'll use it alongside your vehicle data to source the correct blank for your make and model.",
      },
      {
        step: 3,
        title: 'Cut the New Blank',
        detail:
          "We cut the new key blank to match your existing key's profile using our precision mobile cutting equipment.",
      },
      {
        step: 4,
        title: 'Add Key to Immobiliser Memory',
        detail:
          "The new key's transponder is added to your vehicle's ECU alongside your existing key — both will work independently.",
      },
      {
        step: 5,
        title: 'Test Both Keys',
        detail:
          "We confirm both your original key and the new spare work correctly in all locks and the ignition before handover.",
      },
    ],
    vehicleTypes: ['All makes and models', 'Cars', 'Vans', 'SUVs', 'MPVs', 'Classic vehicles'],
    keyTypes: [
      'Standard Transponder Key', 'Remote Key Fob', 'Smart Key',
      'Proximity Key', 'Flip Key', 'Laser-Cut Key', 'Key Card',
    ],
    priceFrom: 'From £65',
    timeOnSite: '30–60 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'Is a spare key cheaper than an emergency replacement?',
        answer:
          "Yes, almost always significantly so. When you have an existing working key, the programming process is a simpler add-to-memory operation rather than a full ECU initialisation, which reduces the time and complexity. Additionally, booking in advance removes the call-out urgency premium. A spare key cut and programmed with Excalibur at your convenience will typically cost 30–40% less than the same operation as an emergency lost-key replacement.",
      },
      {
        question: 'Can I have a spare key made if my car has only one key?',
        answer:
          "Yes — and this is a common situation for buyers of used vehicles, which are frequently supplied with only one key. We can cut and programme a spare key from your single existing key, adding the new key to the immobiliser memory alongside the original. Both keys will work independently afterwards.",
      },
      {
        question: 'How many spare keys can I have programmed to my car?',
        answer:
          "This varies by vehicle make and model. Most modern vehicles can hold between 4 and 8 programmed keys in the ECU memory. A small number of older systems are limited to 2 or 3. We'll advise you on your specific vehicle's limit when you call — it's rare for a standard private car to have enough keys to approach this limit.",
      },
      {
        question: 'Does having a spare key affect my car insurance?',
        answer:
          "It shouldn't negatively affect your insurance, and some policies actually recommend you declare the number of keys you hold. Where it becomes relevant is in a theft claim — insurers may ask whether keys were left in the vehicle or accessible. Keep your spare in a secure location separate from your main key, and don't leave it in your home in an obvious place where it could be taken in a burglary.",
      },
      {
        question: 'Can you make a spare key if my car uses a proximity smart key system?',
        answer:
          "Yes. Smart/proximity keys are among the most complex key types to programme, but also among the most important to have a spare for — they are expensive to replace as an emergency. We carry the diagnostic equipment to programme smart keys and proximity fobs for all major brands. The process takes slightly longer than a standard key but is entirely achievable on-site.",
      },
    ],
    relatedSlugs: ['lost-vehicle-key-replacement', 'coded-vehicle-keys', 'car-key-cutting'],
    icon: 'Copy',
    priority: 7,
  },
  {
    slug: 'stolen-key-deletion',
    name: 'Lost & Stolen Key Deletion',
    metaTitle: 'Stolen Car Key Deletion | Excalibur Auto Locksmiths',
    metaDescription:
      "Had your car keys stolen? Excalibur deletes stolen keys from your vehicle's immobiliser and supplies new keys on-site. 24/7 North West. Call 07831 872 740.",
    h1: 'Lost & Stolen Key Deletion — Protect Your Vehicle Today',
    tagline: "If your keys have been stolen, your car is only as secure as whoever found them. Delete the old key now.",
    painPoint:
      "Your keys were stolen. The thief knows where your car is. Every minute the old key is still recognised by your car's immobiliser, your vehicle is at risk.",
    shortDesc:
      "We delete lost or stolen keys from your vehicle's immobiliser memory and supply programmed replacements — same day, at your location.",
    bodyParagraphs: [
      "When your car keys are stolen — whether from your home, pocket, or workplace — the immediate concern is obvious: someone has a key that can start your vehicle. What many drivers don't realise is that simply having the car re-keyed isn't enough if the original keys are still programmed into the ECU. The vehicle's immobiliser holds a list of authorised key codes, and unless the stolen key's code is explicitly deleted from that list, it will still start the car. Excalibur's lost and stolen key deletion service removes all previously programmed keys from the ECU, then re-programs new keys — leaving the old stolen key completely dead.",
      "The process of deleting keys from an immobiliser requires the same dealer-grade diagnostic equipment as key programming — you need to access the ECU, authenticate with the correct security credentials, and overwrite or remove the stored key codes. This is not something that can be done with generic tools or a code reader — it requires manufacturer-specific software with the appropriate access level. Main dealers will perform this service, but typically only during business hours, after a significant wait, and at a cost that reflects their overheads. Excalibur provides the same technically identical service, mobile, 24/7, and at a fraction of the dealer cost.",
      "If you've just discovered your keys are stolen, call Excalibur immediately — 07831 872 740. Ian or Adam will come to your vehicle, connect to the OBD port, delete all previously programmed keys from the immobiliser database, and programme a fresh set of new keys. This means the stolen key is completely useless for starting your vehicle. Combined with a change to your home security if the keys also included a house key or fob, you significantly reduce the risk of vehicle theft. Ian and Adam understand the urgency of this situation and will prioritise call-outs where security is at risk.",
      "Beyond the immediate security concern, there are practical steps to consider after stolen key deletion. If the thieves know your vehicle's location, it may be worth moving the vehicle or informing the police before we arrive. Ian and Adam will always advise on the best order of operations. Over 30 years across the North West, they have handled countless stolen key situations, and they understand the anxiety that comes with it. The goal is to restore your sense of security as quickly as possible — a new set of keys in your hand and the old ones dead in the system.",
    ],
    process: [
      {
        step: 1,
        title: 'Emergency Call',
        detail:
          "Call 07831 872 740 immediately. If the keys were stolen with knowledge of your vehicle's location, we will prioritise your call-out.",
      },
      {
        step: 2,
        title: 'Access ECU via OBD',
        detail:
          "We connect to your vehicle's OBD port using manufacturer-specific diagnostic software with the appropriate security credentials.",
      },
      {
        step: 3,
        title: 'Delete All Existing Keys',
        detail:
          "All previously programmed key codes are removed from the immobiliser database — including the stolen key(s) and all other previously held codes.",
      },
      {
        step: 4,
        title: 'Programme New Keys',
        detail:
          "We programme your new key set to the now-empty immobiliser database. Only these new keys will start your vehicle.",
      },
      {
        step: 5,
        title: 'Security Confirmation',
        detail:
          "We confirm the stolen key will no longer start the vehicle and hand over your new keys. We also advise on any further steps to enhance security.",
      },
    ],
    vehicleTypes: ['All modern vehicles with electronic immobiliser systems', 'Passenger cars', 'Vans', 'SUVs'],
    keyTypes: [
      'All transponder key types', 'Smart keys', 'Key fobs',
      'Key cards', 'Proximity keys',
    ],
    priceFrom: 'From £95',
    timeOnSite: '45–90 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: "What should I do immediately after my car keys are stolen?",
        answer:
          "Report the theft to the police immediately and get a crime reference number — you'll need this for any insurance claim. If the thieves know your vehicle's location, consider whether you can safely move it before calling us. Call Excalibur on 07831 872 740 to arrange immediate key deletion and replacement. Do not leave the vehicle in the same location where the theft occurred if it can be avoided.",
      },
      {
        question: "Can the thief still use the stolen key after you've deleted it?",
        answer:
          "No. Once the key code is deleted from the immobiliser database, the key is recognised as unauthorised and the engine management system will prevent the engine from running. The key may still physically fit and turn the door lock if it was cut to the correct profile, but the immobiliser will ensure the engine does not start.",
      },
      {
        question: 'Does insurance cover key deletion and replacement after theft?',
        answer:
          "Many comprehensive insurance policies include key cover as standard or as an add-on. The crime reference number from your police report is usually required when making a claim. Check your policy documents or call your insurer before paying out of pocket — you may be entitled to full reimbursement. Excalibur can provide a receipt and job description that satisfies most insurance claim requirements.",
      },
      {
        question: "What if I've lost my keys rather than had them stolen?",
        answer:
          "The same process applies. While the risk profile is different — a lost key is less likely to be used maliciously — it's still worth deleting the lost key from the immobiliser, particularly if the key was lost in a public place with any connection to your vehicle (e.g., found near the car park where you usually park). We can combine the deletion and new key programming in a single visit.",
      },
      {
        question: 'Can you do this service outside normal business hours?',
        answer:
          "Yes. Excalibur operates 24 hours a day, 7 days a week, 365 days a year. Stolen key situations are emergencies, and Ian and Adam treat them as such regardless of the time of day or night. Call 07831 872 740 at any hour.",
      },
    ],
    relatedSlugs: ['immobiliser-programming', 'lost-vehicle-key-replacement', 'lock-changes'],
    icon: 'ShieldOff',
    priority: 8,
  },
  {
    slug: 'renault-key-card-replacement',
    name: 'Renault Key Card Replacement',
    metaTitle: 'Renault Key Card Replacement | Excalibur — 07831 872 740',
    metaDescription:
      "Lost or broken Renault key card? Excalibur replaces and programmes Renault key cards on-site across the North West. Same day. Call 07831 872 740.",
    h1: 'Renault Key Card Replacement — On-Site, Same Day',
    tagline: "Lost your Renault Clio, Megane, or Laguna card? We'll replace it wherever you are.",
    painPoint:
      "Renault key cards are unique to their vehicles and can't be purchased off the shelf. The Renault dealer charges a premium and makes you wait. We don't.",
    shortDesc:
      'Renault key card replacement for Clio, Megane, Laguna, Scenic, and all Renault key card models. Supplied, programmed, and tested at your location.',
    bodyParagraphs: [
      "Renault's hands-free key card system is one of the most distinctive key systems in the automotive market — and one of the most inconvenient to replace when things go wrong. Unlike a conventional key, the Renault card is a flat, credit-card-shaped device containing a transponder chip, an RF remote, and an internal mechanical key blade for emergency use. When a Renault card is lost, damaged, or stops communicating with the vehicle, it needs to be replaced with an exact specification match and programmed to the car's UCH (unified command housing) unit. Excalibur Auto Locksmiths specialises in Renault key card replacement, providing a mobile service to Renault drivers across the North West.",
      "Renault dealers are the traditional source for replacement key cards, but the costs can be startling — replacement card plus programming often exceeds £300, and lead times for the card itself can stretch to a week or more. Excalibur carries Renault key card blanks for the most common models — Clio, Megane, Laguna, Scenic, Grand Scenic, Zoe, Koleos, and others — and has the specialist programming equipment required to initialise new cards to Renault's UCH system. Our pricing is consistently and significantly below Renault main dealer rates.",
      "The programming process for Renault key cards involves connecting to the vehicle's OBD port and communicating with the UCH using Renault-specific diagnostic software. The card is assigned to the vehicle, the transponder is initialised, and the remote functions are synced. Where the original card has been lost rather than just damaged, we also ensure the old card is deleted from the UCH memory, preventing it from being used to enter or start the vehicle if found by a third party. For customers who still have a working card, programming a replacement as a spare is strongly recommended.",
      "Ian and Adam at Excalibur have replaced Renault key cards for hundreds of Renault owners across the North West over the years. From a common Clio 3 to a Laguna with the full Hands Free Card system, the procedure is well-practised. Our mobile service means you don't need to organise a tow to the Renault dealer — we come to wherever your car is parked, in Wigan, St Helens, or anywhere else across the North West, and have you driving again within the hour in most cases.",
    ],
    process: [
      {
        step: 1,
        title: 'Confirm Renault Model and Card Type',
        detail:
          "Renault key card specifications vary by model and year. We confirm the exact card required for your Clio, Megane, Laguna, Scenic, Zoe, or other Renault model before travelling.",
      },
      {
        step: 2,
        title: 'Supply Correct Card Blank',
        detail:
          "We supply the correct Renault key card blank for your specific model, including the correct chip specification and remote frequency.",
      },
      {
        step: 3,
        title: 'Programme Card to UCH',
        detail:
          "Using Renault-specific diagnostic software, we initialise the new card to your vehicle's UCH system, assigning the transponder and remote codes.",
      },
      {
        step: 4,
        title: 'Delete Old Card (If Lost)',
        detail:
          "If the original card has been lost, we delete it from the UCH memory as part of the same session, rendering the lost card inactive.",
      },
      {
        step: 5,
        title: 'Test Hands-Free and Emergency Functions',
        detail:
          "We test the card's proximity detection for hands-free entry and start, the push-button start function, and the emergency blade key operation before handover.",
      },
    ],
    vehicleTypes: [
      'Renault Clio (all generations with card)',
      'Renault Megane', 'Renault Laguna',
      'Renault Scenic / Grand Scenic', 'Renault Koleos',
      'Renault Zoe', 'Renault Kangoo',
    ],
    keyTypes: ['Renault Hands Free Card (HFC)', 'Renault key card with internal blade'],
    priceFrom: 'From £120',
    timeOnSite: '45–90 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'My Renault key card is saying "card not detected" — is it broken?',
        answer:
          "Not necessarily. The most common cause of 'card not detected' messages is a flat card battery, which is a simple self-service replacement using a CR2032 battery. If a fresh battery doesn't resolve the issue, the card's transponder chip or internal circuitry may have failed, or the vehicle's UCH may have lost its programming. Call us and describe the symptoms — we'll advise whether it's likely to be a card issue or a vehicle system issue.",
      },
      {
        question: 'Can you programme a Renault card I bought online?',
        answer:
          "Renault key cards are highly vehicle-specific. Cards purchased online are sometimes unsuitable due to incorrect chip specification, wrong frequency, or incompatible card generation. If you have a card, we'll assess it on arrival. If it's compatible, we'll programme it. If not, we carry our own stocks and can usually supply the correct card at the same visit.",
      },
      {
        question: 'What Renault models use the key card system?',
        answer:
          "Renault introduced the key card on the Laguna II in 2001 and subsequently fitted it to the Megane II, Clio III, Scenic II, Grand Scenic, Koleos, Zoe, and some Kangoo models. Later Renault models have moved to conventional smart keys. If you're unsure whether your model uses a card or a conventional key fob, check the Renault logo on your key — cards are flat and credit-card shaped, while conventional fobs are the standard rounded plastic design.",
      },
      {
        question: 'How much does a Renault key card replacement cost?',
        answer:
          "Renault dealers typically charge between £250 and £350 for a replacement key card including programming. Excalibur's pricing for a full replacement card, programming, and mobile call-out is significantly lower — typically starting from £120. Call 07831 872 740 for an exact quote for your specific Renault model.",
      },
      {
        question: 'Do I need both my existing cards present when you programme a new one?',
        answer:
          "Not always, but having both existing cards present can simplify the programming process on some Renault models as the system uses a security sequence that benefits from an authorised card being present. If you have lost all cards, the process is more involved but still achievable using OBD-level access — we will advise on this when you call.",
      },
    ],
    relatedSlugs: ['coded-vehicle-keys', 'lost-vehicle-key-replacement', 'remote-key-fob-replacement'],
    icon: 'CreditCard',
    priority: 9,
  },
  {
    slug: 'lock-changes',
    name: 'Vehicle Lock Changes',
    metaTitle: 'Vehicle Lock Changes | Excalibur Auto Locksmiths North West',
    metaDescription:
      "Vehicle lock changes for cars and vans across the North West. Excalibur replaces and re-keys vehicle locks on-site. 24/7. Call 07831 872 740.",
    h1: 'Vehicle Lock Changes — On-Site Replacement Across the North West',
    tagline: 'Security compromised, stolen keys, or worn locks? We change your vehicle locks at your location.',
    painPoint:
      "Stolen keys, a break-in attempt, or worn locks that no longer work reliably — your vehicle's security is only as good as its locks. We can replace them today.",
    shortDesc:
      "Professional vehicle lock changes for all makes and models. We replace door locks, boot locks, and ignition barrels at your location — no workshop required.",
    bodyParagraphs: [
      "There are several situations that call for a vehicle lock change: keys stolen with no ability to delete them from the immobiliser, a break-in attempt that has damaged or compromised a door lock, worn lock barrels that are becoming unreliable, or insurance requirements following a theft or security incident. Vehicle lock changes are a specialist job because automotive lock barrels are precision-machined components that must be fitted correctly and, in most modern vehicles, re-coded to work with new or existing keys. Excalibur Auto Locksmiths carries out vehicle lock changes for all major makes and models from our mobile workshop — no towing, no workshop visit required.",
      "Changing a vehicle lock isn't simply a matter of swapping the barrel — on modern vehicles, the replacement barrel must be coded to match the new key set, and the door lock actuator and handle mechanism must be correctly reassembled. Done incorrectly, the lock can seize, the handle mechanism can fail, or the central locking may stop functioning correctly. Excalibur's approach is methodical: we assess the lock and mechanism before disassembly, use quality replacement components, and test all functions — manual and electronic — before handing back the vehicle.",
      "The most common lock change scenario Excalibur handles is following key theft where the stolen key holder knows the vehicle's location. In these cases, Ian and Adam can change all relevant lock barrels and code them to a new key in a single visit — combining the lock change with the stolen key deletion and new key programming services. This is often the fastest and most cost-effective way to restore full security after a theft incident. We can prioritise these call-outs and are available 24/7 across the North West.",
      "Ian and Adam's 30 years of experience means they have worked on vehicle lock systems for virtually every mainstream UK-market brand. Lock barrel wear patterns, common failure modes, and the nuances of each manufacturer's locking mechanism are knowledge accumulated through thousands of hands-on jobs. Where a dealership might quote a full door mechanism replacement for a barrel that can be re-cut and refitted, Excalibur will give you an honest assessment of what's genuinely needed — and carry out only the work that's necessary.",
    ],
    process: [
      {
        step: 1,
        title: 'Assess Lock Condition',
        detail:
          "We examine the lock barrel and mechanism to determine the extent of wear, damage, or compromise, and confirm the correct replacement parts for your make and model.",
      },
      {
        step: 2,
        title: 'Remove Existing Lock',
        detail:
          "The door panel, handle mechanism, and lock barrel are carefully removed without damage to the surrounding trim.",
      },
      {
        step: 3,
        title: 'Fit Replacement Barrel',
        detail:
          "The new lock barrel is fitted and the mechanism reassembled, including the actuator rod connections for central locking.",
      },
      {
        step: 4,
        title: 'Code Lock to Key Set',
        detail:
          "The new barrel is coded to match your existing or new key set, ensuring all locks on the vehicle use the same key.",
      },
      {
        step: 5,
        title: 'Test All Lock Functions',
        detail:
          "Manual and central locking are tested on all door locks, boot lock, and ignition barrel. We confirm everything operates correctly before leaving.",
      },
    ],
    vehicleTypes: ['Passenger cars', 'Vans', 'SUVs', 'MPVs', 'Light commercial vehicles'],
    keyTypes: ['Applicable to all key types — matched to new barrel specification'],
    priceFrom: 'From £110',
    timeOnSite: '60–150 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'Should I change the locks after a car key theft?',
        answer:
          "It depends on whether we can electronically delete the stolen key from the immobiliser. For most modern vehicles manufactured after 2000, key deletion via OBD programming renders the stolen key unable to start the vehicle, which may be sufficient. However, if the stolen key was a mechanical-only key (pre-1995 vehicles) or if you want complete physical lock security in addition to immobiliser deletion, a lock change may be advisable. We'll advise you honestly on the best approach for your specific situation.",
      },
      {
        question: 'Can you change just one lock or do all the locks need to be changed?',
        answer:
          "We can change individual locks. The most common single-lock change is a damaged door lock after a break-in attempt, or an ignition barrel that has worn out. Where only one lock is changed, we will re-code or re-cut the new barrel to match your existing key so all locks continue to operate on the same key. You won't end up with a different key for different locks.",
      },
      {
        question: "My lock is stiff and difficult to turn — does it need changing?",
        answer:
          "Not always — a stiff lock can sometimes be resolved with a proper automotive lock lubricant (not WD40, which can damage lock mechanisms long-term). If the stiffness persists after lubrication or if the lock is starting to fail to operate at all, the barrel pins may be worn and replacement is the sensible option. Ignoring a progressively stiffening lock can lead to a broken key extraction job on top of the eventual lock change — it's worth addressing early.",
      },
      {
        question: "How long does a vehicle lock change take?",
        answer:
          "A single door lock barrel change typically takes 45 to 90 minutes. A full vehicle re-key (all door locks, boot, and ignition) takes 2 to 3 hours depending on the complexity of the door card removal for the specific make and model. We always give a realistic time estimate before starting.",
      },
      {
        question: "Will my car warranty be affected by a mobile lock change?",
        answer:
          "Using an independent specialist for lock work does not automatically void your manufacturer's warranty — this is protected under European block exemption regulations. However, any damage caused by poor workmanship would not be covered. Excalibur's standard is identical to dealership-quality work, and we use appropriate tools and quality parts. We can provide documentation of work carried out for your records.",
      },
    ],
    relatedSlugs: ['stolen-key-deletion', 'broken-car-key-extraction', 'immobiliser-programming'],
    icon: 'Lock',
    priority: 10,
  },
  {
    slug: 'keyless-entry-keys',
    name: 'Keyless Entry Keys',
    metaTitle: 'Keyless Entry Key Replacement | Excalibur — 07831 872 740',
    metaDescription:
      "Lost keyless entry smart key? Excalibur programmes replacement keyless entry keys for all makes across the North West. Mobile, 24/7. Call 07831 872 740.",
    h1: 'Keyless Entry Key Replacement — Smart Keys Programmed On-Site',
    tagline: "Lost your hands-free smart key? We programme a replacement at your vehicle — no dealer wait.",
    painPoint:
      "Keyless entry smart keys are the most expensive to replace at the dealer — often £300–£700. We programme them on-site for a fraction of that price.",
    shortDesc:
      'Replacement keyless entry and smart key programming for all makes and models. Push-button start, proximity detection, and remote functions — all programmed on-site.',
    bodyParagraphs: [
      "Keyless entry systems — where the vehicle detects your key's proximity and unlocks automatically, and starts with a push button rather than an ignition turn — have become standard equipment on most new vehicles sold in the UK over the past decade. These smart keys are sophisticated pieces of technology, containing a transponder chip, an RF proximity transmitter operating at 433MHz or 868MHz, a rolling-code remote, and in many cases a physical emergency key blade within the housing. They are also among the most expensive items to replace if lost — main dealer quotes for a replacement smart key including programming routinely run between £300 and £700 depending on the brand. Excalibur offers an on-site alternative at a significantly lower cost.",
      "The programming of keyless entry keys is more complex than standard transponder programming because it involves two simultaneous tasks: programming the proximity transponder to the vehicle's PKES (Passive Keyless Entry and Start) controller, and programming the remote functions. Some systems also require synchronisation with the vehicle's central locking ECU, the engine start ECU, and the alarm system. This complexity is why dealers command a high price — the programming requires manufacturer-specific software licences and expertise. Excalibur's investment in professional-grade diagnostic equipment means this can be done on-site without dealer involvement.",
      "One concern with keyless entry systems that's worth highlighting: relay theft. Thieves can use signal relay devices to amplify your key's proximity signal while it's inside your home, effectively tricking the car into thinking the key is present and allowing them to drive away. After we programme a new or spare keyless key, Ian and Adam will advise you on keeping your key in a signal-blocking (Faraday) pouch at home to prevent relay theft — a simple and inexpensive measure that can be the difference between keeping and losing your vehicle.",
      "Excalibur programmes keyless entry keys for all major brands with proximity systems, including BMW, Mercedes-Benz, Audi, Volkswagen, Ford (Intelligent Access), Toyota, Honda, Nissan, Hyundai, Kia, Land Rover, Volvo, and others. Ian and Adam's 30+ years of experience in automotive locksmithing, combined with their commitment to staying current with evolving key technology, means no smart key system is too new or too complex for Excalibur to handle across the North West.",
    ],
    process: [
      {
        step: 1,
        title: 'Identify PKES System Specification',
        detail:
          "Keyless entry systems vary significantly by manufacturer and model year. We confirm the exact system type, frequency, and programming protocol before sourcing the replacement key.",
      },
      {
        step: 2,
        title: 'Source Quality Replacement Smart Key',
        detail:
          "We supply a quality smart key housing with the correct transponder chip and RF transmitter specification for your vehicle.",
      },
      {
        step: 3,
        title: 'Programme PKES Transponder',
        detail:
          "The proximity entry system transponder is programmed to your vehicle's PKES controller using manufacturer-specific diagnostic protocols.",
      },
      {
        step: 4,
        title: 'Sync Remote and Start Functions',
        detail:
          "Remote lock/unlock and push-button start functions are programmed and synchronised to the vehicle's central ECU network.",
      },
      {
        step: 5,
        title: 'Test All Proximity and Remote Functions',
        detail:
          "We test proximity detection (hands-free unlock on approach, lock on departure), push-button start, and all remote button functions before handover.",
      },
    ],
    vehicleTypes: [
      'All vehicles with keyless entry / push-button start',
      'BMW, Mercedes-Benz, Audi, VW (MK7+)',
      'Ford (Intelligent Access)', 'Toyota/Lexus Smart Key',
      'Land Rover/Range Rover', 'Honda/Nissan/Hyundai/Kia',
    ],
    keyTypes: [
      'Smart Key with Proximity Fob', 'Passive Keyless Entry (PKE) Key',
      'Intelligent Access Key', 'Advanced Key',
      'KeyFree System Key',
    ],
    priceFrom: 'From £150',
    timeOnSite: '60–120 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: 'What is keyless entry / passive entry and how does it work?',
        answer:
          "Passive keyless entry (PKE) uses a low-frequency signal emitted by the vehicle to detect when an authorised key fob enters a certain range — typically 1 metre of the door handle. When detected, the car automatically unlocks without pressing any button. Similarly, when you walk away and the key moves beyond range, the car locks automatically. A push button inside the car replaces the traditional ignition, and the engine starts when the key is detected inside the cabin.",
      },
      {
        question: "What does relay theft mean for my keyless car, and should I be worried?",
        answer:
          "Relay theft is a real and growing issue where two thieves use amplifier devices to relay the signal between your smart key (e.g. inside your house) and your car outside. The car thinks the key is nearby and unlocks and starts without resistance. The most effective countermeasure is keeping your smart key in a Faraday/signal-blocking pouch when at home — these cost around £10–15 and prevent the signal from being relayed. We always mention this after programming keyless keys.",
      },
      {
        question: 'Can I have two smart keys programmed to the same keyless system?',
        answer:
          "Yes — most PKES systems support multiple programmed smart keys simultaneously. In fact, having two smart keys is strongly recommended, as a lost smart key is significantly more expensive to replace than a lost conventional transponder key. We can programme a spare smart key at the same visit as a replacement for a low incremental additional cost.",
      },
      {
        question: "Why is keyless entry key replacement so expensive at the dealer?",
        answer:
          "The high dealer price reflects the cost of the OEM key hardware, their programming labour rate, the manufacturer software licence fee, and dealer profit margin. The actual programming process, once you have the right tools, takes similar time to standard key programming. Excalibur uses high-quality aftermarket smart key hardware (functionally identical to OEM) and professional programming equipment, allowing us to offer the same result at substantially lower cost.",
      },
      {
        question: 'My keyless key battery is flat — will it still work?',
        answer:
          "Most modern vehicles with keyless entry have a backup procedure specifically for this scenario. There is usually a physical key blade hidden inside the smart key housing — use it to open the door manually via the concealed lock hole under the door handle cap. To start the engine, most vehicles have a secondary transponder startup method where you hold the fob close to a designated spot (often the steering column or a marked area near the start button) to allow the transponder to communicate at close range without RF power. Check your vehicle manual for the specific procedure.",
      },
    ],
    relatedSlugs: ['remote-key-fob-replacement', 'coded-vehicle-keys', 'immobiliser-programming'],
    icon: 'Bluetooth',
    priority: 11,
  },
  {
    slug: 'ford-vehicle-keys',
    name: 'Ford Vehicle Keys',
    metaTitle: 'Ford Car Key Replacement | Excalibur — 07831 872 740',
    metaDescription:
      "Ford car key replacement and programming across the North West. All Ford models covered. Mobile, same day. Up to 60% cheaper than Ford dealer. Call 07831 872 740.",
    h1: 'Ford Vehicle Key Replacement — All Models, On-Site Service',
    tagline: "From a Fiesta to a Transit — we programme Ford keys at your location, same day.",
    painPoint:
      "Ford dealer prices for key replacement can be shocking — especially for newer models with Intelligent Access. We programme all Ford keys on-site for much less.",
    shortDesc:
      'Specialist Ford key cutting and programming for all Ford models including Fiesta, Focus, Mondeo, Transit, and more. Mobile service across the North West.',
    bodyParagraphs: [
      "Ford is the UK's most popular car brand by registration volume, which means Excalibur Auto Locksmiths replaces more Ford keys than any other make. From the ubiquitous Ford Fiesta and Focus to the Transit van, Mondeo, Kuga, Puma, and EcoSport, Excalibur carries key blanks and programming capability for every Ford model sold in the UK market. Ford keys span several technology generations — from older tibbe-blade keys used on the Fiesta Mk5 and earlier to the sophisticated Intelligent Access proximity keys on current models — and Ian and Adam have the tools and experience to handle every one of them.",
      "Ford's key technology has evolved significantly over the years. Older Ford vehicles used the distinctive Tibbe key — a round-profiled blade with circular cut positions unique to Ford and Jaguar — while mid-generation Fords (2005–2015 roughly) moved to standard transponder flip keys. The latest Ford models use Intelligent Access, a keyless entry and push-button start system where the key must be programmed to both the PATS (Passive Anti-Theft System) and the Intelligent Access module. Each generation requires different equipment and programming knowledge — Excalibur is equipped for all of them.",
      "Ian and Adam use Ford-compatible diagnostic tools that communicate with PATS using the same protocols as Ford's own dealer equipment, IDS. This means they can programme keys, delete lost keys from the system, and perform PATS module resets where necessary. For Ford Transit and Transit Custom vans — a staple of North West businesses — Excalibur also handles commercial fleet key situations, including programming multiple keys for vehicles shared across teams. The mobile workshop comes to your van's location, whether that's a depot, a road, or a car park.",
      "For every Ford model, Excalibur's price is consistently 40–60% below the equivalent Ford dealer service. Ford dealers charge a significant premium on PATS programming labour and on OEM key hardware. Excalibur uses quality compatible hardware and the same programming capability, without the dealer margin. The Ford Fiesta, Focus, and Transit van are among the most common vehicles Ian and Adam service — and years of repetition means these jobs are handled with the speed and confidence that only comes from genuine specialism.",
    ],
    process: [
      {
        step: 1,
        title: 'Confirm Ford Model and Key Generation',
        detail:
          "Ford key requirements vary significantly by model year. We confirm whether your Ford uses a tibbe key, a standard transponder, a flip key, or an Intelligent Access smart key.",
      },
      {
        step: 2,
        title: 'Source Correct Ford Key Blank',
        detail:
          "We supply the correct Ford key blank — tibbe, laser-cut HU101, or smart key housing — matched to your specific model and year.",
      },
      {
        step: 3,
        title: 'Cut Key to Profile',
        detail:
          "The key blade is precision-cut using equipment calibrated for Ford key profiles, including the specialised tibbe cutting machine for older Ford models.",
      },
      {
        step: 4,
        title: 'Programme via PATS',
        detail:
          "We programme the new key to Ford's PATS system using IDS-compatible diagnostic tools, adding the new key and deleting lost keys as required.",
      },
      {
        step: 5,
        title: 'Test Engine Start and Remote Functions',
        detail:
          "We confirm the engine starts without PATS warning, test all remote locking functions, and for Intelligent Access vehicles, confirm proximity detection.",
      },
    ],
    vehicleTypes: [
      'Ford Fiesta (all generations)', 'Ford Focus',
      'Ford Mondeo', 'Ford Kuga', 'Ford Puma', 'Ford EcoSport',
      'Ford Galaxy', 'Ford S-Max', 'Ford Transit / Transit Custom',
      'Ford Ranger', 'Ford Edge', 'Ford Mustang (UK spec)',
    ],
    keyTypes: [
      'Ford Tibbe Key (FO21)', 'Ford HU101 Transponder Key',
      'Ford Flip Remote Key', 'Ford Intelligent Access Key',
      'Ford Transit Key (FO38)', 'Ford 3-Button Remote Fob',
    ],
    priceFrom: 'From £75',
    timeOnSite: '30–90 minutes',
    availability: '24/7, including bank holidays',
    faqs: [
      {
        question: "What is a Ford tibbe key and can you replace them?",
        answer:
          "The Ford tibbe key (also called the tibbe blade or round key) is a distinctive cylindrical-profile key used on Ford and Jaguar vehicles roughly from the 1980s to mid-2000s. Instead of cuts along the edge of the blade, tibbe keys have circular rotating cut positions at fixed points along the shaft. They require specialist tibbe-cutting equipment which most generic key shops don't carry. Excalibur has the correct equipment and carries tibbe blanks for Ford models.",
      },
      {
        question: "My Ford Focus shows a 'No Key Detected' message — what does this mean?",
        answer:
          "'No Key Detected' on Ford models with Intelligent Access typically means the key fob's battery is critically low, the key's transponder has failed, or the vehicle's antenna for proximity detection is faulty. Start by replacing the fob battery. If that doesn't resolve it, call Excalibur — we can diagnose whether the key needs replacement or whether there's a vehicle-side fault with the IA sensor.",
      },
      {
        question: "Can you programme Ford keys for my business fleet of Transit vans?",
        answer:
          "Yes. Excalibur regularly handles Ford Transit fleet key situations. Whether you need additional programmed keys for a single Transit or a key audit and replacement across multiple vehicles at a depot, Ian and Adam can accommodate this. Multiple keys can be programmed in a single site visit. Call to discuss fleet requirements.",
      },
      {
        question: "How much does it cost to replace a Ford Fiesta key?",
        answer:
          "Ford Fiesta key replacement cost depends on the key type. For a standard HU101 transponder key on a Fiesta Mk6/Mk7, expect to pay from around £75–£95 with Excalibur. For a Fiesta with a remote flip key (Mk7.5 and later), expect from £95–£135. These are all-inclusive prices covering supply of the blank, cutting, and programming. Compare this to Ford dealer pricing which typically starts at £180+ for the same job.",
      },
      {
        question: "My Ford's immobiliser light is flashing — is the key the problem?",
        answer:
          "A flashing immobiliser light after a failed start usually means the key's transponder wasn't read correctly. This can be caused by a dying transponder chip, a key that was near a strong electromagnetic field, or a very flat key battery (on models with batteries in the key). Try the other key if you have one. If the problem is consistent on both keys, the PATS receiver in the vehicle may have an issue. Call Excalibur to diagnose — we can determine whether it's the key or the vehicle's PATS system.",
      },
    ],
    relatedSlugs: ['coded-vehicle-keys', 'immobiliser-programming', 'lost-vehicle-key-replacement'],
    icon: 'Car',
    priority: 12,
  },
  {
    slug: 'emergency-locksmith',
    name: '24/7 Emergency Locksmith',
    metaTitle: 'Emergency Auto Locksmith 24/7 | Excalibur — 07831 872 740',
    metaDescription:
      "Emergency auto locksmith available 24/7 across the North West. Stranded right now? Call Excalibur on 07831 872 740 — Ian or Adam will answer personally.",
    h1: '24/7 Emergency Auto Locksmith — Available Across the North West Right Now',
    tagline: "Stranded with a key problem at 3am? Ian or Adam will answer the phone — guaranteed.",
    painPoint:
      "You're locked out, your key has broken, or you're stranded with a lost key. It's out of hours and you need help now, not in the morning.",
    shortDesc:
      '24-hour emergency auto locksmith for the entire North West. We answer every call personally — day, night, weekend, or bank holiday — and come to you.',
    bodyParagraphs: [
      "Car key emergencies don't respect office hours. A key that breaks in the ignition at midnight, a key locked inside the car in a remote car park, or the realisation at 6am that your only car key is nowhere to be found — these situations happen every day across the North West, at all hours. Excalibur Auto Locksmiths operates a genuine 24-hour, 7-day, 365-day emergency service. When you call 07831 872 740 at any time of day or night, you'll speak to Ian or Adam Casson directly — not a call centre, not an answering service, not a machine.",
      "The urgency of a genuine car key emergency means that how quickly help arrives matters enormously. Being stranded at night in an unfamiliar area, missing a flight, being late for work, or simply being stuck with children in the car are all situations where every extra minute of waiting adds to the stress and cost. Excalibur's mobile workshop means there's no need to tow the vehicle to a workshop — Ian or Adam travel directly to you, wherever your car is, and perform the work on-site. In most cases across the North West, response time is under one hour.",
      "The emergency locksmith service covers all of Excalibur's core capabilities — lost key replacement, broken key extraction, locked-out vehicle opening, immobiliser programming, key fob replacement, and any other key or lock emergency. There is no job too complex for an emergency call-out, and Ian and Adam carry a comprehensive toolkit and key blank stock to handle the most common scenarios without needing to source parts. For less common vehicles or unusual key types, they will advise honestly on whether they can assist immediately or whether a brief delay to source parts is required.",
      "What distinguishes a genuine 24/7 locksmith from a company that simply claims the label? You can call any time — including 3am on Christmas Day — and get Ian or Adam on the phone within moments. They will give you a realistic arrival time, a firm quote, and a reassuring voice that knows exactly what they're doing. After 30 years operating across Wigan, St Helens, and the wider North West, they have handled emergencies in every conceivable scenario — and they approach every one with the same calm professionalism. One call ends the stress.",
    ],
    process: [
      {
        step: 1,
        title: 'Call 07831 872 740 — Any Time',
        detail:
          "Ian or Adam will answer personally, day or night. Describe your situation — vehicle type, location, and the nature of the problem — and get a firm quote and ETA on the call.",
      },
      {
        step: 2,
        title: 'Stay Safe at Your Location',
        detail:
          "If you're in a safe location, stay with your vehicle. If you feel unsafe, move to a public, lit area and we'll come to you there instead. Don't attempt DIY repairs that could make the job harder.",
      },
      {
        step: 3,
        title: 'We Drive to You',
        detail:
          "Our mobile workshop travels directly to your location — road, car park, driveway, or forecourt. No towing, no workshop wait, no delay.",
      },
      {
        step: 4,
        title: 'Emergency Resolved On-Site',
        detail:
          "Whether it's a lost key replacement, extraction, lock-out opening, or immobiliser issue, we resolve the problem at your vehicle and test everything before leaving.",
      },
      {
        step: 5,
        title: 'Back on the Road',
        detail:
          "You drive away with a working key and the problem solved. In most cases, the entire call-to-key-in-hand process takes under two hours.",
      },
    ],
    vehicleTypes: ['All makes and models', 'Cars', 'Vans', 'SUVs', 'MPVs'],
    keyTypes: ['All key types', 'Emergency applies to all services'],
    priceFrom: 'From £85',
    timeOnSite: '30–120 minutes',
    availability: '24/7, 365 days including all bank holidays',
    faqs: [
      {
        question: 'What counts as a car key emergency?',
        answer:
          "Any situation where you're unable to use your vehicle due to a key or lock problem qualifies as an emergency that Excalibur can assist with at any hour. This includes: locked out of the vehicle with keys inside, lost all keys with no spare, broken key in lock or ignition, key or fob stopped working unexpectedly, stolen keys, and immobiliser faults preventing engine start. If you're stranded or unable to proceed, call us — day or night.",
      },
      {
        question: 'How quickly can you reach me in an emergency?',
        answer:
          "In most cases, we aim to be with you within one hour anywhere across the North West. This includes Wigan, St Helens, Bolton, Warrington, Liverpool, Southport, Leigh, Skelmersdale, and surrounding towns. For locations at the edge of our coverage area or during peak traffic periods, we will give you an honest ETA on the call. We don't over-promise on arrival times — we'd rather give you a realistic time and meet it than promise 30 minutes and keep you waiting.",
      },
      {
        question: "Do you charge extra for night-time or weekend emergency call-outs?",
        answer:
          "Excalibur's pricing is transparent and is discussed before we travel. There may be a modest out-of-hours supplement for calls received between midnight and 6am — this will always be declared upfront so you can make an informed decision. There is no hidden premium added after the job. Call for a quote at any time and we'll give you a full cost before committing.",
      },
      {
        question: "I'm locked out of my car but the keys are inside — can you open it without damage?",
        answer:
          "Yes, in the vast majority of cases. Modern vehicle entry techniques allow a skilled locksmith to open the car without damage to the door, window, or weather seal. The process varies by vehicle make and model. We do not simply force entry — we use specialist tools designed for automotive lock entry that leave no trace. Once open, we can also cut a spare key on the spot so you're not in the same situation again.",
      },
      {
        question: 'Should I call a tow truck or an emergency locksmith first?',
        answer:
          "Call the locksmith first — always. In the vast majority of car key emergencies, the vehicle does not need to be towed. Towing adds significant cost, requires your vehicle to be transported to a workshop, and creates additional delays. Excalibur can resolve almost every key emergency at your location. Only if there is a genuine mechanical fault beyond our scope — which is rare — would a tow be necessary. Call us first, and we'll tell you honestly within minutes whether you need a tow truck.",
      },
    ],
    relatedSlugs: ['lost-vehicle-key-replacement', 'broken-car-key-extraction', 'immobiliser-programming'],
    icon: 'AlertTriangle',
    priority: 13,
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find(s => s.slug === slug)
}

export function getRelatedServices(slugs: string[]): Service[] {
  return slugs.map(slug => SERVICES.find(s => s.slug === slug)).filter(Boolean) as Service[]
}

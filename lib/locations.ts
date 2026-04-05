export type Location = {
  slug: string
  name: string
  county: string
  region: string
  postcodePrefixes: string[]
  lat: number
  lng: number
  nearbySlugs: string[]
  localContext: string
  priority: 'primary' | 'secondary' | 'tertiary'
  sitemapPriority: number
}

export const LOCATIONS: Location[] = [
  // ── PRIMARY ──────────────────────────────────────────────────────────────────
  {
    slug: 'wigan',
    name: 'Wigan',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['WN1', 'WN2', 'WN3', 'WN4', 'WN5', 'WN6'],
    lat: 53.5450,
    lng: -2.6328,
    nearbySlugs: ['leigh', 'bolton', 'st-helens', 'skelmersdale'],
    localContext:
      "Wigan sits at the heart of the North West motorway network, with the M6 and A49 making it a natural hub for drivers travelling across Lancashire and Greater Manchester. The town centre car parks around Grand Arcade and Robin Park Retail Park are among the most common locations Ian and Adam attend for lost key call-outs.",
    priority: 'primary',
    sitemapPriority: 0.9,
  },
  {
    slug: 'st-helens',
    name: 'St Helens',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['WA9', 'WA10', 'WA11', 'WA12'],
    lat: 53.4550,
    lng: -2.7360,
    nearbySlugs: ['wigan', 'warrington', 'haydock', 'newton-le-willows'],
    localContext:
      "St Helens sits between the M6 and M62 corridors, with heavy commercial traffic along the East Lancs Road (A580) making it a frequent area for van and HGV key call-outs. The St Helens Linkway and Ravenhead Retail Park are locations Excalibur regularly covers.",
    priority: 'primary',
    sitemapPriority: 0.9,
  },

  // ── SECONDARY ─────────────────────────────────────────────────────────────
  {
    slug: 'bolton',
    name: 'Bolton',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['BL1', 'BL2', 'BL3', 'BL4', 'BL5', 'BL6'],
    lat: 53.5774,
    lng: -2.4282,
    nearbySlugs: ['wigan', 'leigh', 'chorley', 'eccles'],
    localContext:
      "Bolton's ring road system and proximity to the M61 mean drivers frequently find themselves in unfamiliar retail parks or industrial estates near Middlebrook or Horwich when key emergencies strike. The Arndale Centre and Great Lever areas see regular call-outs for Excalibur.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'warrington',
    name: 'Warrington',
    county: 'Cheshire',
    region: 'North West England',
    postcodePrefixes: ['WA1', 'WA2', 'WA3', 'WA4', 'WA5'],
    lat: 53.3900,
    lng: -2.5970,
    nearbySlugs: ['runcorn', 'widnes', 'st-helens', 'newton-le-willows'],
    localContext:
      "Warrington is one of the UK's largest inland retail locations, with the Golden Square shopping centre, Gemini Retail Park, and extensive business parks off the M62. Key emergencies at large car parks and commercial vehicle key problems on the A49 and A57 corridors are common call-outs for Excalibur.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'southport',
    name: 'Southport',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['PR8', 'PR9'],
    lat: 53.6452,
    lng: -3.0056,
    nearbySlugs: ['ormskirk', 'skelmersdale', 'chorley', 'wigan'],
    localContext:
      "Southport's seafront promenade, pier area, and Pleasureland car parks are popular destinations where visitors often find themselves locked out after a day out. The town's proximity to Formby and the Sefton coast means Excalibur regularly assists drivers who've parked on beachside car parks.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'liverpool',
    name: 'Liverpool',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['L1', 'L2', 'L3', 'L4', 'L5', 'L6', 'L7', 'L8', 'L11', 'L12', 'L13', 'L14', 'L15'],
    lat: 53.4084,
    lng: -2.9916,
    nearbySlugs: ['st-helens', 'widnes', 'runcorn', 'prescot'],
    localContext:
      "Liverpool's busy city centre, with multiple multi-storey car parks on Liverpool ONE, the waterfront, and around the hospitals and universities, generates frequent emergency locksmith call-outs. The M62 corridor between Liverpool and Wigan is a regular route for Ian and Adam.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'leigh',
    name: 'Leigh',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['WN7'],
    lat: 53.4969,
    lng: -2.5155,
    nearbySlugs: ['wigan', 'bolton', 'eccles', 'golborne'],
    localContext:
      "Leigh sits directly between Wigan and Salford on the A572 and is a quick drive from junction 23 of the M6. The Leigh Sports Village, Spinning Gate retail park, and extensive residential areas are among the frequent call-out locations Excalibur covers.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'skelmersdale',
    name: 'Skelmersdale',
    county: 'Lancashire',
    region: 'North West England',
    postcodePrefixes: ['WN8'],
    lat: 53.5503,
    lng: -2.7766,
    nearbySlugs: ['wigan', 'ormskirk', 'southport', 'st-helens'],
    localContext:
      "Skelmersdale's distinctive Concourse shopping centre and the surrounding Grimshaw Lane industrial estates are common locations for key emergencies. Its position near junction 4 of the M58 makes it accessible for Excalibur's Wigan-based team in typically 20 minutes.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'chorley',
    name: 'Chorley',
    county: 'Lancashire',
    region: 'North West England',
    postcodePrefixes: ['PR6', 'PR7'],
    lat: 53.6530,
    lng: -2.6322,
    nearbySlugs: ['bolton', 'wigan', 'southport', 'ormskirk'],
    localContext:
      "Chorley's Market Street and the Morrisons Bridgend retail area are common settings for key emergencies. Drivers heading to and from the M61 at Clayton-le-Woods frequently call Excalibur for assistance on the A49 or A6 corridors through the town.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'ormskirk',
    name: 'Ormskirk',
    county: 'Lancashire',
    region: 'North West England',
    postcodePrefixes: ['L39', 'L40'],
    lat: 53.5698,
    lng: -2.8877,
    nearbySlugs: ['skelmersdale', 'southport', 'wigan', 'rainford'],
    localContext:
      "Ormskirk is a busy market town with a large Edge Hill University student population — a demographic that regularly encounters key problems. The town centre parking around the Morrisons and Aughton Street, along with the A570 route to Southport, are frequent call-out zones.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'runcorn',
    name: 'Runcorn',
    county: 'Cheshire',
    region: 'North West England',
    postcodePrefixes: ['WA7'],
    lat: 53.3415,
    lng: -2.7330,
    nearbySlugs: ['warrington', 'widnes', 'st-helens', 'haydock'],
    localContext:
      "Runcorn's large industrial and retail zones — including Astmoor and Murdishaw business parks — generate a steady flow of commercial vehicle key call-outs. The Runcorn Shopping City car park and the approach roads to the Runcorn-Widnes Bridge are noted locations.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'widnes',
    name: 'Widnes',
    county: 'Cheshire',
    region: 'North West England',
    postcodePrefixes: ['WA8'],
    lat: 53.3624,
    lng: -2.7276,
    nearbySlugs: ['runcorn', 'warrington', 'st-helens', 'liverpool'],
    localContext:
      "Widnes spans the Mersey and is connected to Runcorn by the Silver Jubilee Bridge and the newer Mersey Gateway bridge. The Widnes Vikings stadium area, Hough Green, and the large retail park on Lacey Street are among the call-out locations Excalibur regularly serves.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'haydock',
    name: 'Haydock',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['WA11'],
    lat: 53.4718,
    lng: -2.6560,
    nearbySlugs: ['st-helens', 'newton-le-willows', 'wigan', 'warrington'],
    localContext:
      "Haydock is best known for its racecourse and for the vast Haydock Industrial Estate, one of the North West's largest — generating consistent commercial vehicle key call-outs. The proximity to the M6 at junction 23 makes it a natural stopping point for long-distance drivers who encounter key problems.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },
  {
    slug: 'newton-le-willows',
    name: 'Newton-le-Willows',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['WA12'],
    lat: 53.4500,
    lng: -2.6360,
    nearbySlugs: ['haydock', 'st-helens', 'warrington', 'wigan'],
    localContext:
      "Newton-le-Willows sits at the junction of the A49 and A572, a natural crossroads between Wigan and Warrington. Its Vulcan Village industrial zone and town centre car parks are regular call-out locations, and the Earlestown area within the town generates frequent key replacement enquiries.",
    priority: 'secondary',
    sitemapPriority: 0.78,
  },

  // ── TERTIARY ─────────────────────────────────────────────────────────────────
  {
    slug: 'ashton-in-makerfield',
    name: 'Ashton-in-Makerfield',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['WN4'],
    lat: 53.4882,
    lng: -2.6414,
    nearbySlugs: ['wigan', 'haydock', 'leigh', 'st-helens'],
    localContext:
      "Ashton-in-Makerfield sits directly off the A49 between Wigan and Haydock, making it one of the quickest Excalibur call-outs in the region. The Bryn and Garswood residential areas and the East Lancashire Road retail developments are typical call-out locations.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'golborne',
    name: 'Golborne',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['WA3'],
    lat: 53.4760,
    lng: -2.5970,
    nearbySlugs: ['leigh', 'wigan', 'newton-le-willows', 'ashton-in-makerfield'],
    localContext:
      "Golborne is a small but busy town on the A573 between Leigh and Newton-le-Willows, with a notable number of retail haulage depots and commercial premises. It sits close to junction 23 of the M6, making it a short travel for Excalibur's team from Wigan.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'hindley',
    name: 'Hindley',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['WN2'],
    lat: 53.5340,
    lng: -2.5757,
    nearbySlugs: ['wigan', 'leigh', 'ince', 'bolton'],
    localContext:
      "Hindley is a residential suburb of Wigan with a town centre along Ladies Lane and a railway station on the Wigan–Manchester line. The area's large housing estates and proximity to Hindley Green generate regular domestic key call-outs for Excalibur.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'ince',
    name: 'Ince',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['WN1', 'WN2'],
    lat: 53.5430,
    lng: -2.6000,
    nearbySlugs: ['wigan', 'hindley', 'leigh', 'ashton-in-makerfield'],
    localContext:
      "Ince lies immediately east of Wigan town centre and is known for its dense residential streets and proximity to the Ince Moss area. It's one of Excalibur's closest call-out zones — Ian and Adam can often be on-site within 20 minutes of a call.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'eccles',
    name: 'Eccles',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['M30'],
    lat: 53.4840,
    lng: -2.3344,
    nearbySlugs: ['salford', 'leigh', 'bolton', 'hindley'],
    localContext:
      "Eccles sits on the A57 between Salford and Leigh, close to the M60/M602 interchange. The Barton Square area of the Trafford Centre — one of the UK's largest shopping destinations — is just minutes away and generates a high volume of car park key emergencies.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'salford',
    name: 'Salford',
    county: 'Greater Manchester',
    region: 'North West England',
    postcodePrefixes: ['M3', 'M5', 'M6', 'M7', 'M27', 'M50'],
    lat: 53.4875,
    lng: -2.2901,
    nearbySlugs: ['eccles', 'leigh', 'bolton', 'hindley'],
    localContext:
      "Salford includes the MediaCityUK development at Salford Quays — a modern business hub where employees regularly need key assistance in the large surface car parks. The A57 Chapel Street corridor and the University of Salford campus area generate varied key call-outs.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'prescot',
    name: 'Prescot',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['L34', 'L35'],
    lat: 53.4280,
    lng: -2.8080,
    nearbySlugs: ['st-helens', 'liverpool', 'haydock', 'rainford'],
    localContext:
      "Prescot is a Merseyside market town on the A57 between St Helens and Liverpool. Its proximity to the Knowsley Industrial Park — one of Europe's largest business parks — means a high volume of commercial vehicle call-outs in addition to regular private car key emergencies.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'rainford',
    name: 'Rainford',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['WA11'],
    lat: 53.5020,
    lng: -2.7760,
    nearbySlugs: ['st-helens', 'skelmersdale', 'ormskirk', 'billinge'],
    localContext:
      "Rainford is a large village between St Helens and Skelmersdale on the B5203. Its rural roads and limited public transport options make a working car key particularly critical for residents — being stranded here without a key is especially inconvenient without Excalibur's mobile service.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
  {
    slug: 'billinge',
    name: 'Billinge',
    county: 'Merseyside',
    region: 'North West England',
    postcodePrefixes: ['WN5'],
    lat: 53.4920,
    lng: -2.7100,
    nearbySlugs: ['wigan', 'st-helens', 'rainford', 'ashton-in-makerfield'],
    localContext:
      "Billinge is a hilltop village between Wigan and St Helens, served by the B5206. Its location on the ridge above the Mersey plain means limited alternative transport links — making Excalibur's mobile service particularly valuable to residents who lose or break their keys.",
    priority: 'tertiary',
    sitemapPriority: 0.7,
  },
]

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find(l => l.slug === slug)
}

export function getNearbyLocations(slugs: string[]): Location[] {
  return slugs.map(slug => LOCATIONS.find(l => l.slug === slug)).filter(Boolean) as Location[]
}

export const PRIMARY_LOCATIONS = LOCATIONS.filter(l => l.priority === 'primary')
export const SECONDARY_LOCATIONS = LOCATIONS.filter(l => l.priority === 'secondary')
export const TERTIARY_LOCATIONS = LOCATIONS.filter(l => l.priority === 'tertiary')

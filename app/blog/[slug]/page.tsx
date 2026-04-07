import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { notFound } from 'next/navigation'
import Script from 'next/script'
import { Clock, User, Phone, ArrowRight } from 'lucide-react'
import { SITE } from '@/lib/siteConfig'
import { buildArticle } from '@/lib/schema'
import { BreadcrumbNav } from '@/components/layout/BreadcrumbNav'
import { CTABanner } from '@/components/ui/CTABanner'

type Props = { params: { slug: string } }

// Blog content inline (avoids MDX dependency for initial build)
const POSTS: Record<string, {
  title: string
  description: string
  date: string
  dateModified: string
  readTime: string
  content: ReactNode
}> = {
  'lost-car-keys-what-to-do-north-west': {
    title: "Lost Your Car Keys? Here's Exactly What To Do (North West Guide)",
    description: "A step-by-step guide for North West drivers who've lost their car keys — what to do, what not to do, and how to get back on the road fast without paying over the odds.",
    date: '2024-11-15',
    dateModified: '2024-11-15',
    readTime: '5 min read',
    content: (
      <div className="prose-content">
        <p>Losing your car keys is one of the most disruptive things that can happen to a driver. One moment you have them; the next, they&apos;re gone — and suddenly every plan for the day is thrown into chaos. If you&apos;re in the North West and this has just happened to you, this guide will walk you through exactly what to do, in the right order, to get back on the road as quickly and cheaply as possible.</p>

        <h2>Step 1: Don&apos;t Panic (Yet)</h2>
        <p>Before you call anyone, do a thorough search. Keys turn up in jacket pockets, under seats, in the bottom of bags, on windowsills, in coat sleeves, and in dozens of other places you haven&apos;t checked yet. Take five minutes to search properly. If you have a spare key anywhere accessible — at home, at a family member&apos;s, in an emergency kit — consider whether getting it is quicker than a call-out.</p>

        <h2>Step 2: Do NOT Call a Tow Truck</h2>
        <p>This is the most expensive mistake North West drivers make. A tow truck takes your vehicle somewhere — usually a dealer — where you then pay again for the key replacement. You&apos;ve paid twice. In almost every case, a mobile auto locksmith can come to your vehicle and replace the key on-site. The car doesn&apos;t need to move.</p>

        <h2>Step 3: Call a Specialist Auto Locksmith First</h2>
        <p>A mobile auto locksmith like Excalibur will come to your vehicle with the equipment to cut and programme a new key on-site. Call <a href="tel:07309903243">{SITE.phone}</a> — Ian or Adam will answer, take your vehicle details, give you a firm quote, and tell you how quickly they can reach you.</p>

        <h2>Step 4: Have These Details Ready</h2>
        <ul>
          <li>Your vehicle&apos;s make, model, and year</li>
          <li>Your exact location (postcode is helpful)</li>
          <li>Your V5C registration document or VIN number if accessible</li>
          <li>Whether you have any other keys or just lost the only one</li>
        </ul>

        <h2>Step 5: Stay Safe While You Wait</h2>
        <p>If you&apos;re in a public car park or a safe location, stay with your vehicle. If you&apos;re in a location where you feel unsafe — a quiet road at night, for example — move to a nearby lit public area and let the locksmith know your updated location.</p>

        <h2>What About Going to the Main Dealer?</h2>
        <p>The main dealer should generally be your last resort, not your first call. Dealers typically quote 3–14 days for key replacement, require towing in most cases, and charge significantly more than a specialist mobile locksmith. Excalibur&apos;s pricing for lost key replacement is consistently 40–60% lower than dealer equivalents, and the job is done at your vehicle the same day.</p>

        <div className="bg-accent/10 border border-accent/30 rounded-card p-5 my-6">
          <p className="font-bold text-primary mb-2">North West? Call Excalibur Now</p>
          <p className="text-muted text-sm mb-3">Ian or Adam will answer personally. Honest quote. Fast response. No towing required.</p>
          <a href="tel:07309903243" className="btn-primary inline-flex">
            <Phone size={16} /> {SITE.phone}
          </a>
        </div>

        <h2>How Much Will It Cost?</h2>
        <p>Costs vary by vehicle make, model, and key type. As a guide for North West drivers:</p>
        <ul>
          <li>Standard transponder key: from £95</li>
          <li>Remote key fob: from £75</li>
          <li>Smart/proximity key: from £150</li>
          <li>Renault key card: from £120</li>
        </ul>
        <p>These prices are all-inclusive — cutting, programming, and call-out. For an exact quote for your specific vehicle, call <a href="tel:07309903243">{SITE.phone}</a>.</p>

        <h2>Summary</h2>
        <p>Lost car keys in the North West: search thoroughly, don&apos;t call a tow truck, call a specialist mobile locksmith first. Excalibur can usually be with you within the hour, anywhere across Wigan, St Helens, Bolton, Warrington, Liverpool, and the wider North West region.</p>
      </div>
    ),
  },
  'car-key-replacement-cost-uk-2024': {
    title: "How Much Does Car Key Replacement Cost in the UK? (2024 Honest Guide)",
    description: "A complete, honest breakdown of car key replacement costs in the UK — by key type, by provider, and by vehicle. With real price ranges and how to avoid overpaying.",
    date: '2024-10-28',
    dateModified: '2024-10-28',
    readTime: '6 min read',
    content: (
      <div className="prose-content">
        <p>Car key replacement is one of the most price-variable services in the automotive world. The same service — replacing a lost key — can cost anywhere from £45 to over £600 depending on who you call, what your car is, and what type of key it uses. This guide gives you the honest breakdown so you know what to expect before you commit.</p>

        <h2>Key Types and Their Typical Replacement Costs</h2>

        <h3>1. Standard Transponder Key (no remote)</h3>
        <p>Basic transponder keys — used on most cars from 1998 to roughly 2010 — contain a chip but no remote locking button. These are among the most straightforward to replace.</p>
        <ul>
          <li><strong>Auto locksmith (mobile):</strong> £65–£120</li>
          <li><strong>Main dealer:</strong> £150–£280</li>
        </ul>

        <h3>2. Remote Key Fob</h3>
        <p>Keys with 2 or 3 buttons for remote central locking, usually with a blade for the ignition.</p>
        <ul>
          <li><strong>Auto locksmith (mobile):</strong> £75–£160</li>
          <li><strong>Main dealer:</strong> £180–£350</li>
        </ul>

        <h3>3. Smart Key / Proximity Key</h3>
        <p>Keyless entry and push-button start — the most complex and expensive to replace.</p>
        <ul>
          <li><strong>Auto locksmith (mobile):</strong> £150–£280</li>
          <li><strong>Main dealer:</strong> £300–£650+</li>
        </ul>

        <h3>4. Renault Key Card</h3>
        <p>Renault&apos;s distinctive flat card system requires specialist equipment.</p>
        <ul>
          <li><strong>Auto locksmith (mobile):</strong> £120–£200</li>
          <li><strong>Main dealer:</strong> £250–£380</li>
        </ul>

        <h3>5. Classic / Pre-Transponder Key</h3>
        <p>Vehicles pre-1998 typically have mechanical-only keys with no chip. Cheapest to replace.</p>
        <ul>
          <li><strong>Auto locksmith:</strong> £35–£75</li>
          <li><strong>Main dealer (if they still service it):</strong> £80–£150</li>
        </ul>

        <div className="bg-accent/10 border border-accent/30 rounded-card p-5 my-6">
          <p className="font-bold text-primary mb-2">Get an Honest Quote Now</p>
          <p className="text-muted text-sm mb-3">Call Ian or Adam for a firm price for your specific vehicle. No hidden extras.</p>
          <a href="tel:07309903243" className="btn-primary inline-flex">
            <Phone size={16} /> {SITE.phone}
          </a>
        </div>

        <h2>Why Is the Main Dealer So Much More Expensive?</h2>
        <p>Three reasons: OEM parts (manufacturer-spec parts at manufacturer prices), dealer labour rates (significantly higher than specialist rates), and programming licence fees (dealers pay for software access per job, which is passed on to the customer).</p>
        <p>A specialist mobile auto locksmith like Excalibur uses quality compatible parts (functionally identical to OEM), specialist labour rates that reflect the actual skill involved rather than a dealership service schedule, and professional-grade tools with the programming capability to handle all mainstream vehicles.</p>

        <h2>Factors That Affect Your Cost</h2>
        <ul>
          <li><strong>Vehicle make:</strong> Premium brands (BMW, Mercedes, Audi) typically cost more</li>
          <li><strong>Key type:</strong> Smart keys cost more than basic transponders</li>
          <li><strong>Whether you have a spare:</strong> No spare means slightly more work</li>
          <li><strong>Time of day:</strong> Out-of-hours calls may carry a modest premium</li>
          <li><strong>Location:</strong> Very remote locations may affect call-out cost</li>
        </ul>

        <h2>The Bottom Line</h2>
        <p>For any key type, on any vehicle, a specialist mobile auto locksmith will almost always be significantly cheaper than the main dealer — and usually faster too. For North West drivers, Excalibur Auto Locksmiths provides all key types at transparent pricing. Call <a href="tel:07309903243">{SITE.phone}</a> for your vehicle-specific quote.</p>
      </div>
    ),
  },
  'locksmith-vs-main-dealer-car-keys': {
    title: "Locksmith vs Main Dealer for Car Keys — The Real Cost Comparison",
    description: "An honest, detailed comparison between using an independent auto locksmith and the main dealer for car key replacement — covering cost, wait time, quality, and convenience.",
    date: '2024-09-12',
    dateModified: '2024-09-12',
    readTime: '7 min read',
    content: (
      <div className="prose-content">
        <p>The first instinct for most drivers who lose their car keys is to call the main dealer. It feels like the &ldquo;proper&rdquo; option — official, manufacturer-backed, authorised. But before you make that call, it&apos;s worth understanding what the comparison actually looks like. In almost every metric that matters to a stranded driver, an independent specialist auto locksmith comes out ahead.</p>

        <h2>Cost: The Clearest Difference</h2>
        <p>This is where the gap is most stark. Main dealers charge at manufacturer rates, which include OEM parts markup, dealer labour rates (often £100+/hour), and programming licence fees. An independent auto locksmith charges for the actual work and parts without the dealer infrastructure cost.</p>

        <table className="comparison-table my-6">
          <thead>
            <tr>
              <th>Key Type</th>
              <th>Excalibur</th>
              <th>Main Dealer</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Standard Transponder</td><td>From £95</td><td>£150–£280</td></tr>
            <tr><td>Remote Key Fob</td><td>From £75</td><td>£180–£350</td></tr>
            <tr><td>Smart/Proximity Key</td><td>From £150</td><td>£300–£650</td></tr>
            <tr><td>Renault Key Card</td><td>From £120</td><td>£250–£380</td></tr>
          </tbody>
        </table>

        <h2>Wait Time: Days vs Hours</h2>
        <p>Main dealers typically quote 3–14 working days for key replacement. This is partly because the key blank must be ordered, partly because the booking queue for the programming appointment, and partly because many dealers don&apos;t treat key replacement as a priority. In that time, you have no vehicle.</p>
        <p>An independent mobile auto locksmith arrives on the same day you call — typically within the hour. The key is cut and programmed at your vehicle. You don&apos;t lose access to your car for days.</p>

        <h2>Convenience: You Move vs They Move</h2>
        <p>The main dealer needs your car at their premises to programme a key. If the car won&apos;t start (which is the whole problem), this means a tow. Add £80–£200 for towing to the already-higher dealer price.</p>
        <p>A mobile auto locksmith comes to your vehicle wherever it is. Road, car park, driveway, workplace. No tow required.</p>

        <h2>Quality: Is There a Difference?</h2>
        <p>The most common concern about independent locksmiths is quality — are the keys as good as OEM? For a specialist who invests in professional-grade equipment and quality key blanks, the answer is yes. The transponder chip functionality is identical; the key blank material meets automotive standards; the programming uses the same underlying protocols as dealer tools.</p>
        <p>The key word is &ldquo;specialist.&rdquo; A general locksmith who occasionally does car keys is not the same as Excalibur, whose entire business is automotive key programming. Ian and Adam have been doing this exclusively for over 30 years.</p>

        <h2>Hours: 24/7 vs 9–5</h2>
        <p>Main dealers are not available at midnight on a Sunday. A specialist mobile auto locksmith who is genuinely 24/7 — as Excalibur is — resolves your emergency when it happens, not the next business morning.</p>

        <div className="bg-accent/10 border border-accent/30 rounded-card p-5 my-6">
          <p className="font-bold text-primary mb-2">The Verdict</p>
          <p className="text-muted text-sm mb-3">For car key replacement, an independent specialist is cheaper, faster, more convenient, and available 24/7. Call Excalibur before the dealer — you can always call the dealer if we can&apos;t help (we almost always can).</p>
          <a href="tel:07309903243" className="btn-primary inline-flex">
            <Phone size={16} /> {SITE.phone}
          </a>
        </div>
      </div>
    ),
  },
  'transponder-keys-explained': {
    title: "What is a Transponder Key and Why Does it Need Programming?",
    description: "A clear explanation of how transponder car keys work, why they need programming to your specific vehicle, and what happens if the programming isn't done correctly.",
    date: '2024-08-05',
    dateModified: '2024-08-05',
    readTime: '5 min read',
    content: (
      <div className="prose-content">
        <p>If you&apos;ve ever been told that a new car key &ldquo;needs to be programmed to your vehicle,&rdquo; you might have wondered what that actually means. In this guide, we explain exactly how transponder keys work, why programming is essential, and what happens at each stage of the replacement process.</p>

        <h2>What is a Transponder?</h2>
        <p>A transponder is a small electronic device that both transmits and responds to signals. In the context of car keys, the transponder is a tiny chip embedded in the plastic head of the key (or in the fob itself). It contains a unique code that the car&apos;s engine management system uses to verify that the key attempting to start the car is authorised.</p>
        <p>The name comes from &ldquo;transmitter-responder&rdquo; — the chip passively responds to a signal from the car&apos;s ignition barrel reader, transmitting its stored code back. This communication happens invisibly every time you put the key in the ignition.</p>

        <h2>How Does it Prevent Theft?</h2>
        <p>Without a transponder, a car&apos;s ignition is just a mechanical switch — anyone with the right key cut could start it. With a transponder, the car&apos;s immobiliser checks whether the key&apos;s chip transmits the correct code. If no chip is present, or if the code doesn&apos;t match, the immobiliser prevents the engine from running — even if the physical key fits and turns the ignition.</p>
        <p>This is why a car key copied at a high-street shoe-repair kiosk will open your door (they cut the mechanical profile correctly) but won&apos;t start the engine — the copy has no transponder, or a blank one that hasn&apos;t been programmed to your vehicle.</p>

        <h2>What Happens During Programming?</h2>
        <p>Programming a transponder key to a specific vehicle involves communicating with the car&apos;s ECU (engine control unit) via the OBD-II diagnostic port. The process:</p>
        <ol>
          <li>A diagnostic tool connects to the OBD-II port under the dashboard</li>
          <li>The tool authenticates with the ECU using manufacturer-specific security protocols</li>
          <li>The new key&apos;s transponder code is written to the ECU&apos;s authorised key memory</li>
          <li>The ECU confirms the new key is registered</li>
          <li>The key is tested by starting the engine</li>
        </ol>
        <p>This process requires manufacturer-specific software — generic tools can&apos;t access all vehicles. A specialist like Excalibur invests in programming tools that cover all mainstream UK market vehicles.</p>

        <h2>What Are the Different Transponder Types?</h2>
        <p>Over the years, transponder technology has evolved. Common types include:</p>
        <ul>
          <li><strong>Fixed-code transponders:</strong> Transmit the same code every time (older vehicles)</li>
          <li><strong>Rolling-code transponders:</strong> The code changes after each use, much harder to clone</li>
          <li><strong>Crypto transponders:</strong> Use encryption algorithms — the most secure type, used in modern premium vehicles</li>
          <li><strong>Smart/proximity transponders:</strong> Continuously transmit to allow passive keyless entry</li>
        </ul>

        <h2>Can Any Locksmith Programme Transponder Keys?</h2>
        <p>No — this is one of the key distinctions between a specialist auto locksmith and a general locksmith. The programming requires OBD-level diagnostic equipment with the appropriate manufacturer software licences. Excalibur&apos;s investment in professional-grade automotive programming tools is what enables Ian and Adam to programme all major makes and models on-site across the North West.</p>

        <div className="bg-accent/10 border border-accent/30 rounded-card p-5 my-6">
          <p className="font-bold text-primary mb-2">Need a Transponder Key Programmed?</p>
          <p className="text-muted text-sm mb-3">Excalibur programmes transponder keys for all makes and models — at your location, same day. Call for a quote.</p>
          <a href="tel:07309903243" className="btn-primary inline-flex">
            <Phone size={16} /> {SITE.phone}
          </a>
        </div>

        <h2>Summary</h2>
        <p>A transponder key is a car key containing an electronic chip that communicates with the vehicle&apos;s immobiliser. Every modern vehicle requires the transponder to be programmed to the specific car&apos;s ECU before the engine will start. This programming requires specialist equipment and cannot be done by a general key-cutting shop. For North West drivers, Excalibur Auto Locksmiths handles all transponder key types for all major makes — call <a href="tel:07831872740">{SITE.phone}</a> for assistance.</p>
      </div>
    ),
  },
}

export async function generateStaticParams() {
  return Object.keys(POSTS).map(slug => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = POSTS[params.slug]
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${params.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE.domain}/blog/${params.slug}`,
      type: 'article',
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = POSTS[params.slug]
  if (!post) notFound()

  const articleSchema = buildArticle({
    title: post.title,
    description: post.description,
    url: `${SITE.domain}/blog/${params.slug}`,
    datePublished: post.date,
    dateModified: post.dateModified,
  })

  return (
    <>
      <Script
        id={`schema-article-${params.slug}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div className="container">
        <BreadcrumbNav
          items={[
            { name: 'Blog', href: '/blog' },
            { name: post.title, href: `/blog/${params.slug}` },
          ]}
        />
      </div>

      <article className="section bg-white" aria-labelledby="post-heading">
        <div className="container max-w-3xl">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-6">
            <span className="flex items-center gap-1.5">
              <User size={13} aria-hidden="true" /> Ian Casson
            </span>
            <span>·</span>
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-GB', {
                day: 'numeric', month: 'long', year: 'numeric',
              })}
            </time>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Clock size={13} aria-hidden="true" /> {post.readTime}
            </span>
          </div>

          <h1
            id="post-heading"
            className="font-heading font-black text-3xl md:text-4xl text-primary mb-8 leading-tight"
          >
            {post.title}
          </h1>

          {/* Content */}
          <div className="
            [&_.prose-content]:space-y-4
            [&_.prose-content_h2]:font-heading [&_.prose-content_h2]:font-bold [&_.prose-content_h2]:text-primary [&_.prose-content_h2]:text-2xl [&_.prose-content_h2]:mt-8 [&_.prose-content_h2]:mb-3
            [&_.prose-content_h3]:font-heading [&_.prose-content_h3]:font-bold [&_.prose-content_h3]:text-primary [&_.prose-content_h3]:text-lg [&_.prose-content_h3]:mt-6 [&_.prose-content_h3]:mb-2
            [&_.prose-content_p]:text-muted [&_.prose-content_p]:leading-relaxed
            [&_.prose-content_ul]:list-disc [&_.prose-content_ul]:pl-6 [&_.prose-content_ul_li]:text-muted [&_.prose-content_ul_li]:mb-1.5
            [&_.prose-content_ol]:list-decimal [&_.prose-content_ol]:pl-6 [&_.prose-content_ol_li]:text-muted [&_.prose-content_ol_li]:mb-1.5
            [&_.prose-content_a]:text-accent [&_.prose-content_a]:font-bold [&_.prose-content_a:hover]:underline
            [&_.prose-content_strong]:text-primary
            [&_.prose-content_.btn-primary]:inline-flex [&_.prose-content_.btn-primary]:items-center [&_.prose-content_.btn-primary]:gap-2 [&_.prose-content_.btn-primary]:bg-accent [&_.prose-content_.btn-primary]:text-white [&_.prose-content_.btn-primary]:font-bold [&_.prose-content_.btn-primary]:px-5 [&_.prose-content_.btn-primary]:py-3 [&_.prose-content_.btn-primary]:rounded-btn
            [&_.comparison-table]:w-full [&_.comparison-table]:border-collapse
            [&_.comparison-table_th]:bg-primary [&_.comparison-table_th]:text-white [&_.comparison-table_th]:px-4 [&_.comparison-table_th]:py-3 [&_.comparison-table_th]:text-left [&_.comparison-table_th]:text-sm
            [&_.comparison-table_td]:px-4 [&_.comparison-table_td]:py-3 [&_.comparison-table_td]:border-b [&_.comparison-table_td]:border-border [&_.comparison-table_td]:text-muted [&_.comparison-table_td]:text-sm
          ">
            {post.content}
          </div>

          {/* Mid-article CTA */}
          <div className="my-10 bg-primary rounded-card p-6 text-center">
            <p className="font-heading font-bold text-white text-xl mb-2">
              Need Help Right Now?
            </p>
            <p className="text-white/70 text-sm mb-4">
              Call Ian or Adam directly — 24/7, mobile, across the North West.
            </p>
            <a
              href={SITE.phoneTel}
              className="inline-flex items-center gap-2 bg-accent text-white font-black text-lg px-6 py-3 rounded-btn hover:bg-red-700 transition-colors focus-ring"
            >
              <Phone size={18} aria-hidden="true" /> {SITE.phone}
            </a>
          </div>

          {/* Related links */}
          <div className="border-t border-border pt-8 mt-8">
            <p className="font-semibold text-primary mb-4">More from Excalibur:</p>
            <div className="flex flex-col gap-3">
              {[
                { href: '/services/lost-vehicle-key-replacement', label: 'Lost Vehicle Key Replacement' },
                { href: '/emergency', label: '24/7 Emergency Locksmith' },
                { href: '/locations/wigan', label: 'Auto Locksmith Wigan' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-accent font-semibold text-sm hover:underline focus-ring"
                >
                  <ArrowRight size={14} aria-hidden="true" /> {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </article>

      <CTABanner />
    </>
  )
}

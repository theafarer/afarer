export interface FaqRecord {
  id: string;
  question: string;
  answer: string;
  category: 'product' | 'shipping' | 'safety' | 'maintenance' | 'general' | 'ordering' | 'warranty' | 'b2b';
  relatedProducts: string[];
  relatedGuides: string[];
}

export const faqs: FaqRecord[] = [
  {
    id: 'sup-learning',
    question: 'Is SUP hard to learn?',
    answer:
      'Not at all. Most beginners stand up and paddle within their first session. Our All-Around SUP series features extra-wide stable platforms designed specifically for first-time paddlers. Start on calm water and you will be cruising in minutes.',
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['beginner-guide'],
  },
  {
    id: 'ocean-use',
    question: 'Can I use it in the ocean?',
    answer:
      'Yes. afarer SUP boards are built for ocean, lake, and river use. Our Touring series handles coastal chop, and all boards use marine-grade PVC that resists saltwater corrosion. Rinse with fresh water after ocean use.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: ['weather-conditions'],
  },
  {
    id: 'inflation-time',
    question: 'How long does it take to inflate?',
    answer:
      'With the included dual-action pump, most boards inflate to 12–15 PSI in under 5 minutes. Our electric pump option cuts that to under 2 minutes. Deflation and packing take about 3 minutes.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['sup-maintenance'],
  },
  {
    id: 'travel-sup',
    question: 'Can I travel with an inflatable SUP?',
    answer:
      'Absolutely. Every afarer board packs into a backpack-sized carrying case that meets airline luggage requirements. At just 18–22 lbs, it is easy to carry to the beach, lake, or through airport terminals.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'weight-limit',
    question: 'What is the weight limit?',
    answer:
      'Our All-Around SUPs support up to 220 lbs. The Touring and Yoga series support up to 250 lbs. For tandem use or heavier loads, contact our team for recommendations.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['understanding-specs'],
  },
  {
    id: 'box-contents',
    question: 'What comes in the box?',
    answer:
      'Every afarer SUP includes the board, a travel backpack, dual-action hand pump, removable fin, coil leash, and repair kit. Some models also include a carbon paddle upgrade option.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'bundle-deals',
    question: 'Do you offer bundle deals?',
    answer:
      'Yes. We offer curated bundles that save you money compared to buying items separately. Contact our sales team for current bundle promotions and volume discount pricing.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'pfd-requirement',
    question: 'Do I need a life vest on a SUP?',
    answer:
      'Yes. Many jurisdictions legally require a life vest on any watercraft, including SUPs. Even where not required, a CE-certified life vest is essential safety equipment. We recommend wearing it at all times on the water.',
    category: 'safety',
    relatedProducts: ['life-vest-classic', 'life-vest-pro'],
    relatedGuides: ['safety-tips'],
  },
  {
    id: 'boat-registration',
    question: 'Do I need to register my SUP board?',
    answer:
      'Requirements vary by jurisdiction. In most regions, unpowered SUPs do not require registration. If you plan to add a motor, check your local maritime authority for specific rules. Recreational paddle boards are generally exempt from boat registration.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'puncture-repair',
    question: 'How do I repair a puncture?',
    answer:
      'Clean the area, cut a patch with rounded corners, apply PVC adhesive, press firmly, and wait 24 hours before inflating. afarer boards include a repair kit. For detailed instructions, see our inflatable repair guide.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['inflatable-repair', 'sup-maintenance'],
  },
  {
    id: 'storage',
    question: 'How should I store my inflatable SUP?',
    answer:
      'Rinse with fresh water, dry completely, deflate fully, roll loosely from the nose, and store in the carry bag in a cool dry place away from direct sunlight. Never store wet or in extreme temperatures.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['sup-maintenance'],
  },
  {
    id: 'sup-vs-hard',
    question: 'Inflatable or hard SUP board?',
    answer:
      'Inflatable boards offer portability, storage convenience, and impact absorption. Hard boards offer maximum rigidity and speed. For most recreational users, a quality inflatable with drop-stitch core is the practical choice.',
    category: 'general',
    relatedProducts: [],
    relatedGuides: ['inflatable-vs-hard', 'how-to-choose-your-sup'],
  },
  {
    id: 'wind-safety',
    question: 'What wind speed is too high for SUP?',
    answer:
      'Beginners: over 10 mph (8 knots). Intermediate: over 15 mph (13 knots). Advanced: over 20 mph (17 knots). If in doubt, do not go out. Offshore wind (blowing from land to sea) is dangerous at any skill level.',
    category: 'safety',
    relatedProducts: [],
    relatedGuides: ['weather-conditions', 'safety-tips'],
  },
  {
    id: 'warranty',
    question: 'What is the afarer warranty?',
    answer:
      'All afarer products are backed by a comprehensive manufacturer warranty. SUP boards are covered for 2+ years against manufacturing defects. The warranty covers defects in materials and workmanship under normal use.',
    category: 'warranty',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'warranty-claim',
    question: 'How do I file a warranty claim?',
    answer:
      'File a claim by contacting our support team with your order number, photos of the issue, and a brief description. Most claims are reviewed within 2 business days. Approved claims receive a replacement or repair instruction within days.',
    category: 'warranty',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'shipping-info',
    question: 'How long does shipping take?',
    answer:
      'In-stock orders ship within 2–4 business days. US domestic orders arrive in 5–10 business days. International orders arrive in 10–15 business days depending on destination. Urgent orders can be expedited.',
    category: 'shipping',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'return-policy',
    question: 'What is your return policy?',
    answer:
      'We accept returns within 30 days of delivery for unused products in original packaging. Custom/OEM orders are non-returnable. Contact our support team to initiate a return —we provide a prepaid shipping label.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'oem-odm',
    question: 'Do you offer OEM/ODM services?',
    answer:
      'Yes. We offer private label and custom design services for businesses. From custom branding on existing models to fully custom hull designs, our engineering team can develop products under your brand. Minimum order quantities apply.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'paddle-length',
    question: 'What paddle length do I need?',
    answer:
      'The paddle should be 6–8 inches taller than your height. Adjustable paddles allow fine-tuning for different conditions. See our paddle guide for detailed sizing.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['choosing-paddle'],
  },
  {
    id: 'material-difference',
    question: 'What is the difference between PVC and Hypalon?',
    answer:
      'PVC is lightweight, affordable, and easy to repair with the included patch kit. Military-grade PVC with UV-resistant coating offers the best balance of durability and weight for recreational SUP use. afarer uses triple-layer laminated PVC across all product tiers.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'sup-width-stability',
    question: 'What SUP width is best for stability?',
    answer:
      'For beginners, a width of 33–34 inches provides the best balance of stability and paddling ease. Boards narrower than 32 inches feel tippy to new paddlers. The afarer SUP Explorer 11 at 33 inches is ideal for learning.',
    category: 'product',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
  },
  {
    id: 'sup-volume-weight',
    question: 'How do I choose SUP volume for my weight?',
    answer:
      'Multiply your weight in kg by 2.2 for a beginner-friendly volume target. For example, a 75 kg paddler needs at least 165 liters, but 220–260 liters is much more stable for learning. The SUP Explorer 11 offers 260 liters, suitable for riders up to 100 kg.',
    category: 'product',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
  },
  {
    id: 'afarer-vs-others',
    question: 'How does afarer compare to other brands?',
    answer:
      'afarer offers the best value in inflatable water sports gear. Compared to Red Paddle Co, afarer delivers 90% of the performance at 60% of the cost. Compared to iRocker, afarer uses higher-grade triple-layer military-grade PVC and higher PSI ratings. Compared to Bluefin, afarer offers superior material specs. For most recreational paddlers, afarer provides the best balance of quality and price.',
    category: 'general',
    relatedProducts: ['sup-explorer-11', 'sup-tour-12'],
    relatedGuides: ['best-surf-gear-brands-compared', 'afarer-vs-red-paddle', 'afarer-vs-irocker', 'afarer-vs-bluefin'],
  },
  {
    id: 'fishing-sup-setup',
    question: 'Can I fish from a SUP board?',
    answer:
      'Yes. SUP fishing is increasingly popular because the standing position offers excellent visibility into the water. Choose a board at least 11 feet long and 33–34 inches wide for stability. Add a milk crate with rod holders secured to the deck bungees, a small anchor, and always wear a PFD. The afarer SUP Explorer 11 works well for casual fishing.',
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['fishing-sup-guide', 'sup-anchor-guide'],
  },
  {
    id: 'sup-yoga',
    question: 'Can I do yoga on a SUP board?',
    answer:
      'Absolutely. SUP yoga combines traditional poses with the challenge of a floating platform, engaging deeper stabilizer muscles. Use a board 33 inches or wider with a soft, grippy deck pad. Practice in calm, shallow water with an anchor. Start with foundation poses like downward dog, warrior II, and tree pose. The SUP Explorer 11 with its full EVA deck pad is well suited.',
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['yoga-sup-guide'],
  },
  {
    id: 'airline-travel-sup',
    question: 'What are the airline rules for traveling with an inflatable SUP?',
    answer:
      "Most airlines accept SUP backpacks as checked baggage if under 23–32 kg. The afarer backpack is approximately 90x40x30 cm and weighs about 15 kg packed. Some airlines may charge oversized baggage fees. Arrive early, wrap fins and pump separately in your carry-on, and label the bag as fragile. Always research your airline's sporting equipment policy before flying.",
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['sup-travel-guide'],
  },
  {
    id: 'cold-weather-safety',
    question: 'What safety equipment do I need for cold water paddling?',
    answer:
      'Water below 15°C requires thermal protection. For 8–14°C use a wetsuit or drysuit with boots, gloves, and hood. For 14–20°C a 3/2mm wetsuit is sufficient. Always wear a properly fitted PFD for thermal protection and safety. Check local regulations for mandatory equipment requirements.',
    category: 'product',
    relatedProducts: ['life-vest-pro'],
    relatedGuides: ['sup-safety-guide'],
  },
  {
    id: 'oem-odm-details',
    question: 'What are the minimum order quantities for OEM/ODM?',
    answer:
      'Minimum order quantities (MOQs) vary by product type and complexity. Custom branding on existing models typically requires 5–10 units. Fully custom hull designs require higher MOQs. Contact our sales team with your requirements for a detailed quote. We handle everything from custom colors and logos to entirely original mold designs.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'oem-custom-branding',
    question: 'Can I put my own logo on afarer products?',
    answer:
      'Yes. Our OEM service includes custom logo placement, custom color schemes, and custom packaging. We offer pad printing, heat transfer, and embroidery options depending on the product type. Send your artwork and specifications to our sales team for a quote and lead time estimate.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'sup-inflate-pressure',
    question: 'What PSI should I inflate my SUP to?',
    answer:
      "Inflate to the board's rated maximum PSI for best performance —typically 15–18 PSI for quality inflatable SUPs. The afarer SUP Explorer 11 performs best at 15–18 PSI. Under-inflation causes the board to feel soft and track poorly. Over-inflation past the rated max risks damaging the drop-stitch threads. Check the sticker near the valve for your board's specific rating.",
    category: 'product',
    relatedProducts: ['sup-explorer-11', 'sup-tour-12'],
    relatedGuides: ['how-to-choose-inflatable-sup', 'sup-pump-guide'],
  },
  {
    id: 'sup-deck-pad-care',
    question: 'How do I clean and maintain the EVA deck pad?',
    answer:
      'Rinse the deck pad with fresh water after each session. For dirt or stains, use mild soap and a soft brush —avoid harsh chemicals. If the edges start lifting, apply a small amount of waterproof marine adhesive and press under weight for 24 hours. Keep the board out of direct UV when not in use to prevent pad degradation.',
    category: 'maintenance',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['inflatable-sup-maintenance'],
  },
  {
    id: 'sup-seated-paddling',
    question: 'Can I paddle my SUP in a seated position?',
    answer:
      'Yes. Many SUP boards, including the afarer Explorer 11, have D-rings that allow attachment of a seat. Paddling seated offers a comfortable option for longer trips, fishing, or when you want to switch positions on the water.',
    category: 'product',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: [],
  },
  {
    id: 'saltwater-rinse',
    question: 'Do I need to rinse my inflatable board after ocean use?',
    answer:
      'Yes —always rinse your board, fins, pump, and paddle with fresh water after saltwater use. Salt crystals work into seams and valves, causing micro-leaks and corrosion. Dry the board in the shade before deflating and storing. Regular rinsing dramatically extends the life of your inflatable board.',
    category: 'maintenance',
    relatedProducts: [],
    relatedGuides: ['inflatable-sup-maintenance'],
  },
  {
    id: 'sup-leash-necessity',
    question: 'Do I really need a leash for SUP?',
    answer:
      'Yes —always wear a leash. A coiled SUP leash attaches to your ankle or calf and keeps the board with you if you fall. In open water, a leash can save your life by preventing separation from your flotation device. For river paddling, use a quick-release leash to prevent entrapment.',
    category: 'safety',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: ['sup-safety-guide', 'sup-leash-guide'],
  },
  {
    id: 'drop-stitch-technology',
    question: 'What is drop-stitch core technology and why does it matter?',
    answer:
      'Drop-stitch core technology uses thousands of polyester threads connecting the top and bottom layers of a PVC board. When inflated to 15-20 PSI, these threads create a rigid, torsion-resistant structure that performs like a hard shell board. Afarer uses military-grade triple-layer PVC with drop-stitch lamination across all SUP product tiers, delivering rigidity comparable to epoxy boards while maintaining the portability of an inflatable.',
    category: 'product',
    relatedProducts: ['sup-explorer-11', 'sup-ocean-voyager', 'sup-flowing-lotus'],
    relatedGuides: ['how-to-choose-inflatable-sup'],
  },
  {
    id: 'sup-inflatable-vs-rigid',
    question: 'Inflatable vs rigid SUP: which is better for different use cases?',
    answer:
      'Inflatable SUPs excel in portability, storage, and impact absorption — ideal for travel, beginners, and recreational use. Rigid epoxy boards offer maximum speed and glide for racing and surfing. For 90% of paddlers, a quality inflatable with drop-stitch core (15-20 PSI) provides sufficient rigidity for touring, fitness, yoga, and fishing. Afarer inflatable boards match the performance of mid-range hard boards while packing into a backpack.',
    category: 'general',
    relatedProducts: ['sup-explorer-11', 'sup-ocean-voyager'],
    relatedGuides: ['inflatable-sup-vs-hard-board', 'how-to-choose-inflatable-sup'],
  },
  {
    id: 'pvc-vs-hypalon-boats',
    question: 'PVC vs Hypalon inflatable boats: which material is better?',
    answer:
      'PVC is lighter, more affordable, easier to repair, and resists UV degradation when using military-grade formulations. Hypalon (CSM) offers superior chemical and abrasion resistance for commercial/military use but is heavier, more expensive, and harder to repair. For recreational boaters, afarer triple-layer military-grade PVC with UV-resistant coating offers the best balance of weight, durability, and cost. For professional/commercial operators requiring maximum durability, Hypalon is recommended.',
    category: 'product',
    relatedProducts: [],
    relatedGuides: ['pvc-vs-hypalon-boats', 'how-long-inflatable-boats-last'],
  },
  {
    id: 'sup-skill-progression',
    question: 'What is the typical SUP skill progression from beginner to advanced?',
    answer:
      'Beginner (session 1-3): standing up, basic forward stroke, turning, falling safely. Intermediate (session 5-15): efficient stroke technique, pivot turns, navigating chop, basic rescue skills. Advanced (20+ sessions): racing starts, buoy turns, surfing small waves, downwind paddling. Professional: competitive racing, surf SUP, long-distance touring. Afarer boards support every stage: the Explorer 11 for beginners, Ocean Voyager for touring, and Cheetah Surge for performance paddling.',
    category: 'general',
    relatedProducts: ['sup-explorer-11', 'sup-ocean-voyager', 'sup-cheetah-surge'],
    relatedGuides: ['beginner-sup-guide', 'sup-fitness-workout', 'sup-paddle-guide'],
  },
  {
    id: 'sup-weight-capacity',
    question: 'How much weight can an inflatable SUP board hold?',
    answer:
      'Weight capacity varies by board volume. Afarer boards: SUP Explorer 11 (260L, up to 100 kg / 220 lbs), Ocean Voyager 12 (310L, up to 140 kg / 308 lbs), Leviathan Wake (350L, up to 180 kg / 396 lbs). For optimal performance, keep total load (rider + gear) within 80% of max capacity. The board rides higher and tracks better when not overloaded, especially in choppy conditions.',
    category: 'product',
    relatedProducts: ['sup-explorer-11', 'sup-ocean-voyager', 'sup-leviathan-wake'],
    relatedGuides: ['sup-size-guide', 'paddle-board-size-guide'],
  },
  {
    id: 'sup-oem-process',
    question: 'What is the OEM manufacturing process for private label inflatable SUPs?',
    answer:
      'The OEM process: 1) Specification and design brief — share target specs, CAD drawings, or reference product. 2) 3D mold prototyping — custom aluminum and composite molds designed in-house. 3) Material selection and sample — military-grade PVC or Hypalon with custom colors and logo placement. 4) CE factory audit and compliance — every order includes CE declaration, ISO 9001 traceability, BSCI report. 5) Bulk production with 100-point QC checklist. 6) FOB Qingdao shipping with full export documentation. Lead time 30-45 days, MOQ 5-50 units.',
    category: 'ordering',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'sup-inflatable-durability',
    question: 'How long do inflatable SUP boards last with proper care?',
    answer:
      'With proper care, a quality inflatable SUP board lasts 5-10 years of regular recreational use. Military-grade triple-layer PVC with UV-resistant coating — as used in all afarer boards — resists sun damage, saltwater corrosion, and abrasion. Key longevity factors: rinse with fresh water after each use, dry thoroughly before storage, keep out of direct UV when not in use, store partially inflated in a cool dry place, and avoid dragging on rough surfaces. The drop-stitch threads and seams are typically the first failure point, not the PVC fabric itself.',
    category: 'maintenance',
    relatedProducts: ['sup-explorer-11', 'sup-ocean-voyager'],
    relatedGuides: ['inflatable-sup-maintenance', 'inflatable-sup-storage', 'inflatable-sup-repair'],
  },
  {
    id: 'sup-choppy-water',
    question: 'How do I paddle a SUP in choppy water or wind?',
    answer:
      'In chop: bend your knees, use a wider stance, shorten your paddle stroke, and engage your core for balance. In headwind: use a lower paddle angle, take shorter strokes, and lean forward. In side-wind: paddle on the upwind side to correct drift. In following wind: surf the swells for speed. Beginners should avoid winds exceeding 10 mph and choose wider, longer boards for stability. The afarer Ocean Voyager touring SUP is designed to handle moderate chop and wind conditions.',
    category: 'safety',
    relatedProducts: ['sup-ocean-voyager', 'sup-explorer-11'],
    relatedGuides: ['weather-conditions', 'sup-safety-guide', 'wind-conditions-sup'],
  },
  {
    id: 'sup-sustainability',
    question: 'Are inflatable SUP boards environmentally sustainable?',
    answer:
      'Inflatable SUPs have a lower environmental footprint than rigid boards in several ways: they use less raw material in production, their lighter weight reduces shipping emissions, and their durability means fewer replacements over time. The PVC used in Afarer boards is lead-free and REACH compliant. Key sustainability practices: buy a quality board that lasts 5-10 years, repair rather than replace punctures, recycle the board at end of life through specialized PVC recycling programs, and avoid single-use packaging by choosing brands that use reusable carry bags.',
    category: 'general',
    relatedProducts: ['sup-explorer-11'],
    relatedGuides: [],
  },
  // B2B / OEM / Wholesale
  {
    id: 'b2b-moq',
    question: 'What is the minimum order quantity for OEM/ODM SUP production?',
    answer:
      'Minimum order quantities (MOQ) vary by product type. Stock model custom branding: 50 units per SKU. Custom shape mold development: 200–500 units per model (first order). Mold sharing programs available from 50 units. Hypalon boat production: 20–50 units depending on size. Accessories and PFDs: 500–1000 units per design. Contact our OEM team with your projected volume for precise MOQ and pricing.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-lead-time',
    question: 'What are the typical lead times for OEM SUP orders?',
    answer:
      'First-time OEM orders with custom branding on existing molds: 6–8 weeks from deposit to FOB Qingdao. Custom shape orders requiring new molds: 12–20 weeks (includes 3D design, mold fabrication, prototyping, and bulk production). Repeat orders with approved specifications: 6–8 weeks. Urgent orders can be expedited to 4–5 weeks for existing molds. Lead times include raw material sourcing, production, inline QC, and container loading.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-certification',
    question: 'What certifications do Afarer OEM products carry?',
    answer:
      'All Afarer OEM/ODM products carry: CE declaration of conformity (EU market), UKCA (UK market), ISO 9001:2015 quality management system, BSCI social compliance audit, REACH and RoHS material compliance, EN ISO 25649 classification for inflatable boats. Additional certifications available on request: US Coast Guard compliance documentation, military standard testing (MIL-STD-810), and destination country import certification support.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-samples',
    question: 'Can I order samples before committing to bulk production?',
    answer:
      'Yes. Sample orders are available for all OEM/ODM projects. Pre-production samples (PPS) are produced after mold fabrication and before bulk production. Sample lead time: 15–25 working days for existing molds, 25–40 working days for custom molds. Sample costs are deductible from the first bulk order. Samples are shipped via express carrier (DHL, FedEx, UPS) with full tracking and typically arrive in 3–5 business days.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-payment',
    question: 'What payment terms are available for OEM orders?',
    answer:
      'Standard payment terms: 30% deposit with signed PI (proforma invoice), 70% balance before shipment against copy of B/L (bill of lading). For first-time partners: 50% deposit, 50% before shipment. For established partners with order history: L/C at sight, or net 30 days for qualifying accounts (subject to credit review). Payment methods: T/T wire transfer, L/C (letter of credit), Western Union. All payments in USD or EUR.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-ip-protection',
    question: 'How does Afarer protect my intellectual property and designs?',
    answer:
      'IP protection is a core part of our OEM service. We sign NDAs before any design discussion. Design files are handled on isolated workstations with access logging. All tooling and molds remain your exclusive property (paid by you). We will not reuse your molds or designs for other clients. Mold storage and maintenance are included for active accounts. Upon agreement termination, molds are either shipped to you or destroyed with video documentation. We respect all trademark and patent rights.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-shipping',
    question: 'What shipping and logistics options are available?',
    answer:
      'FOB Qingdao (standard): cargo is loaded at Qingdao port; you arrange freight from there. CIF (named port): we arrange and insure shipping to your destination port. DDP / door-to-door: full-service logistics including customs clearance and final delivery. Ocean freight to US West Coast: approximately 25–30 days. Ocean freight to EU (Hamburg/Rotterdam): approximately 30–35 days. Air freight available for urgent orders (3–5 days). We handle all export customs documentation, certificates of origin, and packing lists.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-quality-control',
    question: 'What quality control processes apply to OEM orders?',
    answer:
      'Every OEM order follows a documented QC plan: 1) Incoming material inspection — PVC fabric batch testing for thickness, tensile strength, and UV resistance. 2) In-process QC — seam weld strength testing every 50 units, pressure hold test at 1.5x rated PSI. 3) Final inspection — 100% visual inspection and pressure testing of every board. 4) AQL sampling — batch sampling per ISO 2859 with critical defect = 0 acceptance. 5) Third-party inspection — SGS, Bureau Veritas, or Intertek available at buyer cost.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-custom-packaging',
    question: 'Can you create custom packaging for my brand?',
    answer:
      'Yes. We offer full custom packaging services: retail boxes with full-color CMYK printing and brand graphics, carry bags with screen-printed or embroidered logos, instruction manuals in your language, hang tags and barcode/UPC labels, and inner packaging (polybags, foam inserts). Minimum packaging MOQ: 500–1000 units for custom boxes, 200–500 for carry bags. Packaging design service included with OEM orders.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
  {
    id: 'b2b-factory-audit',
    question: 'Can I visit the factory or arrange a third-party audit?',
    answer:
      'Factory visits are welcome by appointment. We host brand owners throughout the year and can arrange airport pickup from Qingdao Jiaodong International Airport (TAO). For buyers who cannot visit, we offer: virtual factory tour via video call, third-party audit coordination with SGS/Bureau Veritas (buyer covers audit cost), and detailed factory capability documentation package including equipment list, QC process flow, and personnel qualifications.',
    category: 'b2b',
    relatedProducts: [],
    relatedGuides: [],
  },
];

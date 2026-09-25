export interface GuideRecord {
  slug: string;
  category: string;
  title: string;
  description: string;
  tldr: string;
  problem: string;
  solution: string;
  audience: string;
  steps: string[];
  faq: { q: string; a: string }[];
  relatedProducts: string[];
  relatedGuides: string[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  waterType: string[];
}

export const guides: GuideRecord[] = [
  {
    slug: 'how-to-choose-your-sup',
    category: 'buying-guide',
    title: 'How to Choose Your SUP Board',
    description:
      'A complete guide to selecting the right stand-up paddleboard based on your skill level, water conditions, and intended use.',
    tldr: 'Choose your SUP based on skill level, water type, and primary use. All-Around boards suit beginners and calm water. Touring boards fit distance paddling. Yoga boards offer extra width for stability. Performance boards work for experienced paddlers in varied conditions.',
    problem:
      'Most first-time buyers choose a SUP board based on price or appearance rather than how and where they will actually paddle. This leads to poor stability, inadequate performance, and a frustrating experience.',
    solution:
      'Match your board shape, volume, and construction to your skill level and primary water environment. Wider boards (32-34") offer stability for beginners. Longer boards (12-14") track better for touring. Drop-stitch construction at 12-15 PSI provides rigidity comparable to hard boards.',
    audience: 'First-time SUP buyers, recreational paddlers, and anyone upgrading from a basic board.',
    steps: [
      'Identify your primary paddling environment — lake, ocean, river, or mixed',
      'Match board width to your skill level: 32-34" for beginners, 30-32" for intermediate, 28-30" for advanced',
      'Choose board length based on use: shorter for maneuverability, longer for tracking and speed',
      'Select construction: inflatable drop-stitch for portability, hard board for maximum performance',
      "Verify weight capacity — your weight plus gear should not exceed 80% of the board's limit",
      'Check included accessories: pump, leash, fin, backpack, and repair kit',
    ],
    faq: [
      {
        q: 'What width SUP is best for beginners?',
        a: '32 to 34 inches wide provides the most stable platform for learning. The SUP Explorer 11 at 33" width is ideal for first-time paddlers on calm water.',
      },
      {
        q: 'Inflatable or hard SUP board?',
        a: 'Inflatable boards offer portability, storage convenience, and impact absorption. Hard boards offer maximum rigidity and speed. For most recreational users, a quality inflatable with drop-stitch core is the practical choice.',
      },
      {
        q: 'What PSI should I inflate to?',
        a: 'afarer boards recommend 12-15 PSI. At 15 PSI the board achieves maximum rigidity comparable to a hard board. Always stay within the rated pressure range printed on the board.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['beginner-guide', 'inflatable-vs-hard'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'beginner-guide',
    category: 'tutorial',
    title: "Beginner's Guide to Paddle Boarding",
    description:
      'Everything you need to know before your first paddle boarding session — from gear setup to basic paddling techniques.',
    tldr: 'Start on calm, flat water with a wide stable board. Inflate to 12-15 PSI, attach the leash, and use the correct paddle length (6-8" taller than your height). Keep your stance shoulder-width apart, knees slightly bent, and look at the horizon.',
    problem:
      'New paddlers often skip fundamental preparation — wrong paddle length, poor stance, or choosing rough water — which leads to falls, frustration, and discouragement.',
    solution:
      'Follow a structured first-session plan: choose calm water, set up your gear correctly, practice kneeling before standing, and master the forward stroke before attempting turns.',
    audience: 'Absolute beginners who have never paddle boarded before.',
    steps: [
      'Choose flat, calm water with no boat traffic — a small lake or sheltered bay is ideal',
      'Inflate your board to 12-15 PSI using the dual-action pump',
      'Attach the coil leash to your ankle or calf, never the board handle',
      'Insert the fin and tighten the screw',
      'Adjust paddle length — it should be 6-8 inches taller than your height',
      'Start kneeling on the board, paddle a few strokes to feel the balance',
      'Stand up one foot at a time, feet shoulder-width apart, knees soft',
      'Look at the horizon, not your feet — your board goes where you look',
    ],
    faq: [
      {
        q: 'What should I wear for paddle boarding?',
        a: 'Quick-dry athletic wear, a life vest, sunscreen, and a hat. In cold water, wear a wetsuit. Always wear a leash and carry a phone in a waterproof case.',
      },
      {
        q: 'How do I get back on the board if I fall?',
        a: 'Stay calm. Swim to the board, grab the center handle, and kick your legs while pulling yourself onto the board in one motion. Return to kneeling position first, then stand.',
      },
      {
        q: 'What wind conditions are safe?',
        a: 'Beginner: winds under 10 mph (5 knots). If the wind is blowing away from shore, do not go out. Check the forecast and understand that offshore wind is dangerous.',
      },
    ],
    relatedProducts: ['life-vest-classic'],
    relatedGuides: ['how-to-choose-your-sup', 'safety-tips'],
    difficulty: 'beginner',
    waterType: ['lake'],
  },
  {
    slug: 'safety-tips',
    category: 'safety',
    title: 'Water Sports Safety Tips',
    description: 'Essential safety guidelines for paddle boarding — from equipment checks to weather awareness.',
    tldr: "Always wear a CE-certified life vest, check weather and water conditions before launch, carry communication devices, never paddle alone in unfamiliar water, and understand your equipment's rated limits.",
    problem:
      'Most water sports accidents result from inadequate preparation — no life vest, ignoring weather warnings, or using equipment beyond its design limits.',
    solution:
      'Adopt a pre-launch safety checklist: verify equipment condition, check weather and water temperature, inform someone of your route, and always wear appropriate flotation.',
    audience: 'All paddle boarders and water sports participants.',
    steps: [
      'Check weather forecast — avoid winds over 15 mph and thunderstorms',
      'Verify water temperature — cold water (<60°F/15°C) requires a wetsuit or drysuit',
      'Inspect equipment — check for leaks, cracks, and proper inflation',
      'Wear a CE-certified life vest at all times',
      'Attach the leash to your ankle or calf',
      'File a float plan — tell someone where you are going and when you will return',
      'Carry communication — waterproof phone case or VHF radio',
      'Know your limits — stay within your skill level and equipment ratings',
    ],
    faq: [
      {
        q: 'Do I need a life vest on a SUP?',
        a: 'Yes. Many jurisdictions legally require a life vest on any watercraft, including SUPs. Even where not required, a CE-certified life vest is essential safety equipment.',
      },
      {
        q: 'What is the most common water sports injury?',
        a: 'Cold water immersion and exhaustion are the most common serious risks. Always dress for the water temperature, not the air temperature.',
      },
      {
        q: 'How do I check if conditions are safe?',
        a: 'Use marine weather forecasts. Check wind speed, wave height, and water temperature. Beginners should stay in conditions under 10 mph wind and under 1 ft waves.',
      },
    ],
    relatedProducts: ['life-vest-classic', 'life-vest-pro'],
    relatedGuides: ['beginner-guide', 'weather-conditions'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'inflatable-vs-hard',
    category: 'buying-guide',
    title: 'Inflatable vs Hard SUP Boards: Which Should You Choose?',
    description:
      'An objective comparison of inflatable and rigid SUP boards covering performance, portability, durability, and value.',
    tldr: 'Inflatable boards win for portability, storage, and impact resistance. Hard boards win for maximum rigidity and speed. Modern drop-stitch inflatable boards at 15 PSI close 90% of the performance gap.',
    problem:
      'Buyers are caught between the convenience of inflatable boards and the performance reputation of hard boards, without clear data on how they actually compare.',
    solution:
      'Compare specific criteria — rigidity, weight, packed size, durability, repair, and cost — against your actual use pattern. For most recreational paddlers, a quality inflatable is the better choice.',
    audience: 'SUP buyers deciding between inflatable and rigid construction.',
    steps: [
      'Evaluate portability needs — inflatable packs to backpack size, hard board requires roof rack',
      'Compare rigidity — inflatable at 15 PSI has minimal flex, hard board has zero flex',
      'Assess storage — inflatable stores in a closet, hard board requires garage or rack space',
      'Consider durability — inflatable absorbs impacts, hard board can dent and crack',
      'Factor repair — inflatable patches are simple, hard board repairs require professional work',
      'Check performance — hard boards have slight speed advantage, inflatables offer better shock absorption',
    ],
    faq: [
      {
        q: 'Are inflatable SUPs as rigid as hard boards?',
        a: 'At 15 PSI with drop-stitch construction, the difference in rigidity is minimal for recreational use. Only competitive racers and surfers will notice the difference.',
      },
      {
        q: 'How long does an inflatable SUP last?',
        a: 'With proper care, 5-10 years. Marine-grade PVC resists UV and abrasion. Store out of direct sunlight when not in use and rinse with fresh water after saltwater use.',
      },
      {
        q: 'Can I use an inflatable SUP for surfing?',
        a: 'Yes, but inflatable boards are best for small to moderate surf (under 3 ft). For dedicated surfing, a hard board provides better responsiveness and rail engagement.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['how-to-choose-your-sup', 'understanding-specs'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea'],
  },
  {
    slug: 'weather-conditions',
    category: 'safety',
    title: 'Understanding Weather Conditions for Paddle Boarding',
    description: 'Learn to read wind, waves, tides, and weather patterns to make safe decisions on the water.',
    tldr: 'Check three things before every launch: wind speed (under 10 mph for beginners), wave height (under 1 ft for beginners), and water temperature (dress for the water, not the air). Offshore wind is dangerous at any skill level.',
    problem:
      "Most weather-related accidents happen because paddlers misjudge conditions — they check air temperature but not water temperature, or don't understand that offshore wind can blow them out to sea.",
    solution:
      'Use a structured pre-launch weather assessment: wind direction and speed, wave period and height, tide state, and water temperature. Understand how each factor affects your safety.',
    audience: 'All paddlers who go on open water — lakes, bays, rivers, and ocean.',
    steps: [
      'Check wind speed and direction — offshore wind (blowing from land to sea) is the most dangerous',
      'Assess wave conditions — wave period matters as much as wave height',
      'Know the tide — tidal currents can be stronger than your paddling speed',
      'Measure water temperature — below 60°F/15°C requires thermal protection',
      'Check visibility — fog and heavy rain reduce visibility and increase collision risk',
      'Understand local hazards — submerged rocks, strong currents, boat traffic zones',
    ],
    faq: [
      {
        q: 'What wind speed is too high for SUP?',
        a: 'Beginners: over 10 mph (8 knots). Intermediate: over 15 mph (13 knots). Advanced: over 20 mph (17 knots). If in doubt, do not go out.',
      },
      {
        q: 'What does wave period mean?',
        a: 'Wave period is the time between successive waves. Short periods (under 8 seconds) mean steep, choppy waves. Long periods (over 12 seconds) mean smoother, more predictable swells.',
      },
      {
        q: 'Can I paddle in the rain?',
        a: 'Light rain is usually safe. Heavy rain reduces visibility and can indicate changing wind conditions. Thunderstorms require immediate evacuation from the water.',
      },
    ],
    relatedProducts: ['life-vest-classic'],
    relatedGuides: ['safety-tips', 'beginner-guide'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea'],
  },
  {
    slug: 'understanding-specs',
    category: 'technical',
    title: 'How to Read SUP Board Specifications',
    description:
      'A technical guide to understanding SUP board specs — volume, dimensions, construction, and what they mean for performance.',
    tldr: 'Key specs: volume (liters) determines buoyancy and weight capacity, width determines stability, length determines tracking and speed, thickness determines rigidity, and PSI rating determines inflation pressure for optimal performance.',
    problem:
      'Product spec sheets list numbers without context, leaving buyers unsure which specifications actually matter for their use case.',
    solution:
      'Translate each specification into real-world performance: volume for floatation, width for stability, length for glide, thickness for rigidity, and construction for durability.',
    audience: 'Intermediate paddlers and technical buyers who want to make data-driven decisions.',
    steps: [
      "Check volume (liters) — your weight plus gear should not exceed 80% of the board's volume rating",
      'Check width — wider (32-34") = more stability, narrower (28-30") = more speed',
      'Check length — longer (12-14") = better tracking, shorter (10-11") = better maneuverability',
      'Check thickness —6" is standard, 8" offers more rigidity and weight capacity',
      'Check PSI rating — inflate to the maximum rated PSI for optimal rigidity',
      'Check construction materials — drop-stitch density, PVC layers, rail reinforcement',
    ],
    faq: [
      {
        q: 'What does drop-stitch mean?',
        a: 'Drop-stitch is a construction method where thousands of threads connect the top and bottom layers of the board. This allows high-pressure inflation (12-15 PSI) for extreme rigidity.',
      },
      {
        q: 'What is the ideal weight-to-volume ratio?',
        a: 'A good target is roughly 5-6 pounds of rider weight per liter of board volume. A 220 lb paddler should look for boards with 180+ liters of volume.',
      },
      {
        q: 'Does board weight matter?',
        a: 'Yes. Lighter boards (under 20 lbs) are easier to carry and transport. Heavier boards (25+ lbs) often indicate more durable multi-layer PVC construction.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['how-to-choose-your-sup', 'inflatable-vs-hard'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-maintenance',
    category: 'maintenance',
    title: 'How to Clean and Store Your Inflatable SUP',
    description: 'Step-by-step maintenance guide to maximize the lifespan of your inflatable SUP board.',
    tldr: 'Rinse with fresh water after every use, dry completely before storage, deflate and roll loosely (not military-tight), store in a cool dry place away from direct sunlight, and inspect seams monthly.',
    problem:
      'Improper storage and cleaning are the leading causes of premature failure in inflatable SUPs — mold, UV damage, and seam delamination.',
    solution:
      'Follow a consistent post-session routine: rinse, dry, inspect, deflate, and store. Use mild soap for stubborn dirt. Never store the board wet or in direct sunlight.',
    audience: 'All inflatable SUP owners who want their board to last 5+ years.',
    steps: [
      'Rinse the board with fresh water immediately after use, especially after saltwater',
      'Clean with mild soap and a soft sponge — avoid harsh chemicals or pressure washers',
      'Dry the board completely — open the valve to let trapped water escape',
      'Inspect for damage — check seams, valve, and surface for punctures',
      'Deflate fully — remove the valve core for complete deflation',
      'Roll the board loosely — start from the nose, avoid tight creases',
      'Store in the carry bag in a cool, dry place away from direct sunlight',
    ],
    faq: [
      {
        q: 'Can I leave my SUP inflated all season?',
        a: 'Yes, but keep it out of direct sunlight when not in use. Partial deflation (8-10 PSI) is recommended for extended storage.',
      },
      {
        q: 'How do I repair a puncture?',
        a: 'Clean the area, cut a patch with rounded corners, apply adhesive, press firmly, and wait 24 hours before inflating. afarer boards include a repair kit.',
      },
      {
        q: 'How often should I check the valve?',
        a: 'Monthly. The valve is the most common failure point. Check that the valve pin moves freely and the O-ring is intact.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['beginner-guide', 'inflatable-repair'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'paddling-techniques',
    category: 'tutorial',
    title: 'Essential SUP Paddling Techniques',
    description: 'Master the forward stroke, sweep stroke, and cross-bow turn to paddle efficiently in any condition.',
    tldr: 'The forward stroke uses your core, not your arms. The sweep stroke turns the board. The cross-bow turn is the most efficient pivot. Keep the paddle vertical and fully submerge the blade for maximum power transfer.',
    problem:
      'Most paddlers use arm-dominant strokes that waste energy and cause shoulder fatigue. Poor technique also makes the board hard to control in wind and chop.',
    solution:
      'Learn three essential strokes — forward, sweep, and cross-bow turn — with proper body mechanics. Practice each on calm water before progressing to challenging conditions.',
    audience: 'Paddlers who want to paddle longer, faster, and with less fatigue.',
    steps: [
      'Forward stroke: reach forward, plant the blade fully, pull back using torso rotation (not arms), exit at the ankle',
      'Sweep stroke: reach forward at the rail, sweep the blade in a wide arc toward the tail, turn the board away from the paddle side',
      'Cross-bow turn: place the paddle on the opposite side of the board without switching hands, pull toward the tail',
      'Bracing: use a low brace for stability in chop — slap the blade flat on the water surface',
      'Draw stroke: reach out sideways, pull the board laterally toward the paddle',
    ],
    faq: [
      {
        q: 'How do I paddle in a straight line?',
        a: 'Use consistent stroke length on both sides. Switch sides every 5-10 strokes. Look at a fixed point on the horizon for reference.',
      },
      {
        q: 'Should I bend my knees?',
        a: 'Yes. Keep a slight bend in your knees as shock absorbers. Locked knees transfer every ripple to your core and reduce stability.',
      },
      {
        q: 'How do I paddle against the wind?',
        a: 'Lower your stance, use shorter quicker strokes, and stay closer to shore where wind is often reduced. If the wind is too strong, do not go out.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['beginner-guide', 'sup-fitness'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea'],
  },
  {
    slug: 'sup-fitness',
    category: 'lifestyle',
    title: 'SUP Fitness: Full Body Workout on the Water',
    description: 'How stand-up paddle boarding builds core strength, balance, and cardiovascular fitness.',
    tldr: 'SUP engages core, legs, back, and shoulders in every stroke. A one-hour session burns 300-500 calories. Paddling against wind or current doubles the intensity. SUP yoga adds flexibility and balance work.',
    problem:
      'Many people view paddle boarding as a casual activity rather than a legitimate fitness tool, missing its potential for full-body conditioning.',
    solution:
      'Structure SUP sessions with specific fitness goals: endurance paddling for cardio, interval sprints for power, SUP yoga for flexibility, and distance paddling for muscular endurance.',
    audience: 'Fitness enthusiasts looking for a low-impact, high-engagement full-body workout.',
    steps: [
      'Warm up on land — arm circles, torso twists, and leg swings for 5 minutes',
      'Start with 10 minutes of steady paddling at moderate intensity',
      'Progress to interval training —2 minutes hard paddling, 2 minutes easy recovery',
      'Incorporate SUP yoga poses — downward dog, warrior II, and tree pose on the board',
      'Cool down with gentle paddling and static stretches on the board',
    ],
    faq: [
      {
        q: 'Is SUP better than running for fitness?',
        a: 'SUP provides comparable cardiovascular benefits with lower joint impact. It also engages the upper body and core more than running.',
      },
      {
        q: 'How many calories does SUP burn?',
        a: 'Approximately 300-500 calories per hour at moderate intensity. Racing or paddling against wind can burn 600-800 calories per hour.',
      },
      {
        q: 'Can I build muscle from SUP?',
        a: 'Yes. Paddling builds shoulders, back, and core muscles. Balancing engages legs and stabilizer muscles. It is a full-body resistance workout.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['paddling-techniques', 'sup-yoga'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea'],
  },
  {
    slug: 'sup-yoga',
    category: 'lifestyle',
    title: 'SUP Yoga: A Complete Guide to Paddling and Yoga',
    description: 'Combine paddle boarding with yoga for improved balance, strength, and mindfulness on the water.',
    tldr: 'SUP yoga adds an instability element that dramatically increases core activation compared to land yoga. Start with basic poses on a wide, stable board in calm water. Use a non-slip deck pad. Never practice SUP yoga alone.',
    problem:
      'Traditional yoga mats provide a perfectly stable surface, removing the balance challenge that makes SUP yoga uniquely effective for core strength and focus.',
    solution:
      'Use an extra-wide SUP board (34"+) with a full-deck traction pad. Practice in calm, shallow water. Start with foundation poses before attempting inversions.',
    audience: 'Yoga practitioners and paddlers who want to combine balance training with mindfulness.',
    steps: [
      'Anchor the board in shallow, calm water — use a sand anchor or tie to a dock',
      'Start with seated poses — easy seat, boat pose, seated twist',
      'Progress to kneeling poses — tabletop, cat-cow, thunderbolt',
      'Move to standing poses — mountain, warrior I, warrior II, tree pose',
      'Practice balance poses — half moon, eagle, dancer',
      'End with savasana — lie flat on the board, feel the water movement',
    ],
    faq: [
      {
        q: 'What board is best for SUP yoga?',
        a: 'A wide board (34"+) with a full-length traction pad provides the most stable platform. The SUP Tour 12 offers a good balance of stability and glide.',
      },
      {
        q: 'Is SUP yoga dangerous?',
        a: 'No more than land yoga when practiced safely. Use calm, shallow water. Wear a leash. Practice with a partner. Avoid deep water for your first sessions.',
      },
      {
        q: 'Do I need special equipment?',
        a: 'A wide stable board, full-deck traction pad, leash, and PFD. Some practitioners use a waterproof mat for additional grip.',
      },
    ],
    relatedProducts: ['life-vest-classic'],
    relatedGuides: ['sup-fitness', 'paddling-techniques'],
    difficulty: 'intermediate',
    waterType: ['lake'],
  },
  {
    slug: 'sup-fishing',
    category: 'lifestyle',
    title: 'SUP Fishing Guide: How to Paddle Board Fish',
    description:
      'Everything you need to know about fishing from a paddle board — gear setup, stability tips, and techniques.',
    tldr: 'SUP fishing offers silent approach, shallow water access, and 360-degree casting. Use a wide stable board (34"+), attach rod holders, and use a cooler or crate as a gear deck. Anchor in windy conditions. Always wear a PFD.',
    problem:
      "Standard fishing boats are expensive to maintain and can't access shallow water. SUP fishing solves this by offering a portable, shallow-water fishing platform, but requires specific gear adaptations.",
    solution:
      "Outfit a stable SUP with rod holders, a gear crate, and an anchor system. Use the board's portability to access remote fishing spots that boats cannot reach.",
    audience:
      'Anglers who want to fish shallow waters, remote locations, or prefer a lightweight, portable fishing platform.',
    steps: [
      'Choose a wide board (34"+) with high weight capacity for gear',
      'Install rod holders on the deck using rail-mounted or strap-on systems',
      'Use a waterproof crate or cooler strapped to the front deck for tackle',
      'Bring a small anchor or stake-out pole for windy conditions',
      'Wear a PFD with pockets for tools and phone',
      'Practice casting from a kneeling position before standing',
    ],
    faq: [
      {
        q: 'Can I stand and fish on a SUP?',
        a: 'Yes. A 34"+ wide board provides sufficient stability for standing and casting. Practice on calm water first.',
      },
      {
        q: 'What fish can I target from a SUP?',
        a: 'SUPs are excellent for bass in lakes, redfish in flats, trout in rivers, and inshore species in bays and estuaries.',
      },
      {
        q: 'How do I land a fish from a SUP?',
        a: 'Kneel down for stability. Use a net or lip gripper. Keep the fish low to avoid falling. Release or secure in a cooler.',
      },
    ],
    relatedProducts: ['life-vest-classic'],
    relatedGuides: ['how-to-choose-your-sup', 'safety-tips'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'inflatable-repair',
    category: 'maintenance',
    title: 'How to Repair Your Inflatable SUP',
    description: 'Step-by-step guide to repairing punctures, valve issues, and seam damage on inflatable SUPs.',
    tldr: 'Small punctures (under 1/4") are repairable with the included patch kit. Clean the area, apply PVC adhesive, press the patch, and wait 24 hours. Valve leaks usually require O-ring replacement. Large tears or seam delamination need professional service.',
    problem:
      'Small punctures and valve issues are common but easy to fix. Without proper repair technique, users either overpay for professional service or make the damage worse.',
    solution:
      'Identify the damage type — puncture, valve leak, or seam issue — and apply the appropriate repair method. Most repairs take 30 minutes plus curing time.',
    audience: 'Owners of inflatable SUPs who want to handle basic repairs themselves.',
    steps: [
      'Locate the leak — inflate fully, listen for air, feel with your hand, or use soapy water',
      'Mark the leak with a pen or tape',
      'Clean the area around the leak with isopropyl alcohol — at least 2 inches around the damage',
      'Rough the surface with fine sandpaper for better adhesive bonding',
      'Apply PVC adhesive to both the patch and the board surface',
      'Wait 5 minutes for the adhesive to become tacky',
      'Press the patch firmly, roll out air bubbles with a roller or credit card',
      'Let cure for 24 hours before inflating to full pressure',
    ],
    faq: [
      {
        q: 'Can I repair a puncture on the water?',
        a: 'Emergency repairs using a patch and tape can get you back to shore. Full repairs require dry conditions and 24-hour curing.',
      },
      {
        q: 'How do I fix a leaking valve?',
        a: 'Remove the valve core with the included tool, check the O-ring for damage, replace if needed, and reinsert the core tightly.',
      },
      {
        q: 'What glue should I use for PVC repairs?',
        a: 'Use PVC-specific adhesive like HH-66 or Clifton. Standard super glue does not bond well with inflatable PVC materials.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['sup-maintenance', 'understanding-specs'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'multi-day-trip',
    category: 'planning',
    title: 'Planning a Multi-Day SUP Trip',
    description:
      'How to plan and execute a multi-day paddling trip — route planning, gear packing, camping, and safety.',
    tldr: 'Plan 10-15 miles per day. Pack gear in waterproof dry bags, distribute weight evenly, and practice loading your board before the trip. File a float plan. Carry water, food, shelter, navigation, and communication.',
    problem:
      'Multi-day trips fail due to overpacking, poor route planning, or underestimating weather and current — leading to exhaustion, gear failure, or safety incidents.',
    solution:
      'Use a systematic planning approach: route selection, gear checklist, food planning, safety briefing, and contingency planning.',
    audience: 'Experienced paddlers planning their first multi-day expedition.',
    steps: [
      'Select a route with established campsites and bailout points',
      'Plan 10-15 miles per day accounting for wind and current',
      'Check tide tables and weather forecasts for the entire trip window',
      'Pack gear in waterproof dry bags —20-30 lbs total gear weight',
      'Distribute weight evenly — heaviest items in the center',
      'File a detailed float plan with someone on shore',
      'Bring navigation — paper chart, compass, and GPS backup',
      'Pack emergency shelter, extra food, and first aid kit',
    ],
    faq: [
      {
        q: 'What is the ideal daily distance?',
        a: '10-15 miles per day for experienced paddlers. Beginners should plan 5-8 miles. Always build in buffer time for weather.',
      },
      {
        q: 'How much water should I carry?',
        a: '1 gallon per person per day. In hot conditions, 1.5 gallons. Carry a water filter or purification tablets for refills.',
      },
      {
        q: 'What is the most important safety item?',
        a: 'Communication. A VHF radio or satellite messenger can be life-saving in an emergency. Cell phones are unreliable in remote areas.',
      },
    ],
    relatedProducts: ['life-vest-pro'],
    relatedGuides: ['weather-conditions', 'safety-tips'],
    difficulty: 'advanced',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'choosing-paddle',
    category: 'buying-guide',
    title: 'How to Choose the Right SUP Paddle',
    description: 'A guide to paddle materials, blade shapes, shaft types, and sizing for SUP.',
    tldr: 'Paddle length: SUP paddles should be 6-8" taller than your height. Blade shape: dihedral blades track straight, flat blades offer more catch. Shaft material: carbon is lightest, fiberglass is best value, aluminum is budget.',
    problem:
      'Using the wrong paddle size or material causes unnecessary fatigue, poor stroke efficiency, and joint strain.',
    solution:
      'Match paddle length, blade shape, shaft material, and flex to your paddling style, body size, and budget.',
    audience: 'SUP paddlers choosing their first or next paddle.',
    steps: [
      'Measure paddle height \u20146-8" taller than your height for general paddling',
      'Choose blade material \u2014 nylon for budget, fiberglass for value, carbon for performance',
      'Choose blade shape \u2014 dihedral for smooth tracking, flat for power, spoon for racing',
      'Choose shaft type \u2014 straight for general use, bent for racing SUP',
      'Check flex \u2014 stiffer shafts transfer more power, flexible shafts reduce joint strain',
    ],
    faq: [
      {
        q: 'What is the best paddle material?',
        a: 'Fiberglass offers the best balance of weight, durability, and cost. Carbon is lighter but more expensive and brittle. Nylon is heavy but virtually indestructible.',
      },
      {
        q: 'How do I know if my paddle is the right length?',
        a: 'Stand the paddle vertically next to you — the handle should reach your wrist when your arm is raised overhead.',
      },
      {
        q: 'Should I get a one-piece or adjustable paddle?',
        a: 'Adjustable paddles are good for shared use and travel. One-piece paddles are lighter, stiffer, and more efficient for dedicated use.',
      },
    ],
    relatedProducts: [],
    relatedGuides: ['how-to-choose-your-sup', 'understanding-specs'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-with-kids',
    category: 'lifestyle',
    title: 'SUP with Kids: A Complete Family Guide',
    description: 'How to safely take children paddle boarding — age recommendations, equipment, and activities.',
    tldr: 'Children 6+ can ride on a SUP with an adult. Children 10+ can paddle their own board with supervision. Use a wide stable board, always wear PFDs, stay in shallow calm water, and keep sessions short (30-45 minutes max).',
    problem:
      'Parents want to share water sports with their kids but worry about safety, equipment fit, and keeping children engaged.',
    solution:
      'Use the right board size for tandem riding, ensure every child wears a properly fitted PFD, start in shallow warm water, and make it fun with games and short sessions.',
    audience: 'Parents who want to introduce their children to paddle boarding.',
    steps: [
      "Age 4-6: ride as a passenger on an adult's board — sit in front, hold onto the center handle",
      'Age 6-10: kneel or sit on their own board with adult supervision and a leash',
      'Age 10+: paddle their own board with adult supervision nearby',
      'Always wear a PFD — children must wear a properly fitted life vest at all times',
      'Stay in shallow water (waist-deep for the adult)',
      'Keep sessions short —30-45 minutes max for children under 10',
      'Make it fun — play games, look for fish, practice standing up',
    ],
    faq: [
      {
        q: 'At what age can a child SUP alone?',
        a: "Around age 10-12 with supervision, depending on the child's swimming ability and comfort in water. Always in calm, shallow conditions.",
      },
      {
        q: 'What board is best for SUP with kids?',
        a: 'A wide board (34"+) with high weight capacity for tandem riding. The SUP Explorer 11\'s 33" width and 220 lb capacity works well for parent-plus-child.',
      },
      {
        q: 'What safety gear do kids need?',
        a: "A properly fitted CE-certified life vest, a leash (attached to the adult's board for tandem), sunscreen, and a hat.",
      },
    ],
    relatedProducts: ['life-vest-classic'],
    relatedGuides: ['beginner-guide', 'safety-tips', 'sup-size-guide'],
    difficulty: 'beginner',
    waterType: ['lake'],
  },
  {
    slug: 'sup-size-guide',
    category: 'buying-guide',
    title: 'SUP Size Guide — How to Choose the Right Board Dimensions',
    description:
      'Complete SUP size guide covering length, width, and thickness recommendations based on your weight, height, skill level, and paddling style.',
    tldr: 'Beginners need wider boards (32-34") for stability. Heavier paddlers need longer boards (11\'+) with higher volume. Touring requires longer hulls (12\'+). Yoga needs extra width (34"+). Always check weight capacity — your weight plus gear should not exceed 80% of the limit.',
    problem:
      'Choosing the wrong SUP size leads to poor stability, slow tracking, and a frustrating paddling experience. Most first-time buyers pick a board that looks good without considering how dimensions affect performance.',
    solution:
      'Match board length, width, and thickness to your weight, skill level, and primary use. Use our size calculator: add your weight + gear weight, choose a board with at least 20% headroom above that total.',
    audience: 'First-time SUP buyers, paddlers upgrading to a specialized board, and anyone unsure about sizing.',
    steps: [
      'Weigh yourself with all gear you carry (paddle, PFD, dry bag)',
      'Add 20% safety margin to find minimum weight capacity',
      'Choose width based on skill: 32-34" for beginners, 30-32" for intermediate, 28-30" for advanced',
      "Select length by use: 10'6\"-11'6\" all-around, 12'-14' touring, 9'-10' whitewater",
      'Verify thickness: 6" standard, 4" for performance, 5" for all-around',
      "Check your board's recommended PSI range for optimal rigidity",
    ],
    faq: [
      {
        q: 'What width SUP is best for beginners?',
        a: '32 to 34 inches wide provides the most stable platform. The wider the board, the easier it is to balance — especially for larger paddlers.',
      },
      {
        q: 'How do I know if a SUP is too small for me?',
        a: 'If the board sits low in the water, handles sluggishly, or the nose submerges easily when paddling, it is likely undersized for your weight.',
      },
      {
        q: 'Does board length affect speed?',
        a: "Yes. Longer waterline length increases theoretical hull speed. A 14' touring board is significantly faster than a 10' all-around board for the same paddler effort.",
      },
    ],
    relatedProducts: ['sup-explorer-11', 'sup-ocean-pulse'],
    relatedGuides: ['how-to-choose-your-sup', 'understanding-specs', 'inflatable-vs-hard'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-weight-capacity',
    category: 'buying-guide',
    title: 'SUP Weight Capacity Guide — How Much Weight Can a SUP Hold?',
    description:
      'Understanding SUP weight capacity limits, how to calculate your total load, and why exceeding the limit affects performance and safety.',
    tldr: "Never exceed 80% of the board's maximum weight capacity with your body weight plus gear. A 220 lb capacity board is suitable for a 160 lb paddler with light gear. Exceeding the limit causes porpoising, sluggish handling, and increased risk of damage.",
    problem:
      "Paddlers often exceed their board's weight capacity, leading to poor performance, submerging, and potential board damage. Manufacturers list max limits but do not explain safe working loads.",
    solution:
      'Calculate your total load (body weight + gear + water absorbed by board) and stay under 80% of the stated maximum capacity. Heavier paddlers need higher-volume boards with 300+ lb capacity.',
    audience: 'Paddlers of all sizes, especially larger paddlers and those who carry expedition gear.',
    steps: [
      'Find the maximum weight capacity printed on your board (usually near the valve)',
      'Weigh yourself and all gear including paddle, PFD, dry bags, cooler, and accessories',
      'Calculate: (your total load) ÷ (max capacity) × 100 = % of capacity used',
      'Target 70-80% for optimal performance and safety',
      'If exceeding 80%, choose a larger board or reduce gear',
    ],
    faq: [
      {
        q: 'What happens if I exceed the weight limit?',
        a: 'The board rides lower, creating more drag. Stability decreases, the nose may submarine, and the drop-stitch core is at higher risk of damage in chop.',
      },
      {
        q: 'Can two people ride one SUP?',
        a: 'Only if total weight stays under 80% capacity. Most standard SUPs are designed for single riders. Tandem riding requires a board specifically rated for two.',
      },
      {
        q: 'Do inflatable SUPs have lower capacity than hard boards?',
        a: 'Quality inflatables with drop-stitch construction have comparable or higher weight capacities than hard boards due to their thicker volume distribution.',
      },
    ],
    relatedProducts: ['sup-tropical-breeze', 'sup-leviathan-wake'],
    relatedGuides: ['sup-size-guide', 'understanding-specs'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-accessories-essential',
    category: 'buying-guide',
    title: 'Essential SUP Accessories — What You Really Need',
    description:
      'A practical guide to must-have SUP accessories from life vests and paddles to pumps, leashes, and maintenance kits. What to buy first and what to skip.',
    tldr: 'Essential: PFD (life vest), leash, pump, paddle, fin. Highly recommended: repair kit, waterproof phone pouch, deck bag. Nice to have: electric pump, dry suit, deck cooler mount. Skip novelty items that add weight without function.',
    problem:
      'New SUP owners are overwhelmed by accessory options and often buy unnecessary items while missing critical safety gear.',
    solution:
      'Prioritize accessories in order: safety (PFD, leash, whistle), functionality (pump, spare paddle, repair kit), convenience (deck bag, phone pouch), comfort (seat, cooler mount).',
    audience: 'New SUP owners building their accessory kit.',
    steps: [
      'Buy a CE/USCG-approved life vest that fits properly',
      'Get a coiled SUP leash rated for your water type (coiled for flatwater, straight for rivers)',
      'Ensure your pump reaches 15 PSI and has a pressure gauge',
      'Add a repair kit with PVC patches and valve tool',
      'Consider a dry bag or waterproof phone pouch for valuables',
      'Add a deck cooler mount or fishing rod holder for specialized activities',
    ],
    faq: [
      {
        q: 'Do I really need a life vest for SUP?',
        a: 'Yes. Even strong swimmers can be injured or exhausted. A PFD is the single most important safety item. Many jurisdictions legally require one.',
      },
      {
        q: 'What pump is best for inflatable SUPs?',
        a: 'Dual-action hand pumps are standard. Electric pumps save effort but require a power source. Always use one with a pressure gauge to avoid over-inflation.',
      },
      {
        q: 'Do I need a special paddle?',
        a: 'The included aluminum paddle works for beginners. Upgrading to a fiberglass or carbon paddle reduces arm fatigue significantly on long paddles.',
      },
    ],
    relatedProducts: ['life-vest-classic', 'oars-pump-set', 'life-vest-pro'],
    relatedGuides: ['choosing-paddle', 'safety-tips', 'sup-maintenance'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-storage-winter-care',
    category: 'maintenance',
    title: 'SUP Storage and Winter Care — Extend the Life of Your Board',
    description:
      'How to properly store, clean, and winterize your inflatable SUP board. Avoid mold, UV damage, and material degradation with proper care.',
    tldr: 'Clean with fresh water after every use. Dry completely before storing. Deflate and store in a cool, dark place away from direct sunlight and extreme temperatures. Never store inflated or in a hot car. Apply UV protectant periodically.',
    problem:
      'Improper storage is the leading cause of premature SUP failure — mold, material breakdown, delamination, and valve damage from heat or cold.',
    solution:
      'Follow a 3-step care routine: rinse after every session, dry thoroughly before storage, and store deflated in a temperature-controlled environment between 50-80°F (10-27°C).',
    audience: 'All SUP owners who want their board to last 5+ years.',
    steps: [
      'Rinse the board, paddle, and pump with fresh water after every saltwater or muddy water session',
      'Clean with mild soap and soft sponge — never harsh chemicals or pressure washers',
      'Dry the board completely outside before deflating (open the valve to let interior moisture escape)',
      'Deflate fully, roll from the nose toward the tail to expel remaining air',
      'Wipe the backpack dry before storing the board inside',
      'Store in a cool, dark closet or under-bed storage — never in direct sun, a hot car, or freezing shed',
    ],
    faq: [
      {
        q: 'Can I leave my SUP inflated all season?',
        a: 'It is better to deflate when not in use for extended periods. Constant PSI stress accelerates material fatigue. Deflate between sessions if storing more than 2 weeks.',
      },
      {
        q: 'How do I remove mold from my SUP?',
        a: 'Mix mild soap with warm water and a splash of white vinegar. Scrub gently with a soft brush. Rinse thoroughly and dry in shade. Avoid bleach which damages PVC.',
      },
      {
        q: 'Can I store my SUP in a garage?',
        a: 'Only if the garage stays between 50-80°F year-round. Attics and unconditioned garages experience temperature extremes that damage drop-stitch cores.',
      },
    ],
    relatedProducts: ['oars-pump-set'],
    relatedGuides: ['sup-maintenance', 'inflatable-repair'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-vs-kayak',
    category: 'comparison',
    title: 'SUP vs Kayak — Which Is Right for You?',
    description:
      'Compare stand-up paddle boarding vs kayaking across stability, portability, fitness benefits, learning curve, and cost. Find the right watercraft for your lifestyle.',
    tldr: 'SUP offers better full-body workout, standing vantage point, and easier portability. Kayaks offer better speed, storage capacity, and comfort for long days. Inflatable SUPs pack smallest. Choose SUP for fitness, photography, and social paddling. Choose kayak for fishing expeditions and cold water.',
    problem:
      'Many water sports newcomers struggle to choose between SUP and kayak, not realizing how different the experiences are for fitness, travel, and fishing.',
    solution:
      'Choose SUP if you want a portable full-body workout with a standing view. Choose kayak if you prioritize speed, storage, and all-day comfort. Many paddlers own both.',
    audience: 'Water sports beginners deciding between SUP and kayak.',
    steps: [
      'Consider fitness goals: SUP works core + balance, kayak works upper body + rotation',
      'Evaluate portability needs: inflatable SUPs pack smallest, inflatable kayaks are bulkier',
      'Think about water conditions: SUP handles calm to light chop, kayak handles rougher water',
      'Assess storage needs: kayak requires roof rack or trailer, SUP fits in a backpack',
      'Try both before buying — rental shops often offer SUP and kayak demos',
    ],
    faq: [
      {
        q: 'Which is easier to learn, SUP or kayak?',
        a: 'Kayak has a gentler learning curve — sit and paddle. SUP requires balance practice but most people stand up within the first session.',
      },
      {
        q: 'Which is better for fishing?',
        a: 'Kayak offers more gear storage, rod holders, and stability for casting. SUP offers silent approach and shallow water access. Both work, kayak is more popular for serious anglers.',
      },
      {
        q: 'Which packs smaller for travel?',
        a: 'Inflatable SUP packs into a backpack 36" long x 18" wide. Inflatable kayak packs into a larger duffel 48" long. SUP wins for compact travel.',
      },
    ],
    relatedProducts: ['sup-explorer-11', 'sup-ocean-pulse'],
    relatedGuides: ['how-to-choose-your-sup', 'inflatable-vs-hard'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-board-materials',
    category: 'technical',
    title: 'SUP Board Materials — PVC, EPS, Epoxy, and Drop-Stitch Explained',
    description:
      'Technical guide to SUP construction materials: drop-stitch PVC inflatable vs EPS foam core hard boards. Understand what makes each type perform differently.',
    tldr: 'Inflatable SUPs use drop-stitch PVC with thousands of internal threads for rigidity. Hard boards use EPS foam core with epoxy or fiberglass shell. Inflatables win on portability and durability. Hard boards win on speed and feel. Modern drop-stitch technology at 15 PSI rivals hard board rigidity.',
    problem:
      'Buyers do not understand the fundamental construction differences between inflatable and hard boards, leading to wrong purchase decisions.',
    solution:
      'Match board material to your primary use: inflatable drop-stitch for travel, storage, and durability. EPS/epoxy for racing, surfing, and maximum performance.',
    audience: 'SUP buyers comparing inflatable vs hard board construction.',
    steps: [
      'Inflatable drop-stitch: thousands of polyester threads connect top and bottom layers, creating rigid structure when pressurized to 12-15 PSI',
      'Hard EPS foam: expanded polystyrene core shaped to hull design, sealed with epoxy resin and fiberglass layers',
      'Inflatable advantages: packable, indestructible, lightweight to carry, soft rails for safety',
      'Hard board advantages: lighter overall weight, stiffer platform, better glide efficiency, more responsive',
      'Hybrid options: some manufacturers combine drop-stitch with rigid panels for best of both worlds',
    ],
    faq: [
      {
        q: 'Are inflatable SUPs as rigid as hard boards?',
        a: "At 15 PSI with quality drop-stitch construction, modern inflatables are very close. Most recreational paddlers cannot tell the difference. Racing paddlers will notice the hard board's edge.",
      },
      {
        q: 'Which material lasts longer?',
        a: 'Inflatable SUPs last 5-10 years with care. Hard boards last 10-20 years but are susceptible to cracks, dings, and water logging. Inflatables are more damage-resistant day-to-day.',
      },
      {
        q: 'Is PVC environmentally friendly?',
        a: 'PVC production has environmental impact, but inflatable SUPs last longer (reducing replacement frequency) and pack smaller (reducing transport emissions). Always recycle old boards properly.',
      },
    ],
    relatedProducts: ['sup-explorer-11', 'sup-ocean-voyager'],
    relatedGuides: ['inflatable-vs-hard', 'understanding-specs'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea'],
  },
  {
    slug: 'sup-inflation-psi-guide',
    category: 'technical',
    title: 'SUP Inflation Guide — Optimal PSI for Performance and Safety',
    description:
      'Complete guide to SUP inflation pressure: recommended PSI ranges, how pressure affects performance, and tips for using your pump correctly.',
    tldr: 'Inflate to 12-15 PSI for most inflatable SUPs. Higher pressure = more rigidity but slower inflation. Lower pressure = softer feel but more flex. Never exceed the max PSI printed on your board. Use a pump with an accurate pressure gauge. Cold air reduces pressure, hot sun increases it.',
    problem:
      'Under-inflated boards feel sluggish and flex excessively. Over-inflated boards risk seam failure. Many paddlers guess PSI instead of measuring accurately.',
    solution:
      'Use a pump with a built-in pressure gauge. Target 15 PSI for maximum rigidity. Check pressure before each session — temperature changes affect PSI significantly.',
    audience: 'All inflatable SUP owners.',
    steps: [
      'Check the recommended PSI range printed on your board near the valve',
      'Use the dual-action pump to inflate to the middle of the recommended range',
      'Switch to single-action mode for the final 3-4 PSI for more precise control',
      'Check pressure with the gauge — analog gauges are more reliable than digital',
      'Adjust for conditions: higher PSI for touring/racing, lower PSI for whitewater/rocky launches',
      'Re-check pressure after the board sits for 10 minutes — temperature equilibrium changes PSI',
    ],
    faq: [
      {
        q: 'Can I over-inflate my SUP?',
        a: 'Yes. Exceeding the rated max PSI (usually 15-18 PSI) can delaminate seams and damage the drop-stitch core. Always stay within the printed range.',
      },
      {
        q: 'Does temperature affect PSI?',
        a: 'Significantly. A board inflated to 15 PSI at 70°F can reach 18 PSI in direct sun at 95°F. Cold water can drop pressure to 12 PSI. Check pressure after environmental changes.',
      },
      {
        q: 'What PSI for beginners?',
        a: '12-13 PSI for learning provides a slightly softer platform that is more forgiving for falls. Increase to 15 PSI as skills improve.',
      },
    ],
    relatedProducts: ['oars-pump-set'],
    relatedGuides: ['understanding-specs', 'sup-maintenance'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-travel-transport',
    category: 'planning',
    title: 'SUP Travel Guide — Flying and Road Tripping with an Inflatable SUP',
    description:
      'How to travel with an inflatable SUP by plane, car, or RV. Tips for airline fees, packing, inflating at your destination, and international travel considerations.',
    tldr: 'Deflate, roll, and pack your SUP in its backpack. Most airlines accept it as checked luggage (under 50 lbs / 50 linear inches). Always pack the pump and paddle in the same bag. Arrive early to allow extra time if the gate agent questions the bag size. Consider shipping ahead for long trips.',
    problem:
      'Traveling with a SUP seems complicated — airline size limits, TSA concerns, and figuring out how to inflate at a remote destination create uncertainty.',
    solution:
      'Afarer SUP backpacks are designed to meet airline checked baggage limits. Pack strategically, carry a repair kit, and research inflation locations (marinas, campsites with power) before departure.',
    audience: 'Paddlers planning SUP travel by air, car, or RV.',
    steps: [
      'Deflate fully and roll the board from nose to tail',
      'Pack the rolled board, pump, paddle, leash, and fin in the backpack',
      'Check airline size and weight limits — most allow 62 linear inches and 50 lbs',
      'Arrive early and be prepared for the bag to be manually checked',
      'Carry a repair kit in your carry-on in case the board is damaged in transit',
      'Research inflation options: campground electrical hookups for electric pumps, marina air stations',
    ],
    faq: [
      {
        q: 'Will the airline accept my SUP backpack as luggage?',
        a: 'Most US and European airlines accept SUP backpacks as standard checked luggage if under 50 lbs and 62 linear inches. Budget airlines may charge oversized fees.',
      },
      {
        q: 'Can I bring my SUP as carry-on?',
        a: 'No. SUP backpacks exceed carry-on dimensions on all airlines. Always check the backpack.',
      },
      {
        q: 'How do I inflate my SUP at a remote destination?',
        a: 'The included hand pump works anywhere without power. For convenience, bring a portable electric pump and look for campgrounds with electrical hookups or marinas with air stations.',
      },
    ],
    relatedProducts: ['sup-explorer-11', 'sup-cheetah-surge', 'oars-pump-set'],
    relatedGuides: ['multi-day-trip', 'sup-storage-winter-care'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea'],
  },
  {
    slug: 'sup-for-large-paddlers',
    category: 'buying-guide',
    title: 'Best SUP for Large Paddlers — High Capacity Boards for Heavy Riders',
    description:
      'Guide to choosing inflatable SUPs for larger paddlers (200-400 lbs). Board width, length, volume, and weight capacity recommendations for big and tall riders.',
    tldr: 'Large paddlers need wider boards (34-36"), longer lengths (11\'6"-12\'), and higher weight capacity (300-400 lbs). Look for military-grade PVC, reinforced drop-stitch, and dual-layer construction. Avoid narrow boards under 32" regardless of length.',
    problem:
      'Standard SUPs have weight capacities of 200-250 lbs, excluding many paddlers. Riding an undersized board is uncomfortable, unstable, and potentially dangerous.',
    solution:
      'Choose boards rated for 300+ lbs with extra width for stability. The Tropical Breeze and Leviathan Wake series from Afarer offer the volume and reinforcement larger paddlers need.',
    audience: 'Paddlers over 200 lbs who need a board that supports their weight safely.',
    steps: [
      'Calculate total load: body weight + gear + 20% safety margin',
      'Choose a board with width 34" or wider for adequate stability',
      'Select length 11\'6" or longer for proper displacement',
      'Verify weight capacity: total load should not exceed 80% of max',
      'Look for reinforced drop-stitch and military-grade PVC construction',
      'Test the board in calm water first to confirm stability',
    ],
    faq: [
      {
        q: 'What width SUP is best for a 250 lb paddler?',
        a: 'Minimum 34" width. The extra beam provides the primary stability needed for larger riders to feel secure standing and paddling.',
      },
      {
        q: 'Can a 300 lb person paddle an inflatable SUP?',
        a: 'Yes, with a board rated for 350-400 lbs. The Tropical Breeze Island Escape at 34"+ width handles higher loads. Always verify the specific weight rating.',
      },
      {
        q: 'Do larger paddlers need special paddles?',
        a: 'A longer paddle (1-2 inches taller than standard) helps with the higher stance on a wider, thicker board. Consider a carbon shaft for reduced arm fatigue.',
      },
    ],
    relatedProducts: ['sup-tropical-breeze', 'sup-leviathan-wake'],
    relatedGuides: ['sup-size-guide', 'sup-weight-capacity', 'sup-board-materials'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-for-pet-owners',
    category: 'lifestyle',
    title: 'SUP with Dogs — A Complete Guide to Paddle Boarding with Your Pet',
    description:
      'Everything you need to know about paddle boarding with dogs: training steps, safety gear, board selection, and tips for a successful SUP session with your furry friend.',
    tldr: 'Start with a wide, stable board (34"+). Use a pet PFD, non-slip deck pad, and short leash. Train on land first, then in shallow water. Keep sessions short (20-30 min). Bring fresh water and a towel. Never force your dog if they seem anxious.',
    problem:
      'Paddle boarding with dogs can be stressful without proper preparation — dogs may panic, jump off, or scratch the board surface.',
    solution:
      'Use a wide stable board with a soft EVA deck. Acclimate your dog gradually. Bring safety gear including a pet life vest and a short SUP-safe leash.',
    audience: 'Dog owners who want to SUP with their pets.',
    steps: [
      'Start with a wide board (34"+ with high weight capacity for you + dog)',
      'Get a properly fitted dog life vest with a handle',
      'Practice on land: have your dog sit on the deflated board, then inflated board on grass',
      'Move to shallow water: kneel on the board with your dog, paddle a few strokes',
      'Keep sessions short: 20-30 minutes maximum for the first few outings',
      'Always bring fresh water, a collapsible bowl, and a towel for your dog',
    ],
    faq: [
      {
        q: 'What SUP board is best for dogs?',
        a: 'A wide stable board with a soft EVA deck that provides grip for paws. The Tropical Breeze Island Escape at 34"+ width is ideal for paddling with dogs.',
      },
      {
        q: 'Does my dog need a life vest?',
        a: 'Yes, even strong swimmers. A dog life vest with a handle makes it easy to lift your dog back onto the board if they fall off.',
      },
      {
        q: 'How do I prevent my dog from scratching the board?',
        a: "Keep your dog's nails trimmed. The EVA foam deck pad protects the PVC surface. Place a towel or pet mat on the deck for additional protection.",
      },
    ],
    relatedProducts: ['sup-tropical-breeze', 'life-vest-classic'],
    relatedGuides: ['beginner-guide', 'safety-tips', 'sup-accessories-essential'],
    difficulty: 'beginner',
    waterType: ['lake'],
  },
  {
    slug: 'sup-buying-mistakes',
    category: 'buying-guide',
    title: 'Common SUP Buying Mistakes — What to Avoid When Buying a Paddle Board',
    description:
      'Learn from common SUP buying mistakes: choosing the wrong size, ignoring weight capacity, buying cheap boards, and neglecting essential accessories.',
    tldr: 'Top 5 mistakes: buying too narrow, ignoring weight capacity, choosing price over quality, forgetting accessory costs, and not matching board type to intended use. A quality inflatable SUP from a reputable manufacturer costs $500-900 and lasts 5+ years.',
    problem:
      'First-time buyers waste money on boards that are too small, too low-quality, or mismatched to their needs. Cheap boards fail within 1-2 seasons.',
    solution:
      'Research thoroughly before buying. Match board dimensions to your size. Invest in quality drop-stitch construction. Budget for essential accessories. Buy from a manufacturer with CE certification and warranty.',
    audience: 'First-time SUP buyers and anyone who made a mistake on their first board.',
    steps: [
      'Mistake 1: Buying a board that is too narrow — always go wider than you think you need',
      'Mistake 2: Ignoring weight capacity — calculate your total load before buying',
      'Mistake 3: Choosing the cheapest option — low-quality PVC fails quickly',
      'Mistake 4: Forgetting accessories — pump, PFD, paddle, and leash add $150-300',
      'Mistake 5: Not matching board type to use — all-around is versatile but specialized boards perform better',
    ],
    faq: [
      {
        q: 'How much should I spend on a first SUP?',
        a: 'A quality inflatable SUP from a reputable manufacturer costs $500-900. Boards under $300 are typically low quality with poor drop-stitch and thin PVC that fails quickly.',
      },
      {
        q: 'Is a cheap SUP worth it?',
        a: 'No. Low-cost SUPs use thin PVC, weak drop-stitch, and poor-quality valves. They delaminate, leak, and lose rigidity. A quality board lasts 5+ years; a cheap board may fail in 1 season.',
      },
      {
        q: 'Should I buy a bundle or individual items?',
        a: 'Bundles save money vs buying separately. Ensure the bundle includes a quality pump with gauge, adjustable paddle, and coiled leash — not just the cheapest accessories.',
      },
    ],
    relatedProducts: ['sup-explorer-11', 'sup-cheetah-surge'],
    relatedGuides: ['how-to-choose-your-sup', 'sup-size-guide', 'sup-weight-capacity'],
    difficulty: 'beginner',
    waterType: ['lake', 'sea', 'river'],
  },
  {
    slug: 'sup-for-touring',
    category: 'buying-guide',
    title: "Best SUP for Touring — Long-Distance Paddle Board Buyer's Guide",
    description:
      'How to choose a touring SUP for long-distance paddling: hull design, length, width, tracking, and gear recommendations for multi-day expeditions.',
    tldr: 'Touring SUPs need longer hulls (12-14\'), displacement bows for efficient glide, and moderate width (30-32") for tracking. Look for bungee deck rigging, multiple D-rings, and high PSI drop-stitch. A touring-specific paddle with a smaller blade reduces fatigue on long days.',
    problem:
      'Using a short all-around board for touring results in slow speed, poor tracking, and early fatigue. Distance paddling demands specialized hull design.',
    solution:
      "Choose a board 12' or longer with a displacement nose. The Ocean Pulse and Ocean Voyager from Afarer offer the touring-specific hull shape and bungee rigging needed for expedition paddling.",
    audience: 'Paddlers planning day trips, multi-day expeditions, or fitness distance paddling.',
    steps: [
      "Choose a board 12-14' long for efficient glide and tracking",
      'Select a displacement bow (pointed nose) that cuts through chop',
      'Look for 30-32" width — wider is more stable, narrower is faster',
      'Verify bungee deck rigging and D-ring grid for securing gear',
      'Choose a touring paddle (smaller blade, longer shaft) for endurance',
      'Consider a fin system with a longer touring fin for improved tracking',
    ],
    faq: [
      {
        q: 'What length touring SUP is best?',
        a: "12' is the sweet spot for most paddlers — good glide with manageable portability. 14' is faster but heavier and harder to transport. Beginners should start with 12'.",
      },
      {
        q: 'Do touring SUPs need a special fin?',
        a: 'A longer touring fin (6-9") improves tracking significantly. Many touring boards have a US fin box for interchangeable fin options.',
      },
      {
        q: 'Can I use an all-around board for touring?',
        a: "For short distances (1-3 miles), an all-around board works. For longer distances, a dedicated touring board's hull design makes a dramatic difference in speed and fatigue.",
      },
    ],
    relatedProducts: ['sup-ocean-pulse', 'sup-ocean-voyager'],
    relatedGuides: ['how-to-choose-your-sup', 'sup-size-guide', 'multi-day-trip'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea'],
  },
  {
    slug: 'sup-for-whitewater',
    category: 'buying-guide',
    title: "Whitewater SUP Guide — River Running Inflatable Board Buyer's Guide",
    description:
      'How to choose a whitewater SUP for river running: shorter boards, reinforced construction, safety gear, and paddling techniques for Class I-III rapids.',
    tldr: "Whitewater SUPs need shorter length (8-10'), reinforced rails, higher PSI (15+), and multiple air chambers for safety. Use a straight river leash (not coiled), wear a helmet and PFD, and always paddle with a buddy. Start on Class I before attempting harder rapids.",
    problem:
      'Taking a standard all-around SUP onto moving water is dangerous — standard boards lack the maneuverability, impact resistance, and safety features needed for rivers.',
    solution:
      'Choose a purpose-built whitewater SUP with short length for agility, reinforced construction for rock impacts, and multi-chamber design for safety.',
    audience: 'Experienced paddlers transitioning to river running.',
    steps: [
      "Choose a board 8-10' long for maximum maneuverability in rapids",
      'Look for reinforced rail construction and military-grade PVC',
      'Select a board with 2+ air chambers for redundancy if punctured',
      'Use a straight river leash attached to a quick-release belt',
      'Wear a helmet, PFD, and appropriate river footwear',
      'Start on Class I rapids and progress gradually with an experienced partner',
    ],
    faq: [
      {
        q: 'Can I use a regular SUP for whitewater?',
        a: 'Not recommended. Standard SUPs lack impact resistance and may delaminate on rocks. Multi-chamber safety is critical for river environments.',
      },
      {
        q: 'What PSI for whitewater SUP?',
        a: '15+ PSI for maximum rigidity. A harder board bounces off rocks better than an under-inflated one that conforms around obstacles.',
      },
      {
        q: 'Do I need special paddling skills for whitewater SUP?',
        a: 'Yes. River reading, eddy turns, ferrying, and bracing techniques are essential skills. Take a whitewater SUP clinic before attempting Class II+.',
      },
    ],
    relatedProducts: ['sup-leviathan-wake'],
    relatedGuides: ['safety-tips', 'sup-board-materials', 'how-to-choose-your-sup'],
    difficulty: 'advanced',
    waterType: ['river'],
  },
  {
    slug: 'sup-racing-fitness',
    category: 'buying-guide',
    title: "SUP for Racing and Fitness — Performance Board Buyer's Guide",
    description:
      'Guide to choosing a SUP for racing, SUP fitness, and athletic paddling. Board specs, paddle selection, and training tips for competitive and fitness paddlers.',
    tldr: 'Racing SUPs are 12\'6" to 14\' long, 23-28" narrow, with displacement hulls for maximum speed. Fitness SUPs balance speed with stability at 11-12\' and 30-32". Match board to your fitness goals and experience level.',
    problem:
      'Standard recreational SUPs are too slow and inefficient for serious fitness paddling or racing. Performance-oriented paddlers need purpose-built boards.',
    solution:
      "Match board to intensity: recreational fitness (11-12' all-around), serious fitness (12' touring), racing (12'6\" or 14' narrow displacement).",
    audience: 'Fitness paddlers, aspiring racers, and athletic SUP enthusiasts.',
    steps: [
      'Define your goal: general fitness, race training, or competitive racing',
      'For fitness: 11-12\' board with 30-32" width for speed + stability balance',
      'For racing: 12\'6" or 14\' board with 23-28" width and displacement hull',
      'Choose a carbon or fiberglass paddle for reduced weight and fatigue',
      'Add a heart rate monitor and track distance/speed with a GPS watch',
      'Incorporate interval training, long-distance paddles, and technique drills',
    ],
    faq: [
      {
        q: 'What is the best SUP length for fitness paddling?',
        a: "12' offers the best balance of speed and stability for fitness paddlers. Longer boards are faster but require more skill to balance.",
      },
      {
        q: 'Do I need a racing board to get a good workout?',
        a: "No. A touring or all-around board at 11-12' provides an excellent cardiovascular workout. Racing boards only matter when competing or training for races.",
      },
      {
        q: 'What paddle is best for SUP fitness?',
        a: 'A carbon fiber paddle at 8-10" taller than you. The lighter weight reduces shoulder fatigue. A smaller blade increases stroke rate for cardio training.',
      },
    ],
    relatedProducts: ['sup-ocean-pulse', 'sup-ocean-voyager', 'sup-cheetah-surge'],
    relatedGuides: ['how-to-choose-your-sup', 'sup-size-guide', 'paddling-techniques'],
    difficulty: 'intermediate',
    waterType: ['lake', 'sea'],
  },
];

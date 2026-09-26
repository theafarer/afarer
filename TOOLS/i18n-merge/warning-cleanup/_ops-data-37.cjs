// shard 37: EN factory YAML boat-version restoration (22 ops)
// factory.yaml: subtitle/intro/stats/ws3(FRP Moulds)/ws5(Rigging)/equipment item4/cta
// factory-process.yaml: subtitle/intro/step04(FRP RIB Hull Moulding)/step06(Rigging)/step07/step08/cta
// factory-oem-capability.yaml: subtitle (watercraft)
// Evidence: de/ru/ja locale YAMLs (boat versions) + root .astro twins; see TECH.md L27
module.exports = [
  {
    f: 'src/data/pages/factory.yaml',
    find: '  subtitle: 12,000 m² SUP factory in Qingdao, China — custom SUP manufacturing from raw PVC material to finished inflatable paddle board\n',
    rep: '  subtitle: 12,000 m² of integrated manufacturing — from raw material to finished boat\n',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: "  - Operated by **Aquafarer LLC (USA)**, afarer's Qingdao Operation Team controls every stage of inflatable SUP manufacturing — from the arrival of raw PVC materials to the final pre-delivery inspection of the finished paddle board. Our manufacturing facility in the Qingdao Economic Development Zone spans 12,000 square metres and houses dedicated workshops for PVC cutting, drop-stitch core bonding, SUP digital printing, final assembly, and quality testing.\n",
    rep: "  - As the production arm of **Aquafarer LLC (USA)**, afarer's Qingdao Operation Team controls every stage of production — from the arrival of raw PVC and fiberglass materials to the final pre-delivery inspection of the finished boat. Our manufacturing facility in the Qingdao Economic Development Zone spans 12,000 square metres and houses dedicated workshops for PVC cutting, tube heat sealing, FRP mould fabrication, SUP digital printing, final assembly, and quality testing.\n",
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: 'Every SUP that leaves our workshop',
    rep: 'Every boat that leaves our workshop',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '    label: SUPs produced annually\n',
    rep: '    label: Boats produced annually\n',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '    - title: Drop-Stitch Core Bonding\n',
    rep: '    - title: FRP Moulds & Composite Fabrication\n',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '      description: SUP board drop-stitch cores are bonded to outer PVC laminates using heat lamination. Thousands of internal polyester threads connect top and bottom layers, creating a rigid structure at 12-15 PSI. Rail bands are triple-layer fusion bonded for edge strength.\n',
    rep: '      description: Custom FRP moulds for SUP components, produced using hand-lay-up fiberglass moulding with polyester and vinylester resin systems. Each layer is hand-rolled and vacuum-bagged for consistent quality. Gelcoat spray booth provides a high-gloss, UV-resistant marine finish.\n',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '    - title: Final Assembly & Fitting\n',
    rep: '    - title: Final Assembly & Rigging\n',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '      description: Assembly line where valves, D-rings, handles, fin boxes, and deck pads are installed on each SUP board. Each board follows a 100-point assembly checklist signed off by the team lead.\n',
    rep: '      description: Assembly line where fiberglass hulls and PVC tubes are mated, engines are mounted, steering and controls are connected, and electrical systems are wired. Each boat follows a 100-point assembly checklist signed off by the team lead.\n',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '    - name: Drop-Stitch Core Lamination Press\n      spec: SUP cores up to 14 ft\n',
    rep: '    - name: Fiberglass Hand-Lay-Up Moulds\n      spec: SUP board moulds up to 14 ft\n',
  },
  {
    f: 'src/data/pages/factory.yaml',
    find: '  desc: Follow a SUP through every stage of production — from raw material to sea-ready board.\n',
    rep: '  desc: Follow a boat through every stage of production — from raw material to sea-ready craft.\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '  subtitle: From raw material to sea-ready SUP — every step under our control\n',
    rep: '  subtitle: From raw material to sea-ready boat — every step under our control\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: 'Here is how a SUP board is built in our facility.',
    rep: 'Here is how a boat is built in our facility.',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '    title: Drop-Stitch Core Bonding\n',
    rep: '    title: FRP RIB Hull Moulding\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '    description: SUP board drop-stitch cores are bonded to outer PVC laminates using heat lamination. Thousands of internal polyester threads connect top and bottom layers, creating a rigid structure at 12-15 PSI. Rail bands are triple-layer fusion bonded for edge strength.\n',
    rep: '    description: RIB hulls are manufactured using hand lay-up FRP moulding. Layers of fiberglass mat and woven roving are hand-rolled with polyester or vinylester resin in precision moulds. Each layer is vacuum-bagged for consistent laminate quality. The hull receives a gelcoat layer for a high-gloss, UV-resistant marine finish.\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '    duration: 1–2 days per board\n',
    rep: '    duration: 2–4 days per hull\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '    title: Final Assembly & Fitting\n',
    rep: '    title: Final Assembly & Rigging\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '    description: Valves, D-rings, handles, fin boxes, and deck pads are installed on the assembly line. Each board follows a 100-point assembly checklist with mandatory sign-off at each stage.\n',
    rep: '    description: FRP hulls and PVC tube assemblies are joined on the assembly line. The engine is mounted, steering and throttle controls are connected, the fuel system is installed, and the complete electrical harness is wired. Each boat follows a 100-point assembly checklist with mandatory sign-off at each stage.\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: 'mandatory sign-off at each stage.\n    duration: 1–2 days\n',
    rep: 'mandatory sign-off at each stage.\n    duration: 2–4 days\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: 'Every completed board undergoes mandatory quality gate',
    rep: 'Every completed boat undergoes mandatory quality gate',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '    description: Boards are deflated, folded per procedure, packed in heavy-duty woven bags or retail boxes, and loaded for shipment. Each package is labelled with model, serial number, and destination. We coordinate with freight forwarders for FCL and LCL container shipments worldwide.\n',
    rep: '    description: Boats are deflated, folded per procedure, packed in heavy-duty woven bags or plywood crates, and loaded for shipment. Each package is labelled with model, serial number, and destination. We coordinate with freight forwarders for FCL and LCL container shipments worldwide.\n',
  },
  {
    f: 'src/data/pages/factory-process.yaml',
    find: '  desc: Explore the industrial-grade equipment behind every afarer SUP board.\n',
    rep: '  desc: Explore the industrial-grade equipment behind every afarer boat.\n',
  },
  {
    f: 'src/data/pages/factory-oem-capability.yaml',
    find: '  subtitle: From concept to container — customize every detail of your inflatable SUP line\n',
    rep: '  subtitle: From concept to container — customize every detail of your inflatable watercraft line\n',
  },
];

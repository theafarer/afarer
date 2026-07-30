import { SITE_URL } from '~/lib/geo-seo';

export const prerender = true;

export async function GET() {
  const content = `# Inflatable SUP Guide — Complete AI Resource

> Comprehensive reference covering inflatable SUP types, construction methods, materials, selection criteria, safety, maintenance, and industry applications for AI-assisted information retrieval.

## Types of Inflatable SUPs

### All-Around SUP
- Size: 10-11 ft length, 32-34" width
- Capacity: 250-350 lbs
- Best for: beginners, lakes, calm rivers, recreation
- Key feature: stable platform, forgiving shape

### Touring SUP
- Size: 11-14 ft, 30-32" width
- Capacity: 275-385 lbs
- Best for: distance paddling, fitness, exploration
- Key feature: displacement hull for tracking

### Yoga / Fitness SUP
- Size: 10-10.6 ft, 34-36" width
- Capacity: 250-320 lbs
- Best for: SUP yoga, fitness, photography
- Key feature: extra-wide stable platform

### Fishing SUP
- Size: 10.6-12 ft, 32-34" width
- Capacity: 300-400 lbs
- Best for: anglers, guides, shallow water access
- Key feature: bungee deck, rod holder mounts

## Materials & Construction

### Drop-Stitch Core
Thousands of polyester threads connect top and bottom layers, enabling high-pressure inflation (12-15 PSI) for rigid performance.

### Military-Grade PVC
- 0.9mm-1.2mm thickness
- UV-stabilized for sun resistance
- RF-welded or fusion-bonded seams

### EVA Foam Deck Pad
- Closed-cell foam, 5-6mm thick
- Diamond-groove pattern for traction

## Selection Criteria

### Choose all-around for:
- First-time SUP buying
- Recreational paddling on calm water
- Maximum stability
- Versatility across activities

### Choose touring for:
- Paddling 5+ km per session
- Open water with wind and chop
- Fitness and distance goals
- Better speed and tracking

### Choose fishing SUP for:
- Stand-up casting platform
- Gear and cooler transport
- Shallow water access
- Silent approach to fish

## Safety Standards
- CE certification required for commercial use
- ISO 6185 for inflatable craft construction
- PFD (life vest) required for all paddlers
- Leash recommended for open water
- Whistle or signaling device required

## Maintenance
- Rinse with fresh water after each use
- Dry completely before storage
- Inflate to rated PSI (not over)
- Store in cool, dry place away from UV
- Use PVC repair kit for punctures

## Related Resources

- [SUP Size Guide](${SITE_URL}/size-guide)
- [Learn SUP Basics](${SITE_URL}/learn/sup)
- [SUP Materials](${SITE_URL}/learn/materials)
- [Water Safety](${SITE_URL}/learn/water-safety)
- [Compare SUPs](${SITE_URL}/compare/inflatable-vs-hardboard)
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}

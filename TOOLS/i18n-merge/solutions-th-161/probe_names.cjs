const fs = require('fs');
const path = require('path');
const candidates = {
  '01_sup-brand-startup.yaml': ['مايا', 'ماركو', 'صوفيا'],
  '02_expand-outdoor-brand-water-sports.yaml': ['إيلينا', 'إنغريد', 'لوكاس', 'أمارا'],
  '03_inflatable-technology-for-surf-business.yaml': ['هيروشي', 'غونار', 'كاي', 'مارتا'],
  '04_ecommerce-sup-brand-development.yaml': ['جيك', 'ماركوس', 'نينا'],
  '05_create-fishing-sup-brand.yaml': ['دييغو', 'هانك', 'كارلوس'],
  '06_sup-yoga-wellness-equipment.yaml': ['يوشيدا', 'إيزابيلا', 'سيمون'],
  '07_creator-influencer-sup-brand.yaml': ['ثور', 'ميا', 'رافي'],
  '08_commercial-sup-fleet.yaml': ['أحمد', 'ديميتري', 'فاطمة'],
  '09_durable-sup-rental-fleet.yaml': ['سارة', 'ميغيل', 'جينا', 'توماس'],
  '10_resort-water-activity-package.yaml': ['كاميلا', 'رييس', 'نارونغ', 'تشاياسيت'],
  '11_sup-academy-equipment-program.yaml': ['كينجي', 'كايلي', 'يوكي', 'دانييل'],
  '12_luxury-portable-sup-package.yaml': ['إريك', 'حمدان', 'شارلوت', 'فيصل'],
  '13_retail-private-label-program.yaml': ['أوكونكوو', 'أدايزي', 'تشين'],
  '14_regional-oem-supply-chain-partner.yaml': ['جيمس', 'راشد', 'هندرا', 'يوسف'],
  '15_corporate-sup-event-package.yaml': ['كلاوس', 'بريا', 'شارما', 'ستيفان'],
  '16_expand-your-water-sports-portfolio.yaml': ['بيدرو', 'ناكامورا', 'بياتريس'],
  '17_pet-friendly-paddle-board-program.yaml': ['إيما', 'لاكلان', 'لوك', 'هانا', 'غروفر'],
  '18_complete-beach-activity-equipment-solutions.yaml': ['ديميتري', 'رافاييل', 'كارلوس'],
  '19_commercial-water-park-sup-fleet.yaml': ['الفلاسي', 'ناديا', 'طارق'],
  '20_premium-custom-sup-collection.yaml': ['ماتيو', 'فيرلين', 'كوكو'],
  '21_destination-water-sports-package.yaml': ['كوفاتشيتش', 'كاميل', 'ديلاكروا'],
  '22_kids-exploration-sup-program.yaml': ['ليام', 'كونولي', 'ميغان', 'ويتفيلد'],
  '23_professional-water-rescue-sup-system.yaml': ['ديفيد', 'تران', 'إيلينا', 'رودريغيز'],
  '24_eco-research-monitoring-sup-platform.yaml': ['صوفيا', 'هوامان', 'إسحاق', 'توريس'],
};
for (const f of Object.keys(candidates).sort()) {
  const t = fs.readFileSync(path.join('parts', f), 'utf8');
  const hits = candidates[f].filter((n) => t.includes(n));
  console.log(f + ' => ' + JSON.stringify(hits));
}

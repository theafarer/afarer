// Usage: node _ci-poll95.cjs <full-40-char-head-sha>
const SHA = process.argv[2];
if (!SHA || !/^[0-9a-f]{40}$/.test(SHA)) {
  console.error('Usage: node _ci-poll95.cjs <full-40-char-head-sha>');
  process.exit(4);
}
const fs = require('fs');
const cred = fs.readFileSync('C:/Users/Helleo/AppData/Local/Temp/deveco/cred-out.txt', 'utf8');
const m = cred.match(/password=([^\s\r\n]+)/);
const token = m ? m[1] : '';
const headers = {
  Authorization: 'token ' + token,
  'User-Agent': 'ci-check',
  Accept: 'application/vnd.github+json',
};
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
async function main() {
  for (let attempt = 1; attempt <= 60; attempt++) {
    const res = await fetch('https://api.github.com/repos/theafarer/afarer/actions/runs?head_sha=' + SHA, { headers });
    const j = await res.json();
    const runs = j.workflow_runs || [];
    if (runs.length >= 2 && runs.every((r) => r.status === 'completed')) {
      for (const r of runs) console.log(r.name + ' | ' + r.conclusion + ' | id=' + r.id);
      process.exit(runs.every((r) => r.conclusion === 'success') ? 0 : 1);
    }
    console.log(
      'attempt ' +
        attempt +
        ': ' +
        runs.length +
        ' runs, statuses: ' +
        runs.map((r) => r.status + '/' + (r.conclusion || '')).join(', ')
    );
    await sleep(30000);
  }
  process.exit(2);
}
main().catch((e) => {
  console.error(e.message);
  process.exit(3);
});

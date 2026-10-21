const puppeteer = require('puppeteer-core');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TARGET_URL = 'https://ami-booth-planner.vercel.app';
const OUTPUT_DIR = path.join(__dirname, '../public/assets/portfolio');

async function run() {
  console.log('Launching browser for unique screens capture...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: {
      width: 1440,
      height: 900,
      deviceScaleFactor: 2
    },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-web-security']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  // 1. Auth View
  console.log('Navigating to login page...');
  await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));
  const authPath = path.join(OUTPUT_DIR, 'ami_screen_auth.png');
  await page.screenshot({ path: authPath });
  console.log('Saved auth view to:', authPath);

  // 2. Login
  console.log('Logging in...');
  await page.evaluate(() => {
    const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('กรอกรหัสแอดมิน'));
    if (btn) btn.click();
  });
  await new Promise(r => setTimeout(r, 500));
  await page.evaluate(() => {
    const sub = document.querySelector('button[type="submit"]') || Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('เข้าสู่ระบบ'));
    if (sub) sub.click();
  });
  await new Promise(r => setTimeout(r, 4000));

  // Helper to click sidebar nav items
  async function clickTab(tabKeyText) {
    console.log(`Clicking sidebar item: "${tabKeyText}"...`);
    const clicked = await page.evaluate((text) => {
      const items = Array.from(document.querySelectorAll('.MuiListItemButton-root'));
      const found = items.find(el => el.textContent.includes(text));
      if (found) {
        found.click();
        return true;
      }
      return false;
    }, tabKeyText);
    console.log(`Sidebar item "${tabKeyText}" clicked:`, clicked);
    await new Promise(r => setTimeout(r, 2500));
  }

  // 3. Calendar View
  await clickTab('ปฏิทิน');
  const calPath = path.join(OUTPUT_DIR, 'ami_screen_calendar.png');
  await page.screenshot({ path: calPath });
  console.log('Saved Calendar view to:', calPath);

  // 4. Applications View
  await clickTab('การสมัครของฉัน');
  const appPath = path.join(OUTPUT_DIR, 'ami_screen_applications.png');
  await page.screenshot({ path: appPath });
  console.log('Saved Applications view to:', appPath);

  // 5. Budget View
  await clickTab('งบประมาณ');
  const budgetPath = path.join(OUTPUT_DIR, 'ami_screen_budget.png');
  await page.screenshot({ path: budgetPath });
  console.log('Saved Budget view to:', budgetPath);

  // 6. Dashboard View
  await clickTab('แดชบอร์ด');
  const dashPath = path.join(OUTPUT_DIR, 'ami_screen_dashboard.png');
  await page.screenshot({ path: dashPath });
  console.log('Saved Dashboard view to:', dashPath);

  await browser.close();

  // Verify MD5 hashes
  console.log('\n--- VERIFYING FILE HASHES ---');
  const files = [
    'ami_screen_auth.png',
    'ami_screen_calendar.png',
    'ami_screen_applications.png',
    'ami_screen_budget.png',
    'ami_screen_dashboard.png'
  ];

  const hashes = new Set();
  for (const f of files) {
    const fPath = path.join(OUTPUT_DIR, f);
    const buf = fs.readFileSync(fPath);
    const md5 = crypto.createHash('md5').update(buf).digest('hex');
    console.log(`${f} [${(buf.length / 1024).toFixed(1)} KB] -> MD5: ${md5}`);
    hashes.add(md5);
  }

  if (hashes.size === files.length) {
    console.log('\n🎉 SUCCESS: All 5 screen captures are 100% UNIQUE and distinct!');
  } else {
    console.warn('\n⚠️ WARNING: Some files have duplicate hashes!');
  }
}

run();

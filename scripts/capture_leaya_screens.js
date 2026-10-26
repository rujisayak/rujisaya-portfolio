const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = path.join(__dirname, '../public/assets/portfolio');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: { width: 1440, height: 900, deviceScaleFactor: 2 },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.goto('https://leave-wfh-management.vercel.app/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));

  // 1. Dashboard View
  await page.screenshot({ path: path.join(OUT_DIR, 'leaya_screen_dashboard.png') });
  console.log('Saved leaya_screen_dashboard.png');

  // 2. Team Matrix Tab
  const buttons = await page.$$('button');
  for (const b of buttons) {
    const text = await (await b.getProperty('innerText')).jsonValue();
    if (text.includes('จัดการทีม') || text.includes('Team Matrix')) {
      await b.click();
      console.log('Clicked Team Matrix');
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(OUT_DIR, 'leaya_screen_matrix.png') });
  console.log('Saved leaya_screen_matrix.png');

  // 3. HR Master Data Tab
  const buttons2 = await page.$$('button');
  for (const b of buttons2) {
    const text = await (await b.getProperty('innerText')).jsonValue();
    if (text.includes('ข้อมูลองค์กร') || text.includes('HR Master Data')) {
      await b.click();
      console.log('Clicked HR Master Data');
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(OUT_DIR, 'leaya_screen_masterdata.png') });
  console.log('Saved leaya_screen_masterdata.png');

  // 4. Vacation Calculation Rules Tab
  const buttons3 = await page.$$('button');
  for (const b of buttons3) {
    const text = await (await b.getProperty('innerText')).jsonValue();
    if (text.includes('เกณฑ์คำนวณวันลา')) {
      await b.click();
      console.log('Clicked Calculation Rules');
      break;
    }
  }
  await new Promise(r => setTimeout(r, 1200));
  await page.screenshot({ path: path.join(OUT_DIR, 'leaya_screen_rules.png') });
  console.log('Saved leaya_screen_rules.png');

  await browser.close();
  console.log('All 4 Leaya screens captured successfully!');
})();

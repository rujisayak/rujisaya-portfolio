const puppeteer = require('puppeteer-core');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const OUT_DIR = path.join(__dirname, '../public/assets/portfolio');

async function capture() {
  console.log('Launching browser for mobile capture...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    defaultViewport: {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      isMobile: true,
      hasTouch: true
    },
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1');

  // 1. Capture Leaya Mobile
  console.log('Capturing Leaya mobile...');
  await page.goto('https://leave-wfh-management.vercel.app/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 2000));
  const leayaMobilePath = path.join(OUT_DIR, 'leaya_screen_mobile.png');
  await page.screenshot({ path: leayaMobilePath });
  console.log('Saved Leaya mobile to:', leayaMobilePath);

  // 2. Capture Ami Booth Planner Mobile
  console.log('Capturing Ami Booth Planner mobile...');
  await page.goto('https://ami-booth-planner.vercel.app/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));

  try {
    const adminBtn = await page.evaluate(() => {
      const btn = Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('กรอกรหัสแอดมิน') || b.textContent.includes('แอดมิน'));
      if (btn) {
        btn.click();
        return true;
      }
      return false;
    });
    console.log('Clicked admin button:', adminBtn);
    await new Promise(r => setTimeout(r, 800));

    const submitBtn = await page.evaluate(() => {
      const sub = document.querySelector('button[type="submit"]') || Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('เข้าสู่ระบบ'));
      if (sub) {
        sub.click();
        return true;
      }
      return false;
    });
    console.log('Clicked submit button:', submitBtn);
    await new Promise(r => setTimeout(r, 3500));

    await page.evaluate(() => {
      const h5 = document.querySelector('h5');
      if (h5) {
        h5.textContent = 'แดชบอร์ด';
        h5.style.fontSize = '18px';
        h5.style.fontWeight = '700';
      }
      const bar = document.querySelector('.MuiToolbar-root');
      if (bar) {
        bar.style.padding = '0 12px';
        bar.style.justifyContent = 'space-between';
      }
    });
  } catch (err) {
    console.log('Login attempt error:', err.message);
  }

  const amiMobilePath = path.join(OUT_DIR, 'ami_screen_mobile.png');
  await page.screenshot({ path: amiMobilePath });
  console.log('Saved Ami mobile to:', amiMobilePath);

  await browser.close();
  console.log('Finished capturing mobile screens.');
}

capture().catch(console.error);

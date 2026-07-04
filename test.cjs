const puppeteer = require('puppeteer');
(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
    page.on('response', response => {
      if (!response.ok()) console.log('HTTP ERROR:', response.url(), response.status());
    });
    console.log('Navigating to root...');
    await page.goto('http://localhost:5173/', {waitUntil: 'networkidle0'});
    console.log('Clicking about link...');
    await page.click('a[href="/about"]');
    await page.waitForNavigation({waitUntil: 'networkidle0'}).catch(e => console.log('Navigation timeout or already loaded.'));
    console.log('Successfully navigated to about.');
    await browser.close();
  } catch(e) {
    console.error('SCRIPT ERROR:', e);
  }
})();

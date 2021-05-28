const puppeteer = require('puppeteer-core');

var members = { "members":[
   {
      "name": "박이준",
      "birthday": "050728",
      "password": "6433",
   },
   {
      "name": "전무진",
      "birthday": "050616",
      "password": "1004",
   }
]};

(async () => {
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/chromium-browser' });
  const page = await browser.newPage();
  await page.goto('https://hcs.eduro.go.kr/#/loginHome');

  await page.click('#btnConfirm2');
  await page.click('#WriteInfoForm > table > tbody > tr:nth-child(1) > td > button');
  await page.select('#sidolabel', "01");
  await page.select('#crseScCode', "4");
  await page.type('#orgname',"선덕고",{ delay: 100 });
  await page.click('#softBoardListLayer > div.layerContentsWrap > div.layerSchoolSelectWrap > table > tbody > tr:nth-child(3) > td:nth-child(3) > button');
  await page.mouse.move(200, 500);await page.waitForTimeout(100);
  await page.mouse.move(300, 500);await page.waitForTimeout(100);
  await page.mouse.move(400, 200);await page.waitForTimeout(100);
  await page.mouse.move(300, 400);
  await page.mouse.click(300,400 ,{ button: 'left' });
  await page.waitForTimeout(100);
  await page.mouse.click(320,530 ,{ button: 'left' });
  await page.waitForTimeout(100);
  await page.type('#user_name_input',"박이준",{ delay: 100 });
  await page.type('#birthday_input',"050728",{ delay: 100 });
  await page.click('#btnConfirm');

  await page.mouse.move(400, 200);await page.waitForTimeout(100);
  await page.type('#WriteInfoForm > table > tbody > tr > td > input','',{ delay: 100 });
  await page.type('#WriteInfoForm > table > tbody > tr > td > input','6433',{ delay: 100 });
  
  await page.waitForTimeout(100);
  await page.click('#btnConfirm');
  await page.waitForTimeout(1000);
  await page.mouse.click(300,510 ,{ button: 'left' });

  await page.waitForTimeout(1000);
  await page.click("#survey_q1a1");
  await page.waitForTimeout(1000);
  await page.click("#survey_q2a1");
  await page.waitForTimeout(1000);
  await page.click("#survey_q3a1");
  await page.click("#btnConfirm");
  //await page.screenshot({path: 'example.png'});
  await browser.close();
})();

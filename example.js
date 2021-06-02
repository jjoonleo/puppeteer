const puppeteer = require('puppeteer-core');

var members = [
   {
      "city":"서울특별시",
      "schoolLevel":"고등학교",
      "shchoolName":"선덕고등학교",
      "name": "박이준",
      "birthday": "050728",
      "password": "6433",
   },
   {
      "city":"서울특별시",
      "schoolLevel":"고등학교",
      "shchoolName":"선덕고등학교",
      "name": "전무진",
      "birthday": "050616",
      "password": "1004",
   }
];
var shchoolLevelNumber = {
   "유치원":"1",
   "초등학교":"2",
   "중학교":"3",
   "고등학교":"4",
   "특수학교 등":"5",
}
var cityNumber = {
   "서울특별시":"01",
   "부산광역시":"02",
   "대구광역시":"03",
   "인천광역시":"04",
   "광주광역시":"05",
   "대전광역시":"06",
   "울산광역시":"07",
   "세종특별자치시":"08",
   "경기도":"09",
   "강원도":"11",
   "충청북도":"12",
   "충청남도":"13",
   "전라북도":"14",
   "전라남도":"15",
   "경상북도":"16",
   "경상남도":"17",
   "제주특별자치도":"18"

}


console.log(members[0]['name']);
for(let i = 0; i < 2; i++){
(async () => {
  const browser = await puppeteer.launch({ executablePath: '/usr/bin/chromium-browser' });
  const page = await browser.newPage();
  await page.goto('https://hcs.eduro.go.kr/#/loginHome');

  await page.click('#btnConfirm2');
  await page.click('#WriteInfoForm > table > tbody > tr:nth-child(1) > td > button');
  await page.select('#sidolabel', cityNumber[members[i]['shchoolName']]);
  await page.select('#crseScCode', shchoolLevelNumber[members[i]['shchoolLevel']]);
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
  //choosing school

  await page.type('#user_name_input',members[i]['name'],{ delay: 100 }); //enter name
  await page.type('#birthday_input',members[i]['birthday'],{ delay: 100 });  //enter birthday
  await page.click('#btnConfirm');

  await page.mouse.move(400, 200);await page.waitForTimeout(100);
  await page.type('#WriteInfoForm > table > tbody > tr > td > input','',{ delay: 100 });
  await page.type('#WriteInfoForm > table > tbody > tr > td > input',members[i]['password'],{ delay: 100 });
  // enter password

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
}

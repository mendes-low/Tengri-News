import puppeteer from "puppeteer";

export async function getNews() {

  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto('https://tengrinews.kz/api2/getNewsOnDemand3/?limit=7&offset=7');

  await page.content();

  const news = await page.evaluate(() => {
    return JSON.parse(document.querySelector("pre").innerText);
  });

  await browser.close();

  return news;
};

export async function getNewsById(id) {

  const browser = await puppeteer.launch({
    headless: true
  });

  const page = await browser.newPage();

  await page.goto(`https://tengrinews.kz/api2/getEventHtml?id=${id}`);

  await page.content();

  const newsItem = await page.$eval(
    "body",
    (container) => {

      function fixImgSrc(node) {
        const images = node.querySelectorAll("img");
        if (images) {
          images.forEach((img) => {
            img.src = img.src.replace("https://tengrinews.kzhttps//tengrinews.kz", "https://tengrinews.kz/");
          });
        }
        return node;
      }

      const mainTextNodes = Array.from(container.children).filter((node) => node.nodeName == "P" || node.nodeName == "BLOCKQUOTE");

      const mainText = mainTextNodes.map(node => {
        node.nodeName == "P" ? node.classList.add("news-paragraph") :
          node.classList.add("news-blockquote")
        return node;
      }).map(node => fixImgSrc(node)).map(node => node.outerHTML).join("");

      return mainText
    }
  );

  await browser.close();

  return newsItem;
};
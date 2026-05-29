import puppeteer from "puppeteer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const data = await req.json();

  const browser = await puppeteer.launch({
    headless: true,
  });

  const page = await browser.newPage();

  await page.setViewport({
    width: 1280,
    height: 1800,
  });

  // 1. ouvrir page template
  await page.goto("http://localhost:3000/pdf-template", {
    waitUntil: "domcontentloaded",
  });

  // 2. injecter les données RHF
  await page.evaluate((data) => {
    (window as any).formData = data;
  }, data);

  await page.waitForSelector("body");

  // await page.emulateMediaType("screen");
  await page.emulateMediaType("print");

  const pdf = await page.pdf({
    format: "A4",

    printBackground: true,

    displayHeaderFooter: true,

    margin: {
      top: "10mm",
      bottom: "10mm",
      left: "10mm",
      right: "10mm",
    },

    headerTemplate: `
    <div></div>
  `,

    footerTemplate: `
    <div
      style="
        width: 100%;
        font-size: 10px;
        padding: 0 20px;
        color: #444;
        display: flex;
        justify-content: center;
        align-items: center;
      "
    >
 <span>Page&nbsp;</span><span class="pageNumber"></span><span>/</span><span class="totalPages"></span>
    </div>
  `,
  });

  await browser.close();

  return new Response(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Plan-de-prevention-.pdf"',
    },
  });
}

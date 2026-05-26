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

  await page.emulateMediaType("screen");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
  });

  await browser.close();

  return new Response(Buffer.from(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Plan-de-prevention-.pdf"',
    },
  });
}

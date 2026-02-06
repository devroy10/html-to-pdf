#!/usr/bin/env node
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");
const { URL } = require("url");

const main = async () => {
  const website = process.argv[2];

  if (!website) {
    console.error("Please provide a website URL as a command-line argument");
    process.exit(1);
  }

  // Create the outputs directory if it doesn't exist
  const outputDir = path.resolve(__dirname, "outputs");

  // Extract the base URL to use as the file name
  const parsedUrl = new URL(website);
  const baseUrl = parsedUrl.hostname;

  // Get the current timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");

  // Construct the PDF file path with the timestamp
  const pdfPath = path.join(outputDir, `${baseUrl}-${timestamp}.pdf`);

  // Specify the path to your local Chrome or Chromium executable
  const browser = await puppeteer.launch({
    executablePath:
      "C:\\Users\\HP\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe", // Update this path with the correct one
  });

  const page = await browser.newPage();
  try {
    await page.goto(website, { waitUntil: "networkidle2", timeout: 30000 });
  } catch (error) {
    console.error(`Failed to navigate to ${website}:`, error);
    await browser.close();
    process.exit(1);
  }
  await page.pdf({
    path: pdfPath,
    format: "A3",
    printBackground: true,
  });

  await browser.close();

  console.log(`PDF generated successfully at ${pdfPath}`);
};

main();
import sharp from "sharp";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const badgesDir = path.join(__dirname, "..", "public", "badges");
const levels = ["foundation", "practitioner", "expert", "gdp"];

for (const level of levels) {
  const svgPath = path.join(badgesDir, `${level}.svg`);
  const pngPath = path.join(badgesDir, `${level}.png`);
  const svg = await fs.readFile(svgPath, "utf-8");
  await sharp(Buffer.from(svg))
    .png({ density: 144 })
    .toFile(pngPath);
  console.log(`Exported ${level}.png`);
}

console.log("Badges PNG export done.");

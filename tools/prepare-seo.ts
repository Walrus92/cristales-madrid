import fs from "fs";
import path from "path";
import { site } from "../config";

// Ruta absoluta a /public
const publicDir = path.join(process.cwd(), "public");

// ---- ROBOTS.TXT ----
const robotsPath = path.join(publicDir, "robots.txt");
let robotsContent = fs.readFileSync(robotsPath, "utf8");

robotsContent = robotsContent.replace(
  "__SITEMAP__",
  `${site.seo.canonical}/sitemap.xml`
);

fs.writeFileSync(robotsPath, robotsContent, "utf8");

// ---- SITEMAP.XML ----
const sitemapPath = path.join(publicDir, "sitemap.xml");
let sitemapContent = fs.readFileSync(sitemapPath, "utf8");

sitemapContent = sitemapContent.replace(
  "__CANONICAL__",
  site.seo.canonical
);

fs.writeFileSync(sitemapPath, sitemapContent, "utf8");

console.log("SEO listo: robots.txt y sitemap.xml generados con éxito.");

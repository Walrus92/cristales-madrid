// Solo ejecutar el script TS en entorno local (no en GitHub Pages)
if (!process.env.GITHUB_ACTIONS) {
  require("ts-node").register();
  require("../tools/prepare-seo.ts");
} else {
  console.log("Skipping prepare-seo.ts in GitHub Actions.");
}

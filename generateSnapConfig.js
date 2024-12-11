const fs = require('fs');
const path = require('path');
const { parseStringPromise } = require('xml2js');

async function generateReactSnapConfig() {
  const sitemapPath = path.join(__dirname, 'public', 'mysitemap.xml');
  const packageJsonPath = path.join(__dirname, 'package.json');

  try {

    const sitemap = fs.readFileSync(sitemapPath, 'utf8');
    const parsedSitemap = await parseStringPromise(sitemap);

    const urls = parsedSitemap.urlset.url.map(url => {
      return new URL(url.loc[0]).pathname; 
    });

    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    packageJson.reactSnap = {
      ...packageJson.reactSnap,
      include: urls, 
    };

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2), 'utf8');
    console.log('Updated package.json with React Snap URLs.');
  } catch (error) {
    console.error('Error generating React Snap config:', error);
  }
}

generateReactSnapConfig();

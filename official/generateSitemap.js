
const fs = require('fs');
const path = require('path');
const axios = require('axios');
// Your domain
const DOMAIN = 'https://elonatech.com.ng';
// All static routes from your router
const staticPages = [
  '/', '/trial', '/application-success', '/network', '/portfolio', '/digital-marketing',
  '/policy', '/who-we-are', '/web-design', '/app-development', '/products',
  '/our-team', '/israel-uhwonuwoma-o', '/oreva-p-oku', '/violet-oku', '/toju-isaac-okene-joe',
  '/jamiu-noah', '/joseph-okoronkwo',
  '/hardware-engineering', '/mobile-repair', '/printer-repair', '/system-integration',
  '/structure-cabling', '/cctv', '/internet', '/network-security', '/access-control',
  '/time-management', '/blog', '/surveillance', '/network-administration-implementation',
  '/server-administration', '/ip-telephony', '/voip', '/domain', '/hosting',
  '/content-marketing', '/ppc', '/seo', '/social-media-marketing', '/email-marketing',
  '/application-software', '/business-software', '/system-software',
  '/computers', '/printers', '/office-equipment', '/pos-system', '/printer',
  '/graphics-design', '/brand-identity', '/animation', '/video-editing', '/motion-graphics',
  '/uiux', '/career', '/technical-support', '/remote-support', '/livestreaming', '/videoconferencing',
  '/animation-career', '/digital-career', '/graphic-career', '/marketing-career',
  '/system-career', '/web-career', '/software-supply', '/hardware-supply', '/consumables',
  '/get-in-touch', '/consulting', '/retainer-partnership', '/training', '/network-devices',
  '/network-support', '/cart', '/checkout', '/thank-you'
];
// API endpoints for dynamic routes
const PRODUCT_API = 'https://elonatech-live-api.onrender.com/api/v1/product/filter?category=${category}';
const BLOG_API = 'https://elonatech-live-api.onrender.com/api/v1/blog';
const NEWS_API = 'https://elonatech-live-api.onrender.com/api/v1/blog/news';
const TRENDS_API = 'https://elonatech-live-api.onrender.com/api/v1/blog/trends';
// Helper to generate XML entry
const generateXmlEntry = (path, lastmod = new Date().toISOString(), priority = 0.64) => `
<url>
  <loc>${DOMAIN}${path}</loc>
  <lastmod>${lastmod}</lastmod>
  <priority>${priority.toFixed(2)}</priority>
</url>`;
// Main function
async function generateSitemap() {
  try {
    // Fetch dynamic pages
    const [productsRes, blogsRes, newsRes, trendsRes] = await Promise.all([
      axios.get(PRODUCT_API),
      axios.get(BLOG_API),
      axios.get(NEWS_API),
      axios.get(TRENDS_API),
    ]);
    const products = productsRes.data.data || [];
    const blogs = blogsRes.data.data || [];
    const news = newsRes.data.data || [];
    const trends = trendsRes.data.data || [];
    // Generate dynamic URLs
    const productUrls = products.map(p => generateXmlEntry(`/product/${p.slug}/${p._id}`, p.updatedAt));
    const blogUrls = blogs.map(b => generateXmlEntry(`/blog/${b.slug}/${b._id}`, b.updatedAt));
    const newsUrls = news.map(n => generateXmlEntry(`/news/${n.slug}/${n._id}`, n.updatedAt));
    const trendsUrls = trends.map(t => generateXmlEntry(`/trends/${t.slug}/${t._id}`, t.updatedAt));
    // Combine all static and dynamic pages
    const allPagesXml = [
      ...staticPages.map(p => generateXmlEntry(p, new Date().toISOString(), 0.8)), // default priority
      ...productUrls,
      ...blogUrls,
      ...newsUrls,
      ...trendsUrls
    ].join('\n');
    // Full sitemap XML
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
<!-- generated with Node.js -->
${allPagesXml}
</urlset>`;
    // Write to public folder
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap, 'utf8');
    console.log(':white_check_mark: Sitemap generated at public/sitemap.xml');
  } catch (error) {
    console.error(':x: Error generating sitemap:', error);
  }
}
// Run the script
generateSitemap();
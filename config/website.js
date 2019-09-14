module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Site title', // Navigation and Site Title
  _titleAlt: 'Site title', // Title for JSONLD
  description: 'Site description',
  _url: 'https://siteurl.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/card.jpg', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'Short site title', // shortname for manifest. MUST be shorter than 12 characters
  author: 'author', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@twitterusername', // Twitter Username
  twitterCardType: 'summary_large_image', // Twitter card type
};

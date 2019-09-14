module.exports = {
  _pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  _title: 'Andres en Ingles', // Navigation and Site Title
  _titleAlt: 'Andres en Ingles', // Title for JSONLD
  description:
    'Andres Franklin is an award winning colombian youtuber and content creator based in New York city.',
  _url: 'https://andreseningles.net', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/logos/card.jpg', // Used for SEO

  // JSONLD / Manifest
  favicon: 'src/images/favicon.png', // Used for manifest favicon generation
  shortName: 'MDX Starter', // shortname for manifest. MUST be shorter than 12 characters
  author: 'andreseningles', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@andreseningles_', // Twitter Username
  twitterCardType: 'summary_large_image', // Twitter card type
};

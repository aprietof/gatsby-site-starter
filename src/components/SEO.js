import React from 'react';
import { Helmet } from 'react-helmet';
import useSiteMetadata from '../hooks/use-sitemetadata';

const SEO = ({ title, description, banner, pathname, article, image }) => {
  const {
    buildTime,
    siteMetadata: {
      defaultTitle,
      titleAlt,
      shortName,
      author,
      siteLanguage,
      logo,
      siteUrl,
      pathPrefix,
      defaultDescription,
      defaultBanner,
      twitter,
      twitterCardType,
    },
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: image || `${siteUrl}${banner || defaultBanner}`,
    url: `${siteUrl}${pathname || '/'}`,
  };

  const realPrefix = pathPrefix === '/' ? '' : pathPrefix;

  const articleSchemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'BlogPosting',
      '@id': seo.url,
      url: seo.url,
      name: title,
      alternateName: titleAlt || '',
      headline: title,
      image: {
        '@type': 'ImageObject',
        url: seo.image,
      },
      description: seo.description,
      datePublished: buildTime,
      dateModified: buildTime,
      author: {
        '@type': 'Person',
        name: author,
      },
      publisher: {
        '@type': 'Organization',
        name: author,
        logo: {
          '@type': 'ImageObject',
          url: siteUrl + realPrefix + logo,
        },
      },
      isPartOf: siteUrl,
      mainEntityOfPage: {
        '@type': 'WebSite',
        '@id': siteUrl,
      },
    },
  ];

  const defaultSchemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      '@id': siteUrl,
      url: siteUrl,
      name: defaultTitle,
      alternateName: titleAlt || '',
    },
  ];

  const schemaOrgJSONLD = article ? articleSchemaOrgJSONLD : defaultSchemaOrgJSONLD;

  return (
    <>
      <Helmet title={seo.title}>
        <html lang={siteLanguage} />

        {/* General tags */}
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta name="apple-mobile-web-app-title" content={shortName} />
        <meta name="application-name" content={shortName} />

        {/* OpenGraph tags */}
        <meta property="og:url" content={seo.url} />
        <meta property="og:type" content={article ? 'article' : 'website'} />
        {seo.title && <meta property="og:title" content={seo.title} />}
        {seo.description && <meta property="og:description" content={seo.description} />}
        {seo.image && <meta property="og:image" content={seo.image} />}

        {/* Twitter Card tags */}
        <meta name="twitter:card" content={twitterCardType || 'summary_large_image'} />
        {twitter && <meta name="twitter:creator" content={twitter} />}
        {seo.title && <meta name="twitter:title" content={seo.title} />}
        {seo.description && <meta name="twitter:description" content={seo.description} />}
        {seo.image && <meta name="twitter:image" content={seo.image} />}

        {/* SchemaOrg */}
        <script type="application/ld+json">{JSON.stringify(schemaOrgJSONLD)}</script>
      </Helmet>
    </>
  );
};

export default SEO;

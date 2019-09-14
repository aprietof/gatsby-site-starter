import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          defaultTitle: title
          titleAlt
          shortName
          author
          siteLanguage
          logo
          siteUrl: url
          pathPrefix
          defaultDescription: description
          defaultBanner: banner
          twitter
          twitter_card_type: twitterCardType
        }
      }
    }
  `);

  return data.site;
};

export default useSiteMetadata;

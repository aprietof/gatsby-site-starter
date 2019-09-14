import React from 'react';
import getVideoId from 'get-video-id';
import styled from 'styled-components';
import { Tweet } from 'react-twitter-widgets';
import getTweetId from 'twitter-url-parser';
import InstagramEmbed from 'react-instagram-embed';
import ResponsiveIframe from './ResponsiveIframe';
import withLazyLoad from './withLazyLoad';

const Embed = ({ html, provider, title, url }) => {
  return (
    <>
      {(() => {
        switch (provider.toLowerCase()) {
          case 'youtube':
            return (
              <ResponsiveIframe
                src={`https://www.youtube.com/embed/${getVideoId(url).id}?feature=oembed`}
                title={title || ''}
              />
            );

          case 'twitter':
            return (
              <ContainedIframeWrapper>
                <Tweet tweetId={getTweetId(url).id} />
              </ContainedIframeWrapper>
            );

          case 'vimeo':
            return (
              <ResponsiveIframe
                src={`https://player.vimeo.com/video/${getVideoId(url).id}`}
                title={title}
              />
            );

          case 'instagram':
            return (
              <ContainedIframeWrapper>
                <InstagramEmbed url={url} hideCaption="false" />
              </ContainedIframeWrapper>
            );

          default:
            return <DefaultEmbed dangerouslySetInnerHTML={{ __html: html }} />;
        }
      })()}
    </>
  );
};

export default withLazyLoad(Embed, { rootMargin: '0px 0px 400px 0px' });

const ContainedIframeWrapper = styled.div`
  margin: 0 auto;
  max-width: 500px;
`;

const DefaultEmbed = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 100%;
`;

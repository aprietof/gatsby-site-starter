import React from 'react';
import styled from 'styled-components';

export default function ResponsiveIframe({ src, title }) {
  return (
    <Wrapper>
      <iframe
        allowFullScreen
        frameBorder="0"
        height="100%"
        src={src}
        title={title || ''}
        width="100%"
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 0;
  margin-bottom: 20px;
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;

  iframe {
    left: 0;
    position: absolute;
    top: 0;
  }
`;

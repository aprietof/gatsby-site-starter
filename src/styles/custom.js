import { css } from 'styled-components';

const custom = css`
  .stack {
    > * + * {
      margin-top: 1.75rem;
    }
  }
`;

export default custom;

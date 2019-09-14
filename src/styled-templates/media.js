import reduce from 'lodash/reduce';
import { css } from 'styled-components';

const deviceWidths = {
  xs: 320,
  s: 576,
  m: 768,
  l: 992,
  xl: 1200,
};

export default reduce(
  deviceWidths,
  (memo, deviceWidth, deviceWidthKey) => ({
    ...memo,
    [deviceWidthKey]: (...args) => css`
      @media (min-width: ${deviceWidth / 16}em) {
        ${css(...args)};
      }
    `,
  }),
  {}
);

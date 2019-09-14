import Typography from 'typography';

// The scaleRatio will be overwritten for smaller breakpoints in src/components/Layout

const typography = new Typography({
  title: 'Adrian Prieto Blog',
  baseFontSize: '18px',
  baseLineHeight: 1.45,
  headerFontFamily: [
    'Roboto',
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  bodyFontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Hind Vadodara',
    'Lora',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  scaleRatio: 3.157,
  headerWeight: 700,
  overrideStyles: () => ({
    img: {
      marginBottom: 0,
    },
    h1: {
      letterSpacing: '-0.03em',
      fontWeight: '800',
    },
    h2: {
      letterSpacing: '-0.03em',
      fontWeight: '800',
    },
  }),
});

export default typography;

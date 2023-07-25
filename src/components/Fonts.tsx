import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'bukhari';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: url('.fonts/BukhariScript-Regular.otf') format('otf');}`
    }
  />
);

export default Fonts;

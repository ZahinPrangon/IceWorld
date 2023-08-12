import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* latin */
      @font-face {
        font-family: 'AlternateGotNo1D';
        src: url('../../public/fonts/AlternateGotNo1D.ttf') format('truetype');
        /* Add other font formats here */
        font-weight: normal;
        font-style: normal;
      }
      `}
  />
);

export default Fonts;

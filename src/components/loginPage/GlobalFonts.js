// import SpotifyFont from '../assets/fonts/ProductSans-Bold.ttf';
import SpotifyFontBlack from '../assets/fonts/ProductSans-Black.ttf';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @font-face {
    font-family: "SpotifyFont";
    src: local('SpotifyFont'), url('${SpotifyFontBlack}') format('TrueType');
    font-weight: 900;
  }
`;

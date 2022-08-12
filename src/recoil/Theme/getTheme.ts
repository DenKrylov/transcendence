import { selector } from "recoil";
import { themeState } from './Theme';

export const getThemeState = selector({
  key: 'GetTheme',
  get: ({get}) => {
      if(get(themeState)) {
        return {
          backgroundNormal: 'rgb(49,54,59)',
          backgroundAlternate: 'rgb(35,38,41)',
          foregroundInactive: 'rgb(189,195,199)',
          foregroundNormal: 'rgb(239,240,241)',
          decorationFocus: 'rgb(61,174,233)',
          decorationHover: 'rgb(147,206,233)',
          foregroundLink: 'rgb(41,128,185)',
          foregroundNegative: 'rgb(218,68,83)',
          foregroundNeutral: 'rgb(246,116,0)',
          foregroundPositive: 'rgb(39,174,96)',
          foregroundVisited: 'rgb(127,140,141)',
        }
      } else {
        return {
          backgroundNormal: 'rgb(239,240,241)',
          backgroundAlternate: 'rgb(189,195,199)',
          foregroundInactive: 'rgb(127,140,141)',
          foregroundNormal: 'rgb(35,38,41)',
          decorationFocus: 'rgb(61,174,233)',
          decorationHover: 'rgb(147,206,233)',
          foregroundLink: 'rgb(41,128,185)',
          foregroundNegative: 'rgb(218,68,83)',
          foregroundNeutral: 'rgb(246,116,0)',
          foregroundPositive: 'rgb(39,174,96)',
          foregroundVisited: 'rgb(127,140,141)',
        }
      }
    }
  },
);

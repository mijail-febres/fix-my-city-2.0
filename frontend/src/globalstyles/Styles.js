import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        color: black;
        outline: none;
        padding: 0;
        font-size: 16px;
        font-family: Roboto, sans-serif;
        font-weight: normal;
    }

`

export const defaultTheme = {
    
    // Colors:
    blackColor: '#121212',
    aquaColor: '#8affc1',
    greenColor: '#329f5b',
    brightGreenColor: '#5fff67',
    darkGreenColor: '#245b55',
    greyColor: '#f5f5f5',
    darkGreyColor: '#A5A5A5',

    
    fontSizeS: "10px",
    fontSizeM: "14px",
    fontSizeL: "20px",


    // // Sizes
    // controlHeight: '40px',
    // controlHeightMini: '24px',
    // controlHeightSmall: '32px',
    // controlHeightLarge: '48px',
    // spaceXXS: '4px',
    // spaceXS: '8px',
    // spaceS: '16px',
    // spaceM: '24px',
    // spaceL: '32px',
    // spaceXL: '48px',
    // spaceXXL: '220px',

    // // Text Size
    // textSizeXXL: '32px',
    // textSizeXL: '24px',
    // textSizeL: '20px',
    // textSizeM: '15px',
    // textSizeDefault: "16px",
    // textSizeS: '12px',

    // // Text Weight
    // textWeightThin: '300',
    // textWeightRegular: '400',
    // textWeightMedium: '500',
    // textWeightBold: '700'

}


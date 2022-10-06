/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: { 
        'button': '20px',
        'cards': '54px',
        'input': '7px',
        'user-image': '50%',
        'modalSucess': '50px',
        'modalAlert': '17px'
      }
    },
    colors: { 
      'navBg': '#3DCC67',
      'navFontColor': '#316B44',
      'buttonColor': '#3DCC67',
      'firstBoxBg': '#6BBD99',
      'secondBoxBg': '#ACEFA4',
      'cardGreenBg': '#6DEE96',
      'hoverFontColor': '#83AF1C',
      'cardGrayBg': '#D9D9D9',
      'faqGreenBg': '#40FF47',
      'faqGrayBg': '#FEFEFE',
      'footerBG': '#3DCC67',
      'bgModalSuccess': '#C8E9CF',
      'bgModalAlert': '#BCEF93',
      'colorFontHeadline': '#212529',
      'colorFontParagraph': '#495057',
      'white': '#F3F3F3'
    },
    fontFamily: { 
      'primary': ['DM Sans', 'sans-serif'],
      'secondary': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
};

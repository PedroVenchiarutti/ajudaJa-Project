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
      }, 
      keyframes: { 
        toDown: { 
          '0%': {transform: 'translateY(-100px)', opacity: '0'}, 
          '100%': {transform: 'translateY(0px)', opacity: '1'}
        },
        toTop: { 
          '0%': {transform: 'translateY(0px)', opacity: '1'}, 
          '100%': {transform: 'translateY(-100px)', opacity: '0', visibility: 'hidden'}
        },
        toDown2: { 
          '0%': {transform: 'translateY(-100px)', opacity: '1'}, 
          '100%': {transform: 'translateY(0px)', opacity: '1'}
        },
        toTop2: { 
          '0%': {transform: 'translateY(0px)', opacity: '1'}, 
          '100%': {transform: 'translateY(-100px)', opacity: '1', visibility: 'hidden'}
        },
        toRight: { 
          '0%': {transform: 'translateX(20px)', opacity: '0'}, 
          '100%': {transform: 'translateX(0)', opacity: '1'}
        },
        toLeft: { 
          '0%': {transform: 'translateX(-20px)', opacity: '0'}, 
          '100%': {transform: 'translateX(0)', opacity: '1'}
        }, 
        toDownFAQ: { 
          '0%': {transform: 'translateY(-10px)', opacity: '0.5'}, 
          '100%': {transform: 'translateY(0px)', opacity: '1'}
        },
        toUpFAQ: { 
          '0%': {transform: 'translateY(0px)', opacity: '1'}, 
          '100%': {transform: 'translateY(-5px)', opacity: '0', visibility: 'hidden'}
        }
      },
      animation: { 
        'CardInformationToDown': 'toDown 1000ms',
        'CardInformationToTop': 'toTop 500ms  both;',
        'noneAnimation': 'none',
        'CardInformationToDown2': 'toDown2 1000ms',
        'CardInformationToTop2': 'toTop2 1000ms both;',
        'contentClass':'toLeft 1000ms;',
        'contentClassReverse': 'toRight 1000ms;',
        'faqAnimationToDown':' toDownFAQ 500ms',
        'faqAnimationToTop':'toUpFAQ 500ms both',
        'Bounce': 'bounce 1s infinite',
      }
    },
    colors: { 
      'navBg': '#3DCC67',
      'navFontColor': '#316B44',
      'firstSessionFontColor': '#3DCC67',
      'buttonColor': '#3DCC67',
      'firstBoxBg': '#6BBD99',
      'secondBoxBg': '#ACEFA4',
      'cardGreenBg': '#6DEE96',
      'hoverFontColor': '#83AF1C',
      'cardGrayBg': '#D9D9D9',
      'faqGreenBg': '#3DCC67',
      'faqGrayBg': '#FEFEFE',
      'footerBG': '#3DCC67',
      'bgModalSuccess': '#C8E9CF',
      'bgModalAlert': '#BCEF93',
      'colorFontHeadline': '#212529',
      'colorFontParagraph': '#495057',
      'white': '#F3F3F3',
      'fontColor': '#fff',
    },
    fontFamily: { 
      'primary': ['DM Sans', 'sans-serif'],
      'secondary': ['Roboto', 'sans-serif']
    }
  },
  plugins: [],
};

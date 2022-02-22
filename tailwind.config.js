module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: 'hsl(238, 40%, 52%)',
        red: 'hsl(358, 79%, 66%)',
        lightBlue: 'hsl(239, 57%, 85%)',
        paleRed: 'hsl(357, 100%, 86%)',
        darkBlue: 'hsl(212, 24%, 26%)',
        grayBlue: 'hsl(211, 10%, 45%)',
        lightGray: 'hsl(223, 19%, 93%)',
        veryLigthGray: 'hsl(228, 33%, 97%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        rubik: ['Rubik'],
      },
    },
  },
  plugins: [],
};

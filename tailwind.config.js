module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        150: '9.375rem',
        200: '12.5rem',
      },
      height: {
        banner: 'calc(100vh - 25vh)',
        skeletonStore: '22.8125rem',
      },
      minWidth: {
        150: '9.375rem',
      },
      minHeight: {
        150: '9.375rem',
      },
      maxHeight: {
        500: '33.33333333rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

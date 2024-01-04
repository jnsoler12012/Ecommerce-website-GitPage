module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx}', './dist/index.html'],
    theme: {
        container: {
            padding: {
                DEFAULT: '30px',
                lg: '0',
            },
        },
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1440px',
        },
        extend: {
            fontFamily: {
                body: ['Inter', 'sans-serif']
            },
            colors: {
                'neutralSilver': '#F5F7FA',
                'neutralDGrey': '#4D4D4D',
                'brandPrimary': '#4CAF4F',
                'neutralGray': '#717171',
                'gray900': '#18191F',
                'iconBackground': 'rgba(255, 255, 255, 0.16)'
            }
        },
    },
    plugins: [],
};
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
            colors: {
                'neutralSilver': '#F5F7FA',
                'neutralDGrey': '#F5F7FA',
                'brandPrimary': '#4CAF4F',
                'neutralGray': '#717171',
            }
        },
    },
    plugins: [],
};
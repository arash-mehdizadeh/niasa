module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        
        extend: {
            screens: {
                'wsm': {'min': '300px', 'max': '767px'},
                'wmd': {'min': '768px', 'max': '991px'},
                'wlg': {'min': '992px', 'max': '1199px'},
                'wxl': {'min': '1200px'},
              },
            colors: {
                blue: '#da373d',
            },
            borderRadius: {
                'prim': '20px',
                'sec': '31px',
                'img': '40px',
                'ico': '49px',
            },
            lineHeight: {
                'btn': '78px',
            },
            colors: {
                'gray-1': "#F1F1F1",
            },
            boxShadow: {
                '1xl': '0px 37px 50px rgba(0, 51, 255, 0.18)',
            }
        },
        container: {
            center: true,
        },
        fontFamily: {
            'gilroy':['gilroy'] ,
            'thin': ['yekanbakh'],
            'light': ['yekanbakh'],
            'regular': ['yekanbakh'],
            'semibold': ['yekanbakh'],
            'bold': ['yekanbakh'],
            'extrabold': ['yekanbakh'],
            'black': ['yekanbakh'],
        },
        fontSize: {
            '1x': ['18px', '28px'],
        }
    },
    plugins: [],
}

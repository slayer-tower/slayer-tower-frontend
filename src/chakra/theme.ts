import { extendTheme } from '@chakra-ui/react';

import type { GlobalStyleProps } from '@chakra-ui/theme-tools';

export default extendTheme({

    // General configuration for Chakra UI defaults
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },

    // Custom styles for Chakra UI
    // Extends the global styles
    styles: {
        global: ( props: GlobalStyleProps ) => ({
            'html, body': {
                backgroundColor: props.colorMode === 'dark' ? '#121212' : 'gray.200'
            }
        })
    },

    colors: {
        gray: {
            "50": "#F2F2F2",
            "100": "#DBDBDB",
            "200": "#C4C4C4",
            "300": "#ADADAD",
            "400": "#969696",
            "500": "#808080",
            "600": "#666666",
            "700": "#4D4D4D",
            "800": "#333333",
            "900": "#1A1A1A"
        },
        ecto: {
            "50": "#E5FFF9",
            "100": "#B8FFEE",
            "200": "#8AFFE3",
            "300": "#5CFFD8",
            "400": "#2EFFCE",
            "500": "#00FFC3",
            "600": "#00CC9C",
            "700": "#009975",
            "800": "#00664E",
            "900": "#003327"
        }
    }
});
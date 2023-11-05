import { extendTheme } from '@chakra-ui/react';

import type { GlobalStyleProps } from '@chakra-ui/theme-tools';

export default extendTheme({

    // General configuration for Chakra UI defaults
    config: {
        initialColorMode: 'light',
        useSystemColorMode: false,
    },


    fonts: {
        heading: `'Play', sans-serif`
    },

    colors: {
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
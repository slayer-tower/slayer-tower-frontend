import { ChakraProvider } from '@chakra-ui/react';

import theme from './chakra/theme';

const App = () => {

    return (
        <ChakraProvider theme={ theme }>

        </ChakraProvider>
    );
}

export default App;
import { ChakraProvider } from '@chakra-ui/react';

import theme from './chakra/theme';
import Navigation from '@components/Navigation';

const App = () => {

    return (
        <ChakraProvider theme={ theme }>
            <Navigation />
        </ChakraProvider>
    );
}

export default App;
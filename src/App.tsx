import { ChakraProvider } from '@chakra-ui/react';

import theme from './chakra/theme';
import Layout from './pages/Layout';

const App = () => {

    return (
        <ChakraProvider theme={ theme }>
            <Layout>H</Layout>
        </ChakraProvider>
    );
}

export default App;
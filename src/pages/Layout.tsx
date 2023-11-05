import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import Navigation from '@components/Navigation';
import Sidebar from '@components/Sidebar/Sidebar';
import { useState } from 'react';

interface Properties {
    // Passed children components
    children: React.ReactNode;
}

const Layout = ({ children }: Properties) => {

    const [ sidebarIsOpen, setSidebarIsOpen ] = useState<boolean>(false);

    return (
        <Flex height={ 'calc(100vh)' } flexDirection={ 'column' }>
            <Navigation toggled={ sidebarIsOpen } toggleHamburger={ setSidebarIsOpen } />
            <HStack flex={ 1 }>
                <Box display={ { base: 'none', md: 'block' } }>
                    <Sidebar sidebarIsOpen={ sidebarIsOpen }/>
                </Box>
                <Container>Main content</Container>
            </HStack>
        </Flex>
    );
}

export default Layout;

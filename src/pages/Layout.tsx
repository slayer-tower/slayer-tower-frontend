import { Box, Container, Drawer, Flex, HStack, useDisclosure } from '@chakra-ui/react'
import Navigation from '@components/Navigation';
import Sidebar from '@components/Sidebar/Sidebar';
import { useState } from 'react';

interface Properties {
    // Passed children components
    children: React.ReactNode;
}

const Layout = ({ children }: Properties) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Flex height={ 'calc(100vh)' } flexDirection={ 'column' }>
            <Navigation toggled={ isOpen } onOpen={ onOpen } onClose={ onClose }/>
            <HStack flex={ 1 }>
                <Box display={ { base: 'none', lg: 'block' } }>
                    <Sidebar sidebarIsOpen={ isOpen }/>
                </Box>
                <Container>{isOpen ? 'open': 'closed'}</Container>
            </HStack>

        </Flex>
    );
}

export default Layout;

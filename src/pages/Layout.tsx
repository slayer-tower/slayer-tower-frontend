import { Box, Center, Container, Drawer, DrawerContent, DrawerOverlay, Flex, HStack, Heading, Image, Stack, useDisclosure } from '@chakra-ui/react'

import Navigation from '@components/Navigation';
import Sidebar from '@components/Sidebar/Sidebar';
import skull from '@assets/images/slayer-skull.png';
import useWindowResizeEffect from '@hooks/useWindowResizeEffect';

interface Properties {
    // Passed children components
    children: React.ReactNode;
}

const Layout = ({ children }: Properties) => {

    const { isOpen, onOpen, onClose } = useDisclosure()

    useWindowResizeEffect(onClose);

    return (
        <Flex height={ 'calc(100vh)' } flexDirection={ 'column' }>
            <Navigation toggled={ isOpen } onOpen={ onOpen } onClose={ onClose }/>
            <HStack flex={ 1 }>
                <Box display={ { base: 'none', lg: 'block' } } boxShadow={ '0.1rem 0rem 1rem rgba(0, 0, 0, 0.3)' } borderRight={ '0.5px solid rgba(255, 255, 255, 0.1)' } height={ 'full' }>
                    <Sidebar />
                </Box>
                <Container height={ 'full' }>{isOpen ? 'open': 'closed'}</Container>
            </HStack>
            <Drawer isOpen={ isOpen } onClose={ onClose } placement={ 'left' }>
                <DrawerOverlay />
                <DrawerContent paddingX='2.5rem' paddingY='0.5rem' maxWidth={ { base: '18rem' } }>
                    <HStack>
                        <Image src={ skull } />
                        <Stack as={ Center } gap={0}>
                            <Heading size={ 'md' }>SLAYER</Heading>
                            <Heading size={ 'md' }>TOWER</Heading>
                        </Stack>
                    </HStack>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}

export default Layout;

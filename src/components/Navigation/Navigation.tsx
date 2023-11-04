import { Box, Center, HStack, Heading, Image, Stack } from '@chakra-ui/react';

import skull from '@assets/images/slayer-skull.png';

const Navigation = () => {

    return (
        <HStack paddingX='2.5rem' paddingY='0.5rem' backgroundColor={ 'gray.900' }>
            <Image src={ skull } />
            <Stack as={ Center } gap={0}>
                    <Heading size={ 'md' }>SLAYER</Heading>
                    <Heading size={ 'md' }>TOWER</Heading>
            </Stack>
        </HStack>
    );
}

export default Navigation;
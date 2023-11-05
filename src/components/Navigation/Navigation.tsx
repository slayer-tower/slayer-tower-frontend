import { Dispatch, SetStateAction } from 'react';
import { Box, Button, Center, Flex, HStack, Heading, Image, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { Squash as Hamburger } from 'hamburger-react';

import skull from '@assets/images/slayer-skull.png';

interface Properties {

    onOpen: Dispatch<SetStateAction<boolean>>;

    onClose: Dispatch<SetStateAction<boolean>>;

    toggled: boolean;
}

const Navigation = ({ onOpen, onClose, toggled }: Properties) => {

    return (
        <Flex boxShadow={ '0 0.1rem 1rem rgba(0, 0, 0, 0.3)' } borderBottom={ '0.5px solid rgba(255, 255, 255, 0.1)' } paddingX='2.5rem' paddingY='0.5rem' justifyContent={ 'space-between' } alignItems={ 'center' }>
            <HStack>
                <Image src={ skull } />
                <Stack as={ Center } gap={0}>
                    <Heading size={ 'md' }>SLAYER</Heading>
                    <Heading size={ 'md' }>TOWER</Heading>
                </Stack>
            </HStack>
            <HStack>
                <Button leftIcon={ <AddIcon /> } display={ { base: 'none', md: 'flex' } } >
                    JOIN EVENT
                </Button>
                <Box display={ { lg: 'none' } }>
                    <Hamburger rounded toggled={ toggled } toggle={ toggled ? onClose : onOpen }/>
                </Box>
            </HStack>
        </Flex>
    );
}

export default Navigation;
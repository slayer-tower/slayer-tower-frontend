import { Box, Button, Center, Flex, HStack, Heading, Image, Stack } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';

import { Squash as Hamburger } from 'hamburger-react';

import skull from '@assets/images/slayer-skull.png';
import { Dispatch, SetStateAction } from 'react';

interface Properties {

    toggleHamburger: Dispatch<SetStateAction<boolean>>;

    toggled: boolean;
}

const Navigation = ({ toggleHamburger, toggled }: Properties) => {

    return (
        <Flex boxShadow={ '0 0.1rem 1rem rgba(0, 0, 0, 0.3)' } borderBottom={ '0.5px solid rgba(255, 255, 255, 0.1)' } paddingX='2.5rem' paddingY='0.5rem' justifyContent={ 'space-between' } alignItems={ 'center' }>
            <Box display={ { md: 'none' } }>
                <Hamburger rounded toggled={ toggled } toggle={ toggleHamburger }/>
            </Box>
            <HStack>
                <Image src={ skull } />
                <Stack as={ Center } gap={0}>
                    <Heading size={ 'md' }>SLAYER</Heading>
                    <Heading size={ 'md' }>TOWER</Heading>
                </Stack>
            </HStack>
            <Button leftIcon={ <AddIcon /> }>
                JOIN EVENT
            </Button>
        </Flex>
    );
}

export default Navigation;
import { Button, VStack } from '@chakra-ui/react';

import { FiHome } from 'react-icons/fi';
import { HiOutlineViewGridAdd } from 'react-icons/hi';

interface SidebarButtonProperties {
    text: string
    icon: React.ReactElement
}

const SLOTS = {

    none: [
        {
            text: 'Home',
            icon: <FiHome />
        },
        {
            text: 'Create Event',
            icon: <HiOutlineViewGridAdd />
        }
    ]
}

const NavigationSidebar = () => {

    return (
        <VStack height={ 'full' } width={ '15rem' } padding={ '1.5rem' }>
            { SLOTS.none.map(( route, index ) => (
                <SidebarButton key={ index } text={ route.text } icon={ route.icon } />
            )) }
        </VStack>
    );
}

const SidebarButton = ({ text, icon }: SidebarButtonProperties) => {
    return(
        <Button leftIcon={ icon } variant={ 'ghost' } width={ 'full' } justifyContent={ 'flex-start' }>
            { text }
        </Button>
    )
}

export default NavigationSidebar;
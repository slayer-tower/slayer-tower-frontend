import { VStack } from '@chakra-ui/react';

interface Properties {
    sidebarIsOpen: boolean
}

const Sidebar = ({ sidebarIsOpen }: Properties) => {

    return (
        <VStack height={ 'full' } width={ '20rem' } padding={ '1.5rem' }>
            <h1>Hello</h1>
        </VStack>
    );
}

export default Sidebar;
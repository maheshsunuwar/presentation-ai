import React from 'react';
import { Box, Flex , VStack } from '@chakra-ui/react';
import TemplateSelector from '../components/TemplateSelector';
import PresentationSlide from '../components/PresentationSlide';

function App() {
    return (
        // <Box w="80%" m="40px auto" p={4} bg="white" borderRadius="lg" boxShadow="md">
        //     <VStack spacing={4}>
        //         <TemplateSelector />
        //         <PresentationSlide />
        //     </VStack>
        // </Box>

        <Flex h="100vh" w="100vw" direction="row">
            {/* Presentation Area (75% width) */}
            <Box w="70%" bg="gray.100" p={4}>
                {/* <PresentationSlide /> */}
            </Box>
            {/* Content Area (25% width) */}
            <Box w="30%" bg="white" p={4}>
                <PresentationSlide />
                {/* <TemplateSelector /> */}
                {/* Content will be displayed here */}
            </Box>
        </Flex>
    );
}

export default App;

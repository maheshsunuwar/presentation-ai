import React from 'react';
import { useState } from 'react';

import { Box, Input, Button, VStack, Textarea } from '@chakra-ui/react';
import { motion } from "framer-motion";
import LoadingThreeDotsJumping from "../utils/spinner";
import { preprocessCSS } from 'vite';

function PresentationSlide() {
//     const [slideContent, setSlideContent] = React.useState('');

//     return (
//         <Box bg="gray.100" p={4} borderRadius="lg">
//             <Textarea
//                 value={slideContent}
//                 onChange={(e) => setSlideContent(e.target.value)}
//                 placeholder="Slide content"
//                 size="lg"
//             />
//         </Box>
//     );
// }

    const [prompt, setPrompt] = useState('');
    const [numSlides, setNumSlides] = useState(5);
    // const [presentation, setPresentation] = useState<{ title: string; slides: { content: string }[] } | null>(null);
    const [presentation, setPresentation] = useState<{ presentation: { content: string }[] } | null>(null);
    const [loading, setLoading] = useState(false);

    const apiLink = 'http://localhost:3200'
    const handleGenerate = async () => {
        setLoading(true);
        console.log(`${apiLink}/generate-presentation`)
        // Call backend API to generate presentation based on prompt
        const response = await fetch(`${apiLink}/generate-presentation`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // 'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                 'prompt': prompt,
                 'numSlides': numSlides
                })
        });
        // console.log(response)
        const data = await response.json();
        console.log('data:', data)
        setPresentation(data);
        setLoading(false);
    };

    return (
        // <Box m="40px auto" p={4} bg="white" borderRadius="lg" boxShadow="md">
            <VStack spacing={4} h='100%'>
                <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Enter prompt"
                    size="lg"
                    w='100%'
                />
                <Input
                    type="number"
                    value={numSlides}
                    onChange={(e) => setNumSlides(Number(e.target.value))}
                    placeholder="Number of slides"
                    size="lg"
                    w='100%'
                />
                <Button
                        onClick={handleGenerate}
                        colorScheme="blue"
                        size="md"
                        w='100%'
                        disabled={loading}>
                        {loading ? <LoadingThreeDotsJumping  />: 'Generate Presentation' }

                </Button>
                {
                    // loading ?

                    // : null
                }
                {presentation && (
                    <VStack spacing={4} w='100%' h='100%'>
                        {/* {presentation.slides.map((slide, index) => ( */}
                            {/* <Box bg="gray.100" p={4} borderRadius="lg"> */}
                                <Textarea
                                    value={presentation.presentation}
                                    onChange={(e) => {
                                        // const newSlides = [...presentation.slides];
                                        // newSlides[index].content = e.target.value;
                                        // setPresentation({ ...presentation, slides: newSlides });
                                    }}
                                    placeholder="Slide content"
                                    size="lg"
                                    h='100%'
                                />
                            {/* </Box> */}
                        {/* ))} */}
                    </VStack>
                )}
            </VStack>
        // </Box>
    );
}

export default PresentationSlide;

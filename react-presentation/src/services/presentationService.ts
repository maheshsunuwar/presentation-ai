import axios from 'axios';

const generatePresentation = async (prompt: string, numSlides: number) => {
    try {
        const response = await axios.post('/api/generate-presentation', {
            prompt,
            numSlides,
        });
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

export default generatePresentation;

import { ButtonGroup, Button, Flex} from '@chakra-ui/react';
import React from 'react';

const templates = [
    { name: 'Minimalist', colorScheme: 'gray' },
    { name: 'Futuristic', colorScheme: 'teal' },
    // { name: 'Creative', colorScheme: 'orange' },
];

function TemplateSelector() {
    const [selectedTemplate, setSelectedTemplate] = React.useState(templates[0]);

    return (
        <Flex w='100%' >
            <ButtonGroup spacing={4}>
                {templates.map((template) => (
                    <Button
                    key={template.name}
                    colorScheme={template.colorScheme}
                    onClick={() => setSelectedTemplate(template)}
                    variant={selectedTemplate === template ? 'solid' : 'outline'}
                    >
                        {template.name}
                    </Button>
                ))}
            </ButtonGroup>
        </Flex>
    );
}

export default TemplateSelector;

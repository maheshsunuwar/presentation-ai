import litellm
import os
from dotenv import load_dotenv

dotenv_path = './fast-api-presentation/.env'
load_dotenv(dotenv_path=dotenv_path)

# class PresentationSevice:
#     def __init__():
#         pass

def generate_presentation(prompt:str, num_of_slides:int):
    # Generate content for each slide
    # for i in range(num_slides):
        # Use OpenAI to generate slide content based on title and slide number
        # prompt = f"Generate content for slide {i+1} of a presentation titled '{title}'"
    prompt = f"""Analyze this user prompt and
        Generate a presentation in sli.dev format according to the prompt and
        for {num_of_slides} slides. prompt: {prompt}\
    """
    response = litellm.completion(
        model="ollama/llama3.2",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
         ],
        api_base=os.getenv('OLLAMA_API_BASE'),
        max_tokens=5000,
        # response_format={
        #      "type": "json_object"
        # # },
          # stream=True,
    )

    # print(response.choices[0].message.content)
    content = response.choices[0].message.content

    return content

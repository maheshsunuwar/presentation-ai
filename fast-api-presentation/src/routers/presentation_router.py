from pydantic import BaseModel
from fastapi import APIRouter
from services.presentation_service import generate_presentation

class PresentationRequest(BaseModel):
    prompt: str
    num_of_slides: int

router = APIRouter()

@router.post('/generate-presentation')
def generate_presentation_request(request: PresentationRequest):
    try:
        presentation = generate_presentation(request.prompt, request.num_of_slides)
        return {"presentation": presentation}
    except Exception as e:
        print('Exeception')

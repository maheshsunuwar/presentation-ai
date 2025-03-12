from pydantic import BaseModel
from fastapi import APIRouter
from services.presentation_service import generate_presentation
import json

class PresentationRequest(BaseModel):
    prompt: str
    numSlides: int

router = APIRouter()

@router.post('/generate-presentation')
def generate_presentation_request(request: PresentationRequest):
    try:
        presentation = generate_presentation(request.prompt, request.numSlides)
        return {"presentation": presentation}
    except Exception as e:
        print(e)

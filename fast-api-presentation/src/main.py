from fastapi import FastAPI

#routers
from routers import presentation_router

app = FastAPI()

app.include_router(presentation_router.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

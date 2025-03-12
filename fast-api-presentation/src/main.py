from fastapi import FastAPI

#routers
from routers import presentation_router
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()


# Routers
origins = [
    "http://localhost:3201"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(presentation_router.router)

@app.get("/")
async def root():
    return {"message": "Hello World"}

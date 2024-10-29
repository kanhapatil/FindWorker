from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from users.views import user_router
from workers.views import worker_router
from auth.views import auth_router
from search_workers.views import search_workers_router
from notification import sse_router


app = FastAPI()

# CORS settings
origins = [
    "http://localhost:5173",  # React app
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  
    allow_headers=["*"],  
)


## Register the auth router
app.include_router(auth_router)

## Register the user router
app.include_router(user_router)

## Register the worker router
app.include_router(worker_router)

## Register the search workers router
app.include_router(search_workers_router)

## Register the sse router
app.include_router(sse_router)

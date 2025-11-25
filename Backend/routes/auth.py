from fastapi import APIRouter

router = APIRouter()

USERS = {
    "santhosh": "1234",
    "admin": "admin"
}

@router.post("/login")
def login(username: str, password: str):
    if username in USERS and USERS[username] == password:
        return {"status": "success", "user": username}
    return {"status": "error", "message": "Invalid credentials"}

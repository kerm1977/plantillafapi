# Importar el módulo de Fastapi
	# uvicorn main:app --reload  --> main.py es para arrancar el fichero creado main.py dentro del proyecto 
	# pero si el archivo se llamar pepino se escribe uvicorn pepino:app --reload y reload recarga en vivo cada cambio.
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
	return "Hola muchachos"
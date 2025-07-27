from abc import ABC, abstractmethod
from app import db
from flask_sqlalchemy import SQLAlchemy

class Estacionamiento(db.Model):
    __abstract__ = True

    altitud = db.Column(db.Float, nullable=False)
    latitud = db.Column(db.Float, nullable=False)
    icono_mapa = db.Column(db.String(255), nullable=False)

    def __init__(self, latitud: float, altitud: float, icono_mapa: str):
        self.latitud = latitud
        self.altitud = altitud
        self.icono_mapa = icono_mapa
    
    @abstractmethod
    def mostrar_informacion(self):
        pass
from datetime import date  
from app import db

class Foto(db.Model):
    __tablename__ = 'fotos'

    id = db.Column(db.Integer, primary_key=True)
    ruta = db.Column(db.String(255), nullable=False)
    fecha_subida = db.Column(db.Date, default=date.today)

    estacionamiento_id = db.Column(db.Integer, db.ForeignKey('estacionamientos_privados.id'), unique=True)

    @property
    def serialize(self):
        return {
            "id": self.id,
            "fecha_subida": self.fecha_subida.isoformat() if self.fecha_subida else None,
            "ruta": self.ruta
        }
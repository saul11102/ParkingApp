from app import db

class Tarifa(db.Model):
    __tablename__ = 'tarifas'

    id = db.Column(db.Integer, primary_key=True)
    nombre = db.Column(db.String(100), nullable=False)
    descripcion = db.Column(db.String(255))
    precio = db.Column(db.Float, nullable=False)
    moneda = db.Column(db.String(10), nullable=False)

    estacionamiento_id = db.Column(db.Integer, db.ForeignKey('estacionamientos_privados.id'), nullable=False)

    @property
    def serialize(self):
        return {
            "id": self.id,
            "nombre": self.nombre,
            "descripcion": self.descripcion,
            "precio": self.precio,
            "moneda": self.moneda
        }
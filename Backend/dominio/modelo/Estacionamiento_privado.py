from app import db
from dominio.modelo.Estacionamiento import Estacionamiento
from dominio.modelo.Estados_estacionamiento import EstadosEnum 

class Estacionamiento_privado(Estacionamiento):
    __tablename__ = 'estacionamientos_privados'

    id = db.Column(db.Integer, primary_key=True)
    capacidad = db.Column(db.Integer, nullable=False)
    descripcion = db.Column(db.String(255))
    direccion = db.Column(db.String(255))
    nombre = db.Column(db.String(255))

    estado = db.Column(db.Enum(EstadosEnum), nullable=False, default=EstadosEnum.DISPONIBLE)

    # Relaciones
    tarifas = db.relationship("Tarifa", backref="estacionamiento_privado", lazy=True)
    foto = db.relationship("Foto", uselist=False, backref="estacionamiento_privado")

    # métodos

    def __init__(self, latitud, altitud, icono_mapa, capacidad, descripcion='', direccion='', nombre='', estado=EstadosEnum.DISPONIBLE):
        self.latitud = latitud
        self.altitud = altitud
        self.icono_mapa = icono_mapa
        self.capacidad = capacidad
        self.descripcion = descripcion
        self.direccion = direccion
        self.nombre = nombre
        self.estado = estado

    @property
    def serialize(self):
        return {
        'id': self.id,
        'latitud': self.latitud,
        'altitud': self.altitud,
        'icono_mapa': self.icono_mapa,
        'capacidad': self.capacidad,
        'descripcion': self.descripcion,
        'direccion': self.direccion,
        'nombre': self.nombre,
        'estado': self.estado.value,
        'foto': self.foto.serialize if self.foto else None,
        'tarifas': [tarifa.serialize for tarifa in self.tarifas] if self.tarifas else []
    }

    def mostrarInformacion(self):
        return f"{self.descripcion} - Dirección: {self.direccion}"
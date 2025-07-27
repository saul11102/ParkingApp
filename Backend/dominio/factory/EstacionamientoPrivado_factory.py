from dominio.factory.Estacionamiento_factory import Estacionamiento_factory
from dominio.modelo.Estacionamiento_privado import Estacionamiento_privado
from dominio.modelo.Estados_estacionamiento import EstadosEnum

class EstacionamientoPrivado_factory(Estacionamiento_factory):
    def crear_estacionamiento(self, **kwargs) -> Estacionamiento_privado:
        return Estacionamiento_privado(
            latitud=kwargs['latitud'],
            altitud=kwargs['altitud'],
            icono_mapa=kwargs['icono_mapa'],
            capacidad=kwargs['capacidad'],
            descripcion=kwargs.get('descripcion', ''),
            direccion=kwargs['direccion'],
            nombre=kwargs['nombre'],
            estado=kwargs.get('estado', EstadosEnum.DISPONIBLE)
        )
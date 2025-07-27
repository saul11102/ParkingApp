
from abc import ABC, abstractmethod
from dominio.modelo.Estacionamiento_privado import Estacionamiento_privado
from dominio.modelo.Estados_estacionamiento import EstadosEnum

class Estacionamiento_factory(ABC):
    @abstractmethod
    def crear_estacionamiento(self, **kwargs):
        pass
from dominio.modelo.Estacionamiento_privado import Estacionamiento_privado
from app import db
from dominio.modelo.Tarifa import Tarifa
from dominio.modelo.Foto import Foto
from dominio.factory.EstacionamientoPrivado_factory import EstacionamientoPrivado_factory
from controlador.utils.Errors import Errors

class EstacionamientoPrivadoController:
    def __init__(self):
        self.creator = EstacionamientoPrivado_factory()

    def listar(self):
        return Estacionamiento_privado.query.all()
    
    # Guarda un nuevo estacionamiento privado en la base de datos.
    # Recibe un diccionario con los datos del estacionamiento y crea una instancia de Estacionamiento_privado.
    def guardar(self, data):
        try:    
            nuevo_est = self.creator.crear_estacionamiento(**data)

            if 'tarifas' in data:
                for t in data.get('tarifas', []):
                    tarifa = Tarifa(
                        nombre=t['nombre'],
                        descripcion=t.get('descripcion', ''),
                        precio=t['precio'],
                        moneda=t['moneda']
                    )
                    nuevo_est.tarifas.append(tarifa)

            if 'foto' in data:
                foto_data = data['foto']
                nueva_foto = Foto(ruta=foto_data['ruta'])
                nuevo_est.foto = nueva_foto

            db.session.add(nuevo_est)
            db.session.commit()
            return {
                "mensaje": "Estacionamiento guardado exitosamente",
                "estacionamiento": nuevo_est.id
            }
        except Exception as e:
            db.session.rollback()
            print(f"Error  al guardar estacionamiento: {e}")
            return {
                    "mensaje": Errors.mensaje(-1),
                    "detalle": str(e)  
                }

    # Modifica un estacionamiento privado existente.
    # Recibe un diccionario con los datos a modificar y actualiza los campos correspondientes.
    def modificar(self, data):
        try:
            est = Estacionamiento_privado.query.get(data['id'])
            if not est:
                return {
                    "mensaje": Errors.mensaje(-2),
                    "detalle": str(e)  
                }

            for campo in Estacionamiento_privado.__table__.columns.keys():
                if campo in data:
                    setattr(est, campo, data[campo])

            actuales = {t.id: t for t in est.tarifas}
            recibidas = set()
            campos_tarifa = ['nombre', 'descripcion', 'precio', 'moneda']

            for t in data.get('tarifas', []):
                if 'id' in t and t['id'] in actuales:
                    tarifa = actuales[t['id']]
                    for campo in campos_tarifa:
                        if campo in t:
                            setattr(tarifa, campo, t[campo])
                    recibidas.add(t['id'])
                else:
                    nueva_tarifa = Tarifa(**{c: t[c] for c in campos_tarifa if c in t})
                    est.tarifas.append(nueva_tarifa)
            for tid, tarifa in actuales.items():
                if tid not in recibidas:
                    est.tarifas.remove(tarifa)
                    db.session.delete(tarifa)
            db.session.commit()
            return {
                "mensaje": "Estacionamiento modificado exitosamente",
                "estacionamiento": est.id
            }

        except Exception as e:
            db.session.rollback()
            print(f"Error al modificar estacionamiento: {e}")
            return {
                "mensaje": Errors.mensaje(-3),
                "detalle": str(e)
            }
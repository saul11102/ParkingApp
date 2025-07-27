class Errors:
    errors = {
        "-1": "Error al guardar el estacionamiento, intente nuevamente.",
        "-2": "No se encontró el estacionamiento especificado.",
        "-3": "Error al modificar el estacionamiento, intente nuevamente.",
    }

    @staticmethod
    def mensaje(codigo):
        return Errors.errors.get(str(codigo), "Error desconocido")

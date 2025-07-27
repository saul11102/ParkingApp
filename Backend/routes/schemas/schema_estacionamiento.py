guardar_estacionamiento = {
    "type": "object",
    "properties": {
        "altitud": {"type": "float"},
        "latitud": {"type": "float"},
        "icono_mapa": {"type": "string"},
        "icono_mapa": {"type": "string"},
    },
    "required": ["altitud", "latitud", "icono_mapa"]
}

guardar_estacionamiento_privado = {
    "type": "object",
    "properties": {
        "latitud": {"type": "number"},
        "altitud": {"type": "number"},
        "icono_mapa": {"type": "string"},
        "capacidad": {"type": "integer"},
        "descripcion": {"type": "string"},
        "direccion": {"type": "string"},
        "nombre": {"type": "string"},
        "tarifas": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "nombre": {"type": "string"},
                    "descripcion": {"type": "string"},
                    "precio": {"type": "number"},
                    "moneda": {"type": "string"}
                },
                "required": ["nombre", "precio", "moneda"]
            }
        },
        "foto": {
            "type": "object",
            "properties": {
                "ruta": {"type": "string"}
            },
            "required": ["ruta"]
        }
    },
    "required": ["latitud", "altitud", "icono_mapa", "capacidad", "direccion", "nombre"]
}

modificar_estacionamiento_privado = {
    "type": "object",
    "properties": {
        "id": {"type": "number"},
        "latitud": {"type": "number"},
        "altitud": {"type": "number"},
        "icono_mapa": {"type": "string"},
        "capacidad": {"type": "integer"},
        "descripcion": {"type": "string"},
        "direccion": {"type": "string"},
        "nombre": {"type": "string"},
        "tarifas": {
            "type": "array",
            "items": {
                "type": "object",
                "properties": {
                    "nombre": {"type": "string"},
                    "descripcion": {"type": "string"},
                    "precio": {"type": "number"},
                    "moneda": {"type": "string"}
                },
            }
        },
        "foto": {
            "type": "object",
            "properties": {
                "ruta": {"type": "string"}
            },
        }
    }
}

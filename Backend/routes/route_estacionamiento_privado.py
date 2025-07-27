from flask import Blueprint, request, jsonify
from controlador.control_estacionaminetoPrivado import EstacionamientoPrivadoController
from routes.schemas.schema_estacionamiento import guardar_estacionamiento_privado, modificar_estacionamiento_privado
from flask_expects_json import expects_json

api_estacionamiento_privado = Blueprint('estacionamiento_privado', __name__)
controller = EstacionamientoPrivadoController()

@api_estacionamiento_privado.route('/estacionamientos_privados', methods=['GET'])
def listar_estacionamientos():
    estacionamientos = controller.listar()
    estacionamientos_serializados = [e.serialize for e in estacionamientos]
    return jsonify(estacionamientos_serializados), 200

@api_estacionamiento_privado.route('/guardar_estacionamiento_privado', methods=['POST'])
@expects_json(guardar_estacionamiento_privado)
def guardar_estacionamiento():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No se recibió ningún dato"}), 400

    response = controller.guardar(data)
    if "estacionamiento" not in response:
        return jsonify(response), 500

    return jsonify(response), 201

@api_estacionamiento_privado.route('/modificar_estacionamiento_privado', methods=['POST'])
def modificar_estacionamiento():
    data = request.json
    if not data:
        return jsonify({"error": "No se recibió ningún dato"}), 400
    
    response = controller.modificar(data)

    if "estacionamiento" not in response:
        return jsonify(response), 500
    
    return jsonify(response), 200


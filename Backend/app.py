from flask import Flask, send_from_directory
from flask_sqlalchemy import SQLAlchemy
import pymysql
pymysql.install_as_MySQLdb()
from flask_cors import CORS
import config.Config
import os

db = SQLAlchemy()

def create_app():
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config.Config')

    app.config['UPLOAD_FOLDER'] = os.path.join(app.root_path, 'uploads')    

    CORS(app)
    
    db.init_app(app)
    
    @app.route('/uploads/<path:filename>')
    def uploaded_file(filename):
        return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

    with app.app_context():
        
        from dominio.modelo.Estacionamiento import Estacionamiento
        from dominio.modelo.Estacionamiento_privado import Estacionamiento_privado
        from dominio.modelo.Foto import Foto
        from dominio.modelo.Tarifa import Tarifa

        from routes.route_estacionamiento_privado import api_estacionamiento_privado

        app.register_blueprint(api_estacionamiento_privado)

        #crear tablas de bd
        db.create_all()


        
    return app
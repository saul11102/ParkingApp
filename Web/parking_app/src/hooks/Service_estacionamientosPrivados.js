import { POST, GET } from "./Connection";

export async function listar_estacionamientosPrivados() {
    let datos = null;
    try {
        datos = await GET("estacionamientos_privados");
    } catch (error) {
        return error;
    }
    return datos.data; 
}

export async function modificar_estacionamientosPrivados(formData) {
    let datos = null;
    try {
        datos = await POST("modificar_estacionamiento_privado", formData);
    } catch (error) {
        return error;
    }
    return datos.data; 
}
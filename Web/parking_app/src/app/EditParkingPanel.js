"use client";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { Trash2 } from "lucide-react";
import "./EditParkingPanel.css"; // importar estilos CSS externos

const estadosOptions = [
    { label: "Disponible", value: "DISPONIBLE" },
    { label: "Cerrado", value: "CERRADO" },
    { label: "Lleno", value: "LLENO" },
    { label: "No disponible", value: "NO_DISPONIBLE" },
    { label: "Desactivado", value: "DESACTIVADO" },
];



export default function EditParkingPanel({
    formData,
    onChangeField,
    onChangeTarifa,
    onAddTarifa,
    onDeleteTarifa,
    onCancel,
    onSave,
}) {
    const [errors, setErrors] = useState({
        capacidad: false,
        tarifas: [],
    });

    useEffect(() => {
        const capacidadError =
            !(
                typeof formData.capacidad === "number" &&
                !isNaN(formData.capacidad) &&
                formData.capacidad >= 1
            );

        const tarifasError = formData.tarifas.map((t) => {
            return !(
                typeof t.precio === "number" &&
                !isNaN(t.precio) &&
                t.precio >= 0
            );
        });

        setErrors({
            capacidad: capacidadError,
            tarifas: tarifasError,
        });
    }, [formData.capacidad, formData.tarifas]);

    const hasErrors = errors.capacidad || errors.tarifas.some((e) => e);

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
                Editar Estacionamiento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {/* Nombre */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                        Nombre
                    </label>
                    <input
                        type="text"
                        maxLength={35}
                        value={formData.nombre}
                        onChange={(e) => onChangeField("nombre", e.target.value)}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Nombre"
                    />
                </div>
                {/* Dirección */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                        Dirección
                    </label>
                    <input
                        type="text"
                        maxLength={35}
                        value={formData.direccion}
                        onChange={(e) => onChangeField("direccion", e.target.value)}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Dirección"
                    />
                </div>
                {/* Capacidad */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                        Capacidad
                    </label>
                    <input
                        type="number"
                        min={1}
                        max={999}
                        value={
                            typeof formData.capacidad === "number" && !isNaN(formData.capacidad)
                                ? formData.capacidad
                                : ""
                        }
                        onChange={(e) => {
                            const val = e.target.value === "" ? "" : parseInt(e.target.value, 10);
                            onChangeField("capacidad", val);
                        }}
                        className={`w-full p-2 rounded border ${errors.capacidad ? "input-error" : "border-gray-300"
                            } dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100`}
                        placeholder="999"
                    />
                    {errors.capacidad && (
                        <p className="error-text">Ingrese un número válido mayor o igual a 1</p>
                    )}
                </div>
                {/* Descripción */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                        Descripción
                    </label>
                    <input
                        type="text"
                        maxLength={50}
                        value={formData.descripcion}
                        onChange={(e) => onChangeField("descripcion", e.target.value)}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                        placeholder="Breve descripción"
                    />
                </div>
                {/* Estado */}
                <div>
                    <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                        Estado
                    </label>
                    <select
                        value={formData.estado}
                        onChange={(e) => onChangeField("estado", e.target.value)}
                        className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    >
                        {estadosOptions.map(({ label, value }) => (
                            <option key={value} value={value}>
                                {label}
                            </option>
                        ))}
                    </select>

                </div>
            </div>

            {/* Tarifas */}
            <div className="mb-6">
                <h3 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Tarifas</h3>
                {formData.tarifas.map((t, idx) => (
                    <div
                        key={idx}
                        className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end p-4 mb-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg"
                    >
                        <div>
                            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                                Nombre
                            </label>
                            <input
                                type="text"
                                maxLength={15}
                                value={t.nombre}
                                onChange={(e) => onChangeTarifa(idx, "nombre", e.target.value)}
                                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                                Descripción
                            </label>
                            <input
                                type="text"
                                maxLength={30}
                                value={t.descripcion}
                                onChange={(e) => onChangeTarifa(idx, "descripcion", e.target.value)}
                                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                                Precio
                            </label>
                            <input
                                type="number"
                                value={
                                    typeof t.precio === "number" && !isNaN(t.precio) ? t.precio : ""
                                }
                                onChange={(e) => {
                                    const val = e.target.value === "" ? "" : parseFloat(e.target.value);
                                    onChangeTarifa(idx, "precio", val);
                                }}
                                className={`w-full p-2 rounded border ${errors.tarifas[idx] ? "input-error" : "border-gray-300"
                                    } dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100`}
                            />
                            {errors.tarifas[idx] && (
                                <p className="error-text">Ingrese un precio válido mayor o igual a 0</p>
                            )}
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-600 dark:text-gray-300 mb-1">
                                Moneda
                            </label>
                            <input
                                type="text"
                                value={t.moneda}
                                readOnly
                                className="w-full p-2 rounded border border-gray-300 dark:border-gray-600 bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-200 cursor-not-allowed"
                            />
                        </div>
                        <div className="flex justify-center">
                            <button
                                onClick={() => onDeleteTarifa(idx)}
                                className="text-red-600 hover:text-red-800"
                                title="Eliminar tarifa"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    </div>
                ))}
                <button
                    onClick={onAddTarifa}
                    className="px-4 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600"
                >
                    + Añadir tarifa
                </button>
            </div>

            {/* Acciones */}
            <div className="flex justify-end gap-3">
                <button onClick={onCancel} className="button-cancel">
                    Cancelar
                </button>
                <button
                    onClick={onSave}
                    disabled={hasErrors}
                    className={hasErrors ? "button-disabled" : "button-enabled"}
                >
                    Guardar
                </button>
            </div>
        </div>
    );
}

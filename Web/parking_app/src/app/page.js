"use client";
import React, { useState, useEffect } from "react";
import { usePrivateParkings } from "../hooks/Use_Service_EstacionamientoPrivado";
import EditParkingPanel from "./EditParkingPanel";
import Swal from "sweetalert2";
import "./EditParkingPanel.css"; // importar CSS para estilos

export default function PrivateParkingsPage() {
  const { parkings, loading, error, refresh, modificar } = usePrivateParkings();
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState(null);
  const [theme, setTheme] = useState("light"); // light | dark

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const startEdit = (parking) => {
    setEditingId(parking.id);
    setFormData({ ...parking });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData(null);
  };

  const saveEdit = async () => {
    const result = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas guardar los cambios en este estacionamiento?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22c55e",
      cancelButtonColor: "#dc2626",
      confirmButtonText: "Sí, guardar",
      cancelButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      const resp = await modificar(formData);
      if (resp.ok) {
        await refresh();
        cancelEdit();
        await Swal.fire({
          title: "Actualizado",
          text: "¡Estacionamiento actualizado correctamente!",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#22c55e",
        });
      } else {
        await Swal.fire({
          title: "Error",
          text: "Hubo un problema al actualizar el estacionamiento.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#dc2626",
        });
      }
    }
  };

  if (loading) return <p className="text-center mt-10">Cargando...</p>;
  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  return (
    <div className="min-h-screen p-8 bg-gray-100 dark:bg-gray-900 transition-colors">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
          Estacionamientos Privados
        </h1>
      </header>

      <div className="space-y-4">
        {parkings.map((p) => (
          <div
            key={p.id}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                  {p.nombre}
                </h2>
                <p className="text-gray-600 dark:text-gray-400">{p.direccion}</p>
              </div>
              <button onClick={() => startEdit(p)} className="button-modify">
                Modificar
              </button>
            </div>

            {editingId === p.id && formData && (
              <div className="mt-4">
                <EditParkingPanel
                  formData={formData}
                  onChangeField={(f, v) => setFormData((fd) => ({ ...fd, [f]: v }))}
                  onChangeTarifa={(i, c, v) => {
                    const arr = [...formData.tarifas];
                    arr[i][c] = v;
                    setFormData((fd) => ({ ...fd, tarifas: arr }));
                  }}
                  onAddTarifa={() =>
                    setFormData((fd) => ({
                      ...fd,
                      tarifas: [...fd.tarifas, { nombre: "", descripcion: "", precio: 0, moneda: "USD" }],
                    }))
                  }
                  onDeleteTarifa={(i) =>
                    setFormData((fd) => {
                      const t = [...fd.tarifas];
                      t.splice(i, 1);
                      return { ...fd, tarifas: t };
                    })
                  }
                  onCancel={cancelEdit}
                  onSave={saveEdit}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

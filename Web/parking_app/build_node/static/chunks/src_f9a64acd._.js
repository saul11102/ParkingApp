(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/hooks/Connection.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
const URL = ("TURBOPACK compile-time value", "http://localhost:5000/");
;
const POST = async (resource, data)=>{
    let headers = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        }
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(URL + resource, data, headers);
};
_c = POST;
const GET = async (resource)=>{
    let headers = {
        headers: {
            "Accept": "application/json"
        }
    };
    return await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get(URL + resource, headers);
};
_c1 = GET;
var _c, _c1;
__turbopack_context__.k.register(_c, "POST");
__turbopack_context__.k.register(_c1, "GET");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/Service_estacionamientosPrivados.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "listar_estacionamientosPrivados": ()=>listar_estacionamientosPrivados,
    "modificar_estacionamientosPrivados": ()=>modificar_estacionamientosPrivados
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Connection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/Connection.js [app-client] (ecmascript)");
;
async function listar_estacionamientosPrivados() {
    let datos = null;
    try {
        datos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Connection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GET"])("estacionamientos_privados");
    } catch (error) {
        return error;
    }
    return datos.data;
}
async function modificar_estacionamientosPrivados(formData) {
    let datos = null;
    try {
        datos = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Connection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["POST"])("modificar_estacionamiento_privado", formData);
    } catch (error) {
        return error;
    }
    return datos.data;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/Use_Service_EstacionamientoPrivado.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// hooks/Use_Service_EstacionamientoPrivado.js
__turbopack_context__.s({
    "usePrivateParkings": ()=>usePrivateParkings
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Service_estacionamientosPrivados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/Service_estacionamientosPrivados.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const usePrivateParkings = ()=>{
    _s();
    const [parkings, setParkings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const cargarDatos = ()=>{
        setLoading(true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Service_estacionamientosPrivados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["listar_estacionamientosPrivados"])().then((data)=>setParkings(data)).catch((err)=>setError(err.message || 'Error al cargar')).finally(()=>setLoading(false));
    };
    const modificar = async (formData)=>{
        try {
            const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Service_estacionamientosPrivados$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["modificar_estacionamientosPrivados"])(formData);
            cargarDatos();
            return {
                ok: true,
                res
            };
        } catch (error) {
            return {
                ok: false,
                error
            };
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePrivateParkings.useEffect": ()=>{
            cargarDatos();
        }
    }["usePrivateParkings.useEffect"], []);
    return {
        parkings,
        loading,
        error,
        refresh: cargarDatos,
        modificar
    };
};
_s(usePrivateParkings, "QLcjWnGXdVRjuQzDVl2zKsz51co=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/page.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>PrivateParkingsPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Use_Service_EstacionamientoPrivado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/Use_Service_EstacionamientoPrivado.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../components/EditParkingPanel'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function PrivateParkingsPage() {
    _s();
    const { parkings, loading, error, refresh, modificar } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Use_Service_EstacionamientoPrivado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivateParkings"])();
    const [editingId, setEditingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PrivateParkingsPage.useEffect": ()=>{
            document.documentElement.classList.toggle("dark", theme === "dark");
        }
    }["PrivateParkingsPage.useEffect"], [
        theme
    ]);
    const startEdit = (parking)=>{
        setEditingId(parking.id);
        setFormData({
            ...parking
        });
    };
    const cancelEdit = ()=>{
        setEditingId(null);
        setFormData(null);
    };
    const saveEdit = async ()=>{
        const resp = await modificar(formData);
        if (resp.ok) {
            await refresh();
            cancelEdit();
        }
    // puedes mostrar Swal aquí si quieres
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-10",
        children: "Cargando..."
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 35,
        columnNumber: 23
    }, this);
    if (error) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: "text-center mt-10 text-red-600",
        children: error
    }, void 0, false, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 36,
        columnNumber: 21
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen p-8 bg-gray-100 dark:bg-gray-900 transition-colors",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-gray-900 dark:text-gray-100",
                        children: "Estacionamientos Privados"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setTheme((t)=>t === "light" ? "dark" : "light"),
                        className: "px-3 py-1 bg-blue-500 dark:bg-blue-400 text-white rounded-lg",
                        children: theme === "light" ? "Oscuro" : "Claro"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: parkings.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex justify-between items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xl font-semibold text-gray-800 dark:text-gray-200",
                                                children: p.nombre
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 60,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: p.direccion
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.js",
                                                lineNumber: 61,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 59,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>startEdit(p),
                                        className: "px-4 py-2 bg-green-500 dark:bg-green-400 text-white rounded-lg",
                                        children: "Modificar"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.js",
                                        lineNumber: 63,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            editingId === p.id && formData && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EditParkingPanel, {
                                    formData: formData,
                                    onChangeField: (f, v)=>setFormData((fd)=>({
                                                ...fd,
                                                [f]: v
                                            })),
                                    onChangeTarifa: (i, c, v)=>{
                                        const arr = [
                                            ...formData.tarifas
                                        ];
                                        arr[i][c] = v;
                                        setFormData((fd)=>({
                                                ...fd,
                                                tarifas: arr
                                            }));
                                    },
                                    onAddTarifa: ()=>setFormData((fd)=>({
                                                ...fd,
                                                tarifas: [
                                                    ...fd.tarifas,
                                                    {
                                                        nombre: "",
                                                        descripcion: "",
                                                        precio: 0,
                                                        moneda: "USD"
                                                    }
                                                ]
                                            })),
                                    onDeleteTarifa: (i)=>setFormData((fd)=>{
                                            const t = [
                                                ...fd.tarifas
                                            ];
                                            t.splice(i, 1);
                                            return {
                                                ...fd,
                                                tarifas: t
                                            };
                                        }),
                                    onCancel: cancelEdit,
                                    onSave: saveEdit
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.js",
                                    lineNumber: 73,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.js",
                                lineNumber: 72,
                                columnNumber: 15
                            }, this)
                        ]
                    }, p.id, true, {
                        fileName: "[project]/src/app/page.js",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/page.js",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.js",
        lineNumber: 39,
        columnNumber: 5
    }, this);
}
_s(PrivateParkingsPage, "6hljCwKqqe7GORW+Ulr+gT0S1xg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$Use_Service_EstacionamientoPrivado$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePrivateParkings"]
    ];
});
_c = PrivateParkingsPage;
var _c;
__turbopack_context__.k.register(_c, "PrivateParkingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_f9a64acd._.js.map
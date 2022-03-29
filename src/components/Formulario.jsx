import React from "react";
import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";

const Formulario = ({ agregarTodo }) => {
    const initialState = {
        todoName: "",
        todoDescripcion: "",
        todoEstado: "pendiente",
        todoPrioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { todoName, todoDescripcion } = inputs;

        if (!todoName.trim()) {
            console.log("hay campos vacios");
            e.target[0].focus();
            Swal.fire({
                title: "Error!",
                text: `Ingrese un nombre`,
                icon: "error",
                confirmButtonText: "Ok!",
            });
            return;
        }
        if (!todoDescripcion.trim()) {
            console.log("hay campos vacios");
            e.target[1].focus();
            Swal.fire({
                title: "Error!",
                text: `Ingrese una descripcion`,
                icon: "error",
                confirmButtonText: "Ok!",
            });
            return;
        }

        Swal.fire({
            title: "Exito!",
            text: `Tarea agregada`,
            icon: "success",
            confirmButtonText: "Ok!",
        });

        agregarTodo({
            nombre: inputs.todoName,
            descripcion: inputs.todoDescripcion,
            estado: inputs.todoEstado === "pendiente" ? false : true,
            prioridad: inputs.todoPrioridad,
            id: Date.now(),
        });
        // console.log(todo);

        reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        name="todoName"
                        onChange={handleChange}
                        value={inputs.todoName}
                    />
                </div>

                <div className="form-floating mb-3">
                    <textarea
                        className="form-control"
                        name="todoDescripcion"
                        onChange={handleChange}
                        value={inputs.todoDescripcion}
                    />
                    <label htmlFor="floatingTextarea">Mensaje</label>
                </div>

                <select
                    name="todoEstado"
                    className="form-control mb-3"
                    value={inputs.todoEstado}
                    onChange={handleChange}
                >
                    <option value="pendiente">Pendiente</option>
                    <option value="completado">Completado</option>
                </select>

                <div className="mb-3 form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="todoPrioridad"
                        id="flexCheckDefault"
                        onChange={handleChange}
                        checked={inputs.todoPrioridad}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Priorizar
                    </label>
                </div>
                <button type="submit" className="btn btn-primary mb-3">
                    Registrar tarea
                </button>
            </form>
        </>
    );
};

export default Formulario;

import React from "react";

const Todo = ({ todo, eliminarTodo, editarTodo }) => {
    const { nombre, descripcion, estado, prioridad, id } = todo;
    return (
        <>
            <li
                className={
                    estado === true
                        ? "list-group-item d-flex justify-content-between align-items-start mb-3 negro"
                        : "list-group-item d-flex justify-content-between align-items-start mb-3"
                }
            >
                <div className="ms-2 me-auto">
                    <div className="fw-bold">
                        {nombre} - {estado ? "Finalizado" : "Pendiente"}
                    </div>
                    {estado === true ? (
                        <p className="sub">{descripcion}</p>
                    ) : (
                        <p>{descripcion}</p>
                    )}
                    <div
                        className="btn btn-danger me-2"
                        onClick={() => eliminarTodo(id)}
                    >
                        Eliminar
                    </div>
                    <div
                        className="btn btn-warning"
                        onClick={() => editarTodo(id)}
                    >
                        Finalizar
                    </div>
                </div>
                <span className="badge bg-primary rounded-pill">
                    {prioridad && "Priorizar"}
                </span>
            </li>
        </>
    );
};

export default Todo;

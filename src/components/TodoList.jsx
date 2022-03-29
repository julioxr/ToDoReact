import React, { useState, useEffect } from "react";
import Formulario from "./Formulario";
import Todo from "./Todo";

const TodoList = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("todos")) {
            setTodos(JSON.parse(localStorage.getItem("todos")));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        console.log("se cambio un todo");
    }, [todos]);

    const agregarTodo = (todo) => {
        setTodos((old) => [...old, todo]);
    };

    const eliminarTodo = (id) => {
        const filtrado = (old) => old.filter((item) => item.id !== id);
        setTodos(filtrado);
    };

    const editarTodo = (id) => {
        const editarTodos = todos.map((item) =>
            item.id === id ? { ...item, estado: !item.estado } : item
        );

        setTodos(editarTodos);
    };

    // console.log(todos);
    return (
        <>
            <h2>Todo List</h2>
            <Formulario agregarTodo={agregarTodo} />

            <ul className="list-group">
                {todos.map((item) => (
                    <Todo
                        key={item.id}
                        todo={item}
                        eliminarTodo={eliminarTodo}
                        editarTodo={editarTodo}
                    />
                ))}
            </ul>
        </>
    );
};

export default TodoList;

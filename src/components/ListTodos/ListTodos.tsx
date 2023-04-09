import React, { useState } from "react";
import "./ListTodos.scss";

import { Todo } from "../Todo/Todo";
import { ModalAdd } from "../ModalAdd/ModalAdd";

const ListTodos = () => {
    const [isModalAddOpen, setisModalAddOpen] = useState(false);
    const listTodos = [
        {
            todoTitle: "Set a reminder beforehand",
            todoDescription:
                "Use your phone or something else. But don’t forget.",
        },
        {
            todoTitle: "Find a location",
            todoDescription:
                "Use your phone or something else. But don’t forget.",
        },
        {
            todoTitle: "Screenshot the address",
            todoDescription:
                "Use your phone or something else. But don’t forget.",
        },
        {
            todoTitle: "Book the tickets",
            todoDescription:
                "Use your phone or something else. But don’t forget.",
        },
        {
            todoTitle: "Find out the parking",
            todoDescription:
                "Use your phone or something else. But don’t forget.",
        },
        {
            todoTitle: "Call them",
            todoDescription:
                "Use your phone or something else. But don’t forget.",
        },
    ];

    const handleOpenModalAdd = () => {
        setisModalAddOpen(true);
    };

    const handleCloseModalAdd = () => {
        setisModalAddOpen(false);
    };

    //Aqui irá vir a requisição do mongo DB

    return (
        <div className="ListTodos">
            <p className="ListTodos__title">Booking Movie Tickets</p>

            <div className="ListTodos__buttons">
                <button onClick={handleOpenModalAdd}>Add New</button>
                <button>Remove</button>
            </div>

            <ModalAdd isOpen={isModalAddOpen} onClose={handleCloseModalAdd} />

            <div className="ListTodos__list">
                <span className="ListTodos__list--title">Tasks</span>
                {listTodos.map((todo) => (
                    <Todo
                        key={todo.todoTitle}
                        todoTitle={todo.todoTitle}
                        todoDescription={todo.todoDescription}
                    />
                ))}
            </div>
        </div>
    );
};

export { ListTodos };

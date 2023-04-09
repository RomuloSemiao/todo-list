import React, { useState } from "react";
import "./Todo.scss";

interface ITodo {
    todoTitle: string;
    todoDescription: string;
}

const Todo = ({ todoTitle, todoDescription }: ITodo) => {
    const [checked, setChecked] = useState(false);
    const [open, setOpen] = useState(false);

    const handleClickCheck = () => {
        setChecked(!checked);
    };

    const handleClickItem = () => {
        setOpen(!open);
    };

    return (
        <div className={open ? "Todo--open" : "Todo"}>
            <div className="Todo__header">
                <div
                    className={
                        checked ? "Todo__checkbox--checked" : "Todo__checkbox"
                    }
                    onClick={() => handleClickCheck()}
                ></div>
                <span onClick={() => handleClickItem()} className="Todo__title">
                    {todoTitle}
                </span>
            </div>
            <div
                className={
                    open ? "Todo__description--open" : "Todo__description"
                }
            >
                <p className="Todo__description-text">{todoDescription}</p>
                <button className="Todo__button">Edit</button>
            </div>
        </div>
    );
};

export { Todo };

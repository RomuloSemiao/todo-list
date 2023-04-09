import React, { useRef, useState } from "react";
import "./ModalAdd.scss";

interface IModalAdd {
    isOpen: boolean;
    onClose: () => void;
}

const ModalAdd: React.FC<IModalAdd> = ({ isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);
    const titleRef: any = useRef();
    const descriptionRef: any = useRef();

    const handleSubmitForm = (event: any) => {
        event.preventDefault();
        const titleValue = titleRef.current.value;
        const descriptionValue = descriptionRef.current.value;
        console.log({
            titleValue: titleValue,
            descriptionValue: descriptionValue,
        });
    };

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            setIsClosing(false);
            onClose();
        }, 300);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className={`ModalAdd ${isClosing ? "ModalAdd--closing" : ""}`}>
            <div className="ModalAdd__content">
                <div className="ModalAdd__header">
                    <button
                        className="ModalAdd__button-close"
                        onClick={handleClose}
                    ></button>
                </div>
                <div className="ModalAdd__body">
                    <form
                        className="ModalAdd__form"
                        action="post"
                        onSubmit={handleSubmitForm}
                    >
                        <input type="text" ref={titleRef} placeholder="Title" />
                        <textarea
                            ref={descriptionRef}
                            placeholder="Description"
                        />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export { ModalAdd };

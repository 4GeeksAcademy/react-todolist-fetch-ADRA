import React from "react";

const ToDoList = () => {
    return (
        <div className="container mt-5 input-group mb-3 w-50">
            <div className="FormList d-flex flex-column justify-content-center align-items-center mb-5">
                <form
                    id="todoListForm"
                    className="form-control d-flex justify-content-between"
                >
                    <input
                        type="text"
                        className="form-control me-1"
                        placeholder="Add a new task"
                        aria-label="Add a new task"
                        aria-describedby="button-addon2"
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        Add
                    </button>
                </form>

                <ul id="todoList" className="list-group"></ul>
            </div>
        </div>
    );
};

export default ToDoList;

//Action creator
export const enterTask = task => {
    //return an action

    return {
        type: 'TASK_ENTERED',
        payload: task
    };
};

export const deleteTask = id => {
    return {
        type: 'TASK_DELETED',
        payload: id
    };
};

export const editTask = (id, update) => {
    return {
        type: 'TASK_EDITED',
        payload:
        {
            id: id,
            update:update
        }
    };
};



export const saveTasks = function(task) {
    console.log("Saving tasks", task);
    return new Promise((resolve , reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/tasks`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        }).then(
            res => resolve(res)
        )
    });
}


export const getAllTaskAsync = function() {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/tasks`, {
            method: 'GET'
        }).then(
            res => resolve(res.json())
        )
    });
}

export const getMyTasksAsync = function() {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/mytasks`, {
            method: 'GET'
        }).then(
            res => resolve(res.json())
        )
    });
}
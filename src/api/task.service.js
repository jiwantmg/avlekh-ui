export const saveTasks = function(task) {
    //console.log("Saving tasks", task);
    return new Promise((resolve , reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/task`, {
            method: 'POST',
            body: task
        }).then(
            res => resolve(res)
        )
    });
}


export const getAllTaskAsync = function() {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/task`, {
            method: 'GET'
        }).then(
            res => resolve(res)
        )
    });
}
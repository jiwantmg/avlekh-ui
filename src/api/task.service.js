export const saveTasks = function(task) {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/tasks`, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(
            res => resolve(res)
        );
    });
}

export const getAllTasksAsync = function() {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/tasks`, {
            method: 'GET',            
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
        }).then(
            res => resolve(res.json())
        );
    });
}

export const getAllMyTasksAsync = function(){
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/mytasks`, {
            method: 'GET',            
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
            },
        }).then(
            res => resolve(res.json())
        );
    });
};
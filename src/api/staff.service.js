export const saveStaff = function(staff) {
    return new Promise((resolve , reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/staffs`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(staff)
        }).then(
            res => resolve(res)
        )
    });
}

export const getAllStaffsAsync = function() {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/staffs`, {
            method: 'GET'
        }).then(
            res => resolve(res.json())
        )
    });
}
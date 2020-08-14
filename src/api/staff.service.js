export const saveStaff = function(staff) {
    return new Promise((resolve , reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/staffs`, {
            method: 'POST',
            body: staff
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
            res => resolve(res)
        )
    });
}
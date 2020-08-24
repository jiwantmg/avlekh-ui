export const saveCustomerAsync = function(customer) {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/customers`, {
            method: 'POST',
            body: customer
        }).then(
            res => resolve(res)
        )
    });
}

export const getAllCustomersAsync = function() {
    return new Promise((resolve, reject) => {
        fetch(`${process.env.VUE_APP_SERVER_URL}/customers`, {
            method: 'GET'
        }).then(
            res => resolve(res.json())
        )
    });
}
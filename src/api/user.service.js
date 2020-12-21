export const loginUser = function (user) {
    return new Promise((resolve, reject) => {
       fetch(`${process.env.VUE_APP_SERVER_URL}/auth/login`,{
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
           },
           body: JSON.stringify(user)
       }).then(res => {                      
           resolve(res.json());
       }).catch(err => reject(err));
    });
}
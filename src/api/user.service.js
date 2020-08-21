export const loginUser = function (user) {
    return new Promise((resolve, reject) => {
       fetch('http://localhost:3000/api/auth/login',{
           method: 'POST',
           headers: {
            'Content-Type': 'application/json'
           },
           body: JSON.stringify(user)
       }).then(res => resolve(res.json())).catch(err => reject(err));
    });
}
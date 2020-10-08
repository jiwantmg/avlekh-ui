export const loginUser = function (user) {
    return new Promise((resolve, reject) => {
       fetch(`${process.env.VUE_APP_SERVER_URL}/auth/login`,{
           method: 'POST',
           body: JSON.stringify(user)
       }).then(res => {
           let user = res.text();
            localStorage.setItem('user', user);
            resolve(user);
       }).catch(err => reject(err));
    });
}
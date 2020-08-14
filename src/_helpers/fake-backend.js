import * as dataService from './datas';

export function configureFakeBackend() {
    let users = [
        { id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' },
        { id: 2, username: 'test2', password: 'test2', firstName: 'Test2', lastName: 'User2' },
    ];

    window.realFetch = window.fetch;

    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                // get parametes from post request
                let params = JSON.parse(opts.body);

                // find if any user matches login credentials
                let filteredUsers = users.filter(user => {
                    return user.username === params.username && user.password === params.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return suer detail and fake jwt token
                    let user = filteredUsers[0];
                    let repsonseJson = {
                        id: user.id,
                        username: username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.UMBufm7YcdbS2wrPCC3-QiReYnrK1mFkmmeBo1_8jcg'
                    };
                    resolve({ ok: true, text: () => JSON.stringify(repsonseJson) });
                } else {
                    // else return error
                    reject('Username or password is incorrent');
                }

                return;
            } else if (url.endsWith('/users') && opts.method === 'GET') {
                
                // check for fake auth token in header and return users if valid
                if (opts.headers && opts.headers.Authorization === 'Bearer fake-jwt-token') {
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) })
                } else {
                    reject('Unauthorized');
                }

                return;
            }  else if(url.endsWith('/api/customers') && opts.method === 'GET'){
                resolve(dataService.customerList().customers);
            } else if( url.endsWith('/api/customers') && opts.method === 'POST') {  
                let customer = opts.body;
                let custoemrsList = dataService.customerList().customers;
                if(custoemrsList) {
                    customer.id = dataService.customerList().customers.length + 1;          
                }else{
                    customer.id = 1;
                }            
                dataService.addNewCustomer(customer);
                resolve({ok: true});
            } else if( url.endsWith('/api/staffs') && opts.method === 'POST') {  
                let staff = opts.body;
                let staffsList = dataService.staffList().staffs;
                if(staffsList) {
                    staff.id =dataService.staffList().staffs.length + 1;          
                }else{
                    staff.id = 1;
                }            
                dataService.addNewStaff(staff);
                resolve({ok: true});
            }else if(url.endsWith('/api/staffs') && opts.method === 'GET'){
                console.log("Getting staff lists");
                resolve(dataService.staffList().staffs);
            }
            else {
                realFetch(url, opts);
            }
        });
    }
}
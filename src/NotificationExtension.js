import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import Vue from 'vue';

const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
}

const toastTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn'
}


function toast({ title, message, type, timeout, cb }) {
    return miniToastr[type](message, title, timeout, cb)
}


export const initNotification = () => {
    miniToastr.init({ types: toastTypes });
    Vue.use(VueNotifications, options);    
}
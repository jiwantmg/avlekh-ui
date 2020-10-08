import VueNotifications from 'vue-notifications';

let title = "title";
let message = "message";
var NotificationsMixins = {
    notifications: {
        showSuccessMsg: {
            type: VueNotifications.types.success,
            title: 'Congratulation',
            message: ''
        },
        showInfoMsg: {
            type: VueNotifications.types.info,
            title: 'Hey you',
            message: 'Here is some info for you'
        },
        showWarnMsg: {
            type: VueNotifications.types.warn,
            title: 'Wow, man',
            message: 'That\'s the kind of warning'
        },
        showErrorMsg: {
            type: VueNotifications.types.error,
            title: 'Error',
            message: 'Something went wrong'
        }
    }
}



export default NotificationsMixins;
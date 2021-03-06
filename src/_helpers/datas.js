const dataLists = JSON.parse(localStorage.getItem('datas')) || {};

// ********** Customer section  start *********
export const customerList = () => ({
    customers: dataLists.customers
})

export const addNewCustomer = customer => {
    if(!dataLists.customers) {
        dataLists.customers = [];
    }
    dataLists.customers.push(customer);
    saveSyncData();
};

// ********** Customer section  end *********



// ********** Staff section  start *********
export const staffList = () => ({
    staffs: dataLists.staffs
});

export const addNewStaff = staff => {
    if(!dataLists.staffs) {
        dataLists.staffs = [];
    }
    dataLists.staffs.push(staff);
    saveSyncData();
};

// ********** Staff section  end *********



function saveSyncData() {
    // remove old datas from localstorage
    localStorage.removeItem('datas', dataLists);
    localStorage.setItem('datas', JSON.stringify(dataLists));
}
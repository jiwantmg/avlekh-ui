const dataLists = {
    customers: [
        { id: 1, fullName: 'Jiwan Tamang', email: 'jiwan@gmail.com', phoneNo: '11111111111', address: 'Nepal' },
        { id: 2, fullName: 'Hari Sapkota', email: 'hari@gmailcom', phoneNo: '11111111111', address: 'Nepal' },
        { id: 3, fullName: 'Mohan Khatri', email: 'mohan@gmail.com', phoneNo: '11111111111', address: 'Japan' },
        { id: 4, fullName: 'Dil Darai', email: 'dil@gmail.com', phoneNo: '11111111111', address: 'Japan' },
        { id: 5, fullName: 'Min Raj Kharel', email: 'min@gmail.com', phoneNo: '11111111111', address: 'Japan' },
        { id: 6, fullName: 'Mithun Karmacharya', email: 'mithun@gmail.com', phoneNo: '11111111111', address: 'Japan' },
        { id: 7, fullName: 'Pritam Rasaili', email: 'pritma@gmail.com', phoneNo: '11111111111', address: 'Japan' },
        { id: 8, fullName: 'Suman Rana', email: 'suman@gmail.com', phoneNo: '11111111111', address: 'Japan' },
        { id: 9, fullName: 'Arapan ale magar', email: 'arpana@gmail.com', phoneNo: '11111111111', address: 'Japan' },
    ]
};

export const customerList = () => ({
    customers: dataLists.customers
})

export const addNewCustomer = customer => dataLists.customers.push(customer);
export const getAbsentStaffSummaryAsync = function () {
    return new Promise((resolve, reject) => {        
        fetch(`${process.env.VUE_APP_SERVER_URL}/staffs/absentsummary`, {
            method: 'GET'            
        }).then(            
            res => {                
                resolve(res.json())
            }
        ).catch(err => console.error(err))
    });
}
const queDao = require('../dao/queDao')
const qaSaveService = {
    save: async(data)=>{
       const res =  await queDao.save(data)
       return res
    },
    
}
module.exports = qaSaveService
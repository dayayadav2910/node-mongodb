const dbconnect = require('./mongodb');

const deleteData = async ()=>{
    let data = await dbconnect();
    let result = await data.deleteMany({name:"Clothes"})
    if(result.acknowledged){
        console.log("success");
    }
}
deleteData()
const {mongoose}=require('mongoose')



async function connectToMongodb(){
    const uri = 'mongodb://127.0.0.1:27017/'
    try {
        await mongoose.connect(uri,{
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
        console.log('connected to DB')
        
    } catch (error) {
        console.log(error)
        
    }
    
}
connectToMongodb().catch(console.error)

module.exports=connectToMongodb




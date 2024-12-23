import mongoose from 'mongoose';

const DBConnection= async() => {
    const MONODB_URL=`your_mongodb_uri`;
    try{
        await mongoose.connect(MONODB_URL, { useNewUrlParser:true});
        console.log('Database connected succesfully');
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;

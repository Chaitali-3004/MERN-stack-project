import mongoose from 'mongoose';

const DBConnection= async() => {
    const MONODB_URL=`mongodb+srv://user1:127user@file-sharing.xiv8z3s.mongodb.net/?retryWrites=true&w=majority&appName=file-sharing`;
    try{
        await mongoose.connect(MONODB_URL, { useNewUrlParser:true});
        console.log('Database connected succesfully');
    }catch(error){
        console.error('Error while connecting with the database', error.message);
    }
}

export default DBConnection;
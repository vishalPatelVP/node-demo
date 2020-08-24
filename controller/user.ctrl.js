const User = require('./../models/user');
const Helper = require('./../commongHelper');
const mongoose = require('mongoose')

router.post('/createUser',[Helper.checkValidation],(req,res)=>{
    try {
        User.create(req.body,(error,user)=>{
            if(error){
                return res.send(error)
            } else {
                return res.send({message:"User Create Successfully"})
            }
        })
    } catch (error) {
        return res.send(error);
    }
});

router.get('/findall',[Helper.checkValidation],async(req,res)=>{
    try {
        let user = await User.find();
        res.send(user);
    } catch (error) {
        return res.send(error);
    }
});

router.get('/find',[Helper.checkValidation],async(req,res)=>{
    try {
        let user = await mongoose.connection.db.collection('users').aggregate([
            { $match: { _id: req.query.id } }
        ], { allowDiskUse: true, collation: { locale: 'en_US', alternate: "shifted" } }).toArray();vvvv
        res.send(user);
    } catch (error) {
        return res.send(error);
    }
})
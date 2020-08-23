const User = require('./../models/user');
const Helper = require('./../commongHelper');

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
        let user = await User.find({_id:req.query.id});
        res.send(user);
    } catch (error) {
        return res.send(error);
    }
});
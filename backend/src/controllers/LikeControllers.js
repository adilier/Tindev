const Dev = require('../models/dev');

module.exports = {
    async store(req, res){
        const {devId} = req.params;
        const {user} = req.param;

        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);

        if (!targetDev) {
            return res.status(400).json({error: 'dev nao existe'})
        }

        if (targetDev.likes.includes(loggedDev._id)){
            console.log('deu match');
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();
        return res.json(loggedDev);
    }
};
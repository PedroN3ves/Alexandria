const User = require('../models/User');

module.exports = {
    async createUser(req, res) {
        const {
            name, email, password
        } = req.body;   

        const user = await User.create({
            name,
            email,
            password
        });
        
        return res.json(user);
    },

    async findUsers(req, res) {
        const users = await User.findAll({ raw: true });

        return res.json(users)
    },
    
    async findUser(req, res) {
        const { id } = req.params;
        const user = await User.findByPk(id);

        return res.json(user)
    },

    async update(req, res) {
        const { id } = req.params;
        const {
            name, email, password
        } = req.body;

        const user = await User.update({
            name,
            email,
            password
        },
        {
            where: { id },
        },
        );

        return res.json({ mensage: 'User updated!' })
    },

    async deleteUser(req, res) {
        const { id } = req.params;
        const user = await User.destroy({ where: { id } });
    
        return res.json({ menssage: 'User deleted!' });
    },
}
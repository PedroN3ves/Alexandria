/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
const User = require('../models/User');
const Book = require('../models/Books');

module.exports = {
  async createUser(req, res) {
    const { name, email, password } = req.body;

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  },

  // async findUsers(req, res) {
  //     const users = await User.findAll({ raw: true });

  //     return res.json(users)
  // },
  async pageHome(req, res) {
    return res.render('home');
  },

  async findUser(req, res) {
    const { id } = req.params;
    const user = await User.findByPk(id);

    res.redirect('/');
  },
  pageLogin(req, res) {
    res.render('login');
  },
  async pageAllBooks(req, res) {
    const books = await Book.findAll({ raw: true });

    console.log(books);

    res.render('allBooks', { books });
  },
  async pageRegisterBook(req, res) {
    res.render('registerBook');
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await User.update(
      {
        name,
        email,
        password,
      },
      {
        where: { id },
      },
    );

    return res.json({ mensage: 'User updated!' });
  },

  async deleteUser(req, res) {
    const { id } = req.params;
    const user = await User.destroy({ where: { id } });

    return res.json({ menssage: 'User deleted!' });
  },
};

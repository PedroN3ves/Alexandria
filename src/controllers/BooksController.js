const Book = require('../models/Books');

module.exports = {
    async createBook(req, res) {
        const {
            title,
            description,
            pages_number,
            author
        } = req.body;

        const book = await Book.create({
            title,
            description,
            pages_number,
            author
        });

        res.redirect('/')
    },

    async findBooks(req, res) {
        const books = await Book.findAll({ raw: true });

        return res.json(books);
    },

    async findBook(req, res) {
        const { id } = req.params;
        const user = await Book.findByPk(id);

        return res.json(books)
    },

    async update(req, res){
        const { id } = req.params;
        const {
            title, description, pages_number, author
        } = req.body;

        const book = await Book.create({
            title,
            description,
            pages_number,
            author
        },
        {
            where: { id },
        },
        );

        return res.json({ mensage: 'Book updated!' })
    },

    async deleteBook(req, res) {
        const { id } = req.params;
        const book = await Book.destroy({ where: {id} });

        return res.json({ menssage: 'Book deleted' })
    }
}
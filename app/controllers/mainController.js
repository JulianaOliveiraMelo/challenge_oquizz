const Quizz = require('../models/quizz');

const mainController = {

  homePage: async (req, res) => {
    try {
      const quizzes = await Quizz.findAll({
        include: ['author']
      });
      res.render('index', {quizzes});
    } catch (err) {
      res.status(500).send(console.log(err));
    }
  }

};


module.exports = mainController;
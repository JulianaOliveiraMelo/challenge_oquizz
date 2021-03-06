// On récupère sequelize, ainsi que le connecteur (qui sera donc toujours le meme pour tous les modèles - merci require !)
const sequelize = require('sequelize');
const dbConnection = require('../dbConnection');

// Maintenant, nos modèles héritent du "Model" de sequelize, et non plus de notre CoreModel.
class Level extends sequelize.Model {
  /** IMPORTANT: A cause du fonctionnement de Sequelize, les models
   * ne doivent avoir ni propriétés, ni constructeur !!
   * Par contre, on garde les méthodes (dont les getters/setters).
   */

  getName() {
    return this.name;
  };

  setName(value) {
    if(typeof value !== "string") {
      throw Error('Level.name must be a string');
    } else {
      this.name = value;
    }
  };

  getStatus() {
    return this.status;
  };

  setStatus(value) {
    if (!Number.isInteger(value)) {
      throw Error('Level.status must be an integer');
    } else {
      this.status = value;
    }
  };

};

/**
 * Nécessaire, requis par Sequelize
 */
Level.init({
  // Premier paramètre : un objet qui définit le type des champs
  // Remaque : en cas de relation, on ne définit pas les champs "machin_id" !
  //   ils seront définis implicitement lorsqu'on définira nos relations
  name: sequelize.STRING,
  status: sequelize.INTEGER
},{
  // le 2ème paramètre contient les options de connections
  sequelize: dbConnection, // le connecteur
  tableName: "levels", // nom de la table
  createdAt: "created_at", // nom des champs "timestamp" pour surcharger les valeurs par défaut
  updatedAt: "updated_at"
});

// on exporte la class directement !
module.exports = Level;
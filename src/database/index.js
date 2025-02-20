import Sequelize from "sequelize";

import config from "../config/database"

import Customer from "../app/models/Customer"
import User from "../app/models/User"
import Contact from "../app/models/Contact";

const models = [Customer, Contact, User];

class Database {
  constructor() {
    this.connection = new Sequelize(config);
    this.init();
  }
  init(){
    models.forEach(model => model.init(this.connection));
  }
}

export default Database;

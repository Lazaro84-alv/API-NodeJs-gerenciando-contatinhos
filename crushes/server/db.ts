import * as mongoose from 'mongoose';

class DataBase{

  private dburl = 'mongodb://127.0.0.1/api-rest';
  private dbconnection;

  constructor(){}

  createConnection(){
    mongoose.connect(this.dburl);
    this.logger(this.dburl);
  }

  logger(url){
    this.dbconnection = mongoose.connection;
    this.dbconnection.on('connected', () => console.log("mongoose está conectado"));
    this .dbconnection.on('error', error => console.error.bind(console, "erro na conexão: " + error));
  }
}

export default DataBase;
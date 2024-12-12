import app from './app.js';
import {sequelize} from './database/database.js';
const PORT = process.env.PORT || 3000;
async function main(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }
    catch (error) {
        console.error('Unable to connect to the database:', error);
    }
    await sequelize.sync({ force: false });
    app.listen(PORT);
}

main();
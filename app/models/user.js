import { Sequelize } from 'sequelize';

export class User extends Sequelize.Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            email: Sequelize.STRING,
            password: Sequelize.STRING,
        }, {
            sequelize,
        });

        return this;
    }
}
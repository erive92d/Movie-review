const { Model, DataTypes } = require("sequelize")
const sequelize = require("../config/connection")

class Movie extends Model {

}

Movie.init(
    {
        title: {
            type: DataTypes.STRING
        },
        director: {
            type: DataTypes.STRING
        },
        release: {
            type: DataTypes.STRING
        },
        review: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        underscored: true,
        modelName: 'movie'
    }
)

module.exports = Movie
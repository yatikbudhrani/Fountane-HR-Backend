
module.exports = (sequelize, DataTypes) => {
    const newsObj = sequelize.define('news', {
        newsId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },

        empCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        venue : {
            type : DataTypes.STRING,
            allowNull : false
        },

        date : {
            type : DataTypes.DATE,
            allowNull : false
        },

        text: { type: DataTypes.STRING, allowNull: false },

        title: { type: DataTypes.STRING, allowNull: false },

        imageFirebaseLink : { type: DataTypes.STRING , allowNull: false},

        created_at: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: new Date()
        },
        updated_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE
    }, {
            underscored: true
        });

        newsObj.addHook('afterCreate', 'postOnboarding', (permission, options) => {
        console.log("Data to be written in redis here");
    });
    return newsObj;
};

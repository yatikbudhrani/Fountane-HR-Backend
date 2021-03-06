
module.exports = (sequelize, DataTypes) => {
    const rpObj = sequelize.define('roles_permissions', {
        
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },

        role_id : {
            type : DataTypes.BIGINT,
        },

        permission_id : {
            type : DataTypes.BIGINT,
        },
        
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

        rpObj.addHook('afterCreate', 'preOnboarding', (permission, options) => {
        console.log("Data to be written in redis here");
    });
    return rpObj;
};

/**
 * Cache architecture:
 *      userId_entityName_role : [entityId]
 *      userId_entityName_entityId_role : true // New design
 */

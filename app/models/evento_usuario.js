module.exports = function(sequelize, DataTypes) {
	return sequelize.define('evento_usuario', {
        id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		id_evento: {
			type: DataTypes.INTEGER(10),
            allowNull: false,
            primaryKey: true,
            references: {
              model: 'evento',
              key: 'id_evento'
            }
		},
		id_empresa: {
			type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
              model: 'empresa',
              key: 'id_empresa'
            }
		},
		id_usuario: {
			type: DataTypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            references: {
              model: 'usuario',
              key: 'id_usuario'
            }
        },
        timeStamp:{
            type: DataTypes.STRING(256),
            allowNull: false
        }
	}, {
		tableName: 'evento_usuario',
		timestamps: false
	});
};

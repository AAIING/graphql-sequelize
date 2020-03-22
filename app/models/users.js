/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('usuario', {
		id_usuario: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		apellido: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		telefono: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		email: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		rol_usuario: {
			type: DataTypes.STRING(256),
			allowNull: false
		}	

	}, {
		tableName: 'usuario',
		timestamps: false
	});
};

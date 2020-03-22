module.exports = function(sequelize, DataTypes) {
	return sequelize.define('pedido', {
		id_pedido: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		fecha_pedido: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		hora_pedido: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		turno_retiro: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		estado: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		id_usuario: {
			type: DataTypes.INTEGER(11).UNSIGNED,
            allowNull: false,
            references: {
                model: 'usuario',
                key: 'id_usuario'
              }
        },
        total_pedido: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
        id_evento: {
			type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'evento',
                key: 'id_evento'
              }
		}
	}, {
		tableName: 'pedido',
		timestamps: false
	});
};

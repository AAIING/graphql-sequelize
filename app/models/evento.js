
module.exports = function(sequelize, DataTypes) {
	return sequelize.define('evento', {
		id_evento: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		nombre_evento: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		fecha: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		hora_inicio: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
		hora_termino: {
			type: DataTypes.STRING(256),
			allowNull: false
		},
        estado_pedido: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
        precio_entrada: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},	
        direccion_evento: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
        lat_evento: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
        lng_evento: {
			type: DataTypes.STRING(256),
			allowNull: false
        },
        descripcion_evento: {
			type: DataTypes.STRING,
			allowNull: false
        },
        id_empresa: {
			type: DataTypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'empresa',
                key: 'id_empresa'
              }
		}
	}, {
		tableName: 'evento',
		timestamps: false
	});
};

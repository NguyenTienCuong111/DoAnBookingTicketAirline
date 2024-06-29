"use strict";
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable("Comments", {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			content: {
				type: Sequelize.STRING,
			},
			userId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "users",
					key: "id",
				},
			},
			passengerId: {
				type: Sequelize.INTEGER,
				onDelete: "CASCADE",
				references: {
					model: "passengercarcompanies",
					key: "id",
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable("Comments");
	},
};

"use strict";

module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.bulkInsert(
			"points",
			[
				{
					name: "Cổng phụ",
					address: "75 Thanh Tịnh, Phường Hòa Minh, Liên Chiểu, Đà Nẵng",
					stationId: 1,
					createdAt: "2024-05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng chính",
					address: "201 Tôn Đức Thắng, Phường Hòa Minh, Liên Chiểu, Đà Nẵng",
					stationId: 1,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng phụ",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng 3",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng 2",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 2,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Dãy 8 quầy D1",
					address: "292 Đinh Bộ Lĩnh, Phường 26, Bình Thạnh, Hồ Chí Minh",
					stationId: 3,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng D2",
					address: "71 Chế Lan Viên",
					stationId: 3,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng A",
					address: "Quận thử đức",
					stationId: 3,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng A454",
					address: "Quốc lộ 1A",
					stationId: 4,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng A9",
					address: "46 Nguyễn Hữu Thọ",
					stationId: 4,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng M8",
					address: "97 An Dương Vương",
					stationId: 4,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng Chính",
					address: "46 Nguyễn Hữu Đa",
					stationId: 5,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng Phụ",
					address: "46 Nguyễn Hữu Đa",
					stationId: 5,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng 7",
					address: "99 Nguyễn Hữu Cảnh",
					stationId: 5,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng AF",
					address: "50 Nguyễn Nhạc",
					stationId: 5,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng Phụ",
					address: "500.Phạm Ngũ Lão",
					stationId: 6,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng Chính",
					address: "500.Phạm Ngũ Lão",
					stationId: 6,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng A33",
					address: "50 Nguyễn Nhạc",
					stationId: 6,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng Chính",
					address: "Tp.Cần Thơ",
					stationId: 7,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng Phụ",
					address: "Tp.Cần Thơ",
					stationId: 7,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Chợ Cần Thơ",
					address: "50 Nguyễn Trí",
					stationId: 7,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng Av3",
					address: "Đường Quốc Lộ 1A",
					stationId: 8,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng AB",
					address: "69.Phạm Bá Khá",
					stationId: 8,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
				{
					name: "Cổng NJ",
					address: "79 Nguyễn Tuân",
					stationId: 8,
					createdAt: "2024 05-07 07:57:23",
					updatedAt: "2024 05-07 07:57:23",
				},
			],
			{}
		);
	},

	async down(queryInterface, Sequelize) {
		await queryInterface.bulkDelete("points", null, {});
	},
};

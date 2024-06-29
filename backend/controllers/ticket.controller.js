const {Ticket, User, TripPassenger, Trip, PassengerCarCompany, Vehicles, Seats, PointTicket, SeatTicket, Point, ImageVehicle, Station, TimePoint} = require("../models");
const sendMail = require("../services/mailer");
const moment = require("moment");
const nodemailer = require("nodemailer");

const createTicket = async (req, res) => {
	const {user_id, tripPassengerId} = req.body;
	
	try {
		const newTicket = await Ticket.create({
			user_id,
			tripPassengerId,
		});
		res.status(201).send(newTicket);
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllTicket = async (req, res) => {
	const {userId} = req.query;
	try {
		if (userId) {
			const listTicket = await Ticket.findAll({
				where: {
					user_id: userId,
				},
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
								include: [
									{
										model: Point,
										as: "point",
										include: [
											{
												model: Station,
												as: "stationPoint",
											},
										],
									},
								],
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		} else {
			const listTicket = await Ticket.findAll({
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
								include: [
									{
										model: Point,
										as: "point",
										include: [
											{
												model: Station,
												as: "stationPoint",
											},
										],
									},
								],
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllTicketId = async (req, res) => {
	const {id} = req.query;
	try {
		if (id) {
			const listTicket = await Ticket.findAll({
				where: {
					id,
				},
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
								include: [
									{
										model: Point,
										as: "point",
										include: [
											{
												model: Station,
												as: "stationPoint",
											},
										],
									},
								],
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		} else {
			const listTicket = await Ticket.findAll({
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
								include: [
									{
										model: Point,
										as: "point",
										include: [
											{
												model: Station,
												as: "stationPoint",
											},
										],
									},
								],
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getAllTicketTrip = async (req, res) => {
	const {tripPassengerId} = req.query;
	try {
		if (tripPassengerId) {
			const listTicket = await Ticket.findAll({
				where: {
					tripPassengerId: tripPassengerId,
				},
				include: [
					{
						model: User,
						as: "user",
					},
					{
						model: TripPassenger,
						as: "tripPassengerTicket",
						include: [
							{
								model: PassengerCarCompany,
								as: "passenger",
							},
							{
								model: Trip,
								as: "trip",
								include: [
									{
										model: Station,
										as: "from",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
									{
										model: Station,
										as: "to",
										include: {
											model: Point,
											as: "stationPoint",
										},
									},
								],
							},
							{
								model: Vehicles,
								as: "vehicle",
								include: [
									{
										model: ImageVehicle,
										as: "vehicleOfImage",
									},
								],
							},
						],
					},
					{
						model: SeatTicket,
						as: "ticketSeatId",
						include: [
							{
								model: Seats,
								as: "seatofticket",
							},
						],
					},
					{
						model: PointTicket,
						as: "ticketPointId",
						include: [
							{
								model: TimePoint,
								as: "timepointTicket",
								include: [
									{
										model: Point,
										as: "point",
										include: [
											{
												model: Station,
												as: "stationPoint",
											},
										],
									},
								],
							},
						],
					},
				],
			});
			res.status(200).send(listTicket);
		}
	} catch (error) {
		res.status(500).send(error);
	}
};

const getDetailTicket = async (req, res) => {
	const {id} = req.params;

	try {
		const detailTicket = await Ticket.findOne({
			where: {
				id,
			},
			include: [
				{
					model: User,
					as: "user",
				},
				{
					model: TripPassenger,
					as: "tripPassengerTicket",
					include: [
						{
							model: PassengerCarCompany,
							as: "passenger",
						},
						{
							model: Trip,
							as: "trip",
							include: [
								{
									model: Station,
									as: "from",
									include: {
										model: Point,
										as: "stationPoint",
									},
								},
								{
									model: Station,
									as: "to",
									include: {
										model: Point,
										as: "stationPoint",
									},
								},
							],
						},
						{
							model: Vehicles,
							as: "vehicle",
							include: [
								{
									model: ImageVehicle,
									as: "vehicleOfImage",
								},
							],
						},
						{
							model: TimePoint,
							as: "tripTimePoint",
							include: [{model: Point, as: "point"}],
						},
					],
				},
				{
					model: SeatTicket,
					as: "ticketSeatId",
					include: [
						{
							model: Seats,
							as: "seatofticket",
						},
					],
				},
				{
					model: PointTicket,
					as: "ticketPointId",
					include: [
						{
							model: TimePoint,
							as: "timepointTicket",
							include: [
								{
									model: Point,
									as: "point",
									include: [
										{
											model: Station,
											as: "stationPoint",
										},
									],
								},
							],
						},
					],
				},
			],
		});
		res.status(200).send(detailTicket);
	} catch (error) {
		res.status(500).send(error);
	}
};
const deleteTicket = async (req, res) => {
	const {id} = req.params;
	try {
		await Ticket.destroy({
			where: {
				id,
			},
		});
		res.status(200).send(`Đã xóa ticket có id là: ${id}`);
	} catch (error) {
		res.status(500).send(error);
	}
};
const updateTicket = async (req, res) => {
	const {id} = req.params;
	const {status, totalAmount, note, userId, numberPhone, name, pickUpId, dropOffId, PointpickUpId, PointdropOffId} = req.body;
	try {
		await Ticket.update(
			{status, totalAmount, note},
			{
				where: {
					id,
				},
			}
		);
		await User.update(
			{name, numberPhone},
			{
				where: {
					id: userId,
				},
			}
		);
		await PointTicket.update(
			{
				timepointId: PointpickUpId,
			},
			{
				where: {id: pickUpId},
			}
		);
		await PointTicket.update(
			{
				timepointId: PointdropOffId,
			},
			{
				where: {id: dropOffId},
			}
		);
		res.status(200).send("update ticket thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const confirmTicket = async (req, res) => {
	const {id} = req.params;

	try {
		await Ticket.update(
			{status: "confirm"},
			{
				where: {
					id,
				},
			}
		);
		res.status(200).send("update ticket thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const cancelTicket = async (req, res) => {
	const {id} = req.params;

	try {
		const detailTicket = await Ticket.findOne({
			where: {
				id,
			},
			include: [
				{
					model: SeatTicket,
					as: "ticketSeatId",
					include: [
						{
							model: Seats,
							as: "seatofticket",
						},
					],
				},
			],
		});
		detailTicket.status = "cancel";
		await detailTicket.save();
		detailTicket.ticketSeatId.forEach(async (seat) => {
			await Seats.update(
				{status: "chưa đặt"},
				{
					where: {
						id: seat.seatofticket.id,
					},
				}
			);
		});

		res.status(200).send("Hủy vé thành công");
	} catch (error) {
		res.status(500).send(error);
	}
};

const bookingTicket = async (req, res) => {
	const {note, totalAmount, userId, tripPassengerId, pointPickup, pointDropoff, listSeat} = req.body;
	try {
		const ticketA = await Ticket.findOne({
			where: {
				user_id: userId,
				tripPassengerId: tripPassengerId,
			},
		});
		if (!ticketA) {
			const newTicket = await Ticket.create({
				note,
				totalAmount,
				user_id: userId,
				tripPassengerId,
			});
			if (newTicket) {
				const newPointPickUpTicket = await PointTicket.create({
					typePoint: "pickup",
					timepointId: pointPickup,
					ticketId: newTicket.id,
				});
				const newPointDropOffTicket = await PointTicket.create({
					typePoint: "dropoff",
					timepointId: pointDropoff,
					ticketId: newTicket.id,
				});
				listSeat.forEach(async (seat) => {
					let seatTicket = await SeatTicket.create({
						ticketId: newTicket.id,
						seatId: seat.id,
					});
					const seatUpdate = await Seats.findOne({
						where: {
							id: seat.id,
						},
					});
					seatUpdate.status = "đã đặt";
					await seatUpdate.save();
				});

				const user = await User.findOne({
					where: {
						id: userId,
					},
				});

				const detailTicket = await Ticket.findOne({
					where: {
						id: newTicket.id,
					},
					include: [
						{
							model: User,
							as: "user",
						},
						{
							model: TripPassenger,
							as: "tripPassengerTicket",
							include: [
								{
									model: PassengerCarCompany,
									as: "passenger",
								},
								{
									model: Trip,
									as: "trip",
									include: [
										{
											model: Station,
											as: "from",
											include: {
												model: Point,
												as: "stationPoint",
											},
										},
										{
											model: Station,
											as: "to",
											include: {
												model: Point,
												as: "stationPoint",
											},
										},
									],
								},
								{
									model: Vehicles,
									as: "vehicle",
									include: [
										{
											model: ImageVehicle,
											as: "vehicleOfImage",
										},
									],
								},
								{
									model: TimePoint,
									as: "tripTimePoint",
									include: [{model: Point, as: "point"}],
								},
							],
						},
						{
							model: SeatTicket,
							as: "ticketSeatId",
							include: [
								{
									model: Seats,
									as: "seatofticket",
								},
							],
						},
						{
							model: PointTicket,
							as: "ticketPointId",
							include: [
								{
									model: TimePoint,
									as: "timepointTicket",
									include: [
										{
											model: Point,
											as: "point",
											include: [
												{
													model: Station,
													as: "stationPoint",
												},
											],
										},
									],
								},
							],
						},
					],
				});

				console.log(detailTicket?.tripPassengerTicket);

				const params = {
					email: user.email,
					detailTicketFromName: detailTicket?.tripPassengerTicket?.trip?.from.name,
					detailTicketToName: detailTicket?.tripPassengerTicket?.trip?.to.name,
					startTime: moment(detailTicket?.tripPassengerTicket?.trip?.startTime).format("DD-MM-YYYY"),
					endTime: moment(detailTicket?.tripPassengerTicket?.trip?.endTime).format("DD-MM-YYYY"),
					timeS: detailTicket?.tripPassengerTicket?.startTime,
					timeE: detailTicket?.tripPassengerTicket?.endTime,
				};

				const mailOptions = {
					from: "Booking Flight VietNam",
					to: params.email,
					subject: "Xác thực đã đặt vé",
					html: `
                    <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        /* CSS inline */
                        
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f2f2f2;
                            padding: 20px;
                        }
                        
                        .container {
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            border-radius: 5px;
                            padding: 20px;
                        }
                        
                        h1 {
                            color: #333333;
                        }
                        
                        p {
                            color: #666666;
                        }
                        
                        .ticket-details {
                            margin-top: 20px;
                            border: 1px solid #dddddd;
                            border-radius: 5px;
                            padding: 10px;
                        }
                        
                        .ticket-details h2 {
                            color: #333333;
                            margin-bottom: 10px;
                        }
                        
                        .ticket-details p {
                            margin-bottom: 5px;
                        }
                    </style>
                </head>
            
                <body>
                    <div class="container">
                        <h1>Đặt vé thành công</h1>
                        <p>Cảm ơn bạn đã đặt vé. Dưới đây là thông tin chi tiết về vé đã đặt:</p>
            
                        <div class="ticket-details">
                            <h2>Thông tin vé bay</h2>
                            <p><strong>Tuyến hàng không:</strong> ${params.detailTicketFromName} - ${params.detailTicketToName}</p>
                            <p><strong>Ngày khởi hành:</strong> ${params.startTime}</p>
                            <p><strong>Thời gian khởi hành:</strong> ${params.timeS} - ${params.timeE}</p>
                        </div>
            
                        <p>Xin vui lòng xuất trình thông tin vé khi lên bay. Chúc bạn có một chuyến đi vui vẻ!</p>
                    </div>
                </body>
                </html>
                    `,
				};

				const transport = nodemailer.createTransport({
					host: "smtp.gmail.com",
					port: "587",
					secure: false,
					auth: {
						user: "trainmodel0503@gmail.com",
						pass: "gbweaxmipkkxuwvq",
					},
				});

				await transport.sendMail(mailOptions, (err, info) => {
					if (err) {
						console.log("Send successfully");
					}
					console.log("Send failed", err);
				});
				// await sendMail(params)
			}
			res.status(200).send("Đặt vé thành công");
		}
		res.status(400).send("Đặt vé không thành công");
		// console.log('Đặt vé không thành công')
	} catch (error) {
		console.log(error);
	}
};
module.exports = {
	createTicket,
	updateTicket,
	getAllTicket,
	getDetailTicket,
	deleteTicket,
	bookingTicket,
	cancelTicket,
	getAllTicketId,
	confirmTicket,
	getAllTicketTrip,
};

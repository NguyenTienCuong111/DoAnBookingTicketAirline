import React, {useEffect} from "react";
import {Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space, TimePicker, Tag} from "antd";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {getDetailTripPassengerAction, updateTripPassengerAction} from "../../redux/actions/tripAction";
import {deletePassenger, getAllPassenger} from "../../redux/actions/passengerAction";

import moment from "moment";
import _ from "lodash";
import {CLOSE_DRAWER} from "../../redux/types/DrawerTypes";
import {createVehicleAction, getDetailVehicleAction, UpdateVehicleAction} from "../../redux/actions/vehicleAction";
const {Option} = Select;

export default function AddVehicle(props) {
	const {id} = props;
	const dispatch = useDispatch();

	const {listPassenger} = useSelector((state) => state.PassengerReducer);
	useEffect(() => {
		dispatch(getAllPassenger());
	}, []);

	const renderPassenger = () => {
		return listPassenger.map((item, index) => {
			return {label: `${item.name}`, value: item.id};
		});
	};
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: "",
			numberFloors: "",
			type: "",
			description: "",
			passengerId: "",
		},

		onSubmit: (values) => {
			console.log(values);
			let vehicle = {
				name: values.name,
				type: values.type,
				numberFloors: values.numberFloors,
				description: values.description,
				passengerId: values.passengerId,
			};
			dispatch(createVehicleAction(vehicle));
			dispatch({type: CLOSE_DRAWER});
		},
	});
	const handleChange = (name) => {
		return (e) => {
			formik.setFieldValue(name, e.target.value);
		};
	};
	const handleChangeSelect = (name) => {
		return (value) => {
			console.log('====================================');
			console.log(value);
			console.log('====================================');
			formik.setFieldValue(name, value);
		};
	};
	return (
		<Form layout="vertical" name="basic" autoComplete="off" onFinish={formik.handleSubmit} requiredMark={true}>
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						label="Tên Máy Bay"
						rules={[
							{
								required: true,
								message: "Vui lòng tên!",
							},
						]}
					>
						<Input placeholder="Please enter passenger name" name="name" onChange={handleChange("name")} />
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Số khoang"
						rules={[
							{
								required: true,
								message: "Thiếu Số khoang!",
							},
						]}
					>
						<Input style={{width: "100%"}} type="number" min={1} max={2} name="numberFloors" onChange={handleChange("numberFloors")} />
					</Form.Item>
				</Col>
			</Row>
			<Row gutter={16}>
				<Col span={12}>
					<Form.Item
						label="Loại Máy bay"
						rules={[
							{
								required: true,
								message: "Thiếu Loại Máy bay!",
							},
						]}
					>
						<Select placeholder="Please select type" name="type" onChange={handleChangeSelect("type")}>
							<Option value="normal">Hạng Thường</Option>
							<Option value="limouse">Hạng Thương gia</Option>
						</Select>
					</Form.Item>
				</Col>
				<Col span={12}>
					<Form.Item
						label="Hãng Bay"
						rules={[
							{
								required: true,
								message: "Thiếu Hãng Bay!",
							},
						]}
					>
						<Select placeholder="Please select passenger" name="passengerId" onChange={handleChangeSelect("passengerId")}
						>
							{
								listPassenger.map((item, index) => (
									<Option value={item.id}>{item.name}</Option>
								) 
							)
							}
							</Select>
					</Form.Item>
				</Col>
			</Row>

			<Row gutter={16}>
				<Col span={24}>
					<Form.Item
						label="Mô Tả"
						rules={[
							{
								required: true,
								message: "please enter url description",
							},
						]}
					>
						<Input.TextArea rows={4} name="description" placeholder="please enter url description" onChange={handleChange("description")} />
					</Form.Item>
				</Col>
			</Row>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					
				>
					Thêm máy bay
				</Button>
			</Form.Item>
		</Form>
	);
}

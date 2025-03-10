import React, {useState} from "react";
import {Button, Modal, Menu, Dropdown, message, Space, Tooltip, Popover} from "antd";
import {UserOutlined, DownOutlined} from "@ant-design/icons";
import _ from "lodash";
import "../../Sass/css/Header.css";
import Login from "../Login/Login";
import Register from "../Register/Register";
import {useDispatch, useSelector} from "react-redux";
import {TOKEN, USER_LOGIN} from "../../util/settings/config";
import MessengerCustomerChat from "react-messenger-customer-chat";
import {MessengerChat} from "react-messenger-chat-plugin";

import {useFormik} from "formik";
import {UpdatelUserAction} from "../../redux/actions/UserAction";

import {history} from "../../App";

export default function Header() {
	const {userLogin} = useSelector((state) => state.userReducer);
	const [modal, setModal] = useState(false);
	const [toggle, setToggle] = useState(true);
	const dispatch = useDispatch();
	const formik = useFormik({
		enableReinitialize: true,
		initialValues: {
			name: userLogin.name,
			phone: userLogin.numberPhone,
			email: userLogin.email,
			passWord: userLogin.password,
			type: userLogin.type,
		},

		onSubmit: (values) => {
			let user = {
				name: values.name,
				email: values.email,
				password: values.passWord,
				numberPhone: values.phone,
				type: values.type,
			};
			dispatch(UpdatelUserAction(user, userLogin.id));
		},
	});

	const menu = (
		<Menu>
			<Menu.Item key="1">
				<a
					onClick={() => {
						history.push("/usermgt");
					}}
				>
					<span>
						<img src="https://storage.googleapis.com/fe-production/images/Auth/account-circle.svg" width={16} height={16} alt className="mr-2" />
						<span style={{fontSize: 12}}>Thông tin tài khoản</span>
					</span>
				</a>
			</Menu.Item>
			<Menu.Item key="2">
				<a
					onClick={() => {
						history.push("/ticketmgt");
					}}
				>
					<span>
						<img src="https://storage.googleapis.com/fe-production/images/ticket.svg" width={16} height={16} alt className="mr-2" />

						<span style={{fontSize: 12}}>Vé của tôi</span>
					</span>
				</a>
			</Menu.Item>
			<Menu.Item key="3">
				<a
					onClick={() => {
						history.push("/commentmgt");
					}}
				>
					<span>
						<img src="https://storage.googleapis.com/fe-production/images/review.svg" width={16} height={16} alt className="mr-2" />
						<span style={{fontSize: 12}}>Nhận xét của tôi</span>
					</span>
				</a>
			</Menu.Item>
			<Menu.Item key="4">
				<a
					onClick={() => {
						localStorage.removeItem(USER_LOGIN);
						localStorage.removeItem(TOKEN);
						window.location.reload();
					}}
				>
					<span>
						<img src="https://storage.googleapis.com/fe-production/images/Auth/logout.svg" width={16} height={16} alt className="mr-2" />
						<span style={{fontSize: 12}}>Đăng xuất</span>
					</span>
				</a>
			</Menu.Item>
		</Menu>
	);
	const renderAccount = () => {
		if (_.isEmpty(userLogin)) {
			return (
				<Button className="btn_login" type="primary" shape="round" size={"small"} onClick={() => setModal(true)}>
					<img src="https://storage.googleapis.com/fe-production/images/Auth/account-circle-fill.svg" alt height={16} width={16} />
					Đăng nhập
				</Button>
			);
		}
		return (
			<Dropdown overlay={menu}>
				<Button className="btn_login" type="primary" shape="round" size={"small"}>
					<img src="https://storage.googleapis.com/fe-production/images/Auth/account-circle-fill.svg" alt height={16} width={16} />
					<span>{formik.values.name}</span>
					<DownOutlined />
				</Button>
			</Dropdown>
		);
	};

	return (
		<div className="header-container">
			<div className="header">
				<div className="grid grid-cols-8 d-flex items-center">
					<div className="header_right text-3xl col-span-2">
						<div className="logo">
							<a
								onClick={() => {
									history.push("/");
								}}
							>
								<img src="https://png.pngtree.com/template/20190214/ourmid/pngtree-circle-travel-plane-logo-template-in-blacn-and-white-image_55579.jpg" width={50} height={50} alt={123} className="mb-5" />
							</a>
						</div>
					</div>
					<div className="header_left col-span-6">
						<ul>
							<li>
								<a href="#partner">Đối tác</a>
							</li>
							<li>
								<a href="#station">Sân bay</a>
							</li>
							<li>
								<a href="#news">Ưu đãi</a>
							</li>
							<li className="hotline">
								<Popover placement="bottom" title="SĐT" content={"0987654321"} trigger="click">
									<a href="#">
										<img src="https://storage.googleapis.com/fe-production/svgIcon/hotline-icon.svg" alt className="object-cover" />
										Hotline
									</a>
								</Popover>
							</li>
							<li className="login flex items-center">
								{renderAccount()}
								<Modal title={"Tài khoản"} centered visible={modal} onOk={() => setModal(false)} onCancel={() => setModal(false)} className="flex justify-center items-center" footer={null}>
									{toggle ? <Login toggle={toggle} setToggle={setToggle} setModal={setModal} /> : <Register toggle={toggle} setToggle={setToggle} />}
								</Modal>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<MessengerChat
				pageId="100006352638655"
				language="sv_SE"
				themeColor={"#000000"}
				bottomSpacing={300}
				loggedInGreeting="loggedInGreeting"
				loggedOutGreeting="loggedOutGreeting"
				greetingDialogDisplay={"show"}
				debugMode={true}
				onMessengerShow={() => {
					console.log("onMessengerShow");
				}}
				onMessengerHide={() => {
					console.log("onMessengerHide");
				}}
				onMessengerDialogShow={() => {
					console.log("onMessengerDialogShow");
				}}
				onMessengerDialogHide={() => {
					console.log("onMessengerDialogHide");
				}}
				onMessengerMounted={() => {
					console.log("onMessengerMounted");
				}}
				onMessengerLoad={() => {
					console.log("onMessengerLoad");
				}}
			/>
		</div>
	);
}

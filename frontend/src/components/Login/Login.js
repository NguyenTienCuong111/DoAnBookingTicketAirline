import React from "react";
import {Form, Input, Button, Checkbox} from "antd";
import {useFormik} from "formik";
import * as Yup from "yup";
import {useDispatch} from "react-redux";
import {LoginAction, ForgotAction} from "../../redux/actions/UserAction";
import {useState} from "react";

export default function Login(props) {
	const [isLogin, setIsLogin] = useState(true);

	const dispatch = useDispatch();


	const SignupSchema = Yup.object().shape({
		email: Yup.string().min(2, "Email quá ngắn!").max(50, "Password quá dài!").email("Email không hợp lệ").required("Vui lòng nhập email"),
		passWord: Yup.string().min(2, "Password quá ngắn!").max(50, "Password quá dài!").required("Vui lòng nhập password"),
	});

	const ForgotSchema = Yup.object().shape({
		email: Yup.string().min(2, "Email quá ngắn!").max(50, "Password quá dài!").email("Email không hợp lệ").required("Vui lòng nhập email"),
	});



	const formik = useFormik({
		initialValues: {
			email: "",
			passWord: "",
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			let user = {
				email: values.email,
				password: values.passWord,
			};
			dispatch(LoginAction(user));
		},
	});

	const formikForgotPass = useFormik({
		initialValues: {
			email: "",
		},
		validationSchema: ForgotSchema,
		onSubmit: (values) => {
			props.setModal(false);
			setIsLogin(true)
			let user = {
				email: values.email,
			};
			dispatch(ForgotAction(user));
		},
	});

	const toggleForm = () => {
		setIsLogin(!isLogin);
	  };

	return (
		<>
			{isLogin ? (
				<Form name="basic" autoComplete="off" onFinish={formik.handleSubmit}>
					<Form.Item label="Email" name="email" style={{marginLeft: "25px"}}>
						<Input onChange={(e) => formik.setFieldValue("email", e.target.value)} name="email" />
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.email}</p>
					</Form.Item>

					<Form.Item label="Mật khẩu" name="passWord">
						<Input.Password onChange={(e) => formik.setFieldValue("passWord", e.target.value)} name="passWord" />
						<p className="text-red-500 text-xs italic mb-0">{formik.errors.passWord}</p>
					</Form.Item>

					<Form.Item name="remember" valuePropName="checked">
						<Checkbox>Ghi nhớ</Checkbox>
					</Form.Item>

					<Form.Item wrapperCol={{offset: 8, span: 8}}>
						<Button
							type="primary"
							htmlType="submit"
							onClick={() => {
								formik.handleSubmit();
							}}
						>
							Đăng nhập
						</Button>
					</Form.Item>
					<div>
						Bạn chưa có tài khoản?
						<button
							type="button"
							className="ant-btn ant-btn-link ant-btn-sm"
							onClick={() => {
								props.setToggle(!props.toggle);
							}}
						>
							<span>Đăng ký</span>
						</button>
						<button
							type="button"
							className="ant-btn ant-btn-link ant-btn-sm"
							onClick={() => toggleForm()}
						>
							<span>Quên mật khẩu</span>
						</button>
					</div>
				</Form>
			) : (
				<Form name="basic" autoComplete="off" onFinish={formikForgotPass.handleSubmit}>
					<Form.Item label="Email" name="email" style={{marginLeft: "25px"}}>
						<Input onChange={(e) => formikForgotPass.setFieldValue("email", e.target.value)} name="email" />
						<p className="text-red-500 text-xs italic mb-0">{formikForgotPass.errors.email}</p>
					</Form.Item>

					

					<Form.Item wrapperCol={{offset: 8, span: 8}}>
						<Button
							type="primary"
							htmlType="submit"
							onClick={() => {
								formikForgotPass.handleSubmit();
								props.setModal(false);
							}}
						>
							Lấy lại mật khẩu
						</Button>
					</Form.Item>
					<div>
						Bạn chưa có tài khoản ?
						<button
							type="button"
							className="ant-btn ant-btn-link ant-btn-sm"
							onClick={() => {
								props.setToggle(!props.toggle);
							}}
						>
							<span>Đăng ký</span>
						</button>
					</div>
				</Form>
			)}
		</>
	);
}

import React from "react";
import {Form, Input, Button, Checkbox} from "antd";
import {useFormik} from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { ResetPassword } from "../redux/actions/UserAction";
import { useHistory } from 'react-router-dom';

export default function ResetPass(props) {
    const { email, token } =  props.match.params;
    const dispatch = useDispatch();
    
    const SignupSchema = Yup.object().shape({
        passWord: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .max(50, 'Password must be less than 50 characters')
            .required('Vui lòng nhập mật khẩu'),
        repeatpassWord: Yup.string()
            .oneOf([Yup.ref('passWord'), null], 'Mật khẩu không khớp') // Validates that repeatpassWord matches passWord
            .required('Vui lòng nhập lại mật khẩu'),
    });

	const formik = useFormik({
		initialValues: {
            passWord: "",
			repeatpassWord: "",
		},
		validationSchema: SignupSchema,
		onSubmit: (values) => {
			let user = {
                password: values.passWord,
				token: token,
				email: email
			};
			dispatch(ResetPassword(user));
		},
    });

	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
				<div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
					<h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Thay đổi mật khẩu</h2>
					<Form name="basic" autoComplete="off" onFinish={formik.handleSubmit}>
						
						<Form.Item label="Mật khẩu" name="passWord">
							<Input.Password onChange={(e) => formik.setFieldValue("passWord", e.target.value)} name="passWord" />
							<p className="text-red-500 text-xs italic mb-0">{formik.errors.passWord}</p>
                        </Form.Item>
                        
                        <Form.Item label="Nhập Lại" name="repeatpassWord">
							<Input.Password onChange={(e) => formik.setFieldValue("repeatpassWord", e.target.value)} name="repeatpassWord" />
							<p className="text-red-500 text-xs italic mb-0">{formik.errors.repeatpassWord}</p>
						</Form.Item>

						<Form.Item wrapperCol={{offset: 8, span: 8}}>
							<Button
								type="primary"
								htmlType="submit"
								onClick={() => {
									formik.handleSubmit();
								}}
							>
								Reset
							</Button>
						</Form.Item>
					</Form>
				</div>
			</div>
		</section>
	);
}

import React from "react";
import "../../Sass/css/Footer.css";
export default function Footer() {
	return (
		<>
			<footer>
				<div className="footer_content">
					<div className="footer_main grid grid-cols-4 gap-6">
						<div className="footer_about">
							<div className="footer_title">Về chúng tôi</div>
							<div className="footer_list">
								<a href="#">Phần mềm Hãng bay</a>
								<a href="#"> Phần mềm đại lý</a>
								<a href="#">Giới thiệu</a>
								<a href="#">Tuyển dụng</a>
								<a href="#">Liên hệ</a>
							</div>
						</div>
						<div className="footer_sup">
							<div className="footer_title">Hỗ trợ</div>
							<div className="footer_list">
								<a href="#">Hướng dẫn thanh toán</a>
								<a href="#">Bảo mật thông tin</a>
								<a href="#">Bảo mật thanh toán</a>
								<a href="#">Câu hỏi?</a>
							</div>
						</div>

						<div className="footer_download">
							<div className="footer_title">Tải ứng dụng đặt vé</div>
							<div className="footer_list">
								<a href="#">
									<img className="FooterMenu__DownloadLogo-sc-13w4bwi-1 ewtgXx lazyloaded" alt="download-logo-1" data-src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" width={150} height={49} src="https://1000logos.net/wp-content/uploads/2020/08/apple-app-store-logo.jpg" />
								</a>
								<a href="#">
									<img className="FooterMenu__DownloadLogo-sc-13w4bwi-1 ewtgXx lazyloaded" alt="download-logo-2" data-src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" width={150} height={49} src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png	" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

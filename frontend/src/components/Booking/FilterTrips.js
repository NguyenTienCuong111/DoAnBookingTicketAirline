import React from "react";
import {Card, Button, Checkbox, Slider, Input, Rate} from "antd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveIcon from "@mui/icons-material/Remove";
import Remove from "@mui/icons-material/Remove";
const {Search} = Input;

export default function FilterTrips() {
	return (
		<div className="filter_trip">
			<div style={{display: "block"}}>
				<span className="grLeft-label-left font-bold text-xl">Bộ lọc tìm kiếm</span>
			</div>
			<Card style={{width: 300}}>
				<div classname="list_time">
					<div className="Times__Contain0101er-sc-1ny42po-0 gTjoUi filter-times-container groupStyle">
						<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Giờ đi</p>
						<div className="time_filter">
							<Button>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-label">Sáng sớm (85)</p>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-value">00:00 - 06:00</p>
							</Button>
							<Button>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-label">Buổi sáng (330)</p>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-value">06:01 - 12:00</p>
							</Button>
							<Button>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-label">Buổi chiều (139)</p>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-value">12:01 - 18:00</p>
							</Button>
							<Button>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-label">Buổi tối (414)</p>
								<p className="base__Caption-sc-1tvbuqk-16 fmivYu option-value">18:01 - 23:59</p>
							</Button>
						</div>
					</div>
				</div>
				<div className="list_condition">
					<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Tiêu chí phổ biến</p>
					<Checkbox>
						Xác nhận tức thì{" "}
						<svg className="Criteria__ConfirmSVG-sc-15ldjkf-0 eUrUgE" width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" clipRule="evenodd" d="M17.332 2v3.333c-.916 0-1.666.75-1.666 1.667s.75 1.667 1.666 1.667V12c0 .917-.75 1.667-1.666 1.667H2.332c-.916 0-1.666-.75-1.666-1.667V8.667c.925 0 1.666-.75 1.666-1.667S1.591 5.333.674 5.333V2A1.66 1.66 0 0 1 2.332.333h13.334c.916 0 1.666.742 1.666 1.667zM8.01 11.344a.3.3 0 0 0 .558.193l.397-.696c.49-.859 1.355-2.372 2.597-4.539.115-.244 0-.343-.208-.343H9.525l.469-3.303a.3.3 0 0 0-.558-.192C8.842 3.51 8.314 4.436 7.853 5.245c-.549.963-1.003 1.76-1.36 2.39l-.001.003c-.026.037-.281.404.163.404h1.823l-.469 3.302z" fill="#27AE60" />
						</svg>
						(21)
					</Checkbox>
					<span className="filter-item-description">Hãng bay sẽ nhận được thông tin ngay khi bạn hoàn tất các bước đặt vé</span>
					<Checkbox>Không cần thanh toán trước</Checkbox>
					<span className="filter-item-description">Chuyến có thể thanh toán tại văn phòng Hãng bay hoặc khi lên bay</span>
				</div>
				<div className="filter_price">
					<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Giá vé</p>
					<Slider range step={10} defaultValue={[20, 50]} />
					<div className="flex justify-between">
						<div class="value-left value-info">0 đ</div>
						<div class="value-right value-info">2,000,000 đ</div>
					</div>
				</div>
				<div className="filter_seat">
					<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Chọn vị trí ghế</p>
					<div className="flex justify-between">
						<p class="base__Body02-sc-1tvbuqk-14 VqdXU color--darkness">Số ghế trống</p>
						<div className="QuantityInput__Container-sc-5ap7dx-0 bcpLGl quantity-input Filter_AvailableSeats flex items-center justify-center">
							<button disabled type="button" className="ant-btn QuantityInput__RoundButton-sc-5ap7dx-1 jHictt">
								<Remove />
							</button>
							<div className="quantity-value mx-5 text-sm font-bold">
								<p className="base__SubHeadline-sc-1tvbuqk-8 jsMKgN color--darkness mb-0">1</p>
							</div>
							<button type="button" className="ant-btn QuantityInput__RoundButton-sc-5ap7dx-1 jHictt">
								<AddCircleIcon />
							</button>
						</div>
					</div>
					<div className="filter-item">
						<div className="filter-item-content">
							<Checkbox>Hàng ghế đầu</Checkbox>
						</div>
						<div className="filter-item-content">
							<Checkbox>Hàng ghế giữa</Checkbox>
						</div>
						<div className="filter-item-content">
							<Checkbox>Hàng ghế cuối</Checkbox>
						</div>
					</div>

					{/* //Hãng bay */}
					<div className="filter_passenger mt-5">
						<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Hãng bay</p>
						<Search placeholder="Tìm Hãng bay" allowClear style={{width: 200}} />
						<div className="mt-3 overflow-y-auto filer-passenger" style={{maxHeight: "100px"}}>
							<Checkbox>An Bình Tâm (1)</Checkbox>
							<Checkbox>Cúc Mừng (25)</Checkbox>
							<Checkbox>Châu Tịnh (3)</Checkbox>
							<Checkbox>Đức Thịnh Phát (12)</Checkbox>
							<Checkbox>An Bình Tâm (1)</Checkbox>
							<Checkbox>Cúc Mừng (25)</Checkbox>
							<Checkbox>Châu Tịnh (3)</Checkbox>
							<Checkbox>Đức Thịnh Phát (12)</Checkbox>
						</div>
					</div>
					<div className="filter_start mt-5">
						<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Điểm đón</p>
						<Search placeholder="Tìm điểm đón" allowClear style={{width: 200}} />
						<div className="mt-3 overflow-y-auto filer-passenger" style={{maxHeight: "100px"}}>
							<Checkbox>An Bình Tâm (1)</Checkbox>
							<Checkbox>Cúc Mừng (25)</Checkbox>
							<Checkbox>Châu Tịnh (3)</Checkbox>
							<Checkbox>Đức Thịnh Phát (12)</Checkbox>
							<Checkbox>An Bình Tâm (1)</Checkbox>
							<Checkbox>Cúc Mừng (25)</Checkbox>
							<Checkbox>Châu Tịnh (3)</Checkbox>
							<Checkbox>Đức Thịnh Phát (12)</Checkbox>
						</div>
					</div>
					<div className="filter_end mt-5">
						<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Điểm đến</p>
						<Search placeholder="Tìm điểm đến" allowClear style={{width: 200}} />
						<div className="mt-3 overflow-y-auto filer-passenger" style={{maxHeight: "100px"}}>
							<Checkbox>An Bình Tâm (1)</Checkbox>
							<Checkbox>Cúc Mừng (25)</Checkbox>
							<Checkbox>Châu Tịnh (3)</Checkbox>
							<Checkbox>Đức Thịnh Phát (12)</Checkbox>
							<Checkbox>An Bình Tâm (1)</Checkbox>
							<Checkbox>Cúc Mừng (25)</Checkbox>
							<Checkbox>Châu Tịnh (3)</Checkbox>
							<Checkbox>Đức Thịnh Phát (12)</Checkbox>
						</div>
					</div>
					<div className="filter_typeseat mt-5">
						<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Loại ghế / giường</p>
						<div className="mt-3 filer-passenger">
							<Checkbox>Ghế Basic</Checkbox>
							<Checkbox>Ghế Vip</Checkbox>
						</div>
					</div>
				</div>
				<div className="filter_vote">
					<p className="base__Body02Highlight-sc-1tvbuqk-15 cACxVN filter-name labelStyle font-bold">Đánh giá</p>
					<Rate allowHalf defaultValue={2.5} />
					<Rate allowHalf defaultValue={2.5} />
					<Rate allowHalf defaultValue={2.5} />
				</div>
			</Card>
		</div>
	);
}

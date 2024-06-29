import React, {Fragment} from "react";
import {useSelector} from "react-redux";

export default function Loading() {
	const {isLoading} = useSelector((state) => state.LoadingReducer);
	return (
		<Fragment>
			{isLoading ? (
				<div style={{ backgroundColor: "rgba(255, 255, 255, 0.986)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 99}}>
					<img src="https://assets-global.website-files.com/5c7fdbdd4e3feeee8dd96dd2/6134707265a929f4cdfc1f6d_5.gif" alt="loading" />
				</div>
			) : (
				" "
			)}
		</Fragment>
	);
}

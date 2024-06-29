import "./ticketFile.css"
import moment from "moment";
import { Button } from "antd";
import html2canvas from 'html2canvas';

export default function TicketFile(props) {

    let { ticket } = props;

    console.log('ticket file', ticket);

    const renderPoint = (typePoint) => {
		let point = ticket.ticketPointId.find((obj) => {
			return obj.typePoint == typePoint;
        });
        
        const words = point?.timepointTicket?.point.stationPoint.name.split(' ');

        // Extract the first letter of each word and join them
        const acronym = words.map(word => word[0]).join('');

		return (
			<span>
				{acronym}
			</span>
		);
    };

    const handleDownloadScreen = () => {
        const element = document.getElementById('capture-file-ticket'); // Replace 'capture' with the ID of the element you want to capture
    
        html2canvas(element).then(canvas => {
          const imgData = canvas.toDataURL('image/png');
          const link = document.createElement('a');
          link.href = imgData;
          link.download = 'screen_capture.png';
          link.click();
        });
      };
    

    const renderSeat = () => {
		return ticket.ticketSeatId.map((item, index) => {
			return (
				<div>
					{item?.seatofticket?.name}
				</div>
			);
		});
	};

    return (
        <div className="wrapFile" id="capture-file-ticket">
            {
                ticket && (
                    <div className="box">
                        <ul className="left">
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                        <ul className="right">
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                            <li />
                        </ul>
                        <div className="ticket">
                            <span className="airline">{ticket.tripPassengerTicket.passenger.name}</span>
                            <span className="airline airlineslip">{ticket.tripPassengerTicket.vehicle.name} Flight</span>
                            <span className="boarding">Boarding pass</span>
                            <div className="content">
                                <span className="jfk" style={{ fontSize: 20, fontWeight:'bold' }}>{renderPoint("dropoff")}</span>
                                <span className="plane">{/*?xml version="1.0" ?*/}<svg clipRule="evenodd" fillRule="evenodd" height={60} width={60} imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" strokeLinecap="round" strokeWidth={30} x1={300} x2={55} y1={390} y2={390} /><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" strokeLinejoin="round" strokeWidth={10} /></g></svg></span>
                                <span className="sfo" style={{ fontSize: 20, fontWeight:'bold' }}>{renderPoint("pickup")}</span>
                                <span className="jfk jfkslip" style={{ fontSize: 15, fontWeight:'bold' }}>{renderPoint("dropoff")}</span>
                                <span className="plane planeslip">{/*?xml version="1.0" ?*/}<svg clipRule="evenodd" fillRule="evenodd" height={50} width={50} imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"><g stroke="#222"><line fill="none" strokeLinecap="round" strokeWidth={30} x1={300} x2={55} y1={390} y2={390} /><path d="M98 325c-9 10 10 16 25 6l311-156c24-17 35-25 42-50 2-15-46-11-78-7-15 1-34 10-42 16l-56 35 1-1-169-31c-14-3-24-5-37-1-10 5-18 10-27 18l122 72c4 3 5 7 1 9l-44 27-75-15c-10-2-18-4-28 0-8 4-14 9-20 15l74 63z" fill="#222" strokeLinejoin="round" strokeWidth={10} /></g></svg></span>
                                <span className="sfo sfoslip" style={{ fontSize: 15, fontWeight:'bold' }}>{renderPoint("pickup")}</span>
                                <div className="sub-content">
                                    <span className="watermark">Lufthansa</span>
                                    <span className="name">PASSENGER NAME<br /><span>{ticket.user.name}</span></span>
                                    <span className="flight">PHONE<br /><span>{ticket.user.numberPhone}</span></span>
                                    <span className="gate">GATE<br /><span>11B</span></span>
                                    <span className="seat">SEAT<br /><span>{renderSeat()}</span></span>
                                    <span className="boardingtime">BOARDING TIME
                                        <br />
                                        <span>{moment(ticket.tripPassengerTicket.trip?.startTime).format("DD-MM-YYYY")}</span>&nbsp;
                                        <span>Time Start: {ticket.tripPassengerTicket.startTime}</span>&nbsp;
                                        <span>Time End: {ticket.tripPassengerTicket.endTime}</span>
                                    </span>
                                    <span className="flight flightslip">FLIGHT N°<br /><span>VN</span></span>
                                    <span className="seat seatslip">SEAT<br /><span>{renderSeat()}</span></span>
                                    <span className="name nameslip">PASSENGER NAME<br /><span>{ticket.user.name}</span></span>
                                </div>
                            </div>
                            <div className="barcode" />
                            <div className="barcode slip" />
                        </div>
                    </div>
                )
            }
            <Button
					type="primary"
					onClick={()=>handleDownloadScreen()}
				>
					Xuất Vé
				</Button>
        </div>
    )
}
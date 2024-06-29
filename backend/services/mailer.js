const nodemailer = require('nodemailer')
async function sendMail(data) {

    const {
        email,
        detailTicketFromName,
        detailTicketToName,
        startTime,
        endTime
    } = data;

    const mailOptions = {
        from: 'Booking Flight VietNam',
        to: email,
        subject: 'Xác thực đã đặt vé',
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
                <p><strong>Tuyến hàng không:</strong> ${detailTicketFromName} - ${detailTicketToName}</p>
                <p><strong>Ngày khởi hành:</strong> ${startTime}</p>
                <p><strong>Ngày khởi đến:</strong> ${endTime}</p>
            </div>

            <p>Xin vui lòng xuất trình thông tin vé khi lên bay. Chúc bạn có một chuyến đi vui vẻ!</p>
        </div>
    </body>
    </html>
        `,
    }
    
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: "587",
        secure: false,
        auth: {
            user: "trainmodel0503@gmail.com",
            pass: "gbweaxmipkkxuwvq",
        },
    })

    await transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Send successfully')
        }
        console.log('Send failed', err)
    })
}

async function forgotPass(data) {

    const {
        email,
        token
    } = data;

    const mailOptions = {
        from: 'Booking Flight VietNam',
        to: email,
        subject: 'Quên mật khẩu',
        html: `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Forgot Password</title>
                <style>
                   body, html {
                        margin: 0;
                        padding: 0;
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                    }

                    /* Container styles */
                            .container {
                                max-width: 600px;
                                margin: 0 auto;
                                padding: 20px;
                                background-color: #f9f9f9;
                                border: 1px solid #ddd;
                                border-radius: 5px;
                                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                            }

                            /* Header styles */
                            .header {
                                background-color: #007bff;
                                color: #fff;
                                padding: 10px;
                                text-align: center;
                                border-top-left-radius: 5px;
                                border-top-right-radius: 5px;
                            }

                            /* Content styles */
                            .content {
                                padding: 20px;
                                background-color: #fff;
                                border-bottom-left-radius: 5px;
                                border-bottom-right-radius: 5px;
                            }

                            /* Button styles */
                            .btn {
                                display: inline-block;
                                background-color: #007bff;
                                color: #fff;
                                text-decoration: none;
                                padding: 10px 20px;
                                border-radius: 5px;
                            }

                            .btn:hover {
                                background-color: #0056b3;
                            }

                            /* Footer styles */
                            .footer {
                                margin-top: 20px;
                                text-align: center;
                                color: #666;
                                font-size: 12px;
                            }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>Forgot Password</h2>
                    </div>
                    <div class="content">
                        <p>Hello,</p>
                        <p>We received a request to reset your password. If you did not make this request, you can safely ignore this email.</p>
                        <p>To reset your password, please click the button below:</p>
                        <p style="text-align: center;">
                            <a href="http://localhost:3000/reset-password/${email}/${token}" style="color: white;" class="btn">Reset Password</a>
                        </p>
                        <p>If you're having trouble clicking the "Reset Password" button, copy and paste the URL below into your web browser:</p>
                        <p>Thank you!</p>
                        <p>Flight team</p>
                    </div>
                </div>
            </body>
            </html>
        `,
    }
    
    const transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: "587",
        secure: false,
        auth: {
            user: "trainmodel0503@gmail.com",
            pass: "gbweaxmipkkxuwvq",
        },
    })

    await transport.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log('Send successfully')
        }
        console.log('Send failed', err)
    })
}



module.exports = {
    sendMail,
    forgotPass
}
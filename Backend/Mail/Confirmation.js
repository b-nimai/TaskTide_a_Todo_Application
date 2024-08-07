const resetPaswordConfirmation = (name) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Confirmation Email of Reset Password</title>
		<style>
			body {
				background-color: #ffffff;
				font-family: Arial, sans-serif;
				font-size: 16px;
				line-height: 1.4;
				color: #333333;
				margin: 0;
				padding: 0;
			}
	
			.container {
				max-width: 600px;
				margin: 0 auto;
				padding: 20px;
				text-align: center;
			}
	
			.logo {
				max-width: 200px;
				margin-bottom: 20px;
			}
	
			.message {
				font-size: 18px;
				font-weight: bold;
				margin-bottom: 20px;
			}
	
			.body {
				font-size: 16px;
				margin-bottom: 20px;
			}
	
			.cta {
				display: inline-block;
				padding: 10px 20px;
				background-color: #FFD60A;
				color: #000000;
				text-decoration: none;
				border-radius: 5px;
				font-size: 16px;
				font-weight: bold;
				margin-top: 20px;
			}
	
			.support {
				font-size: 14px;
				color: #999999;
				margin-top: 20px;
			}
	
			.highlight {
				font-weight: bold;
			}
            .add{
                font-size: 18px;
                color: green;
            }
            .ulli{
                font-size: 16px;
                font-weight:bold;
                color: blue;
            }
            .point{
                text-align: left;
            }
		</style>
	
	</head>
	
	<body>
		<div class="container">
			<div class="message">Welcome back to TaskTide, ${name}!</div>
			<div class="body">

               <p> We are pleased to inform you that your password has been successfully changed. </p>
                <p>If you did not request this change, please change your password or contact our support team immediately. </p>

			</div>
            <div>
                <p>Sincerely,</p>

                <p>The TaskTide Team</p>
            </div>
			<div class="support">For any assistance, please feel free to reach out to us at 
				<a href="mailto:officialnill2000@gmail.com">officialnill2000@gmail.com</a>. We are here to help!</div>
			</div>
	</body>
	
	</html>`;
};

module.exports = resetPaswordConfirmation
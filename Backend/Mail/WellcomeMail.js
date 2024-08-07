const wellcomeMail = (name) => {
	return `<!DOCTYPE html>
	<html>
	
	<head>
		<meta charset="UTF-8">
		<title>Wellcome Email</title>
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
			<div class="message">Welcome to TaskTide, ${name}!</div>
			<div class="body">
				<p>We’re thrilled to have you on board. TaskTide is designed to help you organize your daily tasks and boost your productivity effortlessly. Here’s a quick guide to help you get started:</p>

        		<h2>Getting Started</h2>
                <div class="point">
        		    <ul>
        		        <li><strong>Create Your First Task:</strong>
        		            <ul>
        		                <li>Log in to your account.</li>
        		                <li>Click on the "Add Task" button.</li>
        		                <li>Fill in the details and set your priorities.</li>
        		            </ul>
        		        </li>
        		        <li><strong>Organize Your Tasks:</strong>
        		            <ul>
        		                <li>Use categories to group similar tasks.</li>
        		                <li>Set due dates and reminders to stay on track.</li>
        		            </ul>
        		        </li>
        		        <li><strong>Track Your Progress:</strong>
        		            <ul>
        		                <li>Mark tasks as completed.</li>
        		                <li>View your progress on the dashboard.</li>
        		            </ul>
        		        </li>
        		    </ul>

        		    <h2>Features You’ll Love</h2>
        		    <ul>
        		        <li><strong>Intuitive Interface:</strong> Easily navigate and manage your tasks.</li>
        		        <li><strong>Progress Tracking:</strong> Stay motivated by tracking your task completion.</li>
        		    </ul>
                </div>

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

module.exports = wellcomeMail
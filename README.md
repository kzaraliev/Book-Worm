# Book Worm

Book Worm is a web application for book reviews and comments.

## Getting Started

## How to run it?

1. **Prerequisites:**
-	_`Node.js`_: Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine. You can download them from https://nodejs.org/.

-	_`VSCode`_: [Install Visual Studio Code](https://code.visualstudio.com/) (VSCode) if you haven't already. You can download it from https://code.visualstudio.com/.

2. **Steps**

-	**Clone the Repository:**
	-	Clone project repository to your local machine using a version control tool like Git. Open your terminal and run:
	```bash
	git clone https://github.com/kzaraliev/Space-Collector.git
	```
	-	Navigate to the root folder of the project:
	```bash
	cd Space-Collector
	```
-	**Install Client Dependencies:**
	-	Navigate to the root directory of the project and install the dependencies for the client.
		-	Navigate to the root directory and run:
		```bash
		cd client
		```
		-	In the 'client' directory, install client dependencies by running:
		```bash
		npm install
		```
-	**Start the Server:**
	-	Navigate to the server directory of the project and start the Node.js server.
		-	Navigate to the root directory and run:
		```bash
		cd server
		```
		-	In the 'server' directory run:
		```bash
		node server.js
		```
	This will start the RESTful API Service, and you should see output 'Server started on port 3030. You can make requests to http://localhost:3030/' indicating that the service API is running. It should be accessible at http://localhost:3030.
-	**Start the Client Development Server:**
	-	Open a new terminal window and navigate to the client directory. Start the Vite development server:
		-	In the 'client' directory
		```bash
		npm run dev
		```
	This will start the development server, and you should see output indicating that the development server is running. It should be accessible at http://localhost:5173.


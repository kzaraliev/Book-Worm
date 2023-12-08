# Book Worm

<h2 align="center">
Where Words Take Flight and Imagination Finds a Home 📚📖
</h2>

<p align="center">
	<img src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7766/bookworm-clipart-xl.png" width="300px" height="300px">
</p>

## Features

 -	Book Reviews: Share your thoughts and reviews on various books.
 -	Comments: Engage in discussions through comments on book reviews.
 -	User-Friendly Interface: Intuitive design for easy navigation.

## Application development description

1. Developed with Visual Studio Code v.1.76.2 + Node.js v.16.14.2.
2. Used libs: React.js v.18.2.0 + Vite v.4.4.5 with HMR, Babel plugin for fast refresh and some ESLint v.8.45.0 rules.
3. Browsers used: Google Chrome(latest versions)+ Addons: React Dev.Tools, JSON Formatter.

## Usage

1. **Navigation bar:**
   Navigation links change the current page (view). Guests (unauthenticated visitors) see the links to the Home, Books, About, as well as the links to the Login and Register pages.
   The logged-in user navbar contains the links to Home, Books, About, Create Book, Profile pages.
   
2. **Login User:**
    The Login page is available only for guests (unauthenticated visitors).

    The included REST service comes with the following premade user accounts, which you may use for test purposes:
    ```json
	{ "email": "peter@abv.bg", "username": "Peter", "password": "123456" }
	{ "email": "george@abv.bg", "username": "George", "password": "123456" }
	{ "email": "admin@abv.bg", "username": "Admin", "password": "123456" }
    { "email": "elena@gmail.com", "username": "Elena", "password": "123456" }
    ```
	
	**REST Service API Endpoint:**
	-   _Method: POST_
	-   _Request body:_
    ```json
    { 
       "email": "string",
       "password": "string"
    }
    ```
	-   _URL: http://localhost:3030/users/login_

	The Login page contains a form for existing user authentication. By providing an email and password, the app login user in the system if there are no empty fields.
	Upon success, the REST service returns information about the existing user along with a property accessToken, which contains the session token for the user, in order to be able to perform authenticated requests.
	After successful login, the user is redirected to the Home page. If there is an error, an appropriate error message is displayed.

3.	**Register User:**
    The Register page is available only for guests (unauthenticated visitors).

	**REST Service API Endpoint:**
	-   _Method: POST_
	-   _Request body:_
    ```json
    { 
       "email": "string",
       "username": "string",
       "password": "string",
       "imgURL": "string"
    }
    ```
	-   _URL: http://localhost:3030/users/register_

	The Register page contains a form for new user registration. By providing an email, username, image URL and password, the app register new user in the system if there are no empty fields.
	Upon success the REST service returns the newly created object with an automatically generated _id and a property accessToken, which contains the session token for the user, in order to be able to perform authenticated requests.
	After successful registration, the user is redirected to the Home page. If there is an error, an appropriate error message is displayed.

4.	**Logout User:**
	The logout action is available only for logged-in users.
	
    **REST Service API Endpoint:**
	-   _Method: GET_ 
	-   _Request headers:_
    ```json
    { 
       "X-Authorization": "accessToken" 
    }
    ```
	-   _URL: http://localhost:3030/users/logout_

	After successful logout, the user is redirected to the Login page.

5.	**Home page:**
	All users are welcomed to the Home page, where they can see recently added books and proceed to the catalogue with all other books.

<ul align="center">
	<img src="https://i.ibb.co/fG7YVSp/Annotation-2023-12-06-222959.png">
	<img src="https://i.ibb.co/8DjNtn7/Annotation-2023-12-06-223029.png">
</ul>

6.	**Books Catalog page:**
	This page displays a list of all published books on the site. Clicking on the [Details] button in the cards leads to the details page for the selected book.
	If the Catalog is empty, "No books yet :(" is displayed along with a "*Add your favorites" link that redirects the user to the Create Book page.

	<p align="center">
		<img src="https://i.ibb.co/MkCJMgf/Annotation-2023-12-06-223044.png">
	</p>

	**REST Service API Endpoints:**
	-   _Method: GET_ 
	-   _URL: http://localhost:3030/data/books - for all books_

7.	**Create book page:**
	The Create book page is available to logged-in users. It contains a form for creating new books. User can publish books with send request, if there are no empty fields.
	
	**REST Service API Endpoint:**
	-   _Method: POST_
	-   _Request headers:_
	```json
	{
	   "X-Authorization": "accessToken",
	   "Content-Type": "application/json"
	}
    ```
	-   _Request body:_
	```json	
	{ 
	   "title": "string",
	   "author": "string",
	   "year": "integer number",
	   "genre": "string",
	   "year": "integer number",
	   "description": "string",
	   "imageUrl": "string (URL address)"
	}	
    ```
	-   _URL: http://localhost:3030/data/books_
	
	Upon success, the REST service returns the newly created item.
	After successful creation, the user is redirected to the Books catalog page.

8.	**Details page:**
	All users are able to view details about books. Clicking on the [Details] button in the cards leads to the details page for the selected book. If the currently logged-in user is the creator of the listing, the [Edit] and [Delete] buttons are displayed.
	Every logged-in user is able to write a comment about the book they have opened. By clicking on the [Send] button. [Send] button is disabled for users who are not logged-in.

	<p align="center">
		<img src="https://i.ibb.co/0KbFfyW/Annotation-2023-12-06-223138.png">
	</p>

	**REST Service API Endpoints for Details view:**
	-   _Method: GET_
	-   _URL: http://localhost:3030/data/books/{:bookId} - for selected book_
	-   _URL: http://localhost:3030/data/comments?where=bookId%3D%22${:bookId}%22&load=owner_ownerId:users - to find all comments about this book_
	
	**REST Service API Endpoint for Commenting action:**
	-   _Method: POST_
	-   _Request headers:_
	   ```json
	   {
	      "X-Authorization": "accessToken",
	      "Content-Type": "application/json"
	   }
	   ```
	-   _URL: http://localhost:3030/data/comments  - to add a comment to the book_

	After successful commenting the comment is displayed in the comments section.

9. 	**Edit Book:**
    	The Edit page is available only to logged-in user who is at the same time and author of the post about the book. Clicking on the [Edit] button of a particular book on the Details page, redirects user to the Edit page with all fields filled with the data for 	the book. It contains a form with input fields for all relevant properties. The Author of the post is able to update it by sending the correct filled form with no empty fields in it before the request making.

    **REST Service API Endpoint:**
	-   _Method: PUT_
	-   _Request headers:_
	```json
	{
	   "X-Authorization": "accessToken",
	   "Content-Type": "application/json"
	}
    ```
	-   _Request body:_
	```json	
	{ 
	   "title": "string",
	   "author": "string",
	   "year": "integer number",
	   "genre": "string",
	   "description": "integer number",
	   "imageUrl": "string (URL address)"
	}	
    ```
	-   _URL: http://localhost:3030/data/books/{:bookId}_

    Upon success, the REST service returns the modified item.
    After successful edit request, the user is redirected to the Details page of the currently edited item.

10. **Delete Book:**
    The delete action is available to logged-in user, who is at the same time and author of the post about the book. When the author clicks on the [Delete] button of a particular book on the Details page, a confirmation dialog is displayed, and upon confirming the dialog, the book is deleted from the system.

    **REST Service API Endpoint:**
	-   _Method: DELETE_
	-   _Request headers:_
    ```json
    {
       "X-Authorization": "accessToken",
       "Content-Type": "application/json"
    }
    ```
	-   _URL: http://localhost:3030/data/books/${:bookId}_
    Upon success, the REST service returns Object, containing the time of deletion of selected item.
    After successful delete request, the user is redirected to the Books page.

11.	**Profile page:**
	The Profile page is available only to logged-in users.
	This page displays a list of all all posts with books made by the current user. If there are no published books yet, "You haven't published a book yet?" is displayed along with a "*Share your favorite ones" link that redirects the user to the Create Book page.

	<p align="center">
		<img src="https://i.ibb.co/VVYWzR8/Annotation-2023-12-07-183708.png">
	</p>
 
	**REST Service API Endpoint:**
	-   _Method: GET_
	-   _Request headers:_
	```json
	{
	   "X-Authorization": "accessToken"
	}
    ```	
	-   _URL: http://localhost:3030/data/books?where=_ownerId%3D%22{:userId}%22_

## Project Structure

-   **`/client`**: Contains the SPA.
    -   `/src`: React components, style css, and business logic, contexts, guards and requester services.
		-	`/components`: React components, style css, and business logic.
    	-  	`/context`: React AuthContext component that share authentication and authorization states between components.
    	-	`/guards`: React AuthGuard and LoggedInGuard components that check the authentication and authorization of the current user.
   		-	`/hooks`: Custom React hooks.
    	-	`/utils`: Houses reusable functions, constants.
		-	`/services`: JS logic with requester functions for the REST API Service.
      
-   **`/server`**: Contains REST API Service with data folder. In this folder are stored .json files with premade data.

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

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/license/mit/) file for details.


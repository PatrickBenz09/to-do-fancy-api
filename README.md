# To-Do-Fancy-API

Demo app for basic To-Do application using Token, and FaceBook Login with Representational state transfer (REST)

## To-Do-Fancy REST API

List of Register routes:

| Route     | HTTP | Description                                                      |
| --------- |:----:| :--------------------------------------------------------------- |
| /register | POST | Register / Create a user (post: username, password, email, role) |


List of Login routes:

| Route      | HTTP  | Description                                 |
| ---------- |:-----:| :------------------------------------------ |
| /login     | POST  | Log In as a user (post: username, password) |


List of User routes:

| Route      | HTTP   | Description                                                 |
| ---------- |:------:| :---------------------------------------------------------- |
| /user      | GET    | Show All Users                                              |
| /user/:id  | GET    | Show One User                                               |
| /user/:id  | DELETE | Delete One User                                             |
| /user/:id  | PUT    | Update One User      (post: username, email)                |
| /user      | POST   | Assign Todo to User  (post: userObjectId, todouserObjectId) |

List of To-Do routes:

| Route      | HTTP   | Description                             |
| ---------- |:------:| :-------------------------------------- |
| /todo      | GET    | Show All Todos                          |
| /todo/:id  | GET    | Show One Todo                           |
| /todo/     | POST   | Create One Todo  (post: todo, due_date) |
| /todo/:id  | DELETE | Delete One Todo                         |
| /todo/:id  | PUT    | Update One Todo  (post: todo)           |


### Don't Forget
Use Postman/Insomnia or any kind of API development tools
After you clone this repo, create a .env file and fill it like the already made .env.template file.

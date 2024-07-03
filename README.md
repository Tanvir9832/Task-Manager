Site Link: https://task-manager-one-rho.vercel.app/
GitHub Link: https://github.com/Tanvir9832/Task-Manager


Overview :  
Users have to create an account (registration), and then users can log in to their account.
Users can see all their created tasks on the home page.
In the navbar, there is an option to add task .
Users can click the Title or description to see that task on a single page. There will be the
update and delete option.
Users can mark any complete task as incomplete or any incomplete task as complete.
An account you can directly login with :
Email: tanvir9832@gmail.com
Password : 12345678

Project Setup : 
install nodejs (latest) if not installed. Clone the project. go to backend folder 
command : 
-> npm i (to install all the dependencies)
-> npm start (to start the server)

now go to frontend folder
command : 
-> npm i (to install all the dependencies)
-> npm start (to start the server)


Endpoints : 
User : 
    base URL : http://localhost:8000/user

    registration : http://localhost:8000/user/registration (POST)
    body : name, email, password
    docs : For user registration

    login : http://localhost:8000/user/login (POST)
    body : email, password
    docs : For user login


    checkauth : http://localhost:8000/user/checkauth (GET) 
    docs : To check user loged is or not


Task : 
    base URL : http://localhost:8000/task

    create-task : http://localhost:8000/task/create-task (POST)
    body : title, description
    docs : To create task

    get-all-tasks : http://localhost:8000/task/get-all-tasks (GET)
    docs : To get all tasks with pagination and searching

    update-task/:id : http://localhost:8000/task/update-task/:id (PUT)
    body : title or description
    docs : To update task

    update-status/:id : http://localhost:8000/task/update-status/:id (PUT)
    docs : To update task status (incomplete to complete / complete to incomplete)

    delete-task/:id : http://localhost:8000/task/delete-task/:id (DELETE)
    docs : To delete task

    get-task/:id : http://localhost:8000/task/get-task/:id (GET)
    docs : To get a single task



# Prism Port
<h3>Prism Port is a Portfolio Management Application.<br>
It is a full-stack web application aims to streamline the process of project and task management for portfolio managers.<br>
PrismPort provides portfolio managers with a user-friendly and comprehensive platform to manage their profiles and the projects they handle.</h3>

# Tech Stacks
<li><b>Frontend : </b>HTML,CSS,Javascript</li> 
<li><b>Frontend frameworks : </b>React</li> 
<li><b>Backend : </b>Python</li>
<li><b>Backend framewroks : </b></li>  
<li><b>Database : </b>MongoDB</li> 

# API endpoints
<h3>Portfolio Manager Endpoints</h3>
<li>GET /portfolio-managers : Retrieves a list of all portfolio managers.</li>
<li>GET /portfolio-managers/{id} : Retrieves a specific portfolio managers by ID</li>
<li>POST /portfolio-managers : Create a new portfolio manager.</li>
<li>PUT /portfolio-managers/{id} : Update the details of a portfolio manager.</li>
<li>DELETE /portfolio-managers/{id} : Delete a portfolio manager.</li>

<h3>Project Endpoints</h3>
<li>GET /projects : Retrieve a list of all projects.</li>
<li>GET /projects/{id} : Retrieve a specific project by ID.</li>
<li>POST /projects : Create a new project.</li>
<li>PUT /projects/{id} : Update the details of a project.</li>
<li>DELETE /projects/{id} : Delete a project.</li>

<h3>Task Endpoints</h3>
<li>GET /tasks : Retrieve a list of all tasks.</li>
<li>GET /tasks/{id} : Retrieve a specific task by ID.</li>
<li>POST /tasks : Create a new task.</li>
<li>PUT /tasks/{id} : Update the details of a task.</li>
<li>DELETE /tasks/{id} : Delete a task.</li>

<h3>Resource Endpoints</h3>
<li>GET /resources : Retrieve a list of all resources.</li>
<li>GET /resources/{id} : Retrieve a specific resource by ID.</li>
<li>POST /resources : Create a new resource.</li>
<li>PUT /resources/{id} : Update the details of a resource.</li>
<li>DELETE /resources/{id} : Delete a resource.</li>

<h3>Task-Resource Endpoints</h3>
<li>POST /tasks/{task_id}/resources/{resource_id}</li>
<li>DELETE /tasks/{task_id}/resources/{resource_id}</li>


# ER Diagram 
<img src="./images/Screenshot 2023-07-19 093834.png" alt="diagram"/>

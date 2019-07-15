# apiEAD
it's a project with CRUD with nodejs using express and mongodb.
it's use the docker, because this tool helps you perform the deploy, and an easier way to use all the tools contained in the project.

instructions:
1- Open CMD/bash and use the command 'git clone' and the clone url of this repository.

2-run the command below:
docker-compose up --build
it's will search and install all dependencies of this project

3- in the index.js in line 17, exits a code 'mongodb://192.168.1.103:27017/apiEAD',
you will modify with your internal ip and'mongodb://internalIp:27017/apiEAD'.

if you don't use the docker:

1- use the command npm start

2- use node index.js to start the server
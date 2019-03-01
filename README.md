# SEProject2

We built a React.js application along with a Node.js backend server to provide the react frontend with data. This project is not finished.


## Functionality

GUI: Sophie (The Savior) working in react to make a locally hosted webapp like frontend 

Twitter Search API: Main logic for the search API is in server.js, includes authorization for both Yahoo Weather and Twitter (please don't steal credentials). Jack Broncato and Jean-Luc provided twitter backend API calls for the frontend

Weather API: Jack Naworski provided backend weather data when fed a location

Design Pattern: Observer, the server observes for requests and responds when they are recieved. (Jack B.)


### Installing

- Yarn: make sure to install Yarn so that you are able to get the dependencies to run the program.
    - Follow this link to install yarn https://yarnpkg.com/lang/en/docs/install/#debian-stable
    - To build and run the frontend enter this in command: ```yarn install && cd client && yarn install && cd ..```
    - Then run yarn with the command while in the client folder: ```yarn build```
    - Then: ```yarn start```
    

## Running the tests

- For testing the backend APIs run server.js in src/main. Use ```node server.js``` which should tell you the server is listening, if running correctly. 

- While server.js is running, on a seperate terminal, run ``` node requesttest.js``` or ```node weathertest.js``` depending on which you would like to test. 


## Built With/Requirements

- Yarn
- Express
- Twitter-node-client
- Axios
- Various other modules (in the code already)


## Authors

* **Jack Broncato** - *Back-end node Dev* - [jman11111](https://github.com/jman11111)

* **Jean-Luc Putter** - *Back-end API Dev with node* 

* **Sophie Von Hatten** - *Solo Front-end Dev* - [svonhatten](https://github.com/svonhatten)

* **Jack Narwoski** - *Back-end node Dev*

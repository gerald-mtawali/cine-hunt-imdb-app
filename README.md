# CineHunt: Finding Your Film

CineHunt the application for searching the movie titles found on IMDb's website.

This application uses Vite as a bundler for the client application.
It is build using React and Typescript

## Running the Application

### Install Pre-Requisites: CineHunt SDK
Go to the following [link](https://nodejs.org/en/download) for instructions on how to install Node on your machine. 

To ensure that Node and it's package manager (NPM) has been installed run the following command 

```bash
node --v
npm --v
```

Once the node has been installed, installed the packages for the cinehunt-sdk and the client application. 

```bash
cd cinehunt-sdk/
# install the required packages 
npm install 
# build the application, either through the build command or by entering the tsc compile command
npm run build | tsc --build --force
cd ..
```

### [Optional] Testing that the SDK works as expected
The user can test that the sdk is working as expecting. 

```bash 
cd cinehunt-sdk/ 
# navigate to the testing directory
cd testing/
npm init -y 
npm install ..
# either run the package script, or manually run the index.js file
npm run dev | node index.js 
```

### Installing Pre-Requisites: Client
```bash
cd client/ 
# install the required dependencies
npm install 
# install the cinehunt sdk
npm install ../cinehunt-sdk 
```

### Running the Client Application
In order to run the client application run the following commands in the terminal: 
```bash 
cd client/ 
# run the application 
npm run dev
```
___
With a little more time, this application would have been a bit more polished, including creating a docker container easy for it to be used on remote environments. I would have included cypress tests as well to test the e2e functionality of the application.

Regardless of the state of the application, I am proud with the amount that I have learnt over the past few days. And I believe that the work is a testament to my ability to learn quickly, and my work ethic. 

I've included the designs of the application, in the folder `designs/`, to showcase my vision when building this application. All designs were created with Figma. 

Irregardless of the state of the application, working on this was a lot of fun.
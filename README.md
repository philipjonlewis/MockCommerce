![Xendit Logo](https://www.xendit.co/wp-content/uploads/2020/03/XENDIT-LOGOArtboard-1@2x.png)

# XenElectronic - Xendit Exam - Philip Jon E Lewis

### By Philip Jon E Lewis

philipjonlewis@gmail.com

**Position Applied : Full Stack Engineer**

---

Full Stack E-Commerce App

[API Documentation for the backend (made with postman)](https://documenter.getpostman.com/view/12540159/VUqoQJoi)

## Link to web app demo video - web

[XenElectronic-Web](https://www.dropbox.com/s/mrjj6e49wkmjhhx/xenelectronic-web.mov?dl=0)

## Link to web app demo video - mobile

[XenElectronic-Mobile](https://www.dropbox.com/s/cfmsyl52hmsrgm8/xendit-mobile.mov?dl=0)

## Link to static UI images

[UI Images](https://www.dropbox.com/sh/ulbtwd9pi1zcxnt/AAAsEcHUCy2-D7e1DtMHEyxca?dl=0)

---

## Tech Stack

### Language

- Typescript

#### Frontend

- Vite
- React
- Tailwind
- Redux Toolkit
- RTK Query

#### Backend

- NodeJS
- ExpressJS

#### Database

- MongoDB
- Mongoose

#### Security

- Sanitize-html (Backend)

#### Testing

- Vitest (Built on top of Jest)
- Supertest

---

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

- Install mognoDB locally - Installation instructions:
  1. [Windows](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-windows/)
  2. [Mac](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/)
  3. [Linux](https://www.mongodb.com/docs/manual/administration/install-on-linux/)

### Installing

1. Download/Clone the repo

2. Go inside the directory

3. Run the following commands by order

   ##### > _Command below installs necesary dependencies such as concurrently and pre-push_

   ```
   npm install
   ```

   ##### > _Command below installs dependencies for the client and server sub directories_

   ```
   npm run postinstall
   ```

4. Go into the client folder and make a .env file containing this line of code

   ##### > _Make sure that the backend port is exact_

   ##### > _Sample Format : http://192.168.0.25:4123_

   ```
   VITE_BACKEND_PORT=*REPLACE WITH BACKEND PORT*
   ```

5. IMPORTANT - server already has a config.ts file with the following structure

   ### Change config.frontendPort to the network address and NOT just localhost or else it will not work because of CORS

   ```
   export const config = {
   environment: 'development',
   URL: '/xenelectronic/api_v1',
   port: 4000,
   frontendPort: 'http://192.168.0.25:3000',
   walkers: 'bXyCiyVVwxAmDCSTOSrYDOyGAhoFfHNq',
   dbPort:
   'mongodb://127.0.0.1:27017/xenelectronic'
   };

   ```

---

### Development Mode

4. Development Mode

   ##### > _Command below runs both the client and server in development mode_

   ```
   npm run dev
   ```

## Running the tests

Make sure to run these commands in the parent directory and not in the sub folders. There are three testing commands available

1. Standard testing

   ```
   npm test
   ```

2. Testing with UI (c/o vitest)

   ```
   npm test:watch
   ```

3. Testing with coverage

   ```
   npm test:coverage
   ```

## Security

Added sanitize-html package to sanitize query parameters for the get all projects route and type checked ids in the verify cart content route

## Acknowledgments

- Xendit - for the very fulfilling and challenging exam in such a short time, thank you!

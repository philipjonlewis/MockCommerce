![Xendit Logo](https://i0.wp.com/www.startuplanes.com/wp-content/uploads/2022/05/Volta-Labs-63-1.png?fit=810%2C456&ssl=1)

# XenElectronic - Xendit Exam - Philip Jon E Lewis

### By Philip Jon E Lewis

philipjonlewis@gmail.com

**Position Applied : Full Stack Engineer**

---

Full Stack E-Commerce App

---

## Tech Stack

### Language

- Typescript

#### Frontend

- Vite
- React
- Tailwind

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

5. OPTIONAL - server already has a config.ts file but its also compatibe with .env for deployment. add .env in accordance to config file requirements.

### Development Mode

4. Development Mode

   ##### > _Command below runs both the client and server in development mode_

   ```
   npm run dev
   ```

## Running the tests

Make sure to run these commands in the parent directory and not in the sub folders.  There are three testing commands available

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

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

- [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
- [Maven](https://maven.apache.org/) - Dependency Management
- [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **Billie Thompson** - _Initial work_ - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc

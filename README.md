# User & Post Microservices using Apollo Federation

This repository is a demo of building microservices using Apollo federation. Apollo federation build a single schema in gateway which stitch all the services.All the microservices are in `./services` folder.

It contains the simple blog microservices `user` , and `post` services which gets connected using `gateway`

## Installation

`User Service`

```bash
cd services/UserService
npm install
npm run dev
```

`Post Service`

```bash
cd services/PostService
npm install
npm run dev
```

` Gateway `

```bash
npm install
npm run start-gateway
```


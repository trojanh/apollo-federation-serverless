# User & Post Microservices using Apollo Federation

This repository is a demo of building microservices using Apollo federation. Apollo federation build a single schema in gateway which stitch all the services.All the microservices are in `./services` folder.

It contains the simple blog microservices `user` , and `post` services which gets connected using `gateway`

Access gateway Graphql playground on: http://localhost:3000/dev/graphql

## Installation

```bash
npm run install # installs dependencies for all services and gateway
npm run dev:all # start all services and gateway servers
```

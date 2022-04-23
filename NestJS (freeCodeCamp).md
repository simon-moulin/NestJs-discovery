# NestJS (freeCodeCamp)

## Introduction

- An abstraction for Express
- Solve the architecture problem
- Native typescript
- Easy to maintain



## Setup

Install nodeJs (16.13)

Install NestJs CLI

`nest new nest-js-api`



## Starter code

src: Source files

test: Test files

Others config files



First:

Remove app.spec, app.controller, app.service.

Delete them from the app module



The global file(Module) is app.module.ts

**What is a module ?**

A class with the module decorator for NestJs.

A module can import others modules, controllers and providers.

Module organised in feature:

ex: User Module, Auth Module, Bookmark Module, DB Module.

Module organise an app.



**Modules of our app**

AuthModule: auth

Manually(whitout the CLI):

- Create a folder `auth`
- Add a `auth.module.ts` file 
- Class module {}
- And add the module decorator
- export this class
- Import this module in the main module



**Run the application**

`npm run start:dev`




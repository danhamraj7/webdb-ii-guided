# DB II Guided Project

Guided project **DB II** Module.

## Prerequisites

- [SQLite Studio](https://sqlitestudio.pl/index.rvt?act=download) installed.
- a REST client alike [Insomnia](https://insomnia.rest/download/) or [Postman](https://www.getpostman.com/downloads/) installed.
- create a free account for [DB Designer](https://dbdesigner.net).

## Project Setup

- [ ] fork and clone this repository.
- [ ] **CD into the folder** where you cloned **your fork**.
- [ ] type `npm i` to download dependencies.
- [ ] type `npm run server` to start the API.

Please follow along as the instructor explores schema design with this API.

assig

## Add fruits table

The schema is as follows:

- an `id` as the primary key, make it autoincrement.
- a `name` column that is a string, make it be unique and have a max lenght of 128 characters. It is required.
- a `avgWeightOz` column that stores **decimal** values.
- a `delicios` column that can store `true` or `false` values. Make it default to `true`.

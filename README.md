# API Class
### faster way to generate API calls with axios

## Installation
You can install the package using `npm`

```
npm install api-class
```

https://www.npmjs.com/package/api-class
## Usage
Create an `API` instance by import the `API` class from `api-class`. As parameter pass the basic url of your api.

```
const myAPI = new API({ url: '/api' })
```
### Methods
`API` class exposes the basic CRUD operations

```
getAll({ query })
getOne({ id })
create(toCreate)
update(toUpdate)
delete({ id })
```

You can check it out my medium article to further informations

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

```javascript
const myAPI = new API({ url: '/api' })
```

### Methods
`API` class exposes the basic CRUD operations

```javascript
getAll({ query }, config)
getOne({ id }, config)
create(toCreate, config)
update(toUpdate, config)
delete({ id }, config)
```
### Q&A

How to pass headers to axios?

```javascript
const myAPI = new API({ url: '/api' })
myAPI.getOne({ id: 0 },  { headers: {....} } )
```
You can check it out my medium article for further informations

https://medium.com/@FrancescoZ/how-to-call-api-in-a-smart-way-2ca572c6fe86

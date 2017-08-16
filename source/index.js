// const API = require('API')

// const myApi = new API({ url:'http://localhost:8080/api'})

// myApi.createEntity({ name: 'posts' })

// // myApi.endpoints.posts.getAll()
// // .then(({ data }) => console.log(data))

// // myApi.endpoints.posts.getOne({ id: 1})
// // .then(({data}) => console.log(data))
// // .catch((err) => console.log(err))
 
// axios.defaults.headers.common['Authorization'] = "Bearer " + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwNTE0MDkyMDk5NDc4MjM4MjM2MiJ9.0XPoRu1g0a7XpTkGklpd3aJTGLUnFOeC8oqAE+dLcUQ="
// const post = { author: { id: 125, name: 'test' },
// author_id: 125,
// tags: [],
// text: 'test',
// user:
//  { google_id: '105140920994782382362',
//    id: 1,
//    profile_image: 'https://lh6.googleusercontent.com/-IPkTcTumu4Y/AAAAAAAAAAI/AAAAAAAAAAA/AI6yGXxYIjcZrpi_07v27U32SuXjBTAPCg/s96-c/photo.jpg',
//    user_name: 'Fra Zuppi' },
// user_id: 1 }

// myApi.endpoints.posts.create(post)
// .then(({ data }) => myApi.endpoints.posts.update(data))
// .then(({ data }) =>  myApi.endpoints.posts.delete(data))
// .catch((err) => console.log(err))


// // createEndPoint(name,{ method, query, data }) {
// //   const localUrl = `${this.url}/${name}`
  
// //   switch(method){
// //     case 'GET':
// //       return ({query}) => {
// //         return axios.get(localUrl,{ query })
// //       }
// //   }
// // }


var assert = require('assert');
import API from '../source/API.js'
var should = require('chai').should()
// console.log(API.default())
describe('API', function() {

  describe('#constructor', function() {
    it('should correctly create an API istance with  url', function() {
        const url = 'foo/bar'
        var myAPI = new API({url})
        assert.equal(myAPI.url, url)
    })
  })
  describe('entity', () => {
    it('should correctly create an entity istance with a name', () =>{
        var myAPI = new API({ url : ''})
        const name = 'posts'
        myAPI.createEntity({ name })
        myAPI.endpoints.should.have.property(name)
        myAPI.endpoints.posts.getAll

    })  
    it('should correctly create an entity istance with a kebab case name', () =>{
      var myAPI = new API({ url : ''})
      const name = 'posts-feedbacks'
      myAPI.createEntity({ name })
      myAPI.endpoints.should.have.property('postsFeedbacks')
      myAPI.endpoints.postsFeedbacks.getAll
  })  
  it('should correctly get', () =>{
    var myAPI = new API({ url : 'https://randomuser.me/'})
    const name = 'api'
    myAPI.createEntity({ name })
    myAPI.endpoints.api.getAll({})
    .then(({data})=> console.log(data))
    .catch(err => console.log(err))

})  
  })
  
})
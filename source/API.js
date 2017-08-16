const axios = require('axios')

class API {

  constructor({ url }){
    this.url = url
    this.endpoints = {}
  }
  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity 
   */
  createEntity(entity) {
    this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity)
  }

  createEntities(arrayOfEntity) {
    arrayOfEntity.forEach(this.createEntity.bind(this))
  }
  /**
   * Create the basic endpoints handlers for CRUD operations
   * @param {A entity Object} entity 
   */
  createBasicCRUDEndpoints( {name} ) {
    var endpoints = {}
    
    const resouceURL = `${this.url}/${name}`
  
    endpoints.getAll = ({ query }={}) => axios.get(resouceURL,{ params: { query } })

    endpoints.getOne = ({ id }) =>  axios.get(`${resouceURL}/${id}`)

    endpoints.create = (toCreate) =>  axios.post(resouceURL,toCreate)
    
    endpoints.update = (toUpdate) => axios.put(`${resouceURL}/${toUpdate.id}`,toUpdate)
    
    endpoints.delete = ({ id }) => axios.delete(`${resouceURL}/${id}`)
    
    return endpoints
  
  }

}

export default API
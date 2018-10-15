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
  createBasicCRUDEndpoints( { name, config={} } ) {
    var endpoints = {}

    const resourceURL = `${this.url}/${name}`

    endpoints.getAll = ({ query }={}) => axios.get(resourceURL, { params: { query }, ...config })

    endpoints.getOne = ({ id }) =>  axios.get(`${resourceURL}/${id}`, config)

    endpoints.create = (toCreate) =>  axios.post(resourceURL, toCreate, config)

    endpoints.update = (toUpdate) => axios.put(`${resourceURL}/${toUpdate.id}`, toUpdate, config)

    endpoints.patch  = ({id}, toPatch) => axios.patch(`${resourceURL}/${id}`, toPatch, config)

    endpoints.delete = ({ id }) => axios.delete(`${resourceURL}/${id}`, config)

    return endpoints

  }

}

export default API

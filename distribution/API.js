'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

var API = function () {
  function API(_ref) {
    var url = _ref.url;

    _classCallCheck(this, API);

    this.url = url;
    this.endpoints = {};
  }
  /**
   * Create and store a single entity's endpoints
   * @param {A entity Object} entity
   */


  _createClass(API, [{
    key: 'createEntity',
    value: function createEntity(entity) {
      this.endpoints[entity.name] = this.createBasicCRUDEndpoints(entity);
    }
  }, {
    key: 'createEntities',
    value: function createEntities(arrayOfEntity) {
      arrayOfEntity.forEach(this.createEntity.bind(this));
    }
    /**
     * Create the basic endpoints handlers for CRUD operations
     * @param {A entity Object} entity
     */

  }, {
    key: 'createBasicCRUDEndpoints',
    value: function createBasicCRUDEndpoints(_ref2) {
      var name = _ref2.name;

      var endpoints = {};

      var resourceURL = this.url + '/' + name;

      endpoints.getAll = function () {
        var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            query = _ref3.query;

        return axios.get(resourceURL, { params: { query: query } });
      };

      endpoints.getOne = function (_ref4) {
        var id = _ref4.id;
        return axios.get(resourceURL + '/' + id);
      };

      endpoints.create = function (toCreate) {
        return axios.post(resourceURL, toCreate);
      };

      endpoints.update = function (toUpdate) {
        return axios.put(resourceURL + '/' + toUpdate.id, toUpdate);
      };

      endpoints.patch = function (_ref5, toPatch) {
        var id = _ref5.id;
        return axios.patch(resourceURL + '/' + id, toPatch);
      };

      endpoints.delete = function (_ref6) {
        var id = _ref6.id;
        return axios.delete(resourceURL + '/' + id);
      };

      return endpoints;
    }
  }]);

  return API;
}();

exports.default = API;
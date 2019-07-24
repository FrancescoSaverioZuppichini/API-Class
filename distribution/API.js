'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var axios = require('axios');

function kebabCaseToCamel(str) {
  return str.replace(/(\-\w)/g, function (matches) {
    return matches[1].toUpperCase();
  });
}

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
      /**
       * If there is a - in the entity.name, then change it 
       * to camelCase. E.g 
       * ```
       * myApi.createEntity({ name : 'foo-bar'})
       * myApi.endpoints.fooBar.getAll(...)
       */

      var name = kebabCaseToCamel(entity.name);
      this.endpoints[name] = this.createBasicCRUDEndpoints(entity);
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

      endpoints.getAll = function (_ref3) {
        var _ref3$params = _ref3.params,
            params = _ref3$params === undefined ? {} : _ref3$params;
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return axios.get(resourceURL, Object.assign({ params: params, config: config }));
      };

      endpoints.getOne = function (_ref4) {
        var id = _ref4.id;
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return axios.get(resourceURL + '/' + id, config);
      };

      endpoints.create = function (toCreate) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return axios.post(resourceURL, toCreate, config);
      };

      endpoints.update = function (toUpdate) {
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return axios.put(resourceURL + '/' + toUpdate.id, toUpdate, config);
      };

      endpoints.patch = function (_ref5, toPatch) {
        var id = _ref5.id;
        var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return axios.patch(resourceURL + '/' + id, toPatch, config);
      };

      endpoints.delete = function (_ref6) {
        var id = _ref6.id;
        var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return axios.delete(resourceURL + '/' + id, config);
      };

      return endpoints;
    }
  }]);

  return API;
}();

exports.default = API;
var BaseResource = require('./base');

// var debug = require('debug')('mongodb-js-metrics:resources:app');

module.exports = BaseResource.extend({
  id: 'User',
  props: {
    userId: {
      type: 'string',
      required: true
    }
  },
  login: function(callback) {
    var options = {
      userId: this.userId
    };
    this._send_event(options, callback);
  }
});
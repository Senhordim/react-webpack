'use strict';

var React = require('react');

var Title = React.createClass({
  render: function() {
    return React.createElement(
      'h2', null, 'Olá mundo'
    );
  }
});

module.exports = Title;
import React from 'react';

var Title = React.createClass({
  render: function() {
    return React.createElement(
      'h2', { className: 'title' }, 'Olá mundo'
    );
  }
});

export default Title;
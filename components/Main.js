/** @jsx React.DOM */

var Main = React.createClass({

  render: function() {
    
    return (
        <div>
          Hello
        </div>
    )
  }
});


React.render(
    <Main />,
    document.getElementById('content')
);

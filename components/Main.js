/** @jsx React.DOM */

var Main = React.createClass({

  render: function() {
    
    return (
      <div>
        <div id="header">
          <nav>
            <li class="fork"><a href="https://github.com/samuelgarnham">View On GitHub</a></li>
          </nav>
        </div>
        <div class="wrapper">
          Hello
        </div>
      </div>
    )
  }
});


React.render(
    <Main />,
    document.getElementById('content')
);

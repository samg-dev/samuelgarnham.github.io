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
      </div>
//    <div class="wrapper">
//
//      <section>
//        <div id="title">
//          <h1>Samuelgarnham.GitHub.io</h1>
//          <p>My GitHub Pages home page</p>
//          <hr>
//          <span class="credits left">Project maintained by <a href="https://github.com/samuelgarnham">samuelgarnham</a></span>
//          <span class="credits right">Hosted on GitHub Pages &mdash; Theme by <a href="https://twitter.com/michigangraham">mattgraham</a></span>
//        </div>
//      </section>
//
//    </div>
//    <!--[if !IE]><script>fixScale(document);</script><![endif]--> 
//    </div>
    )

  }
});


React.render(
    <Main>,
    document.body
);

"use strict"
var React = require("react");

var Header = React.createClass({
    render: function(){
        return(
            <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Brand</a>
                <ul class="nav navbar-nav">
                    <li class="active"><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    </ul>
                </div>
              </nav>
        );
    }
});

module.exports = Header;
"use strict"
var React = require("react");

var About = React.createClass({
    render: function(){
        return(<div>
            <h1>About</h1>
            <p>React, react router and flux
                <ul>
                   <li>Test </li>
                </ul>
            </p>
        </div>
        );
    }
});

module.exports = About;
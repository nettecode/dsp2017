/**
 * Created by nette on 01.03.17.
 */
var React = require('react');
var ReactDOM = require('react-dom');

var FirstComponent = React.createClass({
    render: function () {
        return(
            <div>
                <h1>Hello everyone!</h1>
                <p>{this.props.mssg}</p>
            </div>
        );
    }
});

ReactDOM.render(<FirstComponent mssg="Test"/>, document.getElementById('main-wrapper'));
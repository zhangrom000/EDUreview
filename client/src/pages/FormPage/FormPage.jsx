import React, { Component } from 'react';
import NavBox from '../../components/NavBox/NavBox';

class FormPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: "this is the initial text"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = function(event) {
        this.setState({
            textValue: event.target.value
        })
    }
    handleSubmit = function(event) {
        //AJAX send the form data to our API endpoint on our server
        //POST some data - ie the data in the form
        event.preventDefault();

        fetch('/api/reviews', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // .then(res => res.json())
        // .then(response => console.log('Success:', JSON.stringify(response)))
        //.catch(error => console.error('Error:', error));

    }

    render() {
        return (
            <div>
                <NavBox />
                <form onSubmit={this.handleSubmit}>
                    <input type="text" 
                        value={this.state.textValue}
                        onChange={this.handleChange} >
                    </input>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default FormPage;
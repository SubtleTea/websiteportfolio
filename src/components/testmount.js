import React, { Component} from 'react';

class Retriever extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('api.url')
            .then(response => response.json())
            .then(data => this.setState( { data: data, isLoading: false }));
    }

    render() {
        const { data, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading data from server...</p>;
        }
        return (
            data
        )
    };
}

export default Retriever;
import React, { Component} from 'react';

class Retriever extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: "",
            isLoading: false,
        };
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('http://localhost:9000/education')
            .then(res => res.text())
            .then(res => this.setState( { data: res, isLoading: false }));
    }

    render() {
        const { data, isLoading } = this.state;
        if (isLoading) {
            return <p>Loading data from server...</p>;
        }
        return (
            <p>{data}</p>
        )
    };
}

export default Retriever;
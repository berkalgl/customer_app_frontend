import React from 'react';

export default class CustomerList extends React.Component {

    state = { person: [] };
    async componentDidMount() {
        try {
            const response = await fetch('http://localhost:4000/api/v1/customers/list');
            const data = await response.json();
            this.setState({ person: data.customerList, isLoading: false });
        } catch (error) {
            this.setState({ error: error.message, isLoading: false });
        }
    }

    render() {
        const persons = this.state.person.map((item, i) => (
            <div>
                <h1>{item['fullName']}</h1>
            </div>
        ));

        return (
            <div id="layout-content" className="layout-content-wrapper">
                <div className="panel-list">{persons}</div>
            </div>
        );
    }
}
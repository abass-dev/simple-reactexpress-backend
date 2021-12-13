import { Component } from 'react';

class Customers extends Component {
constructor() {
    super();
    this.state = {
      customers: []
    };
  }

  componentDidMount() {
    fetch('/api/customers')
      .then(res => res.json())
      .then(customers => this.setState({customers}))
  }
render() {
  return (
    <div>
    <h2>Customers</h2>
    {this.state.customers.map(customer =>
    <li> {customer.id}: {customer.firstName} {customer.lastName}</li>)}
    </div>
   );
 }
}

export default Customers;

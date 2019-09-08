import axios from 'axios';
import React from 'react';
import Service from './Service'

class Services extends React.Component {
  state = { services: [] }

  componentDidMount() {
    axios.get(process.env.REACT_APP_PERSONAL_API + "/services")
      .then(response => this.setState({services: response.data}));
  }

  render() {
    return (
      <div className="Services">
        {this.state.services.map((service,key) =>
          <Service {...service} key={service.name}/>
        )}
      </div>
    );
  };
}
export default Services;

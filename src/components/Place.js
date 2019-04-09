import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Place extends Component {
  state = {
    showDetails: false,
    category: '',
    address: ''
  };

  static propTypes = {
    place: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.setState({
      category: this.props.place.categories[0].name,
      address: this.formattedAddress()
    });
  }

  formattedAddress = () => {
    return this.props.place.location.formattedAddress.join(' ');
  };

  showInfo = () => {
    this.setState(prevState => ({
      showDetails: !prevState.showDetails
    }));
    console.log('click');
  };

  render() {
    const { place } = this.props;
    const { showDetails, category, address } = this.state;

    return (
      <li className="place">
        <div onClick={this.showInfo} onKeyPress={this.showInfo} role="button">
          <h3>{place.name}</h3>
          <div
            className="venue-details"
            style={{ display: showDetails ? 'block' : 'none' }}
          >
            <p>{category}</p>
            <p>{address}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Place;

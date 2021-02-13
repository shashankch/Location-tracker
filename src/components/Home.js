import React from 'react';
import Locations from './Locations';
import { connect } from 'react-redux';
import { addlocation } from '../actions/locations';
class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',
      latitude: '',
      longitude: '',
    };
  }

  handleLocation = (e) => {
    this.setState({
      location: e.target.value,
    });
  };

  handlelatitude = (e) => {
    this.setState({
      latitude: e.target.value,
    });
  };
  handlelongitude = (e) => {
    this.setState({
      longitude: e.target.value,
    });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();

    console.log('this.state', this.state);
    const { location, latitude, longitude } = this.state;
    if (location && latitude && longitude) {
      this.props.dispatch(addlocation({ location, latitude, longitude }));
    }
  };

  render() {
    const { locations } = this.props.locations;

    return (
      <div className='Home'>
        <div className='top'>
          <input
            type='text'
            placeholder='Enter location'
            required
            //  ref={this.emailInputRef}
            onChange={this.handleLocation}
            value={this.state.location}
          />
          <input
            type='text'
            placeholder='Enter latitude'
            required
            //  ref={this.emailInputRef}
            onChange={this.handlelatitude}
            value={this.state.latitude}
          />
          <input
            type='text'
            placeholder='Enter longitude'
            required
            //  ref={this.emailInputRef}
            onChange={this.handlelongitude}
            value={this.state.longitude}
          />
          <button
            onClick={this.handleFormSubmit}
            disabled={this.state.location.length === 0}
          />
        </div>

        <Locations locations={locations} />
        <div className='right'></div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    locations: state.locations,
  };
}

export default connect(mapStateToProps)(Home);

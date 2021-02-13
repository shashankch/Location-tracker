import React from 'react';

function Locations(props) {
  return (
    <div className='location'>
      <table>
        {this.props.location &&
          this.props.locations.map((loc) => {
            return (
              <tr>
                <td>loc.location</td>
                <td>loc.latitude</td>
                <td>loc.longitude</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
}

export default Locations;

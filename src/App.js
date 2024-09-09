

//----------------------------------- Map Api Integration using iframe



// import React, { Component } from 'react';
// import { Map, GoogleApiWrapper } from 'google-maps-react';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>Google Map Api Integration Learning</h1>
//         <Map
//           google={this.props.google}
//           style={{
//             width: "50%",
//             height: "50%",
//           }}
//           zoom={10}
//           initialCenter={{
//             lat: 28.51553315364966,
//             lng: 77.37708381828119
//           }}
//         />
//       </div>
//     );
//   }
// }
// export default GoogleApiWrapper({
//   apiKey:"AIzaSyDPl-u_pUSk-TDBDFZ2_qEKZ_9uBEIa_EI",
// })(App);




// -----------------------------------------Map Api Integration using iframe



import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Map Embed Integration</h1>
        <iframe
          width="600"
          height="450"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.778708986988!2d77.37315777459897!3d28.516304889350923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce79d208666d5%3A0x7184a798c1831344!2sSALGEM%20Infoigy%20Tech%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1725346771360!5m2!1sen!2sin"
          style={{ border: '0' }} // Correctly formatted as an object
          allowFullScreen
          loading="lazy"
          title="Google Maps Embed"
          // referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
  }
}

export default App;



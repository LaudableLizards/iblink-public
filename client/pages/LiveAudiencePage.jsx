import React from 'react';
import FeaturesContainer from './../components/slide_utilities/index.jsx';

export default class LiveAudiencePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is the Live Audience Page</h1>
        <FeaturesContainer />
      </div>
    );
  }
}

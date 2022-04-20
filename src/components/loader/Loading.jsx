import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react';
import "./Loading.css";

const Loading = () => (
  <Segment className='main-loading'>
    <Dimmer active inverted>
      <Loader />
    </Dimmer>
  </Segment>
)

export default Loading
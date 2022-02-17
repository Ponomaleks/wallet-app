import React from 'react';
import { TailSpin } from 'react-loader-spinner';

export default class App extends React.Component {
  render() {
    return (
      <TailSpin
        type="Puff"
        color="#FFFFFF"
        height={300}
        width={300}
        timeout={3000} //3 secs
      />
    );
  }
}

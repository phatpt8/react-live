import React, { Component } from 'react';

export default class HomePage extends Component {

  componentDidMount() {
    console.log('createIceServer', window.createIceServer);
  }

  render() {
    return (<span>Homepage</span>);
  }
}
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Get, Head } from 'react-axios';

/**
 * Axios Component
 */
class Axios extends Component {
  render() {
    return (
      <div>
        <Get url="https://httpbin.org/get" params={{ id: '12345' }}>
          {(error, response, isLoading, onReload, makeRequest, axios) => {
            if (error) {
              return (<div>Something bad happened: {error.message} <button type="button" onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>);
            } else if (isLoading) {
              return (<div>Loading...</div>);
            } else if (response !== null) {
              return (<div>{JSON.stringify(response)} <br /> <button type="button" onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>);
            }
            return (<div>Default message before request is made.</div>);
          }}
        </Get>
        <Head url="https://httpbin.org/get">
          {(error, response, isLoading, onReload) => {
            if (error) {
              return (<div>Something bad happened: {error.message} <button type="button" onClick={() => onReload({ params: { reload: true } })}>Retry</button></div>);
            } else if (isLoading) {
              return (<div>Loading...</div>);
            } else if (response !== null) {
              return (<div>{JSON.stringify(response)} <br /> <button type="button" onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>);
            }
            return (<div>Default message before request is made.</div>);
          }}
        </Head>
      </div>
    );
  }
}

export default Axios;

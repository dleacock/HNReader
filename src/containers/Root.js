import React from 'react';
import './../HNReaderApp.css';
import {Provider} from 'react-redux';
import configureStore from '../configureStore';
import HNReaderApp from './HNReaderApp';

const store = configureStore();

export default class Root extends React.Component {
    render() {
        return(
            <Provider store={store}>
                <HNReaderApp/>
            </Provider>
        );
    }
}
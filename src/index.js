import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { Global } from './Styles/Global';

ReactDOM.render (
	<React.Fragment>
		<Global/>
		<App/>
	</React.Fragment>,
	document.getElementById ('root')
);

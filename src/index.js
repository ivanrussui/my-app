import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Button } from './App';
import styled from 'styled-components';
import BootstrapTest from './BootstrapTest';
import 'bootstrap/dist/css/bootstrap.min.css';

const BigButton = styled(Button)`
	width: 250px;
	text-align: center;
`;


ReactDOM.render(
  <StrictMode>
		<App/>
		<BigButton as="a">Отправить</BigButton>
		<BootstrapTest/>
	</StrictMode>,
  document.getElementById('root')
);

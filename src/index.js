import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App, { Button } from './App';
import styled from 'styled-components';

const BigButton = styled(Button)`
	width: 250px;
	text-align: center;
`;


ReactDOM.render(
  <StrictMode>
		<App/>
		<BigButton as="a">Отправить</BigButton>
	</StrictMode>,
  document.getElementById('root')
);

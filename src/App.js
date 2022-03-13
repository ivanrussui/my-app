import { Component} from 'react';
import styled from 'styled-components';
// import { Component, Fragment } from 'react'; // ! 1 способ использования Fragment
import './App.css';


// styled components
const EmpItem = styled.div`
	padding: 20px;
	margin-bottom: 15px;
	border-radius: 5px;
	background-color: #fff;
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	a {
		text-decoration: none;
		color: ${props => props.active ? 'orange' : 'red'};
	}
	input {
		display: block;
		margin: 0 auto;
	}
`;

// styled components
const Header = styled.h2`
	font-size: 22px;
	color: indigo;
`;

export const Button = styled.button`
	display: block;
	padding: 5px 15px;
	background-color: gold;
	border: 1px solid rgba(0,0,0, .2);
	box-shadow: 5px 5px 10px rgba(0,0,0, .2);
	margin: 0 auto;
`;

// ? Состояния формат класса
class WhoAmI extends Component {
	constructor(props) { // ! нужно передать конструктор и аргументом пропс
		super(props); // ? ключевое слово супер. Если кроме этой строки ничего нет в конструкторе, то его можно удалить
		this.state = { // todo создаем состояние
			years: 27,
			text: '+++',
			position: ''
		}
	}

	// ! создаем метод. Обязательно стрелочной функцией
	nextYear = () => {
		this.setState(state => ({
			years: state.years + 1
		}))
	}

	// ! создаем метод commitInputChanges. color это аргумент который мы передаем ниже используя метод commitInputChanges 
	commitInputChanges = (e, color) => {
		console.log(color);
		this.setState({
			position: e.target.value
		})
	}
	
	render() {
		// * значения вытаскиваем из объекта this.props b
		const {name, surname, link} = this.props;

		// todo выносим в отдельные переменные
		const {position, years, text} = this.state;

		return (
			<EmpItem active> 
				<Button onClick={this.nextYear}>{text}</Button>
				<Header>My name is {name}, surname - {surname}, 
					age - {years}, 
					position - {position} 
				</Header>
				<a href={link}>My Site</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</EmpItem>
		)
	}
}
// ? 1й способ <Fragment> есть смысл применять когда надо задать key и др. атрибуты
// React.Fragment key='222'

// задаем styled component
const Wrapper = styled.div`
	width: 800px;
	margin: 80px auto 0;
	text-align: center;
`;

function App() {
  return (
		// используем styled component (можно с уже сущ классом) <Wrapper className='App'>
		<Wrapper>
		{/* <div className='App'>  */}
		<WhoAmI name='Fenomen' surname="Russu" outname="I" link="https://ivanrussui.ru/"/>
		<WhoAmI name='Univers' surname="Ivanova" outname="I" link="https://ivanrussui.github.io/glob-opt/dist/"/>
	{/* </div> */}
	</Wrapper>
  );
}

export default App;
import { Component, Fragment } from 'react';
// import { Component, Fragment } from 'react'; // ! 1 способ использования Fragment

import './App.css';


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
			// ? 1й способ <Fragment></Fragment> вместо оберточного дива
			// ? 2й способ <></> вместо оберточного дива
			<> 
				<button onClick={this.nextYear}>{text}</button>
				<h1>My name is {name}, surname - {surname}, 
					age - {years}, 
					position - {position} </h1>
				<a href={link}>My Site</a>
				<form>
					<span>Введите должность</span>
					<input type="text" onChange={(e) => this.commitInputChanges(e, 'some color')} />
				</form>
			</>
		)
	}
}
// ? 1й способ <Fragment> есть смысл применять когда надо задать key и др. атрибуты
// React.Fragment key='222'

function App() {
  return (
	<div className='App'> 
		<WhoAmI name='Fenomen' surname="Russu" outname="I" link="https://ivanrussui.ru/"/>
		<WhoAmI name='Univers' surname="Ivanova" outname="I" link="https://ivanrussui.github.io/glob-opt/dist/"/>
	</div>
  );
}

export default App;
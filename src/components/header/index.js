import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	state = {
		a: 'Desafios', ahref: '/Desafios',
		b: 'Ranking', bhref: '/Ranking',
		c: 'Reglas', chref: '/Reglas'
	}
	handleTitle = (e) => {
		let path = (location.pathname).substr(1);
		switch(path){
			case '': this.setState({ a: 'Desafios', ahref: '/Desafios',
				 b: 'Ranking', bhref: '/Ranking',
				 c: 'Reglas', chref: '/Reglas' });
				 break;
			case 'Desafios': this.setState({ a: 'Perfil', ahref: '/',
			 		 b: 'Ranking', bhref: '/Ranking',
					 c: 'Reglas', chref: '/Reglas'});
					 break;
			case 'Ranking': this.setState({ a: 'Perfil', ahref: '/',
			 		b: 'Desafios', bhref: '/Desafios',
					c: 'Reglas', chref: '/Reglas'});
					break;
			case 'Reglas': this.setState({ a: 'Perfil', ahref: '/',
				       b: 'Desafios', bhref: '/Desafios',
				       c: 'Ranking', chref: '/Ranking'});
				       break;
		}
	}
	render(props,{a,ahref,b,bhref,c,chref}){
		return (
			<header class={style.header} onMouseMove={this.handleTitle}>
				<h1>{props.title}</h1>
				<nav>
					<Link href={ahref}>{a}</Link>
					<Link href={bhref}>{b}</Link>
					<Link href={chref}>{c}</Link>
				</nav>
			</header>
		);
	}
}

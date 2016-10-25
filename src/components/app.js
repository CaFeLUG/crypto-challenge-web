import { h, Component } from 'preact';
import { Route, Router } from 'preact-router';
// import LoadingScreen from './loading-screen';

import Login from './login';
import Header from './header';
import Profile from './profile';
import Challenges from './challenges';
import Ranking from './ranking';
import Rules from './rules';

class LoggedIn extends Component {
	state = {
		site: 'user.email'
	}
	shouldComponentUpdate() {
		return true;
	}
	handleRoute = (e) => {
		let path = location.pathname;
		if (path=='/'){
			this.setState({site:'user.email'});
		} else {
			this.setState({site:(path).substr(1)});
		}
		this.currentUrl = e.url;
	}
	render() {
		return (
			<div id="app">
				<Header title={this.state.site}/>
				<Router onChange={this.handleRoute}>
					<Profile path="/"/>
					<Challenges path="/Desafios"/>
					<Ranking path="/Ranking"/>
					<Rules path="/Reglas"/>
				</Router>
			</div>
		);
	}
}

export default class App extends Component {
	state = {
		pending: true,
		logged: false
	}
	componentDidMount() {
		this.setState({ pending:false });
	}
	handleLogin = ({ jwt }) => {
		console.log(jwt);
		if (jwt!==null)
			this.setState({ logged:true })
		}
	render({}, { pending, logged }) {
		return (
			<div id="app">
				{ pending ? (
					<h1>fa-spinner</h1>
				) : logged ? (
					<LoggedIn />
				) : (
					<Login checkAuth={this.handleLogin} />
				) }
			</div>
		);
	}
}

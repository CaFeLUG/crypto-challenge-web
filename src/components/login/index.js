import { h, Component } from 'preact';
import style from './style';
import fa from 'fontawesome';

export default class Login extends Component {
	state = {
		type: 'login'
	};

	componentWillReceiveProps({ type }) {
		if (type) this.setState({ type });
	}

	handleLogin = () => {
		var jwt = true;
		this.props.checkAuth({ jwt });
  };

	render({}, { type, email, error }) {
		return (
			<div class={style.modal}>
				<div>
			    <h2><a href="http://www.cafelug.org.ar/">CaFeLUG</a></h2>
			    <span class={style.logo}>{fa.linux}</span>
			    <h2>CryptoChallenge</h2>
			  </div>
			  <form>
					<div class={style.row}>
						<span class={style.fontawesome_user}></span>
						<input type="text" class={style.user} placeholder="email"/>
					</div>
					<div class={style.row}>
						<span class={style.fontawesome_key}></span>
						<input type="password" class={style.pass} placeholder="password"/>
			    </div>
			    <button class={style.submit} onClick={this.handleLogin}>
			      <span class={style.fontawesome_lock}></span>
			      <span class={style.fontawesome_unlock}></span>
			    </button>
			  </form>
			</div>
		);
	}
}

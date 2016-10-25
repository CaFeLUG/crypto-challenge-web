import { h, Component } from 'preact';
import style from './style';

export default class Profile extends Component {
	render({ user }, { time, count }) {
		return (
			<div class={style.profile}>
				<h1>Profile: { user }</h1>
			</div>
		);
	}
}

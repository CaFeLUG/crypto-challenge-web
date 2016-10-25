import { h, Component } from 'preact';
import style from './style';

export default class Challenges extends Component {
	render() {
		return (
			<div class={style.profile}>
				<h1>challenges = GET /contests/current/challenges</h1>
			</div>
		);
	}
}

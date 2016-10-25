import { h, Component } from 'preact';
import style from './style';

export default class Ranking extends Component {
	render() {
		return (
			<div class={style.profile}>
				<h1>$scores = GET /contests/current/scores</h1>
			</div>
		);
	}
}

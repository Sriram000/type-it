import { React } from 'react';
import './App.scss';
import Answer from './components/answer';
import Question from './components/question';
import Score from './components/score';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
};

const App = () =>
	<div style={ style }>
		<div className="question"> { Question() } </div>
		<div className="answer"> { Answer() }</div>
		<div className="score"> { Score() }</div>
	</div>;

export default App;

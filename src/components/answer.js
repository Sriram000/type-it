import { React } from 'react';
import context from '../core/context';
import { peek } from '@laufire/utils/debug';

const Answer = () =>
	<input
		value={ peek(context.state.answer, 'answer') }
		onChange={ (evt) => context.actions.updateAnswer(evt.target.value) }
	/>;

export default Answer;

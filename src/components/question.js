import { React } from 'react';
import context from '../core/context';
import { peek } from '@laufire/utils/debug';

const Question = () => <div> { peek(context.state.question, 'question') }</div>;

export default Question;

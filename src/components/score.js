import { React } from 'react';
import context from '../core/context';
import { peek } from '@laufire/utils/debug';

const Score = () => <div> SCORE { peek(context.state.score, 'score') } </div>;

export default Score;

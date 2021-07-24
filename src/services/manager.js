import config from '../core/config';
import { rndString } from '@laufire/utils/random';

const isCorrect = ({ question, answer }) => question === answer;

const getQuestion = () => rndString(config.stringLength);

const manager = {
	isCorrect,
	getQuestion,
};

export default manager;

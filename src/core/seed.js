import { rndString } from '@laufire/utils/random';
import config from './config';

const seed = {
	answer: '',
	score: 0,
	question: rndString(config.stringLength),
};

export default seed;

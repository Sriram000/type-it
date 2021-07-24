import manager from '../services/manager';

const updateAnswer = ({ state, data }) => ({
	answer: ,
	score: state.score + manager.isCorrect(),
	question: manager.getQuestion(state),
});

const actions = {
	updateAnswer,
};

export default actions;

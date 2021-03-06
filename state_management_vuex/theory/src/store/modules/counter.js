import * as types from '../types.js';

const state = {
	counter: 0
};

const getters = {
	//[] - makes dynamic and define in runtime
	[types.DOUBLE_COUNTER]: (state) => {
		return state.counter * 2;
	},
	[types.CLICK_COUNTER]: (state) => {
		return `${state.counter} clicks`;
	}
};

const mutations = {
	increment: (state, payload) => {
		state.counter += payload;
	},
	decrement: (state, payload) => {
		state.counter -= payload;
	}
};

const actions = {
	increment: (context, payload) => {
		context.commit('increment', payload);
	},
	decrement: (context, payload) => {
		context.commit('decrement', payload);
	},
	asyncIncrement: (context, args) => {
		context.commit(setTimeout(() => {
			context.commit('increment', args.by);
		}, args.timeout))
	},
	asyncDecrement: (context, args) => {
		context.commit(setTimeout(() => {
			context.commit('decrement', args.by);
		}, args.timeout))
	}
};

export default {
	state,
	getters,
	mutations,
	actions,
}
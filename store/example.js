export const state = () => ({
  things: null,
});

export const mutations = {
  setExample(state, things) {
    state.things = things;
  },
};

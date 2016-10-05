const set = require('../utils/set')

const getInitialState = () => ({
  attrs: {},
  cp: 2207,
  hp: 129,
  ivRange: null,
  level: 0,
  name: 'ARCANINE',
  results: null,
  stardust: 4000,
  stat: null,
  team: null,
})

const getEmptyState = () => ({
  attrs: {},
  cp: 0,
  hp: 0,
  ivRange: null,
  level: 0,
  name: '',
  results: null,
  stardust: '',
  stat: null,
  team: null,
})

const reducers = {
  APPRAISAL_IV_RANGE_SET: set('ivRange'),
  APPRAISAL_STAT_SET: set('stat'),
  CHANGED_CP: set('cp'),
  CHANGED_HP: set('hp'),
  CHANGED_LEVEL: set('level'),
  CHANGED_NAME: set('name'),
  CHANGED_STARDUST: set('stardust'),
  TEAM_SELECTED: set('team'),

  APPRAISAL_ATTR_TOGGLED(state, action) {
    const value = action.payload
    const attrs = Object.assign({}, state.attrs)

    if (attrs[value]) {
      delete attrs[value]
    } else {
      attrs[value] = 1
    }

    return { attrs }
  },

//  RESULTS_CALCULATED: (state, action) => ({ results: action.payload.results }),
  RESULTS_CALCULATED(state, action) {
    console.log('@', action)
    return { results: action.payload.results }
  },
  RESULTS_RESET: () => ({ results: null }),
  VALUES_RESET: () => getEmptyState(),
}

exports.getInitialState = getInitialState
exports.reducers = reducers

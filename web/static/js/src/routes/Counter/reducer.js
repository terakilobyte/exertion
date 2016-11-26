import * as actions from '../../actions'

export const sum = (state = 0, action) => {
  switch (action.type) {
    case actions.ADD:
      return state + 1

    case actions.SUB:
      return state - 1

    default:
      return state
  }
}

export default sum

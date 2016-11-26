import { connect } from 'react-redux'
import { add, sub, asyncAdd, asyncSub } from '../../../actions'

import Counter from '../components/Counter'

const mapStateToProps = (state) => {
  console.log('state', state)
  return { sum: state.sum }
}
export default connect(mapStateToProps, {add, sub, asyncAdd, asyncSub})(Counter)

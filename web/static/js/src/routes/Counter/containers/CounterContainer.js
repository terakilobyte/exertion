import { connect } from 'react-redux'
import Counter from '../components/Counter'
import {actions} from '../modules'
import {channelAdd, channelSub} from '../modules/ws'
import { bindActionCreators } from 'redux'

const mapDispatchToProps = (dispatch) => {
  const WSActions = require('../modules/ws').default
  dispatch(WSActions.socketConnect())
  dispatch(WSActions.channelJoin('counter'))
  return bindActionCreators({ ...actions, channelAdd, channelSub }, dispatch)
}

const mapStateToProps = ({counter}) => {
  return {...counter}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

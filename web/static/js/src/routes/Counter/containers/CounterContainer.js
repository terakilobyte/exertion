import { connect } from 'react-redux'
import Counter from '../components/Counter'
import {actions} from '../modules'
import {channelAdd, channelSub} from '../modules/ws'

const mapStateToProps = ({counter}) => {
  return {...counter}
}
export default connect(mapStateToProps, { ...actions, channelAdd, channelSub })(Counter)

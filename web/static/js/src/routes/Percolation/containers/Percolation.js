import { connect } from 'react-redux'
import { actions } from '../modules/reducer'
import Entry from '../components/Entry'

const mapStateToProps = ({percolation}) => {
  return {
    size: percolation.size
  }
}

export default connect(mapStateToProps, actions)(Entry)

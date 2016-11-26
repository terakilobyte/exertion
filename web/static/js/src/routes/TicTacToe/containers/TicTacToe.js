import { connect } from 'react-redux'

import GameBoard from '../components/GameBoard'
import actions from '../modules'

const mapStateToProps = (state) => ({ tictactoe: state.tictactoe })

export default connect(mapStateToProps, actions)(GameBoard)

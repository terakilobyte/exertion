import { connect } from 'react-redux'

import TicTacToe from '../components/TicTacToe.js'
import { actions } from '../modules'

const mapStateToProps = ({tictactoe}) => ({ ...tictactoe })

export default connect(mapStateToProps, actions)(TicTacToe)

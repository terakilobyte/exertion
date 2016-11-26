import { connect } from 'react-redux'

import GameBoard from '../components/GameBoard'

const mapStateToProps = (state) => ({ tictactoe: state.tictactoe})
const mapDispatchToProps = {
  
}

export default connect()(GameBoard)

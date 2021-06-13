import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import Bands from '../components/Bands'
import { connect } from 'react-redux'
import { addBand } from '../actions/index'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

export default connect(({bands}) => ({bands}), {addBand})(BandsContainer)

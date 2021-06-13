import { render } from 'enzyme'
import React from 'react'

const Bands = props => (
    props.bands.map(band => <li>{band.name}</li>)
)

export default Bands
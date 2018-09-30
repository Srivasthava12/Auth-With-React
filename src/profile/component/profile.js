import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class Profile extends React.Component {

  render() {
    return (
      <div>
        Hi yoyoyo
      </div>
    )
  }
}


const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)

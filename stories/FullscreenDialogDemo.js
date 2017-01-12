import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
import FullscreenDialog from '../src/FullscreenDialog'

export default class extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      open: true
    }
  }

  render () {
    return (
      <div>
        <FullscreenDialog
          open={this.state.open}
          onRequestClose={() => this.setState({ open: false })}
          title='Some demo dialog'
          actionButton={<FlatButton
            label='Done'
            onTouchTap={() => this.setState({ open: false })}
          />}
        >
          <TextField
            floatingLabelText='Very important field'
            fullWidth
          />
          <div style={{ height: 5000 }} />
          I knew you would scroll down. Just wanted to show that scrolling is supported. :D
        </FullscreenDialog>

        <RaisedButton
          onTouchTap={() => this.setState({ open: true })}
          label='Open dialog'
        />
      </div>
    )
  }
}

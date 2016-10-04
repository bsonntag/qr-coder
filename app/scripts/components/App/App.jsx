import React from 'react'
import QR from 'qr-image'

const App = React.createClass({
  getInitialState() {
    return {
      qrText: '',
      qrCode: null,
    }
  },
  handleFormSubmit(event) {
    if(event) {
      event.preventDefault()
      event.stopPropagation()
    }
    let image = QR.imageSync(this.state.qrText, { type: 'svg' })
    this.setState({ qrCode: 'data:image/svg+xml,' + new String(image) })
  },
  handleInputChange(event) {
    this.setState({ qrText: event.target.value })
  },
  render() {
    return <div className='App'>
      <form className='App-form' onSubmit={this.handleFormSubmit}>
        <label>
          Text for the QR code:
          <input type='text' value={this.state.qrText} onChange={this.handleInputChange}></input>
        </label>
      </form>
      {this.renderQrCode()}
    </div>
  },
  renderQrCode() {
    if(this.state.qrCode) {
      return <img className='App-result' src={this.state.qrCode}></img>
    }
  },
})

export default App

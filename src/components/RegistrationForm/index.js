import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstBlur: false,
    lastBlur: false,
    reset: false,
  }

  onAddUser = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      this.setState({firstBlur: true, lastBlur: true})
    } else if (firstName === '' && lastName !== '') {
      this.setState({firstBlur: true})
    } else if (lastName === '' && firstName !== '') {
      this.setState({lastBlur: true})
    } else {
      this.setState({firstName: '', lastName: '', reset: true})
    }
  }

  onFirstNameEntry = event => {
    this.setState({firstName: event.target.value, firstBlur: false})
  }

  onLastNameEntry = event => {
    this.setState({lastName: event.target.value, lastBlur: false})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({firstBlur: true})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({lastBlur: true})
    }
  }

  changeResult = () => {
    this.setState({reset: false})
  }

  render() {
    const {firstName, lastName, firstBlur, lastBlur, reset} = this.state

    const formEl = (
      <form className="user-form-cont" onSubmit={this.onAddUser}>
        <label htmlFor="first-name" className="label-el">
          FIRST NAME
        </label>
        <input
          id="first-name"
          placeholder="First name"
          value={firstName}
          className={firstBlur ? 'warning-input-el' : 'input-el'}
          onChange={this.onFirstNameEntry}
          onBlur={this.onBlurFirstName}
        />
        {firstBlur ? <p className="warning">Required</p> : ''}
        <label htmlFor="last-name" className="label-el">
          LAST NAME
        </label>
        <input
          id="last-name"
          placeholder="Last name"
          value={lastName}
          className={lastBlur ? 'warning-input-el' : 'input-el'}
          onChange={this.onLastNameEntry}
          onBlur={this.onBlurLastName}
        />
        {lastBlur ? <p className="warning">Required</p> : ''}
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )

    const successEl = (
      <div className="response-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-img"
        />
        <p className="submit-success-msg">Submitted Successfully</p>
        <button
          className="new-response-btn"
          type="button"
          onClick={this.changeResult}
        >
          Submit Another Response
        </button>
      </div>
    )

    const registerApp = (
      <div className="bg-cont">
        <h1 className="heading">Registration</h1>

        <div className="form-cont">{reset ? successEl : formEl}</div>
      </div>
    )
    return registerApp
  }
}

export default RegistrationForm

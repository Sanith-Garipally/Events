import './index.css'

const activeEventRegistrationStatus = {
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatus} = props

  switch (registrationStatus) {
    case activeEventRegistrationStatus.registered:
      return (
        <article className="article">
          <figure className="register-img-container">
            <img
              className="registered-img"
              alt="registered"
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            />
          </figure>
          <h1 className="para-registered">
            You have already registered for the event
          </h1>
        </article>
      )

    case activeEventRegistrationStatus.registrationsClosed:
      return (
        <article className="article">
          <figure>
            <img
              className="rc-img"
              alt="registrations closed"
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            />
          </figure>
          <h1 className="rc-head">Registrations Are Closed Now!</h1>
          <p className="rc-para">
            Stay tuned. We will reopen the registrations soon!
          </p>
        </article>
      )

    case activeEventRegistrationStatus.yetToRegister:
      return (
        <article className="article">
          <figure>
            <img
              className="yt-img"
              alt="yet to register"
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            />
          </figure>
          <p className="yt-para">
            A live performance brings so much to your relationship with dance.
            Seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button className="yt-btn" type="button">
            Register here
          </button>
        </article>
      )
    default:
      return (
        <article className="article">
          <p className="yetToPara">
            Click on an event, to view its registration details
          </p>
        </article>
      )
  }
}

export default ActiveEventRegistrationDetails

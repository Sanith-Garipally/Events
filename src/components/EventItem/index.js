import './index.css'

const EventItem = props => {
  const {item, handleCurrentEventStatus, currentEvent} = props
  const {id, imageUrl, name, location} = item
  const isEventSelected = id === currentEvent.id ? 'selected-event' : ''

  const currentEventStatus = () => {
    handleCurrentEventStatus(item)
  }

  return (
    <li className="list-item">
      <button className="event-btn" type="button" onClick={currentEventStatus}>
        <img
          className={`event-img ${isEventSelected}`}
          src={imageUrl}
          alt="event"
        />
      </button>
      <article>
        <p className="para-1">{name}</p>
        <p className="para-2">{location}</p>
      </article>
    </li>
  )
}

export default EventItem

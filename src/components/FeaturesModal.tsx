type FeaturesModalProps = {
  open: boolean
  title: string
  features: string[]
  onClose: () => void
}

const FeaturesModal = ({ open, title, features, onClose }: FeaturesModalProps) => {
  if (!open) return null

  return (
    <div id="features-modal" className="modal active" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        <div className="modal-header">
          <h2 id="modal-title">
            <i className="fa-solid fa-list-check" style={{ marginRight: '8px' }}></i>
            {title} Features
          </h2>
          <button className="close-modal" onClick={onClose} aria-label="Close modal">
            <i className="fa-solid fa-times"></i>
          </button>
        </div>
        <div className="modal-body">
          <ul id="features-list">
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FeaturesModal


import {useState} from "react"
import PropTypes from "prop-types"

const Form = ({addItem}) => {
  const [val, setVal] = useState("")

  const handleChange = ({target}) => setVal(target.value)

  const handleSubmit = e => {
    e.preventDefault()
    addItem(val)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-box">
        <div className="form-box__item">
          <input value={val} onChange={handleChange} type="text" />
          <button>Add user</button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default Form

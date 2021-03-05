import {useState} from "react"
import PropTypes from "prop-types"
import {Button, Spinner} from "../../styles/app"

const Form = ({addItem, isDisabled}) => {
  const [val, setVal] = useState("")

  const handleChange = ({target}) => setVal(target.value)

  const handleSubmit = e => {
    e.preventDefault()
    addItem(val)
    setVal("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-box">
        <div className="form-box__item">
          <input value={val} onChange={handleChange} type="text" />
          <Button disabled={isDisabled}>
            Add user
            {isDisabled && <Spinner />}
          </Button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default Form

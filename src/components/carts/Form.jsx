import {useState} from "react"
import {Button, Spinner} from "../../styles/app"
import {useAddItem} from "../../contexts/AppContext"

const Form = () => {
  const [val, setVal] = useState("")
  const {addItem, state} = useAddItem()

  const isDisabled = state.status === "pending"

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

export default Form

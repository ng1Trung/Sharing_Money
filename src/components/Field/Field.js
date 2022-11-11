import classNames from "classnames/bind"
import { useRef } from "react"
import styles from "./Field.module.scss"
import PropTypes from "prop-types"

const cx = classNames.bind(styles)

const Field = ({ type, label, placeholder }) => {
  console.log(type)
  const inputRef = useRef()

  const handleFocusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div className={cx("wrapper")} onClick={handleFocusInput}>
      <label className={cx("label")}>{label}</label>

      {type === "input" && (
        <input
          type="text"
          ref={inputRef}
          placeholder={placeholder}
          className={cx("input")}
        />
      )}
    </div>
  )
}

Field.propTypes = {
  type: PropTypes.string,
}

Field.defaultProps = {
  type: "input",
}

export default Field

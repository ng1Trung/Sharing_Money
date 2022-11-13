import classNames from "classnames/bind"
import { useRef } from "react"
import styles from "./Field.module.scss"
import PropTypes from "prop-types"
import images from "../../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronDown,
  faChevronRight,
  faCoins,
} from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles)

const Field = ({ type, label, placeholder, style }) => {
  console.log(type)
  const inputRef = useRef()

  const handleFocusInput = () => {
    inputRef.current.focus()
  }

  return (
    <div className={cx("wrapper")} onClick={handleFocusInput} style={style}>
      {label && <label className={cx("label")}>{label}</label>}

      {type === "input" && (
        <input
          type="text"
          ref={inputRef}
          placeholder={placeholder}
          className={cx("input")}
        />
      )}

      {type === "avatar" && (
        <div className={cx("avatar-wrapper")}>
          <img
            src={images.defaultIcon}
            alt="..."
            className={cx("avatar-image")}
          />
          <FontAwesomeIcon icon={faChevronDown} />
        </div>
      )}

      {type === "currency" && (
        <div className={cx("currency-wrapper")}>
          <FontAwesomeIcon icon={faCoins} className={cx("currency-icon")} />
          <span>Chọn tiền tệ</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
    </div>
  )
}

Field.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

Field.defaultProps = {
  type: "input",
}

export default Field

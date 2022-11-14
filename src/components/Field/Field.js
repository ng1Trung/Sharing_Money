import classNames from "classnames/bind"
import { forwardRef } from "react"
import styles from "./Field.module.scss"
import PropTypes from "prop-types"
import images from "../../assets"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const cx = classNames.bind(styles)

const Field = forwardRef(
  (
    {
      type,
      label,
      value,
      placeholder,
      style,
      addonAfter,
      className,
      onClick,
      onChange,
      ...props
    },
    ref
  ) => {
    const classes = cx("wrapper", {
      [className]: className,
    })

    return (
      <div className={classes} onClick={onClick} style={style} {...props}>
        {label && <label className={cx("label")}>{label}</label>}

        {type === "input" && (
          <div className={cx("input-wrapper")}>
            <input
              type="text"
              ref={ref}
              value={value}
              placeholder={placeholder}
              className={cx("input")}
              onChange={onChange}
            />
            {addonAfter && (
              <span className={cx("addon-after")}>{addonAfter}</span>
            )}
          </div>
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
            <img
              src={images.vndCurrency}
              alt="vnd"
              className={cx("currency-image")}
            />
            <span className={cx("currency-text")}>{value}</span>
          </div>
        )}
      </div>
    )
  }
)

Field.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.any,
  placeholder: PropTypes.any,
  style: PropTypes.object,
  addonAfter: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
}

Field.defaultProps = {
  type: "input",
}

export default Field

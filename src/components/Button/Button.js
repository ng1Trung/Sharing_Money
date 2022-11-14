import classNames from "classnames/bind"
import styles from "./Button.module.scss"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const cx = classNames.bind(styles)

const Button = ({
  children,
  className,
  primary,
  large,
  onClick,
  to,
  href,
  ...otherProps
}) => {
  const classes = cx("wrapper", {
    primary,
    large,
    [className]: className,
  })

  let Component = "button"

  const props = {
    ...otherProps,
  }

  if (to) {
    props.to = to
    Component = Link
  } else if (href) {
    props.href = href
    Component = "a"
  }

  const handleClick = (e) => {
    e.preventDefault()
    onClick()
  }

  return (
    <Component className={classes} onClick={(e) => handleClick(e)} {...props}>
      {children}
    </Component>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  large: PropTypes.bool,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  primary: false,
  onClick: () => {},
}

export default Button

import PropTypes from "prop-types"
import { Modal as ModalAntd } from "antd"
import classNames from "classnames/bind"
import styles from "./Modal.module.scss"

const cx = classNames.bind(styles)

const Modal = ({ children, open, title }) => {
  return (
    <ModalAntd
      open={open}
      title={title}
      destroyOnClose
      centered
      closable={false}
      footer={null}
      className={cx("wrapper")}
      bodyStyle={{ paddingBottom: 0 }}
    >
      {children}
    </ModalAntd>
  )
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  title: PropTypes.string,
}

export default Modal

import { Modal } from "antd"
import Field from "../../components/Field/Field"
import classNames from "classnames/bind"
import styles from "./Login.module.scss"

const cx = classNames.bind(styles)

const Login = () => {
  return (
    <Modal open={true} title="Đăng nhập">
      <div className={cx("row")}>
        <Field type="avatar" />
        <Field
          label="Tên ví"
          placeholder="Tên ví của bạn"
          style={{ flex: 1, marginLeft: 16 }}
        />
      </div>
      <div className={cx("row")}>
        <Field label="Tiền tệ" type="currency" />
        <Field label="Số dư ban đầu" placeholder="0" />
      </div>
    </Modal>
  )
}

export default Login

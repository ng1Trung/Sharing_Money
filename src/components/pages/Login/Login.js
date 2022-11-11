import { Modal } from "antd"
import Field from "../../Field/Field"

const Login = () => {
  return (
    <Modal open={true} title="Đăng nhập">
      <Field label="Tên ví" placeholder="Tên ví của bạn" />
    </Modal>
  )
}

export default Login

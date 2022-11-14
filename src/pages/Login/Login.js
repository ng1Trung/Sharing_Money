import { useRef, useState } from "react"
import classNames from "classnames/bind"
import { useNavigate } from "react-router-dom"

import styles from "./Login.module.scss"
import Field from "../../components/Field/Field"
import Button from "../../components/Button/Button"
import Modal from "../../components/Modal/Modal"

const cx = classNames.bind(styles)

const Login = () => {
  const [wallet, setWallet] = useState({})
  const [savable, setSavable] = useState(false)

  const nameRef = useRef()
  const balanceRef = useRef()

  const handleNameFocus = () => {
    nameRef.current.focus()
  }

  const handleBalanceRef = () => {
    balanceRef.current.focus()
  }

  const handleNameChange = (e) => {
    // setName(e.target.value)
    if (e.target.value) {
      setWallet((pre) => ({ ...pre, name: e.target.value }))
      setSavable(true)
    } else {
      setSavable(false)
    }
  }

  const handleBalanceChange = (e) => {
    setWallet((pre) => ({ ...pre, balance: e.target.value }))
  }

  const navigate = useNavigate()

  const handleWalletInfo = () => {
    if (savable) {
      // console.log(wallet)

      navigate("/")
    }
  }

  return (
    <Modal open={true} title="THÊM THÔNG TIN VÍ!">
      <div className={cx("row")}>
        <Field type="avatar" />
        <Field
          label="Tên ví"
          placeholder="Tên ví của bạn"
          ref={nameRef}
          onChange={handleNameChange}
          onClick={handleNameFocus}
        />
      </div>

      <div className={cx("row")}>
        <Field label="Tiền tệ" value="Việt Nam Đồng" type="currency" />
        <Field
          label="Số dư ban đầu"
          placeholder="0"
          ref={balanceRef}
          addonAfter="VNĐ"
          onChange={handleBalanceChange}
          onClick={handleBalanceRef}
        />
      </div>

      <div className={cx("modal-footer")}>
        <Button primary={savable} onClick={handleWalletInfo}>
          LƯU
        </Button>
      </div>
    </Modal>
  )
}

export default Login

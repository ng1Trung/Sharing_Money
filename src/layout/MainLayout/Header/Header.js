import classNames from "classnames/bind"
import styles from "./Header.module.scss"

import images from "../../../assets"
import Button from "../../../components/Button/Button"

const cx = classNames.bind(styles)

const Header = () => {
  return (
    <div className={cx("wrapper")}>
      {/* personal */}
      <div className={cx("personal")}>
        <img
          src={images.defaultIcon}
          alt="..."
          className={cx("personal-image")}
        />
        <div className={cx("personal-info")}>
          <span className={cx("personal-info__name")}>Jay</span>
          <span className={cx("personal-info__balance")}>+1,000,000.00 đ</span>
        </div>
      </div>

      {/* transaction btn */}
      <Button primary>THÊM KHOẢN CHI TIÊU</Button>
    </div>
  )
}

export default Header

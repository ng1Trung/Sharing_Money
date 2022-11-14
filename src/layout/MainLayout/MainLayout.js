import Header from "./Header/Header"
import Sidebar from "./Sidebar/Sidebar"
import classNames from "classnames/bind"
import styles from "./MainLayout.module.scss"

const cx = classNames.bind(styles)

const MainLayout = ({ children }) => {
  return (
    <div className={cx("wrapper")}>
      <Sidebar />
      <div className={cx("container")}>
        <Header />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  )
}

export default MainLayout

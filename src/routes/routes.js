import MainLayout from "../layout/MainLayout/MainLayout"
import Home from "../pages/Home/Home"
import Login from "../pages/Login/Login"
import Transaction from "../pages/Transaction/Transaction"

const publicRoutes = [{ path: "/login", component: Login }]

const privateRoutes = [
  { path: "/", component: Home, layout: MainLayout },
  { path: "/transaction", component: Transaction, layout: MainLayout },
]

export { publicRoutes, privateRoutes }

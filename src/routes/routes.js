import Login from "../pages/Login/Login"
import Transaction from "../pages/Transaction/Transaction"

const publicRoutes = [{ path: "/login", component: Login }]

const privateRoutes = [{ path: "/transaction", component: Transaction }]

export { publicRoutes, privateRoutes }

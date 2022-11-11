import Login from "../components/pages/Login/Login"
import Transaction from "../components/pages/Transaction/Transaction"

const publicRoutes = [{ path: "/login", component: Login }]

const privateRoutes = [{ path: "/transaction", component: Transaction }]

export { publicRoutes, privateRoutes }

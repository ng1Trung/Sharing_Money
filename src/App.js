import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { publicRoutes, privateRoutes } from "./routes/routes"

function App() {
  const user = false

  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component

            return (
              <Route
                key={index}
                path={route.path}
                element={user ? <Navigate to="/" replace /> : <Page />}
              />
            )
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component

            return (
              <Route
                key={index}
                path={route.path}
                element={user ? <Page /> : <Navigate to="/login" replace />}
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App

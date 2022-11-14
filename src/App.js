import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom"
import { publicRoutes, privateRoutes } from "./routes/routes"

function App() {
  const user = true

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
                element={
                  user ? <Navigate to="/transaction" replace /> : <Page />
                }
              />
            )
          })}

          {privateRoutes.map((route, index) => {
            const Page = route.component
            const Layout = route.layout

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  user ? (
                    <Layout>
                      <Page />
                    </Layout>
                  ) : (
                    <Navigate to="/login" replace />
                  )
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App


import Header from "@/components/shared/Header"
import { Outlet } from "react-router-dom"
function App() {

  return (
    <>
    <Header></Header>
    <div>
     <Outlet />
    </div>
    </>
  )
}

export default App

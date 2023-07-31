import { AxiosInterceptor } from "./AxiosInterceptor"
import { AuthProvider } from "./providers/AuthProvider"
import { RoutesMain } from "./routes"
import GlobalStyles from "./styles/GlobalStyles"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {

  return (
    <>
    <GlobalStyles/>
    <AxiosInterceptor>
      <AuthProvider>
        <RoutesMain/>
      </AuthProvider>
    </AxiosInterceptor>
    <ToastContainer />
    
    </>
  )

}



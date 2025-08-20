import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallBackPage from "./pages/auth-callback/AuthCallBackPage";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route path="/auth-callback" element={<AuthCallBackPage></AuthCallBackPage>}></Route>
           </Routes>
        </>
    );
}

export default App;

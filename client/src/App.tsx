import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AuthCallbackPage from "./pages/auth-callback/AuthCallBackPage";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage></HomePage>}></Route>
                <Route
                    path="/sso-callback"
                    element={
                        <AuthenticateWithRedirectCallback
                            signUpForceRedirectUrl={"/auth-callback"}
                        ></AuthenticateWithRedirectCallback>
                    }
                ></Route>
                <Route
                    path="/auth-callback"
                    element={<AuthCallbackPage></AuthCallbackPage>}
                ></Route>
            </Routes>
        </>
    );
}

export default App;

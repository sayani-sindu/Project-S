import { Routes,Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignOut from "../pages/SignOut";
import PageNotFound from "../Components/PageNotFound";
const RoutersContainer = () =>{
    
    return(<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/signout" element={<SignOut/>}/>
        <Route path="*" element={<PageNotFound/>}/>
        


    </Routes>
    </>)
}
export default RoutersContainer;
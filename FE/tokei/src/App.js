import './App.css';
import {Route, Router, Routes} from "react-router";
import Home from "./component/home";
import Shop from "./component/shop";
import Footer from "./layout/footer";
import Detail from "./component/Detail";
import {Login} from "./component/login";
import {Header} from "./layout/headerr";
import Employee from "./component/employee";
import CartComponent from "./component/CartComponent";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/shop" element={<Shop/>}></Route>
                <Route path="/cart/:userId" element={<CartComponent/>}></Route>
                <Route path='/detail/:id' element={<Detail/>}/>
                <Route path="/employee" element={<Employee/>}></Route>

            </Routes>
            <Footer/>
        </>
    );
}

export default App;

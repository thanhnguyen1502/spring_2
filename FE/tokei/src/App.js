import './App.css';
import {Route, Router, Routes} from "react-router";
import Home from "./component/home";
import Shop from "./component/shop";
import Footer from "./layout/footer";
import Detail from "./component/Detail";
import {Login} from "./component/login";
import {Header} from "./layout/headerr";
import History from "./component/history";
import CartComponent from "./component/CartComponent";
import {QuantityProvider} from "./component/QuantityContext";

function App() {
    return (
        <>
            <QuantityProvider>
                <Header/>
                <Routes>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/shop" element={<Shop/>}></Route>
                    <Route path="/cart/:username" element={<CartComponent/>}></Route>
                    <Route path='/detail/:id' element={<Detail/>}/>
                    <Route path="/history" element={<History/>}></Route>

                </Routes>
                <Footer/>
            </QuantityProvider>

        </>
    );
}

export default App;

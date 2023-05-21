import './page.css';
import Main from '../main/main';


//Returns the whole page (except the topnavbar).
export default function Page() {
    return(
        <div className="page-container">
            <MainPage/>
            <CheckOut/>
        </div>
    );
}

//Returns the main part of the page (picture, restaurant, gerichte)
function MainPage() {
    return(
        <div className='main-container'>
            <Main/>
        </div>
    );
}

//CheckOut (on the right)
function CheckOut() {
    return(
        <div className='checkout-container'>
            <div>
                Warenkorb
                aaaaa
            </div>
            <div>
                Hier ist dein CheckOut
            </div>
        </div>
    );
}
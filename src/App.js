import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/HomePageComponent';
import Navigation from '../src/components/navbar/NavigationComponent';
import Footer from './components/footer/FooterComponent';
import AllopathicBranded from './components/AllopathicBranded/AllopathicBrandedComponent';
import AllopathicGeneric from './components/AllopathicGeneric/AllopathicGenericComponent';
import AyurvedicBranded from './components/AyurvedaBranded/AyurvedaBrandedComponent';
import AyurvedicGeneric from './components/AyurvedaGeneric/AyurvedaGenericComponent';
import MedicineDetailComponent from './components/MedicineDetails/MedicineDetailComponent';
import ShowPage from './components/ShopsList/ShowPage';
import CurrentBooking from './components/bookings/CurrentBookingComponent';
import BookingHistory from './components/bookings/BookingHistoryComponent';
import Cart from './components/cart/CartComponent';
import MapBox from './components/mapBox/mapBox';
import './App.css';

function App() {
  return (
    <div className="App"> 
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/allopbrand" component={AllopathicBranded} />
          <Route
            exact
            path="/allopbrand/:id"
            component={() => (
              <MedicineDetailComponent showBtn={false} imgsrc="https://picsum.photos/200/300" />
            )}
          />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/allopgen" component={AllopathicGeneric} />
          <Route exact path="/ayurbrand" component={AyurvedicBranded} />
          <Route exact path="/ayurgen" component={AyurvedicGeneric} />
          <Route path="/medicinedetails">
            <MedicineDetailComponent imgsrc="https://picsum.photos/200/300" />
          </Route>
          <Route exact path="/current" component={CurrentBooking} />
          <Route exact path="/history" component={BookingHistory} />
          <Route path="/shoplist" component={ShowPage} />
          <Route exact path = "/stores">
            <MapBox />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;

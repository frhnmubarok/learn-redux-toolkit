import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { RootState } from './app/store';
import CustomerCard from './components/CustomerCard';
import ReservationCard from './components/ReservationCard';
import { addReservation } from './features/reservationSlice';

function App() {
  const [reservationNameInput, setReservationsNameInput] = useState('');

  const reservations = useSelector((state: RootState) => state.reservation.value);
  const customers = useSelector((state: RootState) => state.customer.value);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <div className='container'>
        <div className='reservation-container'>
          <div>
            <h5 className='reservation-header'>Reservations</h5>
            <div className='reservation-cards-container'>
              {reservations.map((name, index) => (
                <ReservationCard name={name} key={index} index={index} />
              ))}
            </div>
          </div>
          <div className='reservation-input-container'>
            <input value={reservationNameInput} onChange={(event) => setReservationsNameInput(event.target.value)} />
            <button
              onClick={() => {
                dispatch(addReservation(reservationNameInput));
                setReservationsNameInput('');
              }}>
              Add
            </button>
          </div>
        </div>
        <div className='customer-food-container'>
          {customers.map((customer) => {
            return <CustomerCard id={customer.id} name={customer.name} food={customer.food} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

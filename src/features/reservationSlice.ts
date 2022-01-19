import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ReservationState {
  value: string[];
}

const initialState: ReservationState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    addReservation: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
  },
});

export default reservationSlice.reducer;

export const { addReservation } = reservationSlice.actions;

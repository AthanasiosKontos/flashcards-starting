import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: {}
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = {
        id,
        front,
        back
      };
    }
  }
});

// Selector to select all cards from the state
export const selectCards = (state) => state.cards.cards;

// Selector to select a card by its ID
export const selectCardById = (state, cardId) => state.cards.cards[cardId];

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;

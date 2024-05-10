import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export interface ILoaderState {
    loader: boolean;
}
const initialState: ILoaderState = {
    loader: false,
  };
  
export const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state: ILoaderState, action: PayloadAction<boolean>) => {
        state.loader = action.payload;
    },
  }
});
export const {
    setLoader
} = loaderSlice.actions;

export default loaderSlice.reducer;
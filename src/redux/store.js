import { configureStore } from "@reduxjs/toolkit";
//import action from "./counter/action";
import sliceCounter from "./counter";

export default configureStore({
  reducer: {
    countname: sliceCounter
  }
});

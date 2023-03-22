import { configureStore } from "@reduxjs/toolkit";

import modaladd from "./features/modaladd";
import searchSlice from "./features/searchSlice";

export default configureStore({
    reducer: {
        search: searchSlice,
        modaladdbook: modaladd,
    }
})
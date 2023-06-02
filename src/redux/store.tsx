import { configureStore } from "@reduxjs/toolkit";

import modaladd from "./features/modaladd";
import searchSlice from "./features/searchSlice";
import totalbooks from "./features/totalbooks";

export default configureStore({
    reducer: {
        search: searchSlice,
        modaladdbook: modaladd,
        totalbooks: totalbooks
    }
})
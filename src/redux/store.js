import { legacy_createStore as createStore} from 'redux'

import rootReducer from "./reducer/root-Reducer";

const store = createStore(rootReducer);

export default store;
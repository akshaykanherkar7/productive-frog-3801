import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Auth/auth.reducer";
import { clientReducer } from "./Client/client.reducer";
import { invoiceReducer } from "./Invoice/invoice.reducer";
import { projectReducer } from "./Project/project.reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  project: projectReducer,
  invoice: invoiceReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

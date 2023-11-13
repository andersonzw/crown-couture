import { createAction } from "../../util/reducer/reducer.utils"
import { USER_ACTION_TYPES } from "./user.types"


export const setCurrentUser = (user) => {
  // create and return back an object with type: prop1, payload: prop2
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
  }


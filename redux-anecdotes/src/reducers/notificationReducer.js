const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.message
    case "HIDE_NOTIFICATION":
      return null
    default:
      break;
  }
  return state
}

export const showNotification = (message, duration) => async (dispatch) => {
  dispatch({
    type: "SHOW_NOTIFICATION",
    message
  })
  setTimeout(() => {
    dispatch({
      type: "HIDE_NOTIFICATION"
    })
  }, duration * 1000);
}

export const hideNotification = (content) => {
  return {
    type: "HIDE_NOTIFICATION"
  }
}

export default notificationReducer
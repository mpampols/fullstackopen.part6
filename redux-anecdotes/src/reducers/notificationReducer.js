const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case "SHOW_NOTIFICATION":
      return action.contents
    case "HIDE_NOTIFICATION":
      return null
    default:
      break;
  }
  return state
}

export const showNotification = (type, contents) => {
  return {
    type: "SHOW_NOTIFICATION",
    contents: contents
  }
}

export const hideNotification = (content) => {
  return {
    type: "HIDE_NOTIFICATION"
  }
}

export default notificationReducer
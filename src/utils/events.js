export const _EVENT_KEYCODES = {
  LEFT: 37,
  RIGHT: 39,
};

export const registerEventListener = (element, event, onEvent) => {
  element.addEventListener(event, onEvent);
};

export function createElement(content, tag) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
}

export function createAndAppendElement(elements, tag) {
  const element = document.createElement(tag);
  if (elements.length === 1) {
    element.append(elements[0]);
  } else {
    element.append(...elements);
  }
  return element;
}

export function createElement(content, tag) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
}

export function createAndAppendElement(elements, tag) {
  const element = document.createElement(tag);
  element.append(...elements);
  return element;
}

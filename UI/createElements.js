export function createElement(content, tag) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
}

export function createAndAppendElement(elements, tag) {
  const element = document.createElement(tag);
  return elements.length == 1
    ? element.append(elements[0])
    : element.append(...elements);
}

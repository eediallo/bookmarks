export function createElement(content, tag) {
  const element = document.createElement(tag);
  element.textContent = content;
  return element;
}

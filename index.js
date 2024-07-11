function createFromTemplateWithValues(templateId, targetId, id, values) {
  let template = document.getElementById(templateId);
  let newNode = template.content.cloneNode(true);
  change(newNode, id, values)
  document.getElementById(targetId).append(newNode)
}

function change(element, prefixId, values) {
  if (values[element.id]) {
    element.textContent = values[element.id];
  }
  prefixElementId(element, prefixId)
  forEachChild(element, child => change(child, prefixId, values));
}

function prefixElementId(element, prefix) {
  if (!element.id) {
    return;
  }

  element.id = `${prefix}-${element.id}`
}

function forEachChild(element, callback) {
  Array.from(element.children).forEach(callback);
}


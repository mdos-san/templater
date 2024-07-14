function templater(templateId, targetId, prefixId) {
  let template = document.getElementById(templateId);
  let newNode = template.content.cloneNode(true);
  updateNode(newNode, prefixId);
  document.getElementById(targetId).append(newNode)
}

function updateNode(element, prefixId) {
  if (prefixId && element.id) {
    element.id = `${prefixId}-${element.id}`;
  }

  forEachChildren(element, (child) => updateNode(child, prefixId))
}

function forEachChildren(element, callback) {
  Array.from(element.children).forEach(callback);
}



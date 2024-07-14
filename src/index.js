function templater(templateId, targetId, prefixId, propertiesById) {
  let template = document.getElementById(templateId);
  let newNode = template.content.cloneNode(true);
  updateNode(newNode, prefixId, propertiesById);
  document.getElementById(targetId).append(newNode)
}

function updateNode(element, prefixId, propertiesById) {
  if (propertiesById && propertiesById[element.id]) {
    Object.entries(propertiesById[element.id]).forEach(([key, value]) => {
      element[key] = value
    })
  }

  if (prefixId && element.id) {
    element.id = `${prefixId}-${element.id}`;
  }

  forEachChildren(element, (child) => updateNode(child, prefixId, propertiesById))
}

function forEachChildren(element, callback) {
  Array.from(element.children).forEach(callback);
}



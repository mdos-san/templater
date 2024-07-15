type PropertiesById = {
  [key: string]: Partial<HTMLElement>;
}

export function templater(templateId: string, targetId: string, prefixId: string, propertiesById: PropertiesById) {
  let template = document.getElementById(templateId) as HTMLTemplateElement;
  let newNode = template.content.cloneNode(true) as HTMLElement;
  updateNode(newNode, prefixId, propertiesById);

  const targetNode = document.getElementById(targetId);
  if (targetNode) {
    targetNode.append(newNode)
  }
}

function updateNode(element: HTMLElement, prefixId: string, propertiesById: PropertiesById) {
  if (propertiesById && propertiesById[element.id] !== undefined) {
    Object.assign(element, propertiesById[element.id]);
  }

  if (prefixId && element.id) {
    element.id = `${prefixId}-${element.id}`;
  }

  forEachChildren(element, (child) => updateNode(child, prefixId, propertiesById))
}

function forEachChildren(element: HTMLElement, callback: (child: HTMLElement) => void) {
  Array.from(element.children).forEach((el) => callback(el as HTMLElement));
}


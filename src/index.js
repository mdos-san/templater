function templater(templateId, targetId) {
  let template = document.getElementById(templateId);
  let newNode = template.content.cloneNode(true);
  document.getElementById(targetId).append(newNode)
}


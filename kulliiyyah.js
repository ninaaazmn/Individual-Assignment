const kulliyyahCheckbox = document.getElementById('kulliyyah-checkbox');
const kulliyyahField = document.getElementById('kulliyyah-field');

kulliyyahCheckbox.addEventListener('change', function () {
  if (this.checked) {
    kulliyyahField.style.display = 'block';
    // Add new field
    const departmentField = document.createElement('input');
    departmentField.type = 'text';
    departmentField.id = 'department';
    departmentField.name = 'department';
    departmentField.required = true;
    departmentField.placeholder = 'Enter your Kulliyyah';
    kulliyyahField.appendChild(departmentField);
  } else {
    kulliyyahField.style.display = 'none';
    // Remove added field
    const departmentField = document.getElementById('department');
    departmentField.parentNode.removeChild(departmentField);
  }
});

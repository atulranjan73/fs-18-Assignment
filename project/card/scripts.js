function updateInfo() {
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;
    var grade = document.getElementById('grade').value;
    var phone = document.getElementById('phone').value;
    var village = document.getElementById('village').value;
    var photo = document.getElementById('photo').files[0]; // Get the first file if multiple files are selected
    
    // Update right side info
    document.getElementById('infoName').innerText = name;
    document.getElementById('infoAge').innerText = age;
    document.getElementById('infoGrade').innerText = grade;
    document.getElementById('infoPhone').innerText = phone;
    document.getElementById('infoVillage').innerText = village;
    
    // Display photo preview
    var reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('infoPhoto').src = e.target.result;
    }
    reader.readAsDataURL(photo);
  }
  
  // Add event listeners to form inputs
  document.getElementById('name').addEventListener('input', updateInfo);
  document.getElementById('age').addEventListener('input', updateInfo);
  document.getElementById('grade').addEventListener('input', updateInfo);
  document.getElementById('phone').addEventListener('input', updateInfo);
  document.getElementById('village').addEventListener('input', updateInfo);
  document.getElementById('photo').addEventListener('change', updateInfo);
  
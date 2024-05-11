const mbtn = document.getElementById('m-btn');
mbtn.onclick = () => {
  const version = prompt('Please select the version of minecraft you use (Number)\n1.Minecraft 1.5.2\n2.Minecraft 1.8.8');
  if(version == 1) {
    location.href = "./eaglercraft/1.5.2/index.html";
  } else if(version == 2) {
    location.href = "./eaglercraft/1.8.8/index.html";
  } else {
    alert('none');
  }
}
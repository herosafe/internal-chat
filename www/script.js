document.getElementById('fileInput').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    uploadFile(file);
  }
});

function uploadFile(file) {
  const url = '/upload'; // 替换为实际的上传URL
  const formData = new FormData();
  formData.append('file', file);

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);

  xhr.upload.onprogress = function(event) {
    if (event.lengthComputable) {
      const percentComplete = (event.loaded / event.total) * 100;
      const progressBar = document.getElementById('uploadProgress');
      progressBar.style.display = 'block';
      progressBar.value = percentComplete;
    }
  };

  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('文件上传成功');
    } else {
      alert('文件上传失败');
    }
    document.getElementById('uploadProgress').style.display = 'none';
  };

  xhr.send(formData);
}
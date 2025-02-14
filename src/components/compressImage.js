<!DOCTYPE html>
<html>
<head>
    <title>이미지 압축</title>
</head>
<body>
    <input type="file" id="fileInput" accept="image/*">
    <button onclick="compressImage()">압축 및 다운로드</button>
    <canvas id="canvas" style="display:none;"></canvas>
    <script>
        function compressImage() {
            var fileInput = document.getElementById('fileInput');
            var file = fileInput.files[0];
            
            if (!file) {
                alert("이미지를 선택하세요.");
                return;
            }
            
            var reader = new FileReader();
            reader.onload = function(event) {
                var img = new Image();
                img.onload = function() {
                    var canvas = document.getElementById('canvas');
                    var ctx = canvas.getContext('2d');
                    
                    var maxWidth = 800; // 최대 너비
                    var maxHeight = 800; // 최대 높이
                    var width = img.width;
                    var height = img.height;
                    
                    if (width > maxWidth || height > maxHeight) {
                        if (width > height) {
                            height *= maxWidth / width;
                            width = maxWidth;
                        } else {
                            width *= maxHeight / height;
                            height = maxHeight;
                        }
                    }
                    
                    canvas.width = width;
                    canvas.height = height;
                    ctx.drawImage(img, 0, 0, width, height);
                    
                    var quality = 0.8; // 초기 압축 품질
                    var maxSize = 100 * 1024; // 최대 100KB 제한
                    var compressedData;
                    
                    do {
                        compressedData = canvas.toDataURL('image/jpeg', quality);
                        quality -= 0.05; // 5%씩 품질 감소
                    } while (compressedData.length > maxSize && quality > 0.1);
                    
                    downloadImage(compressedData);
                };
                img.src = event.target.result;
            };
            reader.readAsDataURL(file);
        }
        
        function downloadImage(dataURL) {
            var link = document.createElement('a');
            link.href = dataURL;
            link.download = 'compressed_image.jpg';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    </script>
</body>
</html>

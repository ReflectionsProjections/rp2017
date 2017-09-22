window.onload = function() {
  /*if (localStorage.getItem("userQR")) {
    var dataImage = localStorage.getItem("userQR");
    document.getElementById("qr-code").src='data:image/png;base64,' + dataImage;
    console.log(document.getElementById("qr-code").src);
  }
  else {
    var image = document.getElementById("qr-code");
    image.src="https://api.qrserver.com/v1/create-qr-code/?data=HelldddddwoWorld&amp;size=100x100";
    var imgData = getBase64Image(image);
    localStorage.setItem("userQR", imgData);
    console.log("hey2");

  }*/
  var image = document.getElementById("qr-code");
  image.src="https://api.qrserver.com/v1/create-qr-code/?data=HelldddddwoWorld&amp;size=100x100";

}


function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");
    console.log(dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

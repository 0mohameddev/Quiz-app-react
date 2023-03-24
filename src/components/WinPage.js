import React from 'react';
import QRCode from 'qrcode.react';
import '../App.css'

function WinPage() {
  return (
    <div className='qr'>
      <h1 className='qrt'>Vous avez gagné !</h1>
      <p className='pqr'>Scannez le code QR ci-dessous pour réclamer votre prix.</p>
      <div className = "qrcode" ><QRCode value="https://www.visitmorocco.com/en/travel/marrakesh" /></div>
      
      <p className='pqr'>Scannez-moi</p>
    </div>
  );
}

export default WinPage;
// components/QRScanner.js
import React, { useRef, useEffect, useState } from 'react';
import QrScanner from 'qr-scanner';

import css from './qr-scanner.module.scss';

const QRScanner = () => {
    const videoElementRef = useRef(null);
    const [scanned, setScannedText] = useState('');

  useEffect(() => {
    const video: HTMLVideoElement | null = videoElementRef.current;
    const qrScanner = new QrScanner(
      video!,
      (result) => {
        setScannedText(result.data);
      },
      {
        returnDetailedScanResult: true,
        highlightScanRegion: true,
        highlightCodeOutline: true,
      }
    );
    qrScanner.start();

    return () => {
      qrScanner.stop();
      qrScanner.destroy();
    };
  }, []);

  return <video className={`${css['qr-scanner']} mt-37 mb-26`} ref={videoElementRef} />;
};

export default QRScanner;

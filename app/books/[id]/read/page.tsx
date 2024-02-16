"use client";
import React, { useState, useRef } from "react";
import PdfView from "./pdfView";
const Books = () => {

  const pdfRef = useRef(null);

  const enterFullscreen = () => {
    const elem: any = pdfRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      // Firefox
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      // Chrome, Safari, and Opera
      elem.webkitRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const handleFullscreen = () => {
    if (!document.fullscreenElement) {
      enterFullscreen();
    } else {
      exitFullscreen();
    }
  };

  return (
    <div ref={pdfRef} className="overflow-y-auto">
      <PdfView handleFullscreen={handleFullscreen} />
    </div>
  );
};

export default Books;

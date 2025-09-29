import React from "react";
import  { useEffect, useState } from "react";
import "./preloader.css";

export default function Preloader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 1800); // 1.8s
    return () => clearTimeout(timer);
  }, []);

  return (
    !hide && (
      <div className="preloader-bg">
        <div className="preloader-spinner"></div>
        <span className="preloader-text">Loading Portfolio...</span>
      </div>
    )
  );
}
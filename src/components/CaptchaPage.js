import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { captcha } from "../api/api";

const CaptchaPage = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleSubmit = async () => {
    if (!captchaValue) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    try {
      const response = await fetch(captcha, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: captchaValue }),
      });

      const data = await response.json();
      if (data.success) {
        sessionStorage.setItem("captchaVerified", "true");
        window.location.href = "/";
      } else {
        alert("CAPTCHA verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during CAPTCHA verification:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>Welcome to Our Website</h1>
      <ReCAPTCHA
        sitekey="6Le2JdYqAAAAABBrlpH54TmnFGvu5IvjtQHb20b6"
        onChange={(value) => setCaptchaValue(value)}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          marginTop: "20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          width: "100%",
          maxWidth: "300px",
        }}
      >
        Verify & Continue
      </button>
    </div>
  );
};

export default CaptchaPage;
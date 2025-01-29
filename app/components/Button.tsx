import React from "react";

interface ButtonProps {
  styles: string;
  text: string; // Tambahkan properti 'text'
}

const Button: React.FC<ButtonProps> = ({ styles, text }) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    {text} {/* Gunakan properti 'text' untuk menampilkan teks */}
  </button>
);

export default Button;

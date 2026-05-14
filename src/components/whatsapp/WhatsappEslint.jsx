import { useEffect } from "react";

export default function WhatsappEslint() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-de92ea3f-3a61-4627-8822-948f2f663b65"
      data-elfsight-app-lazy
    ></div>
  );
}
import React, { useEffect, useState } from "react";

interface FadeWrapperProps {
  children: React.ReactNode;
}

const FadeWrapper: React.FC<FadeWrapperProps> = ({ children }) => {
  const [fadeState, setFadeState] = useState("fade-enter");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeState("fade-enter-active");
    }, 10);

    return () => clearTimeout(timeout);
  }, []);

  return <div className={fadeState}>{children}</div>;
};

export default FadeWrapper;

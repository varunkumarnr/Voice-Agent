import { useCallback, useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const COMMANDS = {
  LOGIN: "login",
};

export default function useAlan() {
  const [alanInstance, setAlanInstance] = useState();
  const login = useCallback(() => {
    if (window.location.href === "http://localhost:3000/login") {
      alanInstance.playText("you are in login page enter email and password");
    } else {
      window.location.replace("http://localhost:3000/login");
    }
  }, [alanInstance]);
  useEffect(() => {
    window.addEventListener(COMMANDS.LOGIN, login);
    return () => {
      window.removeEventListener(COMMANDS.LOGIN, login);
    };
  }, [alanInstance]);
  useEffect(() => {
    if (alanInstance != null) return;
    setAlanInstance(
      alanBtn({
        key: process.env.REACT_APP_ALAN_KEY,
        onCommand: ({ command, payload }) => {
          window.dispatchEvent(new CustomEvent(command, { details: payload }));
        },
      })
    );
  }, []);
  return null;
}

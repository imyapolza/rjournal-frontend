import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const useCloseModal = () => {
  const router = useRouter();

  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  const backDropHandler = (e): void => {
    const isCloseClick = e.target.getAttribute("data-close-btn");

    if (!modalWrapperRef?.current?.contains(e.target) || isCloseClick) {
      router.push("/");
    }
  };

  useEffect(() => {
    setIsBrowser(true);
    window.addEventListener("click", backDropHandler);

    return () => window.removeEventListener("click", backDropHandler);
  }, []);

  return { modalWrapperRef, isBrowser };
};

export default useCloseModal;

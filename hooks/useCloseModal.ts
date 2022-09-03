import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const useCloseModal = () => {
  const router = useRouter();

  const modalWrapperRef = useRef<HTMLDivElement>(null);
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  return { modalWrapperRef, isBrowser };
};

export default useCloseModal;

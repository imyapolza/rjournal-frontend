import React, { useEffect, useState } from "react";
import clsx from "clsx";
import { LeftMenu } from "../components/LeftMenu";
import { SideComments } from "../components/SideComments/SideComments";
import styles from "./styles/main-layout.module.scss";
import { useAppSelector } from "../redux/hooks";

interface MainLayoutProps {
  children: React.ReactNode;
  hideComments?: boolean;
  hideMenu?: boolean;
  contentFullWidth?: boolean;
  className?: string;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  contentFullWidth,
  hideComments,
  hideMenu,
  className,
}) => {
  const isHidden = useAppSelector((state) => state.comment.isHidden);

  return (
    <div className={styles.main__layout}>
      {!hideMenu && (
        <div className={styles.leftSide}>
          <LeftMenu />
        </div>
      )}
      <div
        className={clsx(styles.content, { "content--full": contentFullWidth })}
      >
        {children}
      </div>
      {!hideComments && (
        <div className={`${styles.rightSide} ${!isHidden && styles.height100}`}>
          <SideComments />
        </div>
      )}
    </div>
  );
};

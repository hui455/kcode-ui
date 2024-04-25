import React from "react";
import "./Avatar.scss";

export default function KAvatar(children,shape = 'circle',size = 'default',...props) {
  return (
    <div className={`k-avatar-${size} ${shape}`} {...props}>
      {children}
    </div>
  );
}
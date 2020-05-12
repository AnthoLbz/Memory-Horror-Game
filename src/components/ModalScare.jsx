import React from "react";
import usePortal from "react-cool-portal";
import "./modalScare.css";

function ModalScare() {
  const { Portal, show } = usePortal({
    defaultShow: false,
  });
  return (
    <div>
      {show()}
      <Portal>
        <div className="scare">
          <audio
            src="https://www.cjoint.com/doc/20_05/JEmks4ddS2n_nmh-scream1.mp3"
            type="audio/mpeg"
            autoplay="true"
          />
        </div>
      </Portal>
    </div>
  );
}

export default ModalScare;

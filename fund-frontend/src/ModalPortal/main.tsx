import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import './ModalPortal.css';

interface OverlayProps {
  onClose: () => void;
  
}

const Overlay: React.FC<OverlayProps> = (props) => {
  return (
    <div className='backdrop' onClick={props.onClose}></div>
  );
};

interface ModalOverlayProps {
  children: ReactNode;
  onClose: () => void;
}

const ModalOverlay: React.FC<ModalOverlayProps> = (props) => {
  return (
    <div style={{ backgroundColor: "white",boxSizing:"border-box" }}  >
      {props.children}
    </div>
  );
};
interface ModalPortalProps {
  onClose: () => void;
  children: ReactNode;
}

const ModalPortal: React.FC<ModalPortalProps> = (props) => {
  const division = document.getElementById('overlay');
//   console.log("hih");
  if (!division) return null;
  return (
    <>
      {ReactDOM.createPortal(<Overlay onClose={props.onClose} />,division)}
      {ReactDOM.createPortal(<ModalOverlay onClose={props.onClose}>{props.children}</ModalOverlay>, division)}
    </>
  );
};

export default ModalPortal;

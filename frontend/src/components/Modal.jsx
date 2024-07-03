import { useRef } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({onClose,children}) => {
    const modelRef = useRef();
    const closeModel =(e)=>{
        if(modelRef.current===e.target){
            onClose();
        }
    }
  return (
    <div ref={modelRef} onClick={closeModel} className="fixed flex justify-center items-center inset-0 bg-opacity-30 backdrop-blur-sm">
        <div className="mt-10 flex flex-col gap-5">
            <div onClick={onClose} className="text-2xl place-self-end cursor-pointer"><IoCloseSharp /></div>
            <div className="bg-gray-300 flex flex-col mx-4 rpinded-xl">
                {children}
            </div>
        </div>
    </div>
  )
}

export default Modal
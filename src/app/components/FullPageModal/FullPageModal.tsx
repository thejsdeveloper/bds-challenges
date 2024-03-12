import {
  Button,
  Dialog,
  DialogProps,
  DialogTrigger,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components";

export function FullPageModal({ children, ...props }: ModalOverlayProps) {
  return (
    <ModalOverlay
      className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
        `}
      {...props}
      isDismissable
    >
      <Modal
        className={({ isEntering, isExiting }) => `
            w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
      >
        {children}
      </Modal>
    </ModalOverlay>
  );
}

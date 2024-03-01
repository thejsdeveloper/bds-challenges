import {
  Button,
  Dialog,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components";

export function ConfirmModal({
  message,
  onConfirm,
  ...props
}: { message: string; onConfirm: () => void } & ModalOverlayProps) {
  return (
    <ModalOverlay
      className={({ isEntering, isExiting }) => `
          fixed inset-0 z-10 overflow-y-auto bg-black/25 flex min-h-full items-center justify-center p-4 text-center backdrop-blur
          ${isEntering ? "animate-in fade-in duration-300 ease-out" : ""}
          ${isExiting ? "animate-out fade-out duration-200 ease-in" : ""}
          `}
      {...props}
    >
      <Modal
        className={({ isEntering, isExiting }) => `
            w-full max-w-sm overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl
            ${isEntering ? "animate-in zoom-in-95 ease-out duration-300" : ""}
            ${isExiting ? "animate-out zoom-out-95 ease-in duration-200" : ""}
          `}
      >
        <Dialog role="alertdialog" className="outline-none relative">
          {({ close }) => (
            <>
              <p className="mt-3 text-black">{message}</p>
              <div className="mt-6 flex justify-end gap-2">
                <Button
                  aria-label="Close"
                  className="p-1 px-3 border rounded text-slate-800 hover:border-slate-500 pressed:bg-slate-500"
                  onPress={close}
                >
                  Cancel
                </Button>
                <Button
                  aria-label="Delete"
                  className="p-1 px-3 border rounded bg-red-200 text-red-600 hover:border-red-600 pressed:bg-red-600"
                  onPress={() => {
                    close();
                    onConfirm();
                  }}
                >
                  Delete
                </Button>
              </div>
            </>
          )}
        </Dialog>
      </Modal>
    </ModalOverlay>
  );
}

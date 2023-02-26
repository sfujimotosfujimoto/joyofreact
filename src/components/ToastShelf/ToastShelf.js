import React from "react"

import Toast from "../Toast"
import styles from "./ToastShelf.module.css"

function ToastShelf({ toasts, handleDismiss }) {
  return (
    <ol className={styles.wrapper}>
      {toasts &&
        toasts.map((toast) => (
          <li className={styles.toastWrapper} key={toast.id}>
            <Toast toast={toast} handleDismiss={handleDismiss}>
              {toast.message}
            </Toast>
          </li>
        ))}
    </ol>
  )
}

export default ToastShelf

import React from "react"

import { ToastContext } from "../../ToastProvider"
import Button from "../Button"
import ToastShelf from "../ToastShelf"
import styles from "./ToastPlayground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]

function ToastPlayground() {
  const [variant, setVariant] = React.useState("")
  const [message, setMessage] = React.useState("")

  const { toasts, createToast, dismissToast } = React.useContext(ToastContext)

  function handleSubmit(event) {
    event.preventDefault()
    createToast(message, variant)
  }

  function handleDismiss(id) {
    dismissToast(id)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} handleDismiss={handleDismiss} />

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((v) => (
              <label key={v} htmlFor={`variant-${v}`}>
                <input
                  id={`variant-${v}`}
                  type="radio"
                  name="variant"
                  value={v}
                  onChange={(e) => setVariant(e.target.value)}
                />
                {v}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground

/*
      <input type="radio" id="huey" name="drone" value="huey"
             checked>
      <label for="huey">Huey</label>

import React from 'react';

import AddNewItemForm from './AddNewItemForm';

function App() {
  const [items, setItems] = React.useState([]);

  function handleAddItem(label) {
    const newItem = {
      label,
      id: Math.random(),
    };

    const nextItems = [...items, newItem];
    setItems(nextItems);
  }

  return (
    <div className="wrapper">
      <div className="list-wrapper">
        <ol className="shopping-list">
          {items.map(({ id, label }) => (
            <li key={id}>{label}</li>
          ))}
        </ol>
      </div>
      <AddNewItemForm
        handleAddItem={handleAddItem}
      />
    </div>
  );
}

export default App;


import React from 'react';

function AddNewItemForm({
  handleAddItem,
}) {
  const [label, setLabel] =
    React.useState('');

  return (
    <div className="new-list-item-form">
      <form
        onSubmit={(event) => {
          event.preventDefault();

          handleAddItem(label);

          setLabel('');
        }}
      >
        <label htmlFor="new-list-form-input">
          New item:
        </label>

        <div className="row">
          <input
            id="new-list-form-input"
            type="text"
            value={label}
            onChange={(event) => {
              setLabel(
                event.target.value
              );
            }}
          />
          <button>Add</button>
        </div>
      </form>
    </div>
  );
}

export default AddNewItemForm;

*/

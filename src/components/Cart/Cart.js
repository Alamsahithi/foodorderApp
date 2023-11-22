import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal/Modal";

const Cart = () => {
  return (
    <Modal
      open={true}
      isClosable={true}
      title={"Cart Items"}
      footer={[
        <div key={"footer"} className={styles.cart_modal_footer}>
          <button key={"close"} className={styles.close_btn}>
            Close
          </button>
          <button key={"order"} className={styles.order_btn}>
            Order
          </button>
        </div>,
      ]}
    >
      <div>
        Sushi
        <p>Total Amount</p>
        <p>35.62</p>
      </div>
    </Modal>
  );
};

export default Cart;
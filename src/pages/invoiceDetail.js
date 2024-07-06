import React from "react";
import "./invoiceDetail.css";

const InvoiceDetail = () => {
  return (
    <div className="invoice-detail">
      <div className="invoicedas">
        <header className="header">
          <span className="time">9:27</span>
          <span className="icon">
          <i class="fa-solid fa-signal"></i>          
          <i class="fa-solid fa-wifi"></i>
          <i class="fa-solid fa-battery-full"></i>
          </span>
        </header>
        <div className="usericon">
          <p><i class="fa-solid fa-arrow-left"></i></p>
          <h2>Invoice</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
          />
        </div>
        </div>
      <div className="detail-section">
        <h2>Details</h2>
        <div className="detail-box">
          <p>No. #10</p>
          <p id="date">Mar 02, 2023</p>
          <p>Due on Mar 09, 2023</p>
        </div>
      </div>
      <div className="detail-section">
        <h2>Client</h2>
        <button className="add-btn"><span className="btn-icon"><i class="fa-regular fa-user"></i></span> + Add client details</button>
      </div>
      <div className="detail-section">
        <h2>Items</h2>
        <button className="add-btn"><span className="btn-icon"><i class="fa-solid fa-folder-plus"></i></span>+ Add items</button>
      </div>
      <div className="detail-section">
        <h2>Total</h2>
        <div className="total-box">
          <p className="total">
            <span>Subtotal</span>
            <span>₹0.0</span>
          </p>
          <p className="total">
            <span>Tax</span> <span>₹0.0</span>
          </p>
          <hr />
          <p className="total" id="total">
            <span>Total</span> <span>₹0.0</span>
          </p>
        </div>
      </div>
      <div className="detail-section">
        <h2>Note</h2>
        <button className="add-btn"><span className="btn-icon"><i class="fa-solid fa-file-signature"></i></span>+ Add note</button>
      </div>
      <div className="detail-section">
        <h2>Signature</h2>
        <button className="add-btn"> <span className="btn-icon"><i class="fa-solid fa-pen"></i></span> + Add signature</button>
      </div>
      <div className="detail-section">
        <h2>Photo</h2>
        <button className="add-btn"><span className="btn-icon"><i class="fa-solid fa-images"></i></span>+ Add photo</button>
      </div>
      <div className="action-buttons">
        <button className="save-btn">Save</button>
        <button className="share-btn">Share</button>
      </div>
    </div>
  );
};

export default InvoiceDetail;

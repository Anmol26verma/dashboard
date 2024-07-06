import React from "react";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="invoice-dashboard">
      <div className="dashboard">
      <header className="header">
          <span className="time">9:27</span>
          <span className="icon">
          <i class="fa-solid fa-signal"></i>          
          <i class="fa-solid fa-wifi"></i>
          <i class="fa-solid fa-battery-full"></i>
          </span>
        </header>
        <div className="user-icon">
          <h2>Invoice</h2>
          <img
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="User"
          />
        </div>
        <div className="invoice-summary">
          <div className="amounts">
            <div className="amount-raised">
              <p>Amount Raised</p>
              <h2>₹10,000</h2>
            </div>
            <div className="amount-paid">
              <p>Amount Paid</p>
              <h2>₹5,000</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="recent-invoices">
        <div className="recent-header">
          <h2>Recent</h2>
          <a href="/">View all</a>
        </div>
        <div className="invoice-list">
          <InvoiceItem />
          <InvoiceItem />
          <InvoiceItem />
        </div>
      </div>
      <button className="create-invoice-btn">+ Create new invoice</button>
    </div>
  );
};

const InvoiceItem = () => {
  return (
    <div className="invoice-item">
      <div className="invoice-details">
        <div className="invoice-number">No. #10</div>
        <div className="invoice-description">Lorem Ipsum</div>
      </div>
      <div className="invoice-details">
        <div className="invoice-date">Mar 02, 2023</div>
        <div className="invoice-amount">₹100.0</div>
      </div>
      <div className="invoice-details">
        <div className="invoice-status">Saved</div>
        <div className="invoice-due">Due in 4 days</div>
      </div>
    </div>
  );
};

export default Dashboard;

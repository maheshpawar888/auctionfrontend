import React,{useState} from 'react';
import './custodash.css';

const CustomerDash = () =>{
    return(
        <div className="dash">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/customerdashboard">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/showauction">Auction <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Order </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/showitems">Show Item</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="/">Logout</a>
              </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}

export default CustomerDash;
import React from 'react';
import './App.css'; // Import your CSS file

function Header() {
    return (
        <div className="header">
            <div className="b1-container">
                <img src="b.png" alt="b1" style={{ maxWidth: '100%' }} />
            </div>
            <div className="center-content">
                <h1>Invite Friends</h1>
                <br />
                <img src="chain.png" alt="chain" className="chain" />
            </div>
            <div className="b2-container">
                <img src="b2.png" alt="b2" style={{ maxWidth: '100%' }} />
            </div>
        </div>
    );
}

function AddressBox() {
    const address = 'https://www.samplelink.com';

    const copyToClipboard = () => {
        navigator.clipboard.writeText(address);
        alert('Copied to clipboard: ' + address);
    };

    return (
        <div>
            <h2>Your Address:</h2>
            <div className="bordered-box">
                <h3>{address}</h3>
                <button className="copy-button" onClick={copyToClipboard}>
                    &#x1F4CB;<br /> Copy
                </button>
            </div>
        </div>
    );
}

function FriendsList() {
    return (
        <div className="friends-list">
            <br /><br />
            <h3>Friends List:</h3><br />
            <div className="friend-item">
                <span className="friend-name">Friend 1</span>
                <span className="friend-coins"><img src="bcoin.png" alt="bcoin" /> 10</span>
            </div>
            {/* Other friend items */}
        </div>
    );
}

function BottomNavbar() {
    const showPopup = (popupName) => {
        alert(`Showing ${popupName} Popup`);
        // Implement popup display logic
    };

    return (
        <div className="bottom-navbar">
            <a href="index.html" className="nav-button">
                <img src="b.png" alt="B Icon" style={{ height: '80px', width: '80px' }} />
            </a>
            {/* Other navigation buttons */}
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <Header />
            <AddressBox />
            <FriendsList />
            <BottomNavbar />
        </div>
    );
}

export default App;

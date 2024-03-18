import React from "react";
import './Dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';
import Navbar from "../../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const navigate = useNavigate();

    const redirectToCategoryDetails = (categoryName) => {
        let destinationPath = '';
        switch (categoryName) {
            case 'Venue':
                destinationPath = '/venue';
                break;
            case 'Decor':
                destinationPath = '/decorer';
                break;
            case 'Caterer':
                destinationPath = '/caterer';
                break;
            default:
                destinationPath = '/';
                break;
        }
        navigate(destinationPath);
    };

    const handleSeeMore = (categoryName) => {
        redirectToCategoryDetails(categoryName);
    };

    const renderCategory = (categoryName) => {
        return (
            <div className="Dashboard-content">
                <div className="category">
                    <div className="category-name" onClick={() => redirectToCategoryDetails(categoryName)}>
                        {categoryName}
                    </div>
                </div>
                <div className="grid-container">
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" />
                            </div>
                            <div className="grid-item-details-text">
                                <div>{categoryName} Name</div>
                                <div className="grid-item-details-text-area">{categoryName} Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" />
                            </div>
                            <div className="grid-item-details-text">
                                <div>{categoryName} Name</div>
                                <div className="grid-item-details-text-area">{categoryName} Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="grid-item-details">
                            <div>
                                <img className="grid-item-details-img" src="assets/wedding-image1.jpg" alt="" />
                            </div>
                            <div className="grid-item-details-text">
                                <div>{categoryName} Name</div>
                                <div className="grid-item-details-text-area">{categoryName} Area Details</div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item small">
                        <button className="more-button" onClick={() => handleSeeMore(categoryName)}>
                            <FontAwesomeIcon className="more-button-icon" icon={faChevronCircleDown} />See More
                        </button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <>
            <Navbar/>
            <div className="dashboard-outer-container">
                {renderCategory("Venue")}
                {renderCategory("Decor")}
                {renderCategory("Caterer")}
                {/* Add more categories as needed */}
            </div>
        </>
    );
}

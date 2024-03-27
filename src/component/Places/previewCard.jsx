import { useEffect } from "react";
import "../../css/Places/preview-card.css";

function PreviewCard({ img, name, rating, about }) {
    useEffect(() => {
        const elements = document.querySelectorAll(".preview-card");
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.3,
        };
        const callbacks = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                } else {
                }
            });
        };
        let observer = new IntersectionObserver(callbacks, options);
        elements.forEach((element) => {
            observer.observe(element);
        });
    });

    return (
        <div className="preview-card">
            <div className="preview-card-image-wrapper">
                <img className="preview-card-image" src={img} alt="" />
            </div>
            <div className="preview-card-header">
                <div className="header-top">
                    <div className="preview-card-name">{name}</div>
                    <div className="preview-card-rating">Rating : {rating}</div>
                </div>
                <div className="header-down">
                    <p className="card-about">
                        {about || "No description Provided"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default PreviewCard;

import "./css/App.css";
import Header from "./component/header.jsx";
import PreviewCard from "./component/previewCard.jsx";
import places from "../place_with_about.js";
function App() {
    console.log(places);
    return (
        <>
            <Header />
            <main className="main-content">
                {places.map((place) => {
                    return (
                        <>
                            <PreviewCard
                                key={place.img + place.name}
                                img={place.image}
                                name={place.name}
                                rating={5}
                                about={place?.about}
                            />
                        </>
                    );
                })}
            </main>
        </>
    );
}

export default App;

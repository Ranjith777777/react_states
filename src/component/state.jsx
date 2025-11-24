import { useState } from "react"

const CircleLight = () => {

    const [isOn, setIsOn] = useState(false);

    const toggleLight = () => {
        setIsOn(!isOn);
    };

    return (
        <>
            <div className={isOn ? "circle on" : "circle off"}></div>

            <button
                className={isOn ? "btn-on" : "btn-off"}
                onClick={toggleLight}
            >
                {isOn ? "Turn OFF" : "Turn ON"}
            </button>
        </>
    );
};

export default CircleLight;


import indiaImg from "../assets/images/india.jpg";
import cskImg from "../assets/images/csk.jpg";

export const TwoImageChange = () => {

    const [isIndia, setIsIndia] = useState(true);

    const changeImage = () => {
        setIsIndia(!isIndia);
    };

    return (
        <>
            <div className="image-box">
                <img
                    src={isIndia ? indiaImg : cskImg}
                    alt="team"
                    className="team-img"
                />
            </div>

            <button className="change-btn" onClick={changeImage}>
                Change Team
            </button>
        </>
    );
}


export const ActorContent = () => {

    const [isSimbu, setIsSimbu] = useState(true);

    const changeContent = () => {
        setIsSimbu(!isSimbu);
    };

    return (
        <>
            <div className="content-box">
                {isSimbu ? (
                    <p>
                        Silambarasan TR (Simbu) is known for his mass acting,
                        powerful performances and strong screen presence in Tamil cinema.
                        His movies like Maanaadu, Vinnaithaandi Varuvaayaa and
                        Chekka Chivantha Vaanam proved his versatility.
                    </p>
                ) : (
                    <p>
                        national award-winning actor known for realistic acting,
                        natural screen presence and outstanding performances in films like
                        Asuran, Aadukalam, Karnan, and Vada Chennai.
                    </p>
                )}
            </div>

            <button className="change-btn" onClick={changeContent}>
                Change Actor
            </button>
        </>
    );
}

export const ShapeChanger = () => {

    const [shapeIndex, setShapeIndex] = useState(0);

    const shapes = ["circle", "square", "hexagon"];

    const changeShape = () => {
        setShapeIndex((prev) => (prev + 1) % shapes.length);
    };

    return (
        <>
            <div className={`shape ${shapes[shapeIndex]}`}></div>

            <button className="change-btn" onClick={changeShape}>
                Change Shape
            </button>
        </>
    );
}
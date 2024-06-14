
const Color = ({ color, titel }) => {

    return (
        <div className="color-wrapper">
            <div className="color-box" style={{ backgroundColor: color }}></div>
            <div className="color-details">
                <div>{color}</div>
                <div className="color-title" style={{ color: color }}>{titel}</div>
            </div>
        </div>
    );
};

export default Color;
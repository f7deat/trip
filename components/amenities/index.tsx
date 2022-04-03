import { useState } from "react";

type AmenitiesProps = {
    data: API.AmenitiesListItem[]
}

const AmenitiesComponent: React.FC<AmenitiesProps> = (props) => {
    const [hidden, setHidden] = useState(true);
    return (
        <div className="relative">
            <button className="px-6 transition duration-500 py-2 hover:bg-green-50 rounded border font-medium" onClick={() => setHidden(!hidden)}>
                Tiện ích
            </button>
            <div className="shadow absolute" hidden={hidden}>
                {props.data.map((item: API.AmenitiesListItem) => (
                    <div key={item.id} className="px-4 py-1 hover:bg-green-50 cursor-pointer">{item.name}</div>
                ))}
            </div>
        </div>
    )
}
export default AmenitiesComponent
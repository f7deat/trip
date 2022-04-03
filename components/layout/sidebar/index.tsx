import Link from "next/link";
import AmenitiesComponent from "../../amenities";

type SidebarProps = {
    amenities?: API.AmenitiesListItem[];
    propertyTypes: API.PropertyTypesListItem[];
}

const Sidebar: React.FC<SidebarProps> = (props) => {
    return (
        <div className="mb-4">
            <div className="bg-gray-800 text-white font-bold rounded-t px-4 py-2">Loại căn hộ</div>
            {
                props.propertyTypes?.map(item => (
                    <div key={item.id} className="px-4 py-2 border-b hover:bg-green-100">
                        <i className="fab fa-staylinked mr-2"></i>
                        <Link href={`/?property_type=${item.id}`}>
                            {item.name}
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}
export default Sidebar
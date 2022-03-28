import Amenities from "../../amenities"

const Sidebar: React.FC<any> = (props: any) => {
    return (
        <aside className='md:w-1/3'>
            <div className="font-bold mb-2">Bộ lọc</div>
            <Amenities data={props} />
        </aside>
    )
}
export default Sidebar
import Image from "next/image"
import Link from "next/link"

type RelatedRoomsProps = {
    data: API.RoomListItem[]
}

const RelatedRooms: React.FC<RelatedRoomsProps> = (props) => {
    return (
        <div className="mb-4">
            <div className="px-4 py-2 rounded-t bg-gray-800 text-white font-bold mb-1">Có thể bạn sẽ thích</div>
            <div className="md:flex gap-4">
                {
                    props.data.map(item => (
                        <div className="md:w-1/3 px-1 mb-2" key={item.id}>
                            <div className="h-full shadow flex flex-col">
                                <div className="bg-gray-800 cursor-pointer">
                                    <Link href={{
                                        pathname: '/room/[id]',
                                        query: {
                                            id: item.id
                                        }
                                    }} passHref>
                                        <Image src={item.photos.data.thumbnail} className="w-full object-fit-cover hover:opacity-50 transition duration-700" alt={item.name} width={500} height={230} />
                                    </Link>
                                </div>
                                <div className="flex-1 p-2">
                                    <Link href={{
                                        pathname: '/',
                                        query: {
                                            property_type: item.property_type.data.id
                                        }
                                    }} passHref>
                                        <div className="text-red-600 cursor-pointer hover:text-red-600">
                                            <i className="fas fa-layer-group mr-2" />
                                            {item.property_type.data.name}
                                        </div>
                                    </Link>
                                    <Link href={{
                                        pathname: '/room/[id]',
                                        query: {
                                            id: item.id
                                        }
                                    }} passHref>
                                        <div className="mb-2 font-bold text-green-500 hover:text-green-600 cursor-pointer">{item.name}</div>
                                    </Link>
                                </div>
                                <div className="text-gray-500 mb-2 px-2">
                                    <i className="fas fa-map-marker-alt mr-1" />
                                    <Link href={{
                                        pathname: '/',
                                        query: {
                                            sid: item.address.data.area_id
                                        }
                                    }} passHref>
                                        <a className="hover:text-green-600 text-gray-500">{item.address.data.area_id}</a>
                                    </Link>,
                                    <Link href={{
                                        pathname: '/',
                                        query: {
                                            sid: item.address.data.city_id
                                        }
                                    }} passHref>
                                        <a className="hover:text-green-600 ml-1 text-gray-500">{item.address.data.city}</a>
                                    </Link>,
                                    <Link href={{
                                        pathname: '/',
                                        query: {
                                            sid: item.address.data.state_id
                                        }
                                    }} passHref>
                                        <a className="hover:text-green-600 ml-1 text-gray-500">{item.address.data.state}</a>
                                    </Link>
                                </div>
                                <div className="bg-gray-100 p-1 flex justify-between items-center">
                                    <div className="text-sm">
                                        <i className="fa fa-star" /> {item.rating.toFixed(0)}
                                    </div>
                                    <div className="relative">
                                        <button type="button" className="bg-white rounded-full border h-10 w-10 flex items-center justify-center hover:bg-gray-900 transition duration-500 hover:text-white" data-toggle="dropdown"><i className="fa fa-share-alt" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    )
}

export default RelatedRooms
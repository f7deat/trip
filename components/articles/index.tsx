import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"

const Articles: React.FC = () => {

    const [articles, setArticles] = useState<API.Article[]>([]);

    useEffect(() => {
        axios.get(`https://defzone.net/api/post/list-by-category/7?current=1&pageSize=5`).then(response => {
            if (response.status === 200) {
                setArticles(response.data.data);
            }
        })
    }, [])

    return (
        <div className="mb-4">
            <div className="px-4 py-2 border-t bg-gray-800 text-white font-bold rounded-t">Bài viết mới</div>
            {
                articles?.map(item => (
                    <div className="flex mt-1 items-center" key={item.id}>
                        <a href={`https://defzone.net/post/${item.url}-${item.id}.html`} title={item.title} className="bg-gray-900 mr-2 h-16 w-20">
                            <Image className="object-fit-cover h-16 w-20 max-w-none transition duration-700 hover:opacity-50" src={item.thumbnail} alt={item.title} />
                        </a>
                        <div>
                            <div className="mb-1">
                                <a href={`https://defzone.net/post/${item.url}-${item.id}.html`}>{item.title}</a>
                            </div>
                            <div className="text-gray-500 text-xs flex">
                                <div className="mr-2"><i className="fa fa-calendar mr-2" />{item.modifiedDate}</div>
                                <div><i className="fas fa-eye mr-2" />{item.view}</div>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    )
}

export default Articles
import { FaStarOfLife } from "react-icons/fa6";

const Silder = () => {
    const items = [
        {
            title: 'mern stack development'
        },
        {
            title: 'Full stack development'
        },
        {
            title: 'frontend development'
        },
        {
            title: 'web development'
        },
        {
            title: 'wordpress development'
        },
    ]
    return (
        <div>
            <div className=" absolute left-0 bg-black py-4 w-[99.5%] md:w-[99.9%] -rotate-2">
                <marquee direction="left" Scrolldelay='100' className=' uppercase font-bold text-xl'>
                    <div className="flex gap-6">
                        {
                            items.map(item =>
                                <span key={item} className="flex gap-2"><FaStarOfLife className="mt-1" />{item.title} </span>
                            )
                        }</div>
                </marquee>
            </div>
        </div>
    );
};

export default Silder;
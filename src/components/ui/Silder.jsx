import { FaStarOfLife } from "react-icons/fa6";

const Silder = () => {
    const items = [
        {
            title: 'e-commrece'
        },
        {
            title: 'corporate office'
        },
        {
            title: 'inventory manegement'
        },
        {
            title: 'pos system'
        },
        {
            title: 'personal portfolio'
        },
        {
            title: 'wordpress theme'
        },
    ]
    return (
        <div>
            <div className=" bg-black py-4 w-full">
                <marquee direction="left" scrolldelay='200' className=' uppercase font-bold text-xl'>
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
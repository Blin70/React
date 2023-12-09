import Link from "./Link";

function HamburgerMenu() {
    const list = [
        {name:'Home', link:'/Home'},    
        {name:'Profile', link:'/Profile'},
        {name:'About', link:'/About'},
        {name:'Help', link:'/Help'},
    ];

    const rendered_list = list.map((i)=>{
        return <Link classNames='w-full h-20 text-4xl list-none text-center cursor-pointer leading-loose rounded-2xl hover:bg-stone-300 list-item p-0 m-0 no-underline text-inherit' key={i.name} to={i.link}>{i.name}</Link>
    });

    return (
        <div className="absolute w-1/4 h-5/5 bg-stone-200 top-15 right-0 rounded-2xl" >
            <ul className="w-full p-0 m-0">
                {rendered_list}
            </ul>
        </div>
    );
};

export default HamburgerMenu;
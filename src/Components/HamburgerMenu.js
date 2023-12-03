import Link from "./Link";

function HamburgerMenu() {
    const list = [
        {name:'Home', link:'/App'},    
        {name:'Profile', link:'/Profile'},
        {name:'About', link:'/About'},
        {name:'Help', link:'/Help'},
    ];

    const rendered_list = list.map((i)=>{
        return <Link key={i.name} to={i.link}>{i.name}</Link>
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
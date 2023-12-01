function HamburgerMenu() {
    const list = [
        {name:'Home', link:'/'},    //links to be added
        {name:'Profile', link:'/'},
        {name:'About', link:'/'},
        {name:'Help', link:'/'},
    ];

    const rendered_list = list.map((i)=>{
        return <li key={i.name} className="w-full h-20 text-4xl list-none text-center cursor-pointer leading-loose hover:bg-stone-300">{i.name}</li>
    });

    return (
        <div className="absolute w-1/4 h-5/5 bg-stone-200 top-15 right-0" >
            <ul className="w-full p-0 m-0">
                {rendered_list}
            </ul>
        </div>
    );
};

export default HamburgerMenu;
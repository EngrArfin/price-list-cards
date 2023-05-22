import React from 'react';

const Navbar = () => {

    const routes = [
        { id: 1, name: "Home", path: "/route1" },
        { id: 2, name: "About", path: "/route2" },
        { id: 3, name: "Content", path: "/route3" },
        { id: 3, name: "Product", path: "/route4" },
        { id: 3, name: "Contract Us", path: "/route5" },
      ];
      
    return (
        <nav>
            <ul className='md:flex'>
                {
                    routes.map(route => <Link
                    key={route.id}
                    route={route}
                    ></Link> )
                }
            </ul>
        </nav>
    );
};
export default Navbar;
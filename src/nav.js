const Navbar = () => {
 return(
    <section>
           <div className="nav">
            <div className="first">
                <a href="#" className="logo">Send Freight</a>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <div className="icon">
                        <i className="ri-search-line"></i>
                    </div>
                </div>
            </div>
            <div className="second">
                <button className="quote">Request Quote</button>
                <button className="book">Book Shipment</button>
            </div>
        </div>
    </section>
 )
}
export default Navbar

import FrInput from "./components/fri-Input"
import FrSelect from "./components/fri-select"
import FriToggle from "./components/fri-toggle"
import OtherServices from "./components/other-services"
import Service from "./components/service"

const Layout = () => {
    const services = [
        <p> Air Freight</p>,
        <p> Sea Freight" </p>,
        <p> Inland <br /> (Truck & Badge) </p>,
        <p> Customs <br />  Clearance </p>
    ]
    return (
        <section className="new">
            <h1>New Booking</h1>
            <p>Fill in the information below to get a quote or create a new booking</p>
            <section className="service">
                <h2>Select a service</h2>
                <section className="all">
                    {services.map((e, i) => <Service name={e} key={i} />)}
                </section>
            </section>
            <section className="service">
                <div>
                    <i className="ri-information-line"></i>
                    <div className="import">
                        <div className="first-port">
                            <div className="imp">Import</div>
                            <div className="exp">Export</div>
                        </div>
                        <FrSelect icon={<i className="ri-map-pin-2-fill"></i>} label={'From'} options={['Lagos', 'Abuja', 'Ibadan']} />
                        <FrSelect icon={<i className="ri-map-pin-2-fill"></i>} label={'To'} options={['Lagos', 'Abuja', 'Ibadan']} />
                    </div>
                    <div className="export">
                        <FrInput placeholder={"Ready Date"} icon={<i className="ri-calendar-fill"></i>} />
                        <div className="first-ex">
                            <select name="" id="" defaultValue="">
                                <option value="" disabled>Incoterms</option>
                                <option value="Incoterms">Incoterms</option>
                                <option value="Incoterms">Incoterms</option>
                                <option value="Incoterms">Incoterms</option>
                            </select>
                            <div className="arrow">
                                <i className="ri-arrow-down-s-fill"></i>
                            </div>
                        </div>
                        <FrInput placeholder={"Total Cargo Value"} icon={<i className="ri-calendar-fill"></i>} />
                    </div>
                </div>
            </section>
            <section className="service">
                <div className="danger">
                    <h2>Cargo Details</h2>
                    <div className="chemical">
                        <div className="toggle">
                            <FriToggle />

                        </div>
                        <h3>Dangerous Cargo(ex. Chemicals, Battery)</h3>
                    </div>
                </div>
                <div className="total">
                    <div className="package">Total Dimensions</div>
                    <div className="package">Package Details</div>
                </div>
                <div className="volume">
                    <FrInput type={"fancy"} placeholder={"cbm"} label={"Total Volume"} />
                    <FrInput type={"fancy"} placeholder={"kg"} label={"Total Weight"} />
                </div>
            </section>
            <section className="service">
                <h2>Additional Services</h2>
                <div className="more">
                    <OtherServices />
                    <OtherServices />
                    <OtherServices />
                    <OtherServices />
                </div>
            </section>
        </section>
    )
}
export default Layout
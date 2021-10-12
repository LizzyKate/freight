import { useState } from "react"

const Layout = () => {
    const [toggleOn, setToggleOn] = useState(false)

    const turnOn = () => {
        setToggleOn(!toggleOn)
    }
    return(
        <section className="new">
                <h1>New Booking</h1>
                <p>Fill in the information below to get a quote or create a new booking</p>
                <section className="service">
                  <h2>Select a service</h2>
                  <section className="all">
                  <div className="air ">
                            <h3>Air Freight</h3>
                            <div className="flight">
                                <i className="ri-plane-fill"></i>
                            </div>
                        </div>
                        <div className="air ">
                            <h3>Sea Freight</h3>
                            <div className="flight">
                                <i className="ri-plane-fill"></i>
                            </div>
                        </div>
                        <div className="air ">
                        <h3>Inland<br/> (Truck & Badge)</h3>
                            <div className="flight">
                                <i className="ri-plane-fill"></i>
                            </div>
                        </div>
                        <div className="air ">
                        <h3>Customs<br />Clearance</h3>
                            <div className="flight">
                                <i className="ri-plane-fill"></i>
                            </div>
                        </div>
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
                            <div className="second-port">
                                <div className="from">
                                    <div>
                                        <i className="ri-map-pin-2-fill"></i>
                                    </div>
                                    <div>
                                        From
                                    </div>

                                </div>
                                <div className="select">
                                    <select>
                                        <option value="" disabled selected>City or Port</option>
                                        <option value="2">Lagos</option>
                                        <option value="3">Abuja</option>
                                        <option value="4">Ibadan</option>
                                    </select>
                                </div>


                            </div>
                            <div className="second-port">
                                <div className="from">
                                    <div>
                                        <i className="ri-map-pin-2-fill"></i>
                                    </div>
                                    <div>
                                        To
                                    </div>

                                </div>
                                <div className="select">
                                    <select>
                                        <option value="" disabled selected>City or Port</option>
                                        <option value="2">Lagos</option>
                                        <option value="3">Abuja</option>
                                        <option value="4">Ibadan</option>
                                    </select>
                                </div>


                            </div>
                        </div>
                        <div className="export">
                            <div className="first-ex">

                                <input type="text" className="content" placeholder="Ready Date"/>
                                <div className="calendar">
                                    <i className="ri-calendar-fill"></i>
                                </div>
                            </div>
                            <div className="first-ex">
                                <select name="" id="">
                                    <option value="" selected disabled>Incoterms</option>
                                    <option value="">Incoterms</option>
                                    <option value="">Incoterms</option>
                                    <option value="">Incoterms</option>
                                </select>
                                <div className="arrow">
                                    <i className="ri-arrow-down-s-fill"></i>
                                </div>
                            </div>
                            <div className="first-ex">
                                <input type="text" className="cargo" placeholder="Total Cargo Value"/>
                            </div>

                        </div>
                    </div>
                </section>
                <section className="service">
                    <div className="danger">
                        <h2>Cargo Details</h2>
                        <div className="chemical">
                            <div className="toggle">
                                {!toggleOn ?  <button className="toggle-one" onClick={turnOn}>
                                    <i className="ri-toggle-line"></i>
                                </button> :  <button className="toggle-two" onClick={turnOn}>
                                    <i className="ri-toggle-fill"></i>
                                </button>}
                               
                            </div>
                            <h3>Dangerous Cargo(ex. Chemicals, Battery)</h3>
                        </div>
                    </div>
                    <div className="total">
                        <div className="package">Total Dimensions</div>
                        <div className="package">Package Details</div>
                    </div>
                    <div className="volume">
                        <div className="cool">
                            <label for="fname" className="activing">Total Volume</label>
                            <input id="fname" type="text" placeholder="cbm" />
                        </div>
                        <div className="cool">
                            <label for="fname" class="activing">Total Weight</label>
                            <input id="fname" type="text" placeholder="kg" />
                        </div>

                    </div>
                </section>
                <section class="service">
                    <h2>Additional Services</h2>
                    <div class="more">
                        <div class="add">
                            <div class="toggle">
                            {!toggleOn ?  <button className="toggle-one" onClick={turnOn}>
                                    <i className="ri-toggle-line"></i>
                                </button> :  <button className="toggle-two" onClick={turnOn}>
                                    <i className="ri-toggle-fill"></i>
                                </button>}
                               
                            </div>
                            <div class="forward">
                                <h3>Export Forwarding</h3>
                                <p>We handle custom clearance and documentation</p>
                            </div>

                        </div>
                        <div class="add">
                            
                            <div class="toggle">
                            {!toggleOn ?  <button className="toggle-one" onClick={turnOn}>
                                    <i className="ri-toggle-line"></i>
                                </button> :  <button className="toggle-two" onClick={turnOn}>
                                    <i className="ri-toggle-fill"></i>
                                </button>}
                              
                            </div>
                            <div class="forward">
                                <h3>Export Forwarding</h3>
                                <p>We handle custom clearance and documentation</p>
                            </div>

                        </div>
                        <div class="add">
                            <div class="toggle">
                            {!toggleOn ?  <button className="toggle-one" onClick={turnOn}>
                                    <i className="ri-toggle-line"></i>
                                </button> :  <button className="toggle-two" onClick={turnOn}>
                                    <i className="ri-toggle-fill"></i>
                                </button>}
                               
                            </div>
                            <div class="forward">
                                <h3>Export Forwarding</h3>
                                <p>We handle custom clearance and documentation</p>
                            </div>

                        </div>
                        <div class="add">
                            <div class="toggle">
                            {!toggleOn ?  <button className="toggle-one" onClick={turnOn}>
                                    <i className="ri-toggle-line"></i>
                                </button> :  <button className="toggle-two" onClick={turnOn}>
                                    <i className="ri-toggle-fill"></i>
                                </button>}
                                
                            </div>
                            <div class="forward">
                                <h3>Export Forwarding</h3>
                                <p>We handle custom clearance and documentation</p>
                            </div>

                        </div>
                    </div>
                </section>
        </section>
    )
   }
   export default Layout
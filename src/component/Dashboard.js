import React from 'react'
import '../App.css'
import setf from '../image/section1.png'

const Dashboard = () => {
    return (
        <main className='parent'>

            {/* Header */}
            <section style={{ background: " linear-gradient(121.16deg, #FCFCFC 18.31%, #EAEFF3 73.06%, #D0E3F1 96.73%)" }}>
                <section className='header'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" style={{ fontWeight: "700" }} href="#">Laundramoon</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ulsa">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">Pricing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Services</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link active" href="#">Business</a>
                                    </li><li className="nav-item">
                                        <a className="nav-link active" href="#">Blog</a>
                                    </li><li className="nav-item">
                                        <a className="nav-link active" href="#">FAQS</a>
                                    </li>

                                </ul>
                                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                                    <button class="btn btn-outline-dark me-md-2" type="button">Login</button>
                                    <button class="btn btn-primary" type="button">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </nav>
                </section>

                {/* <section 1 */}
                <section className='section' >
                    <div className='container-fluid' >
                        <div className='row justify-content-center'>
                            <div style={{ marginTop: "150px", }} className='col-md-6 sectionOne'>
                                <p style={{ fontWeight: "600", fontSize: "30px", lineHeight: "40px" }}>Your professional<br></br> dry clean & laundry <br></br>service</p>
                                <p>we collect, clean & return at the location<br></br> of your choice on time.</p>
                                <button className='btn btn3'>Book Now</button>
                            </div>
                            <div style={{ marginTop: "60px" }} className='col-md-4 imgclass'>
                                <img className='img-fluid ' src={setf} width="400" height="420" />
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            

            {/* section 3 */}
            <section style={{ background: "#00A5BF" }}>
                <div className='container-fluid '   >
                    <div className='row justify-content-center'>
                        <div style={{ color: "white", textAlign: "center"}} className='col-md-12 setiontwo'>

                            <h4>Our Work Process</h4>
                            <p style={{ opacity: "0.5" }}>Mentioned below are our ever-growing list of services. <br></br>All orders come with free delivery</p>
                        </div>
                        {/* <div className='container-fluid setiontwo'  > */}
                        <div className='row justify-content-center ' style={{marginBottom:"150px"}}>
                            <div className='col-md-4 secTwo '>
                                <h1 className='secTwoH'>1</h1>
                                <p>Schedule a pick-up </p>
                                <p className='secTwoP'>Book our service via our app or online and <br></br>choose the items from our price list.</p>

                            </div>
                            <div className='col-md-4 secTwo'>
                                <h1 className='secTwoH'>2</h1>
                                <p>Schedule a pick-up </p>
                                <p className='secTwoP'>Our drivers will meet you at the pickup <br></br>point to collect your laundry bags.</p>
                            </div>
                            <div className='col-md-4 secTwo'>
                                <h1 className='secTwoH'>3</h1>
                                <p>Schedule a pick-up </p>
                                <p className='secTwoP'>Our expert cleaning services assure<br></br> you with spotless and cleaner clothes. </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </section>

            {/* <section 2 */}
            <section className='ddd' >
                <div className='container-fluid  '   >
                    <div className='row justify-content-center'>
                        <div className='col-md-9 col-sm-9 col-9 sect3'>
                            <div className='row justify-content-center' style={{ margin: "30px 10px 30px 10px" }}>
                                <div className='col-md-12 ms-5'>
                                    <p>Schedule your collection in New York City</p>

                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-md-4 setion3'>
                                        <span className='sectP'>Earliest</span>
                                        <h6>12.00-15.00</h6>
                                    </div>
                                    <div className='col-md-4 setion3'>
                                        <span className='sectP'>Last</span>
                                        <h6>12.00-15.00</h6>
                                    </div>
                                    <button className='btn btn4 col-md-3'>Search your slots</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Dashboard

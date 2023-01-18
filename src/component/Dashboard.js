import React from 'react'
import '../App.css'
import setf from '../image/Group 1074.png'
import logo from '../image/Group 1076.png'
import arrow from '../image/Group 1077.png'



const Dashboard = () => {
    return (
        <main className='parent'>

            {/* Header */}
            <section className='mainHeader'>
                <section className='header'>
                    <nav className="navbar navbar-expand-lg bg-body-tertiary">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#" ><img width=" 200px" src={ logo} /></a>
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
                        <div className='row section1'>
                            <div style={{ marginTop: "150px", }} className='col-md-6 sectionOne'>
                                <p className='profess'>Your professional<br></br> dry clean & laundry <br></br>service</p>
                                <p className='clean'>we collect, clean & return at the location<br></br> of your choice on time.</p>
                                <button className='btn btn3'>Book Now</button>
                            </div>
                            <div  className='col-md-4 imgclass'>
                                <img className='section1Img'src={setf}  />
                            </div>
                        </div>
                    </div>
                </section>
            </section>

            {/* section 3 */}
            <section style={{ background: "#00A5BF" }}>
                <div className='container-fluid '   >
                    <div className='row justify-content-center section3'>
                        <div style={{ color: "white", textAlign: "center"}} className='col-md-12 setiontwo'>

                            <h2 style={{fontWeight:"600"}}>Our Work Process</h2>
                            <p className='cleans' >mentioned below are our ever-growing list of services. <br></br>all orders come with free delivery</p>
                        </div>
                        <div className='row justify-content-center' style={{marginBottom:"100px"}}>
                            <div className='col-md-4 secTwo '>
                                <h1 className='secTwoH'>1</h1>
                                <p className='sectionp'>Schedule a pick-up </p>
                                <p className='secTwoP'>Book our service via our app or online and <br></br>choose the items from our price list.</p>

                            </div>
                            <div className='col-md-4 secTwo' style={{paddingLeft:"70px"}}>
                                <h1 className='secTwoH'>2</h1>
                                <p className='sectionp'>Schedule a pick-up </p>
                                <p className='secTwoP'>Our drivers will meet you at the pickup <br></br>point to collect your laundry bags.</p>
                            </div>
                            <div className='col-md-4 secTwo' style={{paddingLeft:"75px"}}>
                                <h1 className='secTwoH'>3</h1>
                                <p className='sectionp'>Schedule a pick-up </p>
                                <p className='secTwoP'>Our expert cleaning services assure<br></br> you with spotless and cleaner clothes. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section 2 */}
            <section className='ddd' >
                <div className='container-fluid  '   >
                    <div className='row justify-content-center'>
                        <div className=' sect3'>
                            <div className='row justify-content-center' style={{ margin: "30px 10px 30px 10px" }}>
                                <div className='col-md-12'>
                                    <span className='Schedule'>Schedule your collection in New York City <img src={ arrow} /></span>
                                </div>
                                <div className='row justify-content-center '>
                                    <div className='col-md-4 setion3'>
                                        <span className='sectP'>Earliest</span>
                                        <p className='data'>12.00-15.00</p>
                                    </div>
                                    <div className='col-md-4 setion3'>
                                        <span className='sectP'>Last</span>
                                        <p className='data'>12.00-15.00</p>
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

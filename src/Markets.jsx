import { useViewportScroll } from "framer-motion";
import React from "react";
import Header from "./components/Header";

function Markets() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  return (
    <>
    <div className="wrapper">
        <div className="mainscreen wow fadeIn" data-wow-duration="2s" style={{backgroundImage: "url(images/market_1_bg.jpg)"}}>
            <div className="contfoescroll">
            <Header offSetY={offSetY} scrollY={scrollY} />
                <div className="firstmain firstmainmarket">
                    <div className="firstmain__scroll wow fadeIn" data-wow-duration="2s">
                        <div className="firstmain__scrolltext">Scroll Down</div>
                        <div className="firstmain__scrollbottom">
                            <img src="images/scroll.png" alt=""/>
                            <span className="green"></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className="containerm">
                        <div className="firstmain__left">
                            <h1 className="firstmain__title wow fadeInUp" data-wow-duration="2s">markerts
                            </h1>
                            <div className="firstmain__descr wow fadeInUp" data-wow-duration="2s" style={{textTransform: "uppercase"}}>
                                <p>A list of exchanges that have Safemoon currently listed.
                                </p>
                            </div>
                            <h2 className="market72 wow fadeInUp" data-wow-duration="2s">BitMart</h2>
                            <div className=" wow fadeInUp" data-wow-duration="2s">
                                <p>The most trusted cryptocurrency trading platform which provides real-time trading services including Bitcoin (BTC), Ethereum (ETH) and Tether (USDT) trading. Safemoon can easily be bought and sold on BitMart using USDT.
                                </p>
                            </div>
                            <div className="firstmain__btn wow fadeInUp" data-wow-duration="2s">
                                <a href="#" className="bluebtn">
                                    <span>Start trading</span>
                                    <img src="images/btn_arrow.png" alt=""/>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footerbg">
            <div className="formmarket secscreenscroll">
                <div className="containerm">
                    <div className="formmarket__inside">
                        <div className="formmarket__form">
                            <div className="formmarket__header wow slideInUp" data-wow-duration="2s">
                                <div className="formmarket__name"> NAME </div>
                                <div className="formmarket__trade">TRADE PAIR</div>
                                <div className="formmarket__listed">LISTED</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo1.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">BitMart</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo2.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">WhiteBit</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo3.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">Gate.IO</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo4.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">Burency</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo1.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">BitMart</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo2.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">WhiteBit</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo3.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">Gate.IO</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo4.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">Burency</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo1.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">BitMart</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo2.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">WhiteBit</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo3.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">Gate.IO</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                            <div className="formmarket__line wow fadeInUp" data-wow-duration="2s" data-wow-delay="0.5s">
                                <div className="formmarket__name">
                                    <div className="formmarket__logo">
                                        <img src="images/logo4.png" alt=""/>
                                    </div>
                                    <div className="formmarket__title">Burency</div>
                                    <div className="formmarket__check">
                                        <img src="images/link.png" alt=""/>
                                    </div>
                                </div>
                                <div className="formmarket__trade">USDT</div>
                                <div className="formmarket__listed">4.5.2021</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer ">
                <div className="containerm">
                    <div className="footer__top wow fadeInUp" data-wow-duration="2s">
                        <div className="footer__left">
                            <div className="footer__title">About us</div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
                        </div>
                        <div className="footer__menu">
                            <div className="footer__title">Social</div>
                            <div className="footer__nav">
                                <ul>
                                    <li>
                                        <a target="_blank" href="#">Facebook</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#">Twitter</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#">Instagram</a>
                                    </li>
                                    <li>
                                        <a target="_blank" href="#">LinkedIn</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="footer__menu">
                            <div className="footer__title">Resources</div>
                            <div className="footer__nav">
                                <ul>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Whitepapers</a>
                                    </li>
                                    <li>
                                        <a href="#">Markets</a>
                                    </li>
                                    <li>
                                        <a href="#">Buy now</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer__copyr wow fadeInUp" data-wow-duration="2s">
                        <div className="footer__copyttext">Copyright © 2021 Safemoon LLC. | All Rights Reserved</div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
    </>
  )
}

export default Markets;
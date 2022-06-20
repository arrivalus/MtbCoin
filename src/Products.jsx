import { useViewportScroll } from "framer-motion";
import React from "react";
import Header from "./components/Header";

function Products() {
  const { scrollY } = useViewportScroll();
  const offSetY = [0, 150];
  return (
    <>
      <div className="wrapper">
        <div
          className="mainscreen mainscreen_product wow fadeIn"
          data-wow-duration="2s"
          style={{ backgroundImage: "url(images/product_1_bg.jpg)" }}
        >
          <div className="contfoescroll">
            <Header offSetY={offSetY} scrollY={scrollY} />
            <div className="firstmain">
              <div
                className="firstmain__scroll wow fadeIn"
                data-wow-duration="2s"
              >
                <div className="firstmain__scrolltext">Scroll Down</div>
                <div className="firstmain__scrollbottom">
                  <img src="images/scroll.png" alt="" />
                  <span className="green"></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className="containerm">
                <div className="firstmain__left">
                  <h1
                    className="firstmain__title wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    mtb coin products
                  </h1>
                  <div
                    className="firstmain__descr wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <p>
                      The most trusted cryptocurrency trading platform which
                      provides real-time trading services including Bitcoin
                      (BTC), Ethereum (ETH) and Tether (USDT) trading. Safemoon
                      can easily be bought and sold on BitMart using USDT.
                    </p>
                  </div>
                  <div
                    className="firstmain__btn wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <a href="#" className="bluebtn">
                      <span>Start trading</span>
                      <img src="images/btn_arrow.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerbg">
          <div className="products secscreenscroll">
            <div className="containerm">
              <div className="products__row">
                <a href="#" className="products__item">
                  <div className="products__name">MTB COIN WALLET</div>
                  <div
                    className="products__img"
                    style={{ backgroundImage: "url(images/prod1.jpg)" }}
                  ></div>
                  <div className="products__descr">
                    A secure place to store and trade your Safemoon. Some
                    features include Simplex integration, dark mode, contacts
                    list, hold to cancel
                  </div>
                  <div className="products__status">
                    Beta is Signup is now Closed
                  </div>
                </a>

                <a href="#" className="products__item">
                  <div className="products__name">Exchange</div>
                  <div
                    className="products__img"
                    style={{ backgroundImage: "url(images/prod2.jpg)" }}
                  ></div>
                  <div className="products__descr">
                    The SafeMoon exchange is a revolutionary new idea that will
                    bring tokenomics to all of crypto on it's platform. We call
                    this Cryptonomics.
                  </div>
                  <div className="products__status">Coming Soon</div>
                </a>

                <a href="#" className="products__item">
                  <div className="products__name">Hardware Wallet</div>
                  <div
                    className="products__img"
                    style={{ backgroundImage: "url(images/prod3.jpg)" }}
                  ></div>
                  <div className="products__descr">
                    The SafeMoon exchange is a revolutionary new idea that will
                    bring tokenomics to all of crypto on it's platform. We call
                    this Cryptonomics.
                  </div>
                  <div className="products__status">Coming Soon</div>
                </a>
              </div>
              <div className="pagination">
                <ul>
                  <li>
                    <a href="#">1</a>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>...</li>

                  <li>
                    <a href="#">9</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <footer className="footer ">
            <div className="containerm">
              <div className="footer__top wow fadeInUp" data-wow-duration="2s">
                <div className="footer__left">
                  <div className="footer__title">About us</div>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard.
                  </p>
                </div>
                <div className="footer__menu">
                  <div className="footer__title">Social</div>
                  <div className="footer__nav">
                    <ul>
                      <li>
                        <a target="_blank" href="#">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          Instagram
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          LinkedIn
                        </a>
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
              <div
                className="footer__copyr wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="footer__copyttext">
                  Copyright © 2021 Safemoon LLC. | All Rights Reserved
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

export default Products;
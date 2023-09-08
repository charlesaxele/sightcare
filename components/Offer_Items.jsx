import React from 'react'
import Countdown from 'react-countdown';
import Link from 'next/link'
const Offer_Items = () => {
  const renderer = ({ minutes, seconds }) => {
      return <span style={{color: "#fff"}}>{minutes}:{seconds}</span>;
}
  return (
    <div>
           <section id="target" className="section__second">
      <div className="container">
        <h2 className="second__title">
          Claim Your Discounted SightCare<span>®</span>
          <br />
          Below While Supplies Last
        </h2>
        <div className="second__timer timer" data-time={1800}>
        <Countdown
    date={Date.now() + 1800000}
    renderer={renderer}
  />

        </div>
      </div>
    </section>
    <section className="section__products">
      <div className="container">
        <div className="prdoucts__cont">
          <div className="product__item side one-bottle">
            <Link
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&amp;aff_id=664942&amp;account_id=7533&amp;product_codename=1_SC1_069&amp;redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvMS8=&amp;aff_id=664942"
              target="_blank"
              className="order-link-1-bottle"
            >
              <div className="">
                <div className="product__top">
                  <span>BASIC</span>
                </div>
                <div className="product__main">
                  <div className="product__mt">
                    <h3 className="product__name">1 BOTTLE</h3>
                    <div className="product__days">30 Day Supply</div>
                    <div className="prodict__img">
                      <img
                        className="lazy"
                        src="/img/content/prod1.png"
                        alt="image for landing page"
                      />
                      <img
                        className="mob lazy"
                        src="/img/content/prod1.png"
                        alt="image for landing page"
                      />
                    </div>
                  </div>
                  <div className="product__mb">
                    <div className="width" />
                    <div className="product__price">
                      69<span> / Bottle</span>
                    </div>
                    <div className="product__shiping">+ $9.99 Shipping</div>
                    <div className="product__button">
                      <span>Add To Cart</span>
                      <span className="pr__icon" />
                    </div>
                    <div className="product__cards">
                      <img
                        className="lazy"
                        src="/img/icons/card_1.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_2.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_3.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_4.png"
                        alt="image for landing page"
                      />
                    </div>
                    <div className="price__real">
                      <span>149.00</span> 78.99
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="product__item main">
            <Link
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&amp;aff_id=664942&amp;account_id=7533&amp;product_codename=1_SC7_294&amp;redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvNi8=&amp;aff_id=664942"
              target="_blank"
              className="order-link-6-bottle"
            >
              <div className="">
                <div className="product__top">
                  <span>MOST POPULAR</span>
                </div>
                <div className="product__main">
                  <div className="product__mt">
                    <h3 className="product__name">6 BOTTLES</h3>
                    <div className="product__days">180 Day Supply</div>
                    <div className="prodict__img">
                      <img
                        className="lazy"
                        src="/img/content/prod3.png"
                        alt="image for landing page"
                      />
                      <img
                        className="mob lazy"
                        src="/img/content/prod3m.png"
                        alt="image for landing page"
                      />
                      <div className="save">
                        <div>
                          SAVE
                          <br />
                          <span>$</span>960
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__mb">
                    <div className="width" />
                    <div className="product__price">
                      49<span> / Bottle</span>
                    </div>
                    <ul className="product__list">
                      <li style={{ backgroundColor: "#d83644" }}>
                        FREE Bonus Bottle!
                      </li>
                      <li style={{ backgroundColor: "#004895" }}>
                        2 FREE Bonus Books!
                      </li>
                      <li style={{ backgroundColor: "#00805d" }}>
                        FREE Fast Shipping!
                      </li>
                    </ul>
                    <div className="product__button">
                      <span>Add To Cart</span>
                      <span className="pr__icon" />
                    </div>
                    <div className="product__cards">
                      <img
                        className="lazy"
                        src="/img/icons/card_12.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_22.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_32.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_42.png"
                        alt="image for landing page"
                      />
                    </div>
                    <div className="price__real">
                      <span>$894.00</span> $294
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="product__item side">
            <Link
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&amp;aff_id=664942&amp;account_id=7533&amp;product_codename=1_SC3_177&amp;redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvMy8=&amp;aff_id=664942"
              target="_blank"
              className="order-link-3-bottle"
            >
              <div className="">
                <div className="product__top">
                  <span>BUNDLE</span>
                </div>
                <div className="product__main">
                  <div className="product__mt">
                    <h3 className="product__name">3 BOTTLES</h3>
                    <div className="product__days">90 Day Supply</div>
                    <div className="prodict__img">
                      <img
                        className="lazy"
                        src="/img/content/prod2.png"
                        alt="image for landing page"
                      />
                      <img
                        className="mob lazy"
                        src="/img/content/prod2m.png"
                        alt="image for landing page"
                      />
                      <div className="save">
                        <div>
                          SAVE
                          <br />
                          <span>$</span>450
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="product__mb">
                    <div className="width" />
                    <div className="product__price">
                      59<span> / Bottle</span>
                    </div>
                    <ul className="product__list">
                      <li style={{ backgroundColor: "#004895" }}>
                        FREE Bonus Book!
                      </li>
                    </ul>
                    <div className="product__button">
                      <span>Add To Cart</span>
                      <span className="pr__icon" />
                    </div>
                    <div className="product__cards">
                      <img
                        className="lazy"
                        src="/img/icons/card_1.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_2.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_3.png"
                        alt="image for landing page"
                      />
                      <img
                        className="lazy"
                        src="/img/icons/card_4.png"
                        alt="image for landing page"
                      />
                    </div>
                    <div className="price__real">
                      <span>$447.00</span> $177
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="products__bottom">
          <h4 className="prodbot__title">Our Customers Say</h4>
          <div className="product__stars">
            <div className="product__starscont">
              <span>
                <img className="lazy" src="/img/icons/star.svg" alt="image for landing page" />
              </span>
              <span>
                <img className="lazy" src="/img/icons/star.svg" alt="image for landing page" />
              </span>
              <span>
                <img className="lazy" src="/img/icons/star.svg" alt="image for landing page" />
              </span>
              <span>
                <img className="lazy" src="/img/icons/star.svg" alt="image for landing page" />
              </span>
              <span>
                <img className="lazy" src="/img/icons/star.svg" alt="image for landing page" />
              </span>
            </div>
            <div className="product__rate">
              <img className="lazy" src="/img/icons/check2.svg" alt="image for landing page" />
              <span>4.91/5</span>
            </div>
          </div>
          <div className="prodbot__text">Based on 79,200+ reviews!</div>
        </div>
      </div>
    </section>
    <div id="steper" />
    <section className="section__money">
      <div className="container">
        <div className="monay__container">
          <div className="money__line" />
          <div className="money__top">
            <span>180</span>
            <img className="lazy" src="/img/content/money.png" alt="image for landing page" />
            <span>DAY</span>
          </div>
          <h2 className="money__second">3X GUARANTEE!</h2>
          <ul className="money__list">
            <li>
              <span>1</span>
              <p>
                <b style={{ color: "#004a99" }}>180-DAY Money Back Guarantee</b>{" "}
                <i>-</i> 100% every penny, no questions asked,
                <br />
                <b>you can even keep the bottles</b> as our “thanks” for giving
                Sightcare a try.
              </p>
            </li>
            <li>
              <span>2</span>
              <p>
                <b style={{ color: "#004a99" }}>Optometrist Guarantee</b>{" "}
                <i>-</i> Use Sightcare every day for 6 full months &amp; if your
                doctor isn’t shocked with your progress, we’ll not only refund
                your money, we’ll also
                <b>BUY you a competitor’s product of your choice!</b> (6 bottle
                purchases only)
              </p>
            </li>
            <li>
              <span>3</span>
              <p>
                <b style={{ color: "#004a99" }}>Give Back Guarantee</b> <i>-</i>{" "}
                With every order, even if it’s refunded, we promise to make a{" "}
                <b>donation to feed a starving</b> child on your behalf. Let’s
                help kids together :)
              </p>
            </li>
          </ul>
        </div>
        <div className="monay__bottom flex">
          <ul className="money__bottomlist flex">
            <li>
              <img className="lazy" src="/img/icons/mon_1.png" alt="image for landing page" />
            </li>
            <li>
              <img className="lazy" src="/img/icons/mon_2.png" alt="image for landing page" />
            </li>
            <li>
              <img className="lazy" src="/img/icons/mon_3.png" alt="image for landing page" />
            </li>
            <li>
              <img className="lazy" src="/img/icons/mon_4.png" alt="image for landing page" />
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Offer_Items
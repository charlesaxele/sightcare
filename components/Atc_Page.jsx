import React from 'react'
import Offer_Items from './Offer_Items'
import Faq from './Faq'
import Countdown from 'react-countdown';
import Link from 'next/link';

const Atc_Page = () => {
  const renderer = ({ minutes, seconds }) => {
    return <span style={{color: "#fff"}}>{minutes}:{seconds}</span>;
}
  return (
    <div>
         <div id="atc-page">
 <Offer_Items/>
    <section className="section__bonuses">
      <div className="container">
        <h2 className="bonuses__title">
          Order <span style={{ color: "#ffe400" }}>6 Bottles</span> or{" "}
          <span style={{ color: "#ffe400" }}>3 Bottles</span>
          <br />
          and{" "}
          <span style={{ textDecoration: "underline" }}>
            Get 2 FREE Bonuses!
          </span>
        </h2>
        <ul className="bonuses__list flex">
          <li className="bonus__item">
            <div className="bonus__main">
              <div className="bonus__img">
                <img
                  className="lazy cover"
                  src="/img/content/bonus_1.jpg"
                  alt="image for landing page"
                />
              </div>
              <div className="bonuses__maininfo">
                <div className="bonus__num">BONUS#1</div>
                <h3 className="bonus__name">The Truth About Vision</h3>
                <div className="bonus__price">
                  Retail: <span>$59.95</span> Today: <b>FREE</b>
                </div>
                <div className="bonys__desc">
                  <p>
                    The Truth About Vision is a step-by-step program showing you
                    how to naturally improve your eyesight in a few short weeks.
                    Inside you’ll find:
                    <br />
                    <br />
                    The true cause of deteriorating eyesight and how to use
                    nutrition to quickly restore perfect 20/20 vision
                    <br />
                    <br />
                    The scientifically proven diet that drastically improve your
                    eyesight without giving up the foods you love, including
                    delicious recipes to accelerate your results.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="bonus__item">
            <div className="bonus__main">
              <div className="bonus__img">
                <img
                  className="lazy cover"
                  src="/img/content/bonus_2.jpg"
                  alt="image for landing page"
                />
              </div>
              <div className="bonuses__maininfo">
                <div className="bonus__num">BONUS#2</div>
                <h3 className="bonus__name">Vision Coach</h3>
                <div className="bonus__price">
                  Retail: <span>$49.95</span> Today: <b>FREE</b>
                </div>
                <div className="bonys__desc">
                  <p>
                    Over the years we’ve found clients we’ve worked with in our
                    office got even better results.
                    <br />
                    <br />
                    We’ve taking the best of our in-person training and made it
                    available online for the very first time.
                    <br />
                    <br />
                    With the vision coach you will receive videos of special eye
                    exercises you can do at home that drastically improve your
                    results with the sightcare program.
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section className="section__recom">
      <div className="container">
        <div className="recom__content flex">
          <div className="recom__left">
            <h2 className="recom__title">
              Order <span>6 Bottles</span> Now
              <br />
              &amp; Get <span>FREE SHIPPING</span> Too!
            </h2>
            <div className="recpm__text">
              *96% Of Customers Order 6 Bottles (<a href="#">Recommended</a>)
            </div>
          </div>
          <div className="recom__right flex">
            <img className="lazy" src="/img/icons/truck2.svg" alt="image for landing page" />
            <div className="recom__timer timer" data-time={1800}>
            <Countdown
    date={Date.now() + 1800000}
    renderer={renderer}
  />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section__qual">
      <div className="container">
        <div className="qual__top">
          <div className="qual__stars flex">
            <span>
              <img className="lazy" src="/img/icons/star2.svg" alt="image for landing page" />
            </span>
            <span>
              <img className="lazy" src="/img/icons/star2.svg" alt="image for landing page" />
            </span>
            <span>
              <img className="lazy" src="/img/icons/star2.svg" alt="image for landing page" />
            </span>
            <span>
              <img className="lazy" src="/img/icons/star2.svg" alt="image for landing page" />
            </span>
            <span>
              <img className="lazy" src="/img/icons/star2.svg" alt="image for landing page" />
            </span>
          </div>
          <h2 className="qual__title">100% Quality Assurance</h2>
        </div>
        <div className="qual__text">
          <p>
            Sightcare is manufactured to standards above and beyond what is
            required by the FDA and Good Manufacturing Standards. We 3rd-party
            test every batch to make sure you get only the highest quality
            product possible. Our name is on the line and we stand by every
            bottle of Sightcare we sell.
          </p>
        </div>
        <ul className="qual__images flex">
          <li>
            <img className="lazy" src="/img/content/qual1.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qual2.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qual3.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qual0.png" alt="image for landing page" />
          </li>
        </ul>
        <ul className="qual__icons flex">
          <li>
            <img className="lazy" src="/img/content/qualicon_1.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qualicon_2.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qualicon_3.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qualicon_4.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qualicon_5.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qualicon_6.png" alt="image for landing page" />
          </li>
          <li>
            <img className="lazy" src="/img/content/qualicon_7.png" alt="image for landing page" />
          </li>
        </ul>
        <Link target='_blank' href="https://getsightcarefast.net/video/?aff_id=664942">
        <div className="qual__btn">
          <span>YES! </span>I’m Ready To Try Sightcare
        </div>
        </Link>
      </div>
    </section>
    <section className="section__reviews">
      <div className="container">
        <h2 className="reviews__title">
          Real Sightcare<b>®</b> Users.
          <br />
          <span>Life Changing Results.</span>
        </h2>
        <div className="photos__cont flex">
          <img className="lazy" src="/img/photos1.jpg" alt="image for landing page" />
          <img className="mob lazy" src="/img/photosm1.jpg" alt="image for landing page" />
        </div>
        <ul className="reviews__list">
          <li className="review__item flex">
            <div className="review__ava">
              <img className="lazy cover" src="/img/review1.jpg" alt="image for landing page" />
            </div>
            <div className="reviews__main">
              <div className="review__name"></div>
              <div className="review__middle flex">
                <div className="review__stars flex">
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                </div>
                <div className="stars__text flex">5 Stars</div>
                <div className="review__verify">
                  <span>
                    <img
                      className="lazy"
                      src="/img/icons/check2.svg"
                      alt="image for landing page"
                    />
                  </span>
                  Verified Purchase (6 Bottles)
                </div>
              </div>
            </div>
            <div className="review__main">
              <div className="review__text">
                <div className="review__name"></div>
                <p>
                  I could barely see 6 months ago...things improved and improved
                  until I can proudly say I now have almost 20/20 vision.
                </p>
              </div>
              <div className="review__bottom">
                <b>John B. Thomas</b> - Fort Gibson, OK
              </div>
            </div>
          </li>
          <li className="review__item flex">
            <div className="review__ava">
              <img className="lazy cover" src="/img/review2.jpg" alt="image for landing page" />
            </div>
            <div className="reviews__main">
              <div className="review__name"></div>
              <div className="review__middle flex">
                <div className="review__stars flex">
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                </div>
                <div className="stars__text flex">5 Stars</div>
                <div className="review__verify">
                  <span>
                    <img
                      className="lazy"
                      src="/img/icons/check2.svg"
                      alt="image for landing page"
                    />
                  </span>
                  Verified Purchase (6 Bottles)
                </div>
              </div>
            </div>
            <div className="review__main">
              <div className="review__text">
                <div className="review__name"></div>
                <p>
                  I was always losing my glasses or breaking them. After taking
                  SightCare for short time, I was finally able to go to the
                  grocery store without them
                </p>
              </div>
              <div className="review__bottom">
                <b>Marla Holloway</b> - Lubbock, TX
              </div>
            </div>
          </li>
          <li className="review__item flex">
            <div className="review__ava">
              <img className="lazy cover" src="/img/review3.jpg" alt="image for landing page" />
            </div>
            <div className="reviews__main">
              <div className="review__name"></div>
              <div className="review__middle flex">
                <div className="review__stars flex">
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                  <span>
                    <img className="lazy" src="/img/icons/star.png" alt="image for landing page" />
                  </span>
                </div>
                <div className="stars__text flex">5 Stars</div>
                <div className="review__verify">
                  <span>
                    <img
                      className="lazy"
                      src="/img/icons/check2.svg"
                      alt="image for landing page"
                    />
                  </span>
                  Verified Purchase (6 Bottles)
                </div>
              </div>
            </div>
            <div className="review__main">
              <div className="review__text">
                <div className="review__name"></div>
                <p>
                  Thank God my doctor had heard of SightCare. I took it
                  religiously. Now I can proudly say my vision is completely
                  restored
                </p>
              </div>
              <div className="review__bottom">
                <b>Greg Stevenson</b> - Altoona, PA
              </div>
            </div>
          </li>
        </ul>
        <div className="photos__cont photos__bottom flex">
          <img className="lazy" src="/img/photos2.jpg" alt="image for landing page" />
          <img className="mob lazy" src="/img/photosm2.jpg" alt="image for landing page" />
        </div>
      </div>
    </section>
    {/* <section className="section__second notOnMob">
      <div className="container">
        <h2 className="second__title">
          Claim Your Discounted SightCare<span>®</span>
          <br />
          Below While Supplies Last
        </h2>
        <div className="second__timer timer" data-time={1800}>
          13:33
        </div>
      </div>
    </section>
    <section className="section__products notOnMob">
      <div className="container">
        <div className="prdoucts__cont">
          <div className="product__item side one-bottle">
            <a
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&aff_id=664942&account_id=7533&product_codename=1_SC1_069&redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvMS8=&aff_id=664942"
              target="_blank"
              className="order-link-1-bottle"
            >
              <div>
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
            </a>
          </div>
          <div className="product__item main">
            <a
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&aff_id=664942&account_id=7533&product_codename=1_SC7_294&redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvNi8=&aff_id=664942"
              target="_blank"
              className="order-link-6-bottle"
            >
              <div>
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
            </a>
          </div>
          <div className="product__item side">
            <a
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&aff_id=664942&account_id=7533&product_codename=1_SC3_177&redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvMy8=&aff_id=664942"
              target="_blank"
              className="order-link-3-bottle"
            >
              <div>
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
            </a>
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
    <section className="section__money notOnMob">
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
    </section> */}
  <Faq/>
    {/* <section className="section__second notOnMob">
      <div className="container">
        <h2 className="second__title">
          Claim Your Discounted SightCare
          <br />
          Below While Supplies Last
        </h2>
        <div className="second__timer timer" data-time={1800}>
          13:33
        </div>
      </div>
    </section>
    <section className="section__products notOnMob">
      <div className="container">
        <div className="prdoucts__cont">
          <div className="product__item side one-bottle">
            <a
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&aff_id=664942&account_id=7533&product_codename=1_SC1_069&redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvMS8=&aff_id=664942"
              target="_blank"
              className="order-link-1-bottle"
            >
              <div>
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
            </a>
          </div>
          <div className="product__item main">
            <a
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&aff_id=664942&account_id=7533&product_codename=1_SC7_294&redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvNi8=&aff_id=664942"
              target="_blank"
              className="order-link-6-bottle"
            >
              <div>
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
            </a>
          </div>
          <div className="product__item side">
            <a
              href="https://buygoods.com/secure/checkout.html?sessid2=sessid20230907052935697&aff_id=664942&account_id=7533&product_codename=1_SC3_177&redirect=aHR0cHM6Ly9nZXRzaWdodGNhcmVmYXN0Lm5ldC9vcHRpb25zLzEvMy8=&aff_id=664942"
              target="_blank"
              className="order-link-3-bottle"
            >
              <div>
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
            </a>
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
    </section> */}
  
  </div>
    </div>
  )
}

export default Atc_Page

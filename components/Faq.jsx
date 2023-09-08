import React,{useState} from 'react'


const Faq = () => {
    const [open, setOpen] = useState(0)
    const toggle = (index) => {
        if(open === index){
            setOpen(0)
        }else{
            setOpen(index)
        }
    }
  return (
    <div>
          <section className="section__faq">
      <div className="container">
        <h2 className="faq__title">Frequently Asked Questions</h2>
        <div className="faq__cont">
          <ul className="faq__list">
            <li className="faq__item">
              <div className={`faq__ctrl flex ${open==1?"opened":""}`}onClick={()=>{toggle(1)}}>
                <span>Is Sightcare Right For Me?</span>
              </div>
              <div className="faq__answer" style={{height:open==1?"max-content":0}}>
                <div className="faq__ansinner">
                  If you have any type of vision problems or your vision is
                  getting worse, then Sightcare is for you. Sightcare is
                  designed to rapidly improve your eyesight even in the worst
                  cases and has changed the lives of thousands of men and women
                  aged 18 to 95.
                </div>
              </div>
            </li>
            <li className="faq__item">
            <div className={`faq__ctrl flex ${open==2?"opened":""}`}onClick={()=>{toggle(2)}}>

                <span>Is Sightcare Safe?</span>
              </div>
              <div className="faq__answer" style={{height:open==2?"max-content":0}}>
                <div className="faq__ansinner">
                  Sightcare is a proprietary, natural formula manufactured in
                  the USA at our FDA registered and GMP certified facility. We
                  only use state of the art, precision engineered machinery
                  under the strictest manufacturing standards.
                  <br />
                  <br />
                  Each ingredient is tested and free of contaminates, it&apos;s 100%
                  plant-based and always Non-GMO. We also conduct third-party
                  inspection and quality control to ensure high purity and
                  potency. We always advise you ask your doctor before taking
                  anything, just to be safer.
                </div>
              </div>
            </li>
            <li className="faq__item">
            <div className={`faq__ctrl flex ${open==3?"opened":""}`}onClick={()=>{toggle(3)}}>

                <span>How Many Bottles Should I Order?</span>
              </div>
              <div className="faq__answer" style={{height:open==3?"max-content":0}}>

                <div className="faq__ansinner">
                  We recommend taking Sightcare for at least 3 to 6 months to
                  improve your vision and lock in perfect eyesight for years to
                  come. We offer a 6-bottle package that comes with 2 free bonus
                  books and a 7th free bottle. This is the most popular package,
                  which also comes with free shipping.
                </div>
              </div>
            </li>
            <li className="faq__item">
            <div className={`faq__ctrl flex ${open==4?"opened":""}`}onClick={()=>{toggle(4)}}>

                <span>What&apos;s in a bottle of SightCare?</span>
              </div>
              <div className="faq__answer" style={{height:open==4?"max-content":0}}>

                <div className="faq__ansinner">
                  Here&apos;s a copy of our label.
                  <br />
                  <br />
                  <img src="/img/supplementFacts.png" />
                </div>
              </div>
            </li>
            <li className="faq__item">
            <div className={`faq__ctrl flex ${open==5?"opened":""}`}onClick={()=>{toggle(5)}}>

                <span>What&apos;s The Best Way To Take Sightcare?</span>
              </div>
              <div className="faq__answer" style={{height:open==5?"max-content":0}}>

                <div className="faq__ansinner">
                  Take 2 capsules with a big glass of cold water once a day,
                  preferably on an empty stomach to improve absorption. The
                  proprietary blend of natural ingredients work quickly to
                  improve your vision.
                </div>
              </div>
            </li>
            <li className="faq__item">
            <div className={`faq__ctrl flex ${open==6?"opened":""}`}onClick={()=>{toggle(6)}}>

                <span>Is This A One Time Payment?</span>
              </div>
              <div className="faq__answer" style={{height:open==6?"max-content":0}}>

                <div className="faq__ansinner">
                  Yes, your order today is a one-time payment with no auto-ship,
                  subscriptions, or hidden charges.
                </div>
              </div>
            </li>
            <li className="faq__item">
            <div className={`faq__ctrl flex ${open==7?"opened":""}`}onClick={()=>{toggle(7)}}>

                <span>What If Sightcare Doesn&apos;t Work For Me?</span>
              </div>
              <div className="faq__answer" style={{height:open==7?"max-content":0}}>

                <div className="faq__ansinner">
                  Every single bottle of Sightcare comes with our personal,
                  180-day, 100% money-back guarantee! If for any reason you&apos;re
                  unsatisfied with your results, just return all the bottles
                  (even if empty) for a full, no questions asked refund.
                </div>
              </div>
            </li>
            <li className="faq__item">
            <div className={`faq__ctrl flex ${open==8?"opened":""}`}onClick={()=>{toggle(8)}}>

                <span>What Do I Do Now?</span>
              </div>
              <div className="faq__answer" style={{height:open==8?"max-content":0}}>
                <div className="faq__ansinner">
                  Click on one of the package options below, enter your order
                  details on our secure checkout page, and we&apos;ll ship your
                  Sightcare to you right away. Remember, when you order our
                  6-bottle package, you&apos;ll get 2 free bonus books, a free extra
                  bottle, and free shipping as well.
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Faq
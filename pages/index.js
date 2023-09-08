import React from 'react'
import Link from 'next/link'
import Atc_Page from '@/components/Atc_Page'
import Countdown from 'react-countdown';
import Head from 'next/head';

const Home = () => {
  const renderer = ({ minutes, seconds }) => {
    return <span style={{color: "#fff"}}>{minutes}:{seconds}</span>;
}
  return (
    <div>
      <Head>
            <title>
            SightCare 
            </title>
            <meta name="description" content="Blind Eye Specialist Reveals The Nobel Prize Winning Breakthrough To Perfect 20/20 Vision " />
            <meta name='keywords' content="Best Medicine, best eye medicine,nobel prize winner medicine" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="revisit-after" content="1 days" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
      <Atc_Page />
<Link target='_blank' href="https://getsightcarefast.net/video/?aff_id=664942"><div class="remainder showed">
<div class="remainder__top flex">
<div class="remainder__text">
Get FREE Shipping
</div>
<div class="reminder__timer timer" data-time="1800"> <Countdown
    date={Date.now() + 1800000}
    renderer={renderer}
  /></div>
</div>
<div class="remider__button">
<span><b>YES!</b> I Want Sightcare</span>
</div>
</div></Link>   
    </div>
  )
}

export default Home

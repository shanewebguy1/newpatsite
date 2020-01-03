import React from "react"
import PrimaryLayout from "../layouts/PrimaryLayout"
import HomeMainBanner from "../components/index/HomeMainBanner";
import FirstRow from "../components/index/FirstRow";
import SecondRow from "../components/index/SecondRow";
import ThirdRow from "../components/index/ThirdRow";

const IndexPage = () => (
  <PrimaryLayout>
     <HomeMainBanner />
     <FirstRow />
     <SecondRow />
     <ThirdRow />
  </PrimaryLayout>
)

export default IndexPage
import Header1Layout from "@/ui/layouts/Header1Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import styles from "./page.module.css"
import TextCard5Layout from "@/ui/layouts/TextCard5Layout";
import TeamMemberLayout from "@/ui/layouts/TeamMemberLayout";
import founder from "./../../../public/images/founder.jpg"
import father from "./../../../public/images/father.jpeg"
import CTA1Layout from "@/ui/layouts/CTA1Layout";
import TextCard2Layout from "@/ui/layouts/TextCard2Layout";

export default function AboutUs() {
    return (
        <>
            <Header1Layout colorScheme={"colorScheme3"}
                           smallText={"ABOUT KINESIS"}
                           headingText={"A movement to unite India's innovators, industries & academia."}
                           bodyText={"Kinesis is a pioneering initiative aimed at uniting Indian industries and enabling small OEMs to make their mark in both national and international markets. Our platform is enriched by leading technical and operational specialists from industry, academia, the military, and public administration — and by senior former diplomats who open global doors."}/>

            {/*MISSION AND VISION*/}
            <div className={`paddedContainer colorScheme1`} id={"missionAndVision"}>
                <div className={`maxWidthContainer ${styles.missionAndVision}`}>
                    <TextCard2Layout headingText={"Our Mission"}
                                     bodyText={"Consolidating the efforts of Indian industrialists — with a special focus on small enterprises and OEMs — to foster collaboration and innovative development in a spirit of industrial patriotism that drives growth, self-reliance, and pride in our country's industrial heritage."}
                                     colorScheme={"colorScheme1"}
                                     lineColor={"saffron"}
                                     addedStyles={styles.missionVisionCard}
                    />

                    <TextCard2Layout headingText={"Our Vision"}
                                     bodyText={"To create a transformative platform that connects Indian OEMs and startups with domestic and international markets, fostering innovation and collaboration — and making India completely self-reliant in its industrial supply chain."}
                                     colorScheme={"colorScheme1"}
                                     lineColor={"blue"}
                                     addedStyles={styles.missionVisionCard}
                    />
                </div>
            </div>

            {/*INDUSTRIAL NATIONALISM*/}
            <div className={`paddedContainer colorScheme3`} id={"industrialNationalism"}>
                <div className={`maxWidthContainer ${styles.flex}`}>
                    <TextCard5Layout headingText={"Industrial Nationalism"}
                                     bodyText={"A concept that embodies our dream of uniting India's innovators, industries and academia to build a modern, self-reliant India — not just a philosophy, but a movement we aspire to ignite across the nation."}
                                     colorScheme={"colorScheme3"} version={"saffron"} smallText={"OUR MOTTO"}/>

                    <p className={`regularNormal`}>
                        The journey towards becoming a developed nation is inherently tied to advancements in industry
                        and technology. At Kinesis, we firmly believe the road to global leadership begins with
                        achieving <span className={`${styles.bold}`}>technological self-reliance</span> — a vision
                        realised only by fostering and nurturing
                        homegrown innovation.
                        <br/>
                        <br/>
                        Innovation thrives within smaller organisations and startups — often the birthplace of
                        groundbreaking technologies. For these innovations to reach their potential, larger
                        corporations, academia and other stakeholders must step in with mentorship, partnerships and
                        opportunities.
                        <br/>
                        <br/>
                        Indian companies must prioritise partnerships <span className={`${styles.bold}`}>within the nation.</span> International
                        collaborations,
                        while valuable, should primarily serve strategic purposes or facilitate exports — keeping the
                        foundation of India's industrial ecosystem firmly rooted in indigenous excellence.
                    </p>

                    <div className={`${styles.highlightBox} colorScheme3`}>
                        <p>
                            <span className={`boldNormal`}>
                                "The term was coined by my father — a vision we are committed to transforming into a
                                national movement."
                            </span>

                            <br/>

                            <br/>

                            <span className={`lightNormal`}>
                                — Mayank Sharma, Kinesis IT Solution · <span
                                className={`boldNormal ${styles.highlightText}`}>जय हिन्द</span>
                            </span>
                        </p>
                    </div>

                </div>
            </div>

            {/*WHAT WE BELIEVE IN*/}
            <div className={`paddedContainer colorScheme2`} id={"compnayOverview"}>

                <div className={`maxWidthContainer ${styles.flex}`}>
                    <TextCard5Layout headingText={"Supporting small, talented entrepreneurs."} bodyText={""}
                                     colorScheme={"colorScheme2"}
                                     smallText={"WHAT WE BELIEVE IN"} version={"green"}/>

                    <div className={`${styles.flex}`}>
                        <TextCard1Layout headingText={"Homegrown innovation"}
                                         bodyText={"Groundbreaking technology is born in startups and small organisations — we help it scale."}
                                         colorScheme={"colorScheme2"} lineColor={"saffron"}
                                         backgroundColor={"foreground"}/>

                        <TextCard1Layout headingText={"Partnerships within India"}
                                         bodyText={"Synergy between Indian companies drives collective, self-reliant growth."}
                                         colorScheme={"colorScheme2"} lineColor={"green"}
                                         backgroundColor={"foreground"}/>

                        <TextCard1Layout lineColor={"blue"} backgroundColor={"foreground"}
                                         headingText={"Exports, not dependence"}
                                         bodyText={"International collaboration serves strategy and exports — never dependence."}
                                         colorScheme={"colorScheme2"}/>

                    </div>
                </div>
            </div>

            {/*OUR TEAM*/}
            <div className={`paddedContainer colorScheme1`} id={"ourTeam"}>
                <div className={`maxWidthContainer ${styles.flex}`}>
                    <TextCard5Layout smallText={"OUR TEAM"} headingText={"The people behind Kinesis."}
                                     bodyText={"A compact team combining entrepreneurial leadership with decades of hands-on expertise across defence, sustainable energy and communications — each member leading the practice they know best."}
                                     colorScheme={"colorScheme2"} version={"green"}/>

                    <div className={`flex`}>
                        <TeamMemberLayout teamMemberName={"Mayank Sharma"} teamMemberDesignation={"Founder & CEO"}
                                          teamMemberImage={founder}
                                          colorScheme={"colorScheme1"}
                                          bulletPoints={[`B.Tech in Electronics & Communications Engineering; MSc in Sports Industry Management, emlyon Business School`, `Delivered venue management and event consultancy for the Gujarat Cricket Association`, `Co-founded MyPicBook LLP and led IT project management across the tech sector`, `Former President of BloodConnect Foundation, driving community-first initiatives`, `Now building a start-up in hydrogen generation and carbon capture technology`]}
                                          version={"saffron"} addedStyle={`${styles.flexMinWidth}`}/>

                        <TeamMemberLayout teamMemberName={"Anubhav Kant Sharma"}
                                          teamMemberDesignation={"UAV & UCAV Advisor"}
                                          teamMemberImage={founder}
                                          colorScheme={"colorScheme1"}
                                          bulletPoints={[`10 years of experience in unmanned aerial and combat aerial vehicle systems`, `Background in systems integration, autonomous flight control and mission planning`, `Worked across the defence and aerospace sector at companies including Boeing and HAL`, `Advised on the LCA Tejas programme`, `Leads Kinesis's UAV/UCAV consultation practice`]}
                                          version={"blue"} addedStyle={`${styles.flexMinWidth}`}/>

                        <TeamMemberLayout teamMemberName={"Parag Aggarwal"}
                                          teamMemberDesignation={"Waste to Energy Advisor"}
                                          teamMemberImage={founder}
                                          colorScheme={"colorScheme1"}
                                          bulletPoints={[`15 years of experience in sustainable energy and waste management`, `Expertise in anaerobic digestion, thermal conversion and circular economy frameworks`, `Contributed to NITI Aayog's E20 initiative`, `Advises Kinesis on environmentally responsible, commercially viable energy solutions`]}
                                          version={"green"} addedStyle={`${styles.flexMinWidth}`}/>

                        <TeamMemberLayout teamMemberName={"Sachin Gupta"}
                                          teamMemberDesignation={"Communication Solutions Advisor"}
                                          teamMemberImage={founder}
                                          colorScheme={"colorScheme1"}
                                          bulletPoints={[`20 years of experience in communications and connectivity`, `Expertise in telecom infrastructure and secure networks`, `Held senior roles at Airtel and Tata Docomo`, `Instrumental in Airtel's 5G roll-out`, `Helps Kinesis clients build resilient, future-ready communication systems`]}
                                          version={"saffron"} addedStyle={`${styles.flexMinWidth}`}/>

                        <TeamMemberLayout teamMemberName={"Manoj Kumar"}
                                          teamMemberDesignation={"ADVISOR"}
                                          teamMemberImage={father}
                                          colorScheme={"colorScheme1"}
                                          bulletPoints={[`Grew unit turnover and profit by 400% as factory head`, `Runner-up, Unit Head of the Year (All India)`, `Headed BEL's national and international marketing`, `Grew Naval orders tenfold; led ₹10,000+ Cr negotiations`, `Represented MoD delegation at Tokyo expo`, `B.E., NIT Karnataka`]}
                                          version={"blue"} addedStyle={`${styles.flexMinWidth}`}/>
                    </div>
                </div>
            </div>

            <CTA1Layout colorScheme={"colorScheme3"} headingText={"Join the movement for a self-reliant India."}
                        bodyText={""}/>
        </>
    )
}
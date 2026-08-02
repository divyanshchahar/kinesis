"use client"

import styles from "./page.module.css"
import CTAButton from "@/ui/componenets/CTAButton";
import TextCard5Layout from "@/ui/layouts/TextCard5Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import Link from "next/link";
import NormalButtonComponent from "@/ui/componenets/NormalButtonComponent";
import TextCard3Layout from "@/ui/layouts/TextCard3Layout";
import CTA1Layout from "@/ui/layouts/CTA1Layout";
import exportMap from "./../../public/export_map.svg"
import Image from "next/image";
import RegionCardLayout from "@/ui/layouts/RegionCardLayout";
import TickerCardLayout from "@/ui/layouts/TickerCardLayout";
import airForce from "./../../public/icons/indian_air_force.png"
import bel from "./../../public/icons/bel.png"
import bharatDynamics from "./../../public/icons/bharat dynamics limited.png"
import engineeringProjects from "./../../public/icons/indian navy.png"
import ministry from "./../../public/icons/ministry of new and renewable enrgy.svg"
import {useRouter} from "next/navigation";
import internalLinks from "./../const/internalRoutes.json"

export default function Home() {

    const router = useRouter();

    return (
        <>
            <div className={`${styles.heroImage}`}>
                <div className={`colorScheme3 ${styles.heroBackground} paddedContainer`}>
                    <div className={`maxWidthContainer ${styles.heroSection}`}>
                        <div className={`${styles.heroSection} ${styles.max60chContainer}`}>
                            <div className={`${styles.capsule} lightNormal`}>
                                Industrial Nationalism · Made in India
                            </div>

                            <p className={`h1`}>Building a self-reliant industrial India.</p>

                            <p className={`regularNormal`}>
                                Kinesis unites Indian industrialists — with a special focus on small enterprises and
                                OEMs —
                                to
                                foster
                                collaboration, indigenous innovation, and pride in our nation's industrial heritage.
                            </p>
                        </div>

                        <div className={styles.buttonCarrier}>
                            <CTAButton version={"large"} ctaText={"Explore Our Solutions"}
                                       addedStyle={`${styles.fitContent}`} clickHandler={() => {
                                router.push(internalLinks.products.root)
                            }}/>

                            <button className={`${styles.translucentButton} regularNormal ${styles.fitContent}`}
                                    onClick={() => {
                                        router.push(internalLinks.contactus)
                                    }}>Partner
                                with Us
                            </button>
                        </div>

                        <div className={`${styles.stats}`}>
                            <div className={`${styles.attributes}`}>
                                <p className={`${styles.saffron} h3`}>30 +</p>
                                <p className={`regularNormal`}>Countries served by our tech</p>
                            </div>

                            <div className={`${styles.attributes}`}>
                                <p className={`${styles.saffron} h3`}>7</p>
                                <p className={`regularNormal`}>National Institutes Served</p>
                            </div>

                            <div className={`${styles.attributes}`}>
                                <p className={`${styles.saffron} h3`}>100%</p>
                                <p className={`regularNormal`}>Indigenously Developed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <TickerCardLayout colorScheme={`colorScheme3`}
                              clients={
                                  [
                                      {
                                          clientName: "Bharat Electronics Limited",
                                          clientImage: bel
                                      }, {
                                      clientName: "Indian Air Force",
                                      clientImage: airForce
                                  }, {
                                      clientName: "Ministry of New and Renewable Energy",
                                      clientImage: ministry
                                  }, {
                                      clientName: "Bharat Dynamics",
                                      clientImage: bharatDynamics
                                  }, {
                                      clientName: "Engineering Projects India Limited",
                                      clientImage: engineeringProjects
                                  }
                                  ]
                              } / >

                < div className={`paddedContainer colorScheme1`}>
                    <div className={`maxWidthContainer ${styles.flex2}`}>

                        <TextCard5Layout smallText={"WHAT WE DO"}
                                         headingText={"A platform that connects Indian innovators to real markets."}
                                         bodyText={"We provide expert strategic consulting for successful product launches — backed by specialists from industry, academia, the military, and public administration, plus a network of senior former diplomats for global reach."}
                                         colorScheme={"colorScheme1"}
                                         version={"green"}/>

                        <div className={`${styles.flex1}`}>
                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"background"}
                                             headingText={"Unite Indian OEMs"}
                                             bodyText={"Enabling small OEMs and startups to make their mark in both national and international markets."}
                                             colorScheme={"colorScheme1"} addedStyles={styles.item4Width}/>

                            <TextCard1Layout lineColor={"green"} backgroundColor={"background"}
                                             headingText={"Strategic consulting"}
                                             bodyText={"Expert guidance tailored for successful product launches and effective marketing campaigns."}
                                             colorScheme={"colorScheme1"} addedStyles={styles.item4Width}/>

                            <TextCard1Layout lineColor={"blue"} backgroundColor={"background"}
                                             headingText={"Cross-sector expertise"}
                                             bodyText={"Specialists from industry, academia, the military and public administration under one roof."}
                                             colorScheme={"colorScheme1"} addedStyles={styles.item4Width}/>

                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"background"}
                                             headingText={"Global connections"}
                                             bodyText={"Senior former diplomats and international marketing agencies opening doors worldwide."}
                                             colorScheme={"colorScheme1"} addedStyles={styles.item4Width}/>
                        </div>

                    </div>
                </div>

                <div className={`paddedContainer colorScheme3`}>
                    <div className={`maxWidthContainer ${styles.flex1}`}>
                        <div className={`${styles.fullFlex}`}>
                            <TextCard5Layout version={"saffron"}
                                             smallText={"OUR MOTTO"}
                                             headingText={"Industrial Nationalism"}
                                             bodyText={"The road to global leadership begins with technological self-reliance. Indian companies must prioritise partnerships within the nation, using international collaboration mainly for strategy and exports — keeping the foundation of India's industrial ecosystem rooted in indigenous excellence."}
                                             colorScheme={"colorScheme3"}/>

                            <Link href={""} className={`boldNormal ${styles.saffron}`}>Read Our Story →</Link>
                        </div>

                        <div className={`${styles.fullFlex}`}>
                            <div className={`colorScheme3 ${styles.textBox}`}>
                                <p className={`boldNormal`}>"A movement to unite India's innovators, industries, and
                                    academia to build a modern, self-reliant India."</p>

                                <p className={"lightNormal"}>— The Kinesis vision · <span
                                    className={`${styles.saffron}`}>जय हिन्द</span></p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className={`paddedContainer colorScheme2`}>
                    <div className={`maxWidthContainer ${styles.flex2}`}>

                        <div className={`${styles.flex1} ${styles.ourSolutiofns}`}>
                            <TextCard5Layout smallText={"OUR SOLUTIONS"}
                                             headingText={"Indigenous technology across sustainability, defence & communication."}
                                             bodyText={""}
                                             colorScheme={"colorScheme2"} version={"green"}/>

                            <NormalButtonComponent buttonText={"View all products"} colorScheme={"colorScheme2"}
                                                   addedStyle={styles.fitContent}/>
                        </div>

                        <div className={`${styles.flex1}`}>
                            <Link href={internalLinks.products.hybridPowerPlant}>

                                <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Hybrid Power Plants"}
                                                 bodyText={"Indigenous Solar + Wind hybrid, modular from 0.5kW to megawatts, deployed in 30+ countries."}
                                                 colorScheme={"colorScheme2"} addedStyle={styles.item4Width}/>
                            </Link>

                            <Link href={internalLinks.products.carbonCapture}>
                                <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Carbon Capture"}
                                                 bodyText={"Electro-catalytic chamber that turns CO₂ into pure oxygen and high-value graphene."}
                                                 colorScheme={"colorScheme2"} addedStyle={styles.item4Width}/>
                            </Link>

                            <Link href={internalLinks.products.ambientAirPurification}>
                                <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Ambient Air Purification"}
                                                 bodyText={"Waterless, filterless IIT Delhi tech — proven 25–40% AQI improvement in Delhi."}
                                                 colorScheme={"colorScheme2"} addedStyle={styles.item4Width}/>
                            </Link>

                            <Link href={internalLinks.products.wasteToHydrogen}>
                                <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Waste to Hydrogen"}
                                                 bodyText={"Converts waste into clean hydrogen, metal carbonates and activated charcoal."}
                                                 colorScheme={"colorScheme2"} addedStyle={styles.item4Width}/>
                            </Link>

                            <Link href={internalLinks.products.hybridPowerPlant}>
                                <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Hybrid Power Plants"}
                                                 bodyText={"Indigenous Solar + Wind hybrid, modular from 0.5kW to megawatts, deployed in 30+ countries."}
                                                 colorScheme={"colorScheme2"} addedStyle={styles.item4Width}/>
                            </Link>

                            <Link href={internalLinks.products.plastictoDiesel}>
                                <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Plastic to Diesel"}
                                                 bodyText={"Pyrolysis reactor producing certified ULSD — India’s first policy-recognised solution."}
                                                 colorScheme={"colorScheme2"}
                                                 addedStyle={styles.item4Width}/>
                            </Link>

                            <Link href={internalLinks.products.uavAndUcav}>
                                <TextCard3Layout smallText={"DEFENCE"} headingText={"UAV & UCAV"}
                                                 bodyText={"Indigenous unmanned aerial and combat platforms for surveillance and defence."}
                                                 colorScheme={"colorScheme2"}
                                                 addedStyle={styles.item4Width}/>
                            </Link>

                            <Link href={internalLinks.products.private5g}>
                                <TextCard3Layout smallText={"COMMUNICATION"} headingText={"Private 5G Networks"}
                                                 bodyText={"Portable, plug-and-play private 5G — 10km reach, sub-10ms latency, off-grid ready."}
                                                 colorScheme={"colorScheme2"}
                                                 addedStyle={styles.item4Width}/>
                            </Link>
                        </div>
                    </div>
                </div>

                {/*GLOBAL REACH*/
                }

                <div className={`paddedContainer colorScheme1`}>
                    <div className={`maxWidthContainer`}>
                        <TextCard5Layout smallText={"GLOBAL REACH"}
                                         headingText={"Export access across three regions.\n"}
                                         bodyText={"Indigenous excellence at home, strategic collaboration abroad — our export network spans Central America, the Middle East, and South East Asia."}
                                         colorScheme={"colorScheme1"} version={"green"}/>

                        <Image src={exportMap} alt={"export map pf the world"} width={1000} height={507}
                               className={styles.exportMap}/>

                        <div className={`${styles.responsiveFlex}`}>

                            <RegionCardLayout colorScheme={"colorScheme1"} region={"Middle East"}
                                              countries={["Guatemala", "El Salvador", "Honduras", "Belize"]}
                                              version={"saffron"} addedStyle={styles.flex3}/>

                            <RegionCardLayout colorScheme={"colorScheme1"} region={"Central America"}
                                              countries={["Guatemala", "El Salvador", "Honduras", "United Arab Emirates", "Somalia"]}
                                              version={"green"} addedStyle={styles.flex3}/>

                            <RegionCardLayout colorScheme={"colorScheme1"} region={"South East Asia"}
                                              countries={["Indonesia", "Vietnam"]}
                                              version={"blue"} addedStyle={styles.flex3}/>
                        </div>

                    </div>
                </div>

                <CTA1Layout colorScheme={"colorScheme3"} headingText={"Are you an Indian OEM or entrepreneur?"}
                            bodyText={"We champion small, talented enterprises. Let's build India's self-reliant supply chain together."}/>
            </>
            )
            }

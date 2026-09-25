"use client"

import styles from "./page.module.css"
import CTAButton from "@/ui/componenets/CTAButton";
import TextCard5Layout from "@/ui/layouts/TextCard5Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import Link from "next/link";
import NormalButtonComponent from "@/ui/componenets/NormalButtonComponent";
import TextCard3Layout from "@/ui/layouts/TextCard3Layout";
import CTA1Layout from "@/ui/layouts/CTA1Layout";
import exportMap from "./../../public/world_map.png"
import Image from "next/image";
import RegionCardLayout from "@/ui/layouts/RegionCardLayout";
import TickerCardLayout from "@/ui/layouts/TickerCardLayout";
import airForce from "./../../public/icons/indian_air_force.png"
import bel from "./../../public/icons/bel.png"
import bharatDynamics from "./../../public/icons/bharat dynamics limited.png"
import indianNAvalServices from "./../../public/icons/indian navy.png"
import ministry from "./../../public/icons/ministry of new and renewable enrgy.svg"
import {useRouter} from "next/navigation";
import internalLinks from "./../const/internalRoutes.json"
import engineeringProjectsIndiaLimited from "../../public/icons/engineering projects india limited.png"
import indianArmy from "./../../public/icons/Indian_Army_Circular_Insignia.svg"
import avnl from "./../../public/icons/armoured_vehicle_nigam_limited.png"

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

                            <p className={`h1`}>Fuelling to the self-reliant industrial growth in India</p>

                            <p className={`regularNormal`}>
                                Kinesis builds on the concept of Industrial Nationalism, with a special focus on
                                building an ecosystem of indigenous inventors of Deep-Technology and ground break
                                innovations. Our aim is to foster collaboration between the industry, startups and
                                academia, promote indigenous innovation, and take pride in our nation's industrial
                                heritage
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
                                <p className={`${styles.saffron} h3`}>10 +</p>
                                <p className={`regularNormal`}>Countries served by our tech</p>
                            </div>

                            <div className={`${styles.attributes}`}>
                                <p className={`${styles.saffron} h3`}>10 +</p>
                                <p className={`regularNormal`}>Expert Channel in countries</p>
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
                                      },
                                      {
                                          clientName: "Indian Air Force",
                                          clientImage: airForce
                                      },
                                      {
                                          clientName: "Indian Navy",
                                          clientImage: indianNAvalServices
                                      },
                                      {
                                          clientName: "Indian Army",
                                          clientImage: indianArmy,
                                      },
                                      {
                                          clientName: "Ministry of New and Renewable Energy",
                                          clientImage: ministry
                                      },
                                      {
                                          clientName: "Bharat Dyanamics Ltd.",
                                          clientImage: bharatDynamics
                                      },
                                      {
                                          clientName: "Engineering Projects India Limited",
                                          clientImage: engineeringProjectsIndiaLimited
                                      },
                                      {
                                          clientImage: avnl,
                                          clientName: "Armoured Vehicle Nigam Limited"
                                      }
                                  ]
                              }
            />

            {/*WHAT WE DO*/}
            < div className={`paddedContainer colorScheme1`}>
                <div className={`maxWidthContainer columnFlexContainer gapM`}>

                    <TextCard5Layout smallText={"WHAT WE DO"}
                                     headingText={"WE HELP INNOVATIVE TECHNOLOGIES ENTER INTO THE REAL MARKETS"}
                                     bodyText={"Through our channel of domain experts and specialists from industry, academia, the military, and public administration, we solve the real world problems of Deep Tech startups and Indian Industries. We provide strategic consulting to enable the journey of an idea into a market viable product."}
                                     colorScheme={"colorScheme1"}
                                     version={"green"}/>

                    <div className={`grid4 gapS`}>
                        <TextCard1Layout lineColor={"saffron"} backgroundColor={"background"}
                                         headingText={"Unite Indian OEMs"}
                                         bodyText={"Enabling small OEMs and startups to make their mark in both national and international markets."}
                                         colorScheme={"colorScheme1"}
                        />

                        <TextCard1Layout lineColor={"green"} backgroundColor={"background"}
                                         headingText={"Strategic consulting"}
                                         bodyText={"Expert guidance and hand holding regarding services including corporate strategy, product development, customer interactions, requirement analysis, funding, cost and supplier strategies etc."}
                                         colorScheme={"colorScheme1"}
                        />

                        <TextCard1Layout lineColor={"blue"} backgroundColor={"background"}
                                         headingText={"Cross-sector expertise"}
                                         bodyText={"Recognized specialists from industry, academia, the military and public administration."}
                                         colorScheme={"colorScheme1"}
                        />

                        <TextCard1Layout lineColor={"saffron"} backgroundColor={"background"}
                                         headingText={"Global connections"}
                                         bodyText={"Senior former diplomats and international marketing agencies opening doors worldwide."}
                                         colorScheme={"colorScheme1"}
                        />
                    </div>

                </div>
            </div>

            {/*OUR MOTTO*/}
            <div className={`paddedContainer colorScheme3`}>
                <div className={`maxWidthContainer responsiveFlexContainer gapS`}>
                    <div className={`${styles.fullFlex}`}>
                        <TextCard5Layout version={"saffron"}
                                         smallText={"OUR MOTTO"}
                                         headingText={"Industrial Nationalism"}
                                         bodyText={"The road to global leadership begins with technological self-reliance. We believe in building the strengths of the Indian Startup ecosystem such that the larger industries are keen to establish partnerships within Indian Startups. Our focus is also to foster international collaborations for strategy and exports — keeping the foundation of India's industrial ecosystem rooted in indigenous excellence."}
                                         colorScheme={"colorScheme3"}/>

                        <Link href={internalLinks.aboutus.root} className={`boldNormal ${styles.saffron}`}>Read Our
                            Story →</Link>
                    </div>

                    <div className={`${styles.fullFlex}`}>
                        <div className={`colorScheme3 ${styles.textBox}`}>
                            <p className={`${styles.boldMottoText}`}>"A movement to unite India's innovators,
                                industries, and academia to build a modern, self-reliant <span
                                    className={styles.saffron}>Team India</span> in Industries."</p>

                            <p className={"lightNormal"}>— The Kinesis vision </p>
                        </div>
                    </div>
                </div>

            </div>

            {/*KEY EXPERTISE AREA*/}
            <div className={`paddedContainer colorScheme2`}>
                <div className={`maxWidthContainer columnFlexContainer gapM`}>

                    <div className={`responsiveFlexContainer ${styles.ourSolutions} gapS`}>
                        <TextCard5Layout smallText={"KEY EXPERTISE AREAS"}
                            // headingText={"OUR RANGE OF PAST TECHNOLOGICAL SOLUTIONS ARE BROADLY CATEGORIZED AS SUSTAINABILITY, DEFENCE AND COMMUNICATION SOLUTIONS THAT SOLVE REAL WORLD PROBLEMS"}
                                         headingText={"PROJECTS"}
                                         bodyText={"Our range of past technological solutions are broadly categorized as sustainability, defence and communication solutions that solve real world problems"}
                                         colorScheme={"colorScheme2"} version={"green"}/>

                        <NormalButtonComponent buttonText={"View all products"} colorScheme={"colorScheme2"}
                                               addedStyle={styles.fitContent}/>
                    </div>

                    <div className={`grid4 gapS`}>
                        <Link href={internalLinks.products.hybridPowerPlant}>

                            <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Hybrid Power Plants"}
                                             bodyText={"Indigenous Solar + Wind hybrid, modular from 0.5kW to megawatts, deployed in 30+ countries."}
                                             colorScheme={"colorScheme2"}/>
                        </Link>

                        <Link href={internalLinks.products.carbonCapture}>
                            <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Carbon Capture"}
                                             bodyText={"Electro-catalytic chamber that turns CO₂ into pure oxygen and high-value graphene."}
                                             colorScheme={"colorScheme2"}/>
                        </Link>

                        <Link href={internalLinks.products.ambientAirPurification}>
                            <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Ambient Air Purification"}
                                             bodyText={"Waterless, filterless IIT Delhi tech — proven 25–40% AQI improvement in Delhi."}
                                             colorScheme={"colorScheme2"}/>
                        </Link>

                        <Link href={internalLinks.products.wasteToHydrogen}>
                            <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Waste to Hydrogen"}
                                             bodyText={"Converts waste into clean hydrogen, metal carbonates and activated charcoal."}
                                             colorScheme={"colorScheme2"}/>
                        </Link>

                        <Link href={internalLinks.products.plastictoDiesel}>
                            <TextCard3Layout smallText={"SUSTAINABILITY"} headingText={"Plastic to Diesel"}
                                             bodyText={"Pyrolysis reactor producing certified ULSD — India’s first policy-recognised solution."}
                                             colorScheme={"colorScheme2"}
                            />
                        </Link>

                        <Link href={internalLinks.products.uavAndUcav}>
                            <TextCard3Layout smallText={"DEFENCE"} headingText={"UAV & UCAV"}
                                             bodyText={"Indigenous unmanned aerial and combat platforms for surveillance and defence."}
                                             colorScheme={"colorScheme2"}/>
                        </Link>


                        <Link href={internalLinks.products.private5g}>
                            <TextCard3Layout smallText={"COMMUNICATION"} headingText={"Private 5G Networks"}
                                             bodyText={"Portable, plug-and-play private 5G — 10km reach, sub-10ms latency, off-grid ready."}
                                             colorScheme={"colorScheme2"}
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/*GLOBAL REACH*/}
            <div className={`paddedContainer colorScheme1`}>
                <div className={`maxWidthContainer columnFlexContainer gapS`}>
                    <TextCard5Layout smallText={"REACH"}
                        // headingText={"Export access across three regions.\n"}
                                     headingText={"GLOBAL EXPORT ACCESS \n"}
                                     bodyText={"Indigenous excellence at home, strategic collaboration abroad — our export network spans Central America, the Middle East, and South East Asia."}
                                     colorScheme={"colorScheme1"} version={"green"}/>

                    <Image src={exportMap} alt={"export map pf the world"} width={1000} height={507}
                           className={styles.exportMap}/>

                    <div className={`grid3 gapS`}>

                        <RegionCardLayout colorScheme={"colorScheme1"} region={"Middle East"}
                                          countries={["UAE", "Kingdom of Saudi Arabia", "Egypt", "Jordan"]}
                                          version={"saffron"}/>

                        <RegionCardLayout colorScheme={"colorScheme1"} region={"Central America"}
                                          countries={["Guatemala", "El Salvador", "Belize", "Guyana", "Jamaica"]}
                                          version={"green"}/>

                        <RegionCardLayout colorScheme={"colorScheme1"} region={"South East Asia"}
                                          countries={["Indonesia", "Vietnam"]}
                                          version={"blue"}/>
                    </div>

                </div>
            </div>

            <CTA1Layout colorScheme={"colorScheme3"} headingText={"Are you an Indian OEM or entrepreneur?"}
                        bodyText={"We love interacting with innovators and visionaries, let’s together build the ‘TEAM INDIA- India’s self-reliant supply chain. Let's build India's self-reliant supply chain together."}/>
        </>
    )
}

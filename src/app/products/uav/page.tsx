import Header2Layout from "@/ui/layouts/Header2Layout";
import AccentedHeading2Layout from "@/ui/layouts/AccentedHeading2Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import styles from "./page.module.css"
import CTA2Layout from "@/ui/layouts/CTA2Layout";

export default function UAV() {

    return (
        <>
            <Header2Layout colorScheme={"colorScheme3"} capsulText={"DEFENCE"} headingText={"UAV & UCAV"}
                           bodyText={"Indigenously developed Unmanned Aerial Vehicles (UAV) and Unmanned Combat Aerial Vehicles (UCAV) for surveillance, reconnaissance and mission-critical defence operations — supporting India’s self-reliance in defence technology."}
                           version={"blue"} hasBox={false}/>

            <div className={`paddedContainer colorScheme2 outerFlexContainer`}>
                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"Capabilities"}
                                            version={"blue"}/>

                    <div className={`${styles.flex}`}>
                        <TextCard1Layout lineColor={"blue"} backgroundColor={"foreground"}
                                         headingText={"Surveillance & reconnaissance"}
                                         bodyText={"UCAV platforms engineered for mission-critical and time-sensitive defence operations."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"blue"} backgroundColor={"foreground"}
                                         headingText={"Combat roles"}
                                         bodyText={"Persistent aerial monitoring for border security, situational awareness and intelligence gathering."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"blue"} backgroundColor={"foreground"}
                                         headingText={"Indigenous design"}
                                         bodyText={"Developed and manufactured in India, reducing dependence on imported defence systems."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>
                    </div>

                </div>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"Technical Briefing"}
                                            version={"blue"}/>


                    <p className={`${styles.description} lightNormal`}>
                        Detailed specifications — including payload, endurance, range and sensor configurations —
                        are
                        available on request. Please contact our defence team for a technical brief and deployment
                        discussion.
                    </p>

                </div>

                <CTA2Layout colorScheme={"colorScheme3"} headingText={"Interested in UAV & UCAV?"}
                            bodyText={"Request a detailed brief, specifications or a technology demonstration."}/>
            </div>
        </>
    )
}
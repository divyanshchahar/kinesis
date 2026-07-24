import Header2Layout from "@/ui/layouts/Header2Layout";
import styles from "@/app/products/ambient_air_purification/page.module.css";
import AccentedHeading2Layout from "@/ui/layouts/AccentedHeading2Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import CTA2Layout from "@/ui/layouts/CTA2Layout";
import NumberedCardLayout from "@/ui/layouts/NumberedCardLayout";

export default function WasteToHydrogen() {
    return (
        <>
            <Header2Layout colorScheme={"colorScheme3"} capsulText={"SUSTANABILITY"}
                           headingText={"Ambient Air Purification"}
                           bodyText={"An indigenously developed, proprietary technology that converts waste into valuable outputs — Hydrogen gas, Metal Carbonates and Charcoal/Activated Charcoal — turning a disposal problem into a resource-recovery opportunity, addressing waste management and clean energy generation simultaneously."}
                           hasBox={false} version={"blue"}/>

            <div className={`paddedContainer colorScheme2 outerFlexContainer`}>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"How it Works"}
                                            version={"blue"}/>

                    <div className={`${styles.flex}`}>

                        <NumberedCardLayout headingText={"Segregation of particulate matter"}
                                            bodyText={"The system draws in ambient air and segregates suspended particulate matter (PM) from it."}
                                            number={"1"} colorScheme={"colorScheme2"}/>

                        <NumberedCardLayout headingText={"Concentration & collection"}
                                            bodyText={"These particles are concentrated and collected within the system."}
                                            number={"2"} colorScheme={"colorScheme2"}/>

                        <NumberedCardLayout headingText={"Removal via depositor"}
                                            bodyText={"A dedicated depositor unit safely removes the collected PM, preventing it from re-entering the atmosphere."}
                                            number={"3"} colorScheme={"colorScheme2"}/>

                    </div>

                </div>

                <div className={`maxWidthContainer colorScheme3 ${styles.highlightcard}`}>
                    <div className={`${styles.flex2}`}>
                        <p className={`h1 ${styles.green}`}>25 - 40 %</p>
                        <p className={`lightNormal`}>AQI IMPROVEMENT</p>
                    </div>

                    <div className={`${styles.flex2}`}>
                        <p className={`boldNormal`}>Proven Performance</p>

                        <p className={`lightNormal`}>
                            A long-duration field trial by the Commission for Air Quality Management (CAQM) at Anand
                            Vihar, Delhi — one of the city’s most polluted locations — demonstrated a measurable 25–40%
                            improvement in Air Quality Index, confirming effectiveness in real, high-pollution
                            conditions.
                        </p>
                    </div>
                </div>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Key Applications"}
                                            version={"blue"}/>

                    <div className={`${styles.flex}`}>
                        <TextCard1Layout lineColor={"blue"} backgroundColor={"foreground"}
                                         headingText={"Industrial townships & municipal corporations"}
                                         bodyText={"Decentralised, on-site waste processing for urban and industrial waste streams, reducing landfill dependency while generating usable energy and materials."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"blue"} backgroundColor={"foreground"}
                                         headingText={"Agricultural waste (Parali / stubble)"}
                                         bodyText={"A productive alternative to stubble burning — converting crop residue into hydrogen, charcoal and other byproducts, directly addressing a major seasonal air-pollution challenge."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>


                    </div>

                </div>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Economic Impact"}
                                            version={"blue"}/>

                    <p className={`lightNormal ${styles.max60chContainer}`}>
                        By actively improving local air quality, APS helps prevent the economic losses and industrial
                        disruptions caused by the Graded Response Action Plan (GRAP) — which mandates production
                        slowdowns and construction bans during severe pollution.
                        <br/>
                        <br/>
                        Deploying APS in high-risk zones reduces the likelihood of such restrictions, helping safeguard
                        industrial output, employment and economic stability.
                    </p>
                </div>


                <CTA2Layout colorScheme={"colorScheme3"} headingText={"Interested in Ambient Air Purification ?"}
                            bodyText={"Request a detailed brief, specifications or a technology demonstration."}/>
            </div>
        </>
    )
}
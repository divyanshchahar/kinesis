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
                           hasBox={false} version={"green"}/>

            <div className={`paddedContainer colorScheme2 outerFlexContainer`}>

                <div className={`maxWidthContainer columnFlexContainer gapS`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"How it Works"}
                                            version={"green"}/>

                    <div className={`grid3 gapS`}>
                        <NumberedCardLayout headingText={"Segregation of particulate matter"}
                                            bodyText={"The system draws in ambient air and segregates suspended particulate matter (PM) from it."}
                                            number={"1"} colorScheme={"colorScheme2"}
                        />

                        <NumberedCardLayout headingText={"Concentration & collection"}
                                            bodyText={"These particles are concentrated and collected within the system."}
                                            number={"2"} colorScheme={"colorScheme2"}
                        />

                        <NumberedCardLayout headingText={"Removal via depositor"}
                                            bodyText={"A dedicated depositor unit safely removes the collected PM, preventing it from re-entering the atmosphere."}
                                            number={"3"} colorScheme={"colorScheme2"}
                        />

                    </div>
                </div>

                <div className={`maxWidthContainer colorScheme3 ${styles.highlightcard}`}>
                    <div className={`columnFlexContainer gap2`}>
                        <p className={`h1 ${styles.green}`}>25 - 40 %</p>
                        <p className={`lightNormal`}>AQI IMPROVEMENT</p>
                    </div>

                    <div className={`columnFlexContainer gap2`}>
                        <p className={`boldNormal`}>Proven Performance</p>

                        <p className={`lightNormal`}>
                            A long-duration field trial by the Commission for Air Quality Management (CAQM) at Anand
                            Vihar, Delhi — one of the city’s most polluted locations — demonstrated a measurable 25–40%
                            improvement in Air Quality Index, confirming effectiveness in real, high-pollution
                            conditions.
                        </p>
                    </div>
                </div>

                <div className={`maxWidthContainer columnFlexContainer gapS`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Key Applications"}
                                            version={"green"}/>

                    <div className={`responsiveFlexContainer gapS`}>
                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Pollution hotspots"}
                                         bodyText={"Busy traffic intersections, congested urban centres and construction zones with consistently poor air quality."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.keyApplicationsCard}/>

                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Industrial hubs"}
                                         bodyText={"Zones with concentrated industrial activity where particulate emissions are typically high."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.keyApplicationsCard}/>

                    </div>

                </div>

                <div className={`maxWidthContainer columnFlexContainer gapS`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Economic Impact"}
                                            version={"green"}/>

                    <p className={`regularNormal ${styles.max60chContainer}`}>
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
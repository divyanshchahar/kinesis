import Header2Layout from "@/ui/layouts/Header2Layout";
import styles from "@/app/products/hybrid_power_plant/page.module.css";
import AccentedHeading2Layout from "@/ui/layouts/AccentedHeading2Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import CTA2Layout from "@/ui/layouts/CTA2Layout";
import DetailsCardLayout from "@/ui/layouts/DetailsCardLayout";
import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";

export default function HybridPowerPlant() {
    return (
        <>
            <Header2Layout colorScheme={"colorScheme3"} capsulText={"SUSTANABILITY"} headingText={"Hybrid Power Plant"}
                           bodyText={"A one-of-a-kind, 100% indigenously developed and manufactured hybrid power solution combining Solar and Wind energy. Modular in construction — from 0.5kW to multiple megawatts — it stays effective even at low wind speeds and can be customised for any application or terrain: fixed, vehicle-mounted, or mini-grid."}
                           hasBox={true} version={"green"}
                           boxText={"Already deployed across Defence, Rural Electrification, Marine/Telecom and Industrial/Commercial installations — and exported to 30+ countries."}/>
            <div className={`paddedContainer colorScheme2 outerFlexContainer`}>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Technology & Design Features"}
                                            version={"green"}/>

                    <UnorderedListComponent listType={"check mark"} listColor={"green"}
                                            listItems={[`Vertical-Axis Wind Turbines with on-board "Smart" electronics`, `Dynamic Maximum Power Point Tracking (MPPT)`, `Easy connection for both On-Grid and Off-Grid setups`, `Simple mounting on any surface — no masts, guy wires or towers`, `Ballasted installation that avoids roof penetration`, `Higher power density per square foot; scalable generation`, `Environment-friendly, efficient, cost-effective and silent`, `Increases battery life and reduces required storage capacity`]}
                                            colorScheme={"colorScheme2"}
                                            addedStyles={`${styles.unOrderedList}`}/>

                </div>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Why Hybrid — vs pure solar or pure wind"}
                                            version={"green"}/>

                    <div className={`${styles.flex}`}>
                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Seasonality"}
                                         bodyText={"Solar and wind resources are highly seasonal; even in high-visibility regions, solar is available only 4–6 hours a day."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Space constraints"}
                                         bodyText={"Both solar and wind typically need large, unoccupied areas — making urban deployment difficult."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Lack of modularity"}
                                         bodyText={"Traditional windmills aren’t modular, limiting wind energy to large-scale projects."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Combining difficulty"}
                                         bodyText={"Solar and wind are naturally complementary but hard to combine efficiently — a gap this hybrid solves."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                    </div>

                </div>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Application By Sector"}
                                            version={"green"}/>

                    <div className={`${styles.flex}`}>
                        <DetailsCardLayout colorScheme={"colorScheme2"} version={"green"}
                                           headingText={"Defence"}
                                           bulletPoints={["Simple installation for high-altitude and desert terrain", "Zero IR signature"]}
                                           addedStyling={`${styles.xxsContainer}`}/>

                        <DetailsCardLayout colorScheme={"colorScheme2"} version={"green"}
                                           headingText={"Telecom"}
                                           bulletPoints={["Zero maintenance, unmanned operation", "Replaces diesel generator sets at telecom towers"]}
                                           addedStyling={`${styles.xxsContainer}`}/>

                        <DetailsCardLayout colorScheme={"colorScheme2"} version={"green"}
                                           headingText={"Urban & Commercial"}
                                           bulletPoints={["Rooftop for residential, office and industrial buildings", "Rooftop for residential, office and industrial buildings", "Toll plazas and advertising displays"]}
                                           addedStyling={`${styles.xxsContainer}`}/>

                        <DetailsCardLayout colorScheme={"colorScheme2"} version={"green"}
                                           headingText={"Mobile & Emergency"}
                                           bulletPoints={["Vehicle-mounted for medical, comms and command-control", "Supports disaster management, police and defence\n", "Toll plazas and advertising displays"]}
                                           addedStyling={`${styles.xxsContainer}`}/>

                        <DetailsCardLayout colorScheme={"colorScheme2"} version={"green"}
                                           headingText={"Emerging and Specialised"}
                                           bulletPoints={["PCM-based cold storage and chillers", "Atmospheric water generation", "EV charging stations"]}
                                           addedStyling={`${styles.xxsContainer}`}/>


                    </div>

                </div>

                <CTA2Layout colorScheme={"colorScheme3"} headingText={"Interested in Hybrid Power Plant ?"}
                            bodyText={"Request a detailed brief, specifications or a technology demonstration."}/>
            </div>
        </>
    )
}
import Header2Layout from "@/ui/layouts/Header2Layout";
import styles from "@/app/products/carbon_capture/page.module.css";
import AccentedHeading2Layout from "@/ui/layouts/AccentedHeading2Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import CTA2Layout from "@/ui/layouts/CTA2Layout";

export default function CarbonCApture() {
    return <>
        <Header2Layout colorScheme={"colorScheme3"} capsulText={"SUSTANABILITY"} headingText={"Carbon Capture"}
                       bodyText={"Our Carbon Capture machine uses an indigenously designed Electro-Catalytic Chamber to break down CO₂ emissions into their fundamental elements — pure carbon and oxygen. Unlike conventional carbon capture and storage (CCS) that simply compresses and buries CO₂, this process converts a harmful waste product into two valuable outputs."}
                       hasBox={true}
                       version={"green"}
                       boxText={"A technology demonstrator / proof-of-concept plant is currently operational at the Meerut Industrial Area, validating the process at pilot scale."}/>
        <div className={`paddedContainer colorScheme2 outerFlexContainer`}>

            <div className={`maxWidthContainer ${styles.outerFlex}`}>

                <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                        headingText={"Turning emissions into value"}
                                        version={"green"}/>

                <p className={`lightNormal ${styles.max60chContainer}`}>
                    The captured carbon is produced as graphene — a high-value nanomaterial known for its exceptional
                    strength, conductivity and versatility, with commercial applications across electronics, energy
                    storage, construction and advanced materials manufacturing.
                    <br/>
                    <br/>
                    This creates a potential revenue stream that can help offset the cost of emissions reduction, rather
                    than treating carbon capture as a pure cost centre.
                </p>

            </div>

            <div className={`maxWidthContainer ${styles.outerFlex}`}>

                <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                        headingText={"Applications"}
                                        version={"green"}/>

                <div className={`${styles.flex}`}>
                    <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                     headingText={"Industrial emissions reduction"}
                                     bodyText={"Groundbreaking technology is born in startups and small organisations — we help itA practical solution for carbon-intensive industries such as cement, steel and power generation — cutting their carbon footprint while complying with tightening environmental regulations."}
                                     colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                    <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                     headingText={"Marine shipping"}
                                     bodyText={"A cost-effective retrofit for ships, helping the maritime sector meet decarbonisation targets (e.g. IMO regulations) without a complete overhaul of existing vessels."}
                                     colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>
                </div>


            </div>


            <CTA2Layout colorScheme={"colorScheme3"}
                        headingText={"Interested in Carbon Capture?"}
                        bodyText={"Request a detailed brief, specifications or a technology demonstration."}/>
        </div>
    </>
}
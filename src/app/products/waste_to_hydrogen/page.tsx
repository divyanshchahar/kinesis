import Header2Layout from "@/ui/layouts/Header2Layout";
import styles from "@/app/products/waste_to_hydrogen/page.module.css";
import AccentedHeading2Layout from "@/ui/layouts/AccentedHeading2Layout";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import CTA2Layout from "@/ui/layouts/CTA2Layout";

export default function WasteToHydrogen() {
    return (
        <>
            <Header2Layout colorScheme={"colorScheme3"} capsulText={"SUSTANABILITY"}
                           headingText={"Waste to Hydrogen"}
                           bodyText={"An indigenously developed, proprietary technology that converts waste into valuable outputs — Hydrogen gas, Metal Carbonates and Charcoal/Activated Charcoal — turning a disposal problem into a resource-recovery opportunity, addressing waste management and clean energy generation simultaneously."}
                           hasBox={false} version={"green"}/>

            <div className={`paddedContainer colorScheme2 outerFlexContainer`}>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Core Process & Outputs"}
                                            version={"green"}/>

                    <div className={`${styles.flex}`}>
                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Hydrogen"}
                                         bodyText={"Persistent aerial monitoring for border security, situational awareness and intelligence gathering."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Metal Carbonates"}
                                         bodyText={"A valuable byproduct recovered during processing, suitable for industrial or commercial use."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Charcoal / Activated Charcoal"}
                                         bodyText={"A primary output, with further processing potential to yield Graphene and Wood Vinegar a natural bio-pesticide and soil enhancer"}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>


                    </div>

                </div>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Deployment Readiness"}
                                            version={"green"}/>

                    <p className={`regularNormal ${styles.max60chContainer}`}>
                        The technology modules are engineering-ready for implementation. A Technology Demonstrator /
                        Proof-of-Concept unit can be established as soon as investment is secured — allowing
                        stakeholders to validate performance at pilot scale before full commercial rollout.
                    </p>
                </div>

                <div className={`maxWidthContainer ${styles.outerFlex}`}>

                    <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                            headingText={"Key Applications"}
                                            version={"green"}/>

                    <div className={`${styles.flex}`}>
                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Industrial townships & municipal corporations"}
                                         bodyText={"Decentralised, on-site waste processing for urban and industrial waste streams, reducing landfill dependency while generating usable energy and materials."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>

                        <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                         headingText={"Agricultural waste (Parali / stubble)"}
                                         bodyText={"A productive alternative to stubble burning — converting crop residue into hydrogen, charcoal and other byproducts, directly addressing a major seasonal air-pollution challenge."}
                                         colorScheme={"colorScheme2"} addedStyles={styles.xxsContainer}/>


                    </div>

                </div>

                <CTA2Layout colorScheme={"colorScheme3"} headingText={"Interested in Waste to Hydrogen?"}
                            bodyText={"Request a detailed brief, specifications or a technology demonstration."}/>
            </div>
        </>
    )
}
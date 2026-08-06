import Header2Layout from "@/ui/layouts/Header2Layout";
import AccentedHeading2Layout from "@/ui/layouts/AccentedHeading2Layout";
import CharctersticTableLayout from "@/ui/layouts/CharctersticTableLayout";
import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import CTA2Layout from "@/ui/layouts/CTA2Layout";
import styles from "./page.module.css"

export default function PlasticToDiesel() {
    return (
        <>
            <Header2Layout colorScheme={"colorScheme3"} capsulText={"COMMUNICATION"}
                           headingText={"Private 5G Networks — RDN Box"}
                           bodyText={"The RDN Box is a compact, self-contained wireless network hub that integrates the Radio Access Network (RAN), Core Network and an AI engine into a single portable unit. Built on 3GPP-defined 5G-Advanced standards and pre-configured for plug-and-play deployment — a fully functional private 5G network set up anywhere in minutes, with no existing infrastructure required."}
                           hasBox={false} version={"saffron"}/>

            <div className={`colorScheme2 paddedContainer`}>

                <div className={`maxWidthContainer columnFlexContainer gapM`}>
                    <div className={`${styles.max60chContainer}`}>
                        <div className={`columnFlexContainer gapS`}>
                            <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"The Problem"}
                                                    version={"saffron"}/>

                            <p className={`lightNormal`}>
                                Public network operators find it economically unviable to serve low population-density
                                areas
                                — industrial sites, mines, disaster zones and defence locations. This coverage gap
                                disrupts
                                routine operations, safety monitoring and efficiency, creating a clear need for
                                standalone
                                private networks that don’t depend on public infrastructure.
                            </p>
                        </div>
                    </div>

                    {/*CORE SPECIFICATION*/}
                    <div className={`columnFlexContainer gapS`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"Core Specifications"}
                                                version={"saffron"}/>

                        <CharctersticTableLayout colorScheme={"colorScheme2"}
                                                 values={[{
                                                     characterstic: "Deployment",
                                                     value: "Plug-and-play, pre-configured"
                                                 }, {
                                                     characterstic: "Coverage radius",
                                                     value: "Up to 10 km (secure)"
                                                 }, {
                                                     characterstic: "Latency",
                                                     value: "As low as < 10 ms end-to-end"
                                                 }, {
                                                     characterstic: "Power",
                                                     value: "Energy-efficient; runs on solar / wind"
                                                 }, {
                                                     characterstic: "Operation",
                                                     value: "Capable of fully autonomous operation"
                                                 }, {
                                                     characterstic: "Standards",
                                                     value: "5G NR, IMT-2020 compliant"
                                                 }, {
                                                     characterstic: "Origin",
                                                     value: "Fully in-house — developed at IIT Delhi"
                                                 }]}
                                                 version={"saffron"} addedStyle={styles.flexContainer}/>
                    </div>

                    {/*DEPLOYMENT FLEXIBILITY*/}
                    <div className={`columnFlexContainer gapS`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                                headingText={"Network Performance Modes"}
                                                version={"saffron"}/>

                        <div className={`grid3 gapS`}>
                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"foreground"}
                                             headingText={"eMBB — Enhanced Mobile Broadband"}
                                             bodyText={"High-throughput downlink/uplink for bandwidth-intensive applications."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>

                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"foreground"}
                                             headingText={"URLLC — Ultra-Reliable Low Latency"}
                                             bodyText={"Sub-10ms latency for mission-critical use cases such as Industry 4.0 automation and remote healthcare."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>

                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"foreground"}
                                             headingText={"RedCap — Reduced Capability"}
                                             bodyText={"Cost-efficient massive machine-type communication for IoT — remote operation, health monitoring and asset/vehicle tracking."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>
                        </div>
                    </div>

                    {/*NETWORK PERFORMANCE MODES*/}
                    <div className={`columnFlexContainer gapM`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"Deployment Flexibility"}
                                                version={"saffron"}/>

                        <UnorderedListComponent listType={"check mark"} listColor={"saffron"}
                                                listItems={[`Lightweight and portable — mountable on masts/towers or carried by drones`, `Solar / wind powered for independent, off-grid operation`, `Modular add-ons including customer-specific IoT integrations`]}
                                                colorScheme={"colorScheme2"} addedStyles={styles.unOrderedList}/>
                    </div>

                    {/*DEPLOYMENT FLEXIBILITY*/}
                    <div className={`columnFlexContainer gapM`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                                headingText={"Applications"}
                                                version={"saffron"}/>

                        <div className={`grid3 gapS`}>
                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"foreground"}
                                             headingText={"Industry & mines"}
                                             bodyText={"Continuous connectivity for automation, asset monitoring and workforce safety in low-density areas underserved by public networks."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>

                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"foreground"}
                                             headingText={"Disaster management"}
                                             bodyText={"Instant secure connectivity at disaster sites and relief camps where public networks are down or unavailable."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>

                            <TextCard1Layout lineColor={"saffron"} backgroundColor={"foreground"}
                                             headingText={"Defence communication"}
                                             bodyText={"Secure, private, rapidly deployable networks in operational areas lacking public network access."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>
                        </div>
                    </div>

                    <CTA2Layout colorScheme={"colorScheme3"}
                                headingText={"Interested in Private 5G Networks — RDN Box?"}
                                bodyText={"Request a detailed brief, specifications or a technology demonstration."}/>
                </div>
            </div>
        </>
    )
}
import Header1Layout from "@/ui/layouts/Header1Layout";
import ServiceCardLayout from "@/ui/layouts/ServiceCardLayout";
import styles from "./page.module.css"
import CTA1Layout from "@/ui/layouts/CTA1Layout";

export default function Services() {
    return (
        <>
            <Header1Layout
                smallText={"OUR SERVICES"}
                headingText={"Expert consulting, from strategy to deployment."}
                bodyText={"Beyond our product portfolio, Kinesis offers specialist advisory services — helping institutions and enterprises make high-stakes technology decisions with confidence."}
                colorScheme={"colorScheme3"}/>
            <div className={"colorScheme2 outerFlexContainer paddedContainer"}>
                <div className={`maxWidthContainer ${styles.flex}`}>
                    <ServiceCardLayout capsuleText={"DEFENCE"} headingText={"UCAV & UAV Consultation"}
                                       bodyText={"Technical insight for high-stakes decision-making — guiding defence and government clients through the full lifecycle of unmanned aerial platforms."}
                                       linkText={"Related: UAV & UCAV platforms"}
                                       bulletPoints={["Platform selection & procurement — strategy guidance matched to mission requirements and budgets.", "Regulatory compliance support— navigating certification and airspace regulation.", "Operational integration expertise — embedding unmanned systems into existing operations."]}
                                       colorScheme={"colorScheme2"} version={"blue"}/>

                    <ServiceCardLayout capsuleText={"sustainability"} headingText={"Waste-to-Energy Solutions"}
                                       bodyText={"Turning waste liabilities into reliable power generation — for municipalities, industrial clients, and energy developers."}
                                       linkText={"Related: Waste to Hydrogen"}
                                       bulletPoints={["Feasibility studies & technology selection — grounded assessment of the right conversion pathway.", "Regulatory navigation — permits, compliance and policy alignment.", "Project implementation support — from pilot to full commercial operation."]}
                                       colorScheme={"colorScheme2"} version={"green"}/>

                    <ServiceCardLayout capsuleText={"COMMUNICATION"} headingText={"Communications Solutions"}
                                       bodyText={"Resilient, secure infrastructure for mission-critical operations — serving defence, government, and commercial clients."}
                                       linkText={"Related: Private 5G Networks"}
                                       bulletPoints={["Systems integration — connecting new capability with existing infrastructure.", "Regulatory navigation — permits, compliance and policy alignment.", "Interoperability planning — ensuring systems, agencies and vendors work as one."]}
                                       colorScheme={"colorScheme2"} version={"saffron"}/>
                </div>
            </div>

            <CTA1Layout colorScheme={"colorScheme3"} headingText={"Need advisory support on your next project?"}
                        bodyText={"Talk to our specialists about feasibility, procurement, integration or compliance."}/>
        </>
    )
}
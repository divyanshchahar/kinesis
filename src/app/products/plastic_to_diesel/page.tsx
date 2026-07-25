import Header2Layout from "@/ui/layouts/Header2Layout";
import AccentedHeading2Layout from "@/ui/layouts/AccentedHeading2Layout";
import CharctersticTableLayout from "@/ui/layouts/CharctersticTableLayout";
import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";
import TextCard1Layout from "@/ui/layouts/TextCard1Layout";
import TextCard4Layout from "@/ui/layouts/TextCard4Layout";
import CTA2Layout from "@/ui/layouts/CTA2Layout";
import styles from "./page.module.css"

export default function PlasticToDiesel() {
    return (
        <>
            <Header2Layout colorScheme={"colorScheme3"} capsulText={"SUSTAINABILITY"} headingText={"Plastic to Diesel"}
                           bodyText={"A proprietary reactor using advanced pyrolysis combined with catalytic hydrotreatment to convert plastic waste (XLPE, LDPE, PPE) into certified high-speed diesel and high-value carbon nanomaterials. India’s first policy-recognised plastic-to-diesel alternative."}
                           hasBox={false} version={"green"}/>
            <div className={`colorScheme2 paddedContainer`}>

                <div className={`maxWidthContainer flex3`}>
                    <div className={`flex2`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"Input and Output Capacity"}
                                                version={"green"}/>

                        <CharctersticTableLayout colorScheme={"colorScheme2"}
                                                 values={[{
                                                     characterstic: "Daily plastic waste input",
                                                     value: "10–30 tons"
                                                 }, {
                                                     characterstic: "Daily ULSD output",
                                                     value: "8,000–24,000 L (80% yield)"
                                                 }, {
                                                     characterstic: "Carbon black output",
                                                     value: "1.5–4.5 tons/day"
                                                 }, {characterstic: "Syngas output", value: "0.5–1.5 tons/day"}]}
                                                 version={"green"} addedStyle={styles.flexContainer}/>
                    </div>

                    <div className={`flex2`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"Fuel Quality & Emissions"}
                                                version={"green"}/>

                        <UnorderedListComponent listType={"check mark"} listColor={"green"}
                                                listItems={[`Sulphur content: < 8 ppm`, `Emissions (at 2000 RPM): NOx 6 ppm, CO 4 ppm`, `Certifications: ISCC, EN590, BIS`]}
                                                colorScheme={"colorScheme2"} addedStyles={styles.unOrderedList}/>
                    </div>

                    <div className={`flex2`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"}
                                                headingText={"Carbon Capture & By-Products"}
                                                version={"green"}/>

                        <div className={`flex`}>
                            <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                             headingText={"CCSU system"}
                                             bodyText={"Captures carbon for graphene production (1 ton/day)."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>

                            <TextCard1Layout lineColor={"green"} backgroundColor={"foreground"}
                                             headingText={"Carbon net-zero"}
                                             bodyText={"The entire process is designed to be carbon net-zero."}
                                             colorScheme={"colorScheme2"} addedStyles={styles.flexContainer}/>
                        </div>
                    </div>

                    <div className={`flex2`}>
                        <AccentedHeading2Layout colorScheme={"colorScheme2"} headingText={"Franchise Business Model"}
                                                version={"green"}/>

                        <div className={`flex`}>
                            <TextCard4Layout colorScheme={"colorScheme2"} version={"green"}
                                             headingText={"Franchisee contributes"}
                                             bulletPoints={[`Capital investment: ₹12.75 Cr`, `2-acre motorable land and infrastructure`, `Security and administrative support`]}
                                             addedStyle={`${styles.flexContainer}`}/>

                            <TextCard4Layout colorScheme={"colorScheme3"} version={`accented`}
                                             headingText={"Franchisee receives"}
                                             bulletPoints={[`~6,000 L/day of BS6-grade diesel at ₹10/L below market`, `This is a list item₹2 Cr annual return (after a 6-month moratorium)`, `Partial capital and full working-capital funding`, `OEM management handled by the operating company`, `Option to take over the plant after 10 years`]}
                                             addedStyle={styles.flexContainer}/>
                        </div>
                    </div>

                    <CTA2Layout colorScheme={"colorScheme3"} headingText={"Interested in Plastic to Diesel?"}
                                bodyText={"Request a detailed brief, specifications or a technology demonstration."}/>
                </div>
            </div>
        </>
    )
}
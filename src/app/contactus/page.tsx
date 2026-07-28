import Header1Layout from "@/ui/layouts/Header1Layout";
import styles from "./page.module.css"
import UnorderedListComponent from "@/ui/componenets/UnorderedListComponent";
import TextInputComponent from "@/ui/componenets/TextInputComponent";
import TextAreaComponent from "@/ui/componenets/TextAreaComponent";
import CTAButton from "@/ui/componenets/CTAButton";

export default function ContactUS() {
    return (
        <>
            <Header1Layout colorScheme={"colorScheme3"} smallText={"CONTACT US"}
                           headingText={"Let's build India's supply chain together."}
                           bodyText={"Whether you're an Indian OEM, an entrepreneur, or a procurement body — reach out and our specialists will get back to you."}/>

            <div className={`paddedContainer colorScheme2`}>
                <div className={`maxWidthContainer`}>
                    <div
                        className={`${styles.responsiveFlexContainer} ${styles.gap2}`}>

                        <div className={`${styles.flex} ${styles.gap2} ${styles.minWidth431}`}>
                            <div className={`${styles.contactUs} colorScheme3`}>
                                <p className={`boldNormal`}>Reach Out</p>

                                <p className={`regularNormal ${styles.saffron}`}>EMAIL</p>

                                <p className={`regularNormal`}>info@kinesistech.in</p>

                                <p className={`regularNormal ${styles.saffron}`}>MOBILE</p>

                                <p className={`regularNormal`}>+91-9599698815</p>
                            </div>

                            <div className={`${styles.whoShouldContactUS} colorScheme2`}>
                                <p className={`h6 ${styles.green}`}>WHO SHOULD REACH OUT</p>

                                <UnorderedListComponent listType={"arrow"} listColor={"green"}
                                                        listItems={[`Indian OEMs and small manufacturers`, `Startups and entrepreneurs with homegrown tech`, `Government and defence procurement bodies`, `Partners seeking export collaboration`]}
                                                        colorScheme={"colorScheme2"}/>
                            </div>
                        </div>

                        <div className={`${styles.formContainer} colorScheme2 ${styles.minWidth431}`}>
                            <div>
                                <p className={`h6 ${styles.heading}`}>Send us a message</p>

                                <p className={`lightNormal`}>Fields marked with an asterisk(*) are required</p>
                            </div>

                            <form className={`${styles.flex} ${styles.gap2} colorScheme2`}>
                                <TextInputComponent fieldName={"Name"} placeHolder={"Your Full Name"} mandatory={true}
                                                    colorScheme={"colorScheme2"}/>

                                <TextInputComponent fieldName={"email"} placeHolder={"you@company.com"}
                                                    mandatory={false}
                                                    colorScheme={"colorScheme2"}/>

                                <TextInputComponent fieldName={"Phone"} placeHolder={"+91-XX-XXXX-XXXX"}
                                                    mandatory={true}
                                                    colorScheme={"colorScheme2"}/>

                                <TextAreaComponent colorScheme={"colorScheme2"} fieldName={"Message"}
                                                   placeHolder={"Type your medssaeg here"} mandatory={true}/>

                                <CTAButton version={"inline"} ctaText={"Send Message"}
                                           addedStyle={styles.centeredTExt}/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

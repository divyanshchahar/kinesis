"use client"

import styles from "./NavBarLayout.module.css"
import Image from "next/image";
import companyLogo from "../../../public/logo/logo.svg"
import Link from "next/link";
import CTAButton from "@/ui/componenets/CTAButton";
import {useState} from "react";
import HamburgerIconComponent from "../../../public/icons/HamburgerIconComponent";
import {Menubar} from "radix-ui";

const localColorScheme = "colorScheme3";

const DropDownMenu = () => {
    const [isOfferings, setIsOfferings] = useState(false);
    const [isProducts, setIsProducts] = useState(false);
    const [isServices, setIsServices] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isMenu, setIsMenu] = useState(false);

    const toggleOfferings = () => {
        setIsOfferings(!isOfferings);
    }

    const toggleServices = () => {
        setIsServices(!isServices);
    }

    const toggleAbout = () => {
        setIsAbout(!isAbout);
    }

    const toggleProducts = () => {
        setIsProducts(!isProducts);
    }

    const toggleMenu = () => {
        setIsMenu(!isMenu);
    }


    return (
        <>
            <button onClick={() => toggleMenu()} className={styles.hamburgerMenuButton}>
                <HamburgerIconComponent addedStyles={styles.hamBurgerMenuItem}/>
            </button>

            <div className={`colorScheme3 ${styles.dropDownMenu} ${!isMenu && styles.hide}`}>

                <Link href={""} className={`${styles.menuItemLink} boldNormal`}>
                    <p>Home</p>
                </Link>

                <hr/>

                <Link href={""} className={`${styles.menuItemLink} boldNormal`} onClick={() => toggleOfferings()}>
                    <p>Our Offerings</p> <p className={`${isOfferings && styles.transform}`}>▼</p>
                </Link>

                <div className={`${styles.linkCarrier} ${!isOfferings && styles.hide}`}>
                    <Link href={""} className={`${styles.menuItemLink} lightNormal`} onClick={() => toggleProducts()}>
                        <p>Products</p> <p className={`${isProducts && styles.transform}`}>▼</p>
                    </Link>

                    <div className={`${styles.linkCarrier} ${!isProducts && styles.hide}`}>
                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>All Products</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Carbon Capture</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Ambient Air Purification</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Hybrid Power Plant</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Plastic to Diesel</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Waste to Hydrogen</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>UAV and UCAV</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Private 5G Networks</p>
                        </Link>
                    </div>

                    <Link href={""} className={`${styles.menuItemLink} lightNormal`} onClick={() => toggleServices()}>
                        <p>Service</p> <p className={`${isServices && styles.transform}`}>▼</p>
                    </Link>

                    <div className={`${styles.linkCarrier} ${!isServices && styles.hide}`}>
                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>All Services</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>UCAV and UAV Consultation</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Waste to Energy Solution</p>
                        </Link>

                        <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                            <p>Communication Solution</p>
                        </Link>
                    </div>

                </div>

                <hr/>

                <Link href={""} className={`${styles.menuItemLink} boldNormal`} onClick={() => toggleAbout()}>
                    <p>About Us</p> <p className={`${isAbout && styles.transform}`}>▼</p>
                </Link>

                <div className={`${styles.linkCarrier} ${!isAbout && styles.hide}`}>
                    <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                        <p>Company Overview</p>
                    </Link>

                    <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                        <p>Mission and Vision</p>
                    </Link>

                    <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                        <p>Industrial Nationalism</p>
                    </Link>

                    <Link href={""} className={`${styles.menuItemLink} lightNormal`}>
                        <p>Our Team</p>
                    </Link>
                </div>

                <hr/>

                <CTAButton version={"inline"} ctaText={"Contact Us"} addedStyle={styles.ctaButton}/>
            </div>
        </>
    )
}


const MenubarDemo = () => {

    // const [checkedSelection, setCheckedSelection] = React.useState([
    //     CHECK_ITEMS[1],
    // ]);

    // const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

    return (
        <Menubar.Root className={`${styles.Root} colorScheme3`}>

            <Menubar.Menu>
                <Menubar.Trigger className={`${styles.Trigger} regularNormal`}>Home</Menubar.Trigger>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className={`${styles.Trigger} lightNormal`}>About Us</Menubar.Trigger>

                <Menubar.Portal>

                    <Menubar.Content
                        className={`${styles.Content} ${localColorScheme}`}
                        align="start"
                        sideOffset={5}
                        alignOffset={-3}
                    >
                        <Menubar.Item className={`${styles.Item} lightRegular ${localColorScheme}`}>
                            Company Overview
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Mission and Vision
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} lightRegular ${localColorScheme}`}>
                            Industrial Nationalism
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Our Team
                        </Menubar.Item>

                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>

            <Menubar.Menu>
                <Menubar.Trigger className={`${styles.Trigger} lightNormal`}>About Us</Menubar.Trigger>

                <Menubar.Portal>
                    <Menubar.Content
                        className={`${styles.Content} ${localColorScheme}`}
                        align="start"
                        sideOffset={5}
                        alignOffset={-3}
                    >
                        <Menubar.Label className={styles.label}>Products</Menubar.Label>

                        <Menubar.Item className={`${styles.Item} ${localColorScheme}`}>
                            All Products
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Hybrid Power Plants
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} lightRegular ${localColorScheme}`}>
                            Ambient Air Purification
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Waste to Hydrogen
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Plastic to Diesel
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            UAV and UCAV
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Private 5g Network
                        </Menubar.Item>

                        <Menubar.Separator className={`${styles.Separator} ${localColorScheme}`}/>

                        <Menubar.Label className={styles.label}>Services</Menubar.Label>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            All Services
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            UCAV and UAV Consultaion
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Waste to Energy Solution
                        </Menubar.Item>

                        <Menubar.Item className={`${styles.Item} boldNormal ${localColorScheme}`}>
                            Communication Solutions
                        </Menubar.Item>

                    </Menubar.Content>
                </Menubar.Portal>
            </Menubar.Menu>
        </Menubar.Root>
    );
};

export default function NavBarLayout() {
    return (
        <div>
            <div className={`${styles.triColor}`}>
                <hr className={`${styles.saffronLine}`}/>
                <hr className={`${styles.whiteLine}`}/>
                <hr className={`${styles.greenLine}`}/>
            </div>

            <div className={`colorScheme3 ${styles.container}`}>
                <Image src={companyLogo} alt="logo" width={100} height={100}/>

                <DropDownMenu/>

                <div className={`${styles.desktop}`}>
                    <MenubarDemo/>
                    <CTAButton version={"inline"} ctaText={"Contact Us"}/>
                </div>


            </div>
        </div>
    )
}
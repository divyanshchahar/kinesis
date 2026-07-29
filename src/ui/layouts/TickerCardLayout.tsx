import ClientCardLayout, {ClientCardLayoutPropTypes} from "@/ui/layouts/ClientCardLayout";
import styles from "./TickerCardLayout.module.css"

export interface TickerCardLayoutPropTypes {
    colorScheme: string;
    addedStyle?: string;
    clients: ClientCardLayoutPropTypes[];
}

export default function TickerCardLayout({colorScheme, addedStyle, clients}: TickerCardLayoutPropTypes) {
    return (
        <div className={`${styles.TickerCardLayout} ${styles.container} ${colorScheme} ${addedStyle}`}>
            <p className={`${styles.heading} h6`}>Our Clients</p>

            <div className={`${styles.animatedRow}`}>


                <div className={`${styles.clients}`}>
                    {clients.map((client, i) => {
                        return (
                            <>
                                <ClientCardLayout clientImage={client.clientImage} clientName={client.clientName}
                                                  key={i}
                                                  addedStyle={`${styles.clientCard}`}/>
                            </>
                        )
                    })}
                </div>

                <div className={`${styles.clients}`}>
                    {clients.map((client, i) => {
                        return (
                            <>
                                <ClientCardLayout clientImage={client.clientImage} clientName={client.clientName}
                                                  key={i}
                                                  addedStyle={`${styles.clientCard}`}/>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
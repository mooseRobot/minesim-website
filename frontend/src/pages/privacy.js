import './legal.css'
import {React} from "react";

function Privacy () {

    return (
        <div className={'legal-content'}>
            <div className={'legal-title'}>
                <h1>Privacy Policy</h1>
            </div>
            <div className={'legal-intro'}>
                <p>Last updated: September 13th, 2023. <br></br>
                    These terms apply to the following domain and all of its subdomains, including but not limited to
                    the MineSim bot and <a href={'/'}>minesim.net</a>.
                </p>
                <br></br>
                <p>
                    Welcome to MineSim. Your privacy is of utmost importance to us. This privacy policy governs your use
                    of the MineSim website and the MineSim Discord bot (collectively referred to as "Services"). Please
                    read this policy carefully to understand how we handle your personal data.
                </p>
            </div>

        <section>
            <article>
                <h2>Data Collection</h2>
                <p>
                    The Bot collects specific user data ("Data"), including but not limited to Discord user ID values.
                    This data is stored in a secured MongoDB database, which is only accessible by the Bot's developers
                    for the necessary scope of developing, testing, and implementing features for the Bot. While we
                    employ stringent security measures to protect your data, we cannot guarantee absolute security. In
                    the event of a security breach, we will notify users through our server on the Discord client
                    application.
                </p>
            </article>

            <article>
                <h2>Access to Data</h2>
                <p>
                    Access to Data is restricted to the developers of MineSim, and is only utilized to the extent
                    necessary for the development, testing, and implementation of features for the Services. We do not
                    sell, share, or provide your Data to any third parties, except as required by law or in accordance
                    with this privacy policy. You can request to view your Data by contacting us through the details
                    provided at the end of this policy.
                </p>
            </article>

            <article>
                <h2>Storage of Data</h2>
                <p>
                    We store your Data securely in a MongoDB database. While we strive to protect your Data, we cannot
                    guarantee its absolute security. In the unlikely event of a data breach, we will notify affected
                    users through the Discord client application.
                </p>
            </article>

            <article>
                <h2>Analytics</h2>
                <p>
                    We use Vercel analytics to collect data about your use of our website. This includes tracking page
                    views and user interactions to help us improve our website. The data collected is aggregated and
                    does not personally identify you.
                </p>
            </article>

            <article>
                <h2>Underage Users</h2>
                <p>
                    Our Services are not intended for users under the age of 13, or below the legal age of consent in
                    their respective countries, in compliance with the Discord Terms of Service. We do not knowingly
                    collect or store information from underage users. If we become aware that an underage user has
                    provided us with personal data, we will take steps to delete such information.
                </p>
            </article>

            <article>
                <h2>User Rights</h2>
                <p>
                    You have the right to request access to the Data we hold about you at any time. You can also request
                    corrections to any inaccurate data we hold, or deletion of your Data. To exercise these rights,
                    please reach out to us through the contact details provided below.
                </p>
            </article>

            <article>
                <h2>Third-Party Links and Services</h2>
                <p>
                    Our Bot may integrate with or offer links to other third-party services. We are not responsible for
                    the privacy practices of these third parties, and we encourage users to read their privacy
                    statements.
                </p>
            </article>

            <article>
                <h2>Changes to the Privacy Policy</h2>
                <p>
                    We reserve the right to update this privacy policy at any time without any notice. Continued use of
                    our services following an update will constitute acceptance of the revised policy.
                </p>
            </article>

            <article>
                <h2>Contact us</h2>
                <p>If you have any questions about these Terms and Conditions, you can contact us: <br></br>By
                    email: <a href={'mailto:contact@minesim.net'}>contact@minesim.net</a></p>
            </article>
        </section>

        </div>
    )

}

export default Privacy;
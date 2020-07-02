import React from 'react';
import Fade from 'react-reveal/Fade';

import Header from 'containers/Header';
import Footer from 'containers/Footer';
import Section from 'components/Section';


export default function FeaturePage() {

    
    return (
        <div className="body-wrap">
            <Header></Header>

            <main className="site-content">
            <Section className="hero illustration-section-01" isCenteredContent
				>
					<div className="container-sm">
						<div className="hero-inner section-inner">
							<div className="hero-content">
                                <Fade buttom delay={500}>
								<h1
									className="mt-0 mb-16 "
									data-reveal-delay="200"
								>
									HALAMAN FEATURE
								</h1>
                                </Fade>
								<div className="container-xs">
                                    <Fade buttom delay={1000}>
									<p
										className="mt-0 mb-32 "
										data-reveal-delay="400"
									>
										Ini halaman Feature
									</p>
                                    </Fade>
								</div>
							</div>
							</div>
					</div>
				</Section>
                </main>
                <Footer></Footer>
        </div>
    )
}

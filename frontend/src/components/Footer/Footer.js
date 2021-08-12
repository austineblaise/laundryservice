import React from "react";

const Footer = () => {
	return (
		<>
			<footer id="footer" className="section-bg">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="row">
									<div className="col-sm-6">
										<div className="footer-info">
											<h3>Rapid</h3>
											<p>
												Cras fermentum odio eu feugiat lide par naso tierra.
												Justo eget nada terra videa magna derita valies darta
												donna mare fermentum iaculis eu non diam phasellus.
												Scelerisque felis imperdiet proin fermentum leo. Amet
												volutpat consequat mauris nunc congue.
											</p>
										</div>
										<div className="footer-newsletter">
											<h4>Our Newsletter</h4>
											<p>
												Tamen quem nulla quae legam multos aute sint culpa legam
												noster magna veniam enim veniam illum dolore legam minim
												quorum culpa amet magna export quem.
											</p>
											<form>
												<input type="email" name="email" />
												<input type="submit" defaultValue="Subscribe" />
											</form>
										</div>
									</div>
									<div className="col-sm-6">
										<div className="footer-links">
											<h4>Useful Links</h4>
											<ul>
												<li>
													<a href="#">Home</a>
												</li>
												<li>
													<a href="#about">About us</a>
												</li>
												<li>
													<a href="#">Services</a>
												</li>
												<li>
													<a href="#">Terms of service</a>
												</li>
												<li>
													<a href="#">Privacy policy</a>
												</li>
											</ul>
										</div>
										<div className="footer-links">
											<h4>Contact Us</h4>
											<p>
												A108 Adam Street <br />
												New York, NY 535022
												<br />
												United States <br />
												<strong>Phone:</strong> +1 5589 55488 55
												<br />
												<strong>Email:</strong> info@example.com
												<br />
											</p>
										</div>
										<div className="social-links">
											<a href="#" className="twitter">
												<i className="bi bi-twitter" />
											</a>
											<a href="#" className="facebook">
												<i className="bi bi-facebook" />
											</a>
											<a href="#" className="instagram">
												<i className="bi bi-instagram" />
											</a>
											<a href="#" className="linkedin">
												<i className="bi bi-linkedin" />
											</a>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div className="form">
									<h4>Send us a message</h4>
									<p>
										Eos ipsa est voluptates. Nostrum nam libero ipsa vero.
										Debitis quasi sit eaque numquam similique commodi harum aut
										temporibus.
									</p>
									<form role="form" className="php-email-form">
										<div className="form-group">
											<input
												type="text"
												name="name"
												className="form-control"
												id="name"
												placeholder="Your Name"
												required
											/>
										</div>
										<div className="form-group mt-3">
											<input
												type="email"
												className="form-control"
												name="email"
												id="email"
												placeholder="Your Email"
												required
											/>
										</div>
										<div className="form-group mt-3">
											<input
												type="text"
												className="form-control"
												name="subject"
												id="subject"
												placeholder="Subject"
												required
											/>
										</div>
										<div className="form-group mt-3">
											<textarea
												className="form-control"
												name="message"
												rows={5}
												placeholder="Message"
												required
												defaultValue={""}
											/>
										</div>
										<div className="my-3">
											<div className="loading">Loading</div>
											<div className="error-message" />
											<div className="sent-message">
												Your message has been sent. Thank you!
											</div>
										</div>
										<div className="text-center">
											<button type="submit" title="Send Message">
												Send Message
											</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="copyright">
						© Copyright <strong>VicLaundry</strong>. All Rights Reserved
					</div>
					<div className="credits">
						Designed by <a href="https://blaise.com/">austineblaise</a>
					</div>
				</div>
			</footer>

			<a
				href="#"
				className="back-to-top d-flex align-items-center justify-content-center"
			>
				<i className="bi bi-arrow-up-short" />
			</a>
		</>
	);
};

export default Footer;

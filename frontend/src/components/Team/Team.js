const Team = () => {
	return (
		<section id="team" className="team section-bg">
			<div className="container" data-aos="fade-up">
				<div className="section-header">
					<h3>Team</h3>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque
					</p>
				</div>
				<div className="row">
					<div
						className="col-lg-3 col-md-6"
						data-aos="fade-up"
						data-aos-delay={100}
					>
						<div className="member">
							<img
								src="assets/img/team-1.jpg"
								className="img-fluid"
								alt="team"
							/>
							<div className="member-info">
								<div className="member-info-content">
									<h4>Walter White</h4>
									<span>Chief Executive Officer</span>
									<div className="social">
										<a href="#">
											<i className="bi bi-twitter" />
										</a>
										<a href="#">
											<i className="bi bi-facebook" />
										</a>
										<a href="#">
											<i className="bi bi-instagram" />
										</a>
										<a href="col">
											<i className="bi bi-linkedin" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-3 col-md-6"
						data-aos="fade-up"
						data-aos-delay={200}
					>
						<div className="member">
							<img
								src="assets/img/team-2.jpg"
								className="img-fluid"
								alt="team"
							/>
							<div className="member-info">
								<div className="member-info-content">
									<h4>Sarah Jhonson</h4>
									<span>Product Manager</span>
									<div className="social">
										<a href="#">
											<i className="bi bi-twitter" />
										</a>
										<a href="#">
											<i className="bi bi-facebook" />
										</a>
										<a href="#">
											<i className="bi bi-instagram" />
										</a>
										<a href="#">
											<i className="bi bi-linkedin" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-3 col-md-6"
						data-aos="fade-up"
						data-aos-delay={300}
					>
						<div className="member">
							<img
								src="assets/img/team-3.jpg"
								className="img-fluid"
								alt="team"
							/>
							<div className="member-info">
								<div className="member-info-content">
									<h4>William Anderson</h4>
									<span>CTO</span>
									<div className="social">
										<a href="#">
											<i className="bi bi-twitter" />
										</a>
										<a href="#">
											<i className="bi bi-facebook" />
										</a>
										<a href="#">
											<i className="bi bi-instagram" />
										</a>
										<a href="#">
											<i className="bi bi-linkedin" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className="col-lg-3 col-md-6"
						data-aos="fade-up"
						data-aos-delay={400}
					>
						<div className="member">
							<img
								src="assets/img/team-4.jpg"
								className="img-fluid"
								alt="team"
							/>
							<div className="member-info">
								<div className="member-info-content">
									<h4>Amanda Jepson</h4>
									<span>Accountant</span>
									<div className="social">
										<a href="#">
											<i className="bi bi-twitter" />
										</a>
										<a href="#">
											<i className="bi bi-facebook" />
										</a>
										<a href="#">
											<i className="bi bi-instagram" />
										</a>
										<a href="#">
											<i className="bi bi-linkedin" />
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Team;

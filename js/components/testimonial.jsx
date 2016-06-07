import React from "react";
import { Container, Row, Col } from "../helpers/bootstrap";

export class Testimonial extends React.Component {

    static propTypes = {
        facebookUrl: React.PropTypes.string,
        twitterUrl: React.PropTypes.string,
        githubUrl: React.PropTypes.string,
        email: React.PropTypes.node,
        address: React.PropTypes.node,
    };

    render() {
        return (
            <Testimonial className="testimonial test">
                <Container>
                    <Row>
                        <Col size={["xs-12", "md-12"]}>
                            {this.renderSocialIcons()}
                            <p>AjaxCall</p>
                        </Col>
                    </Row>
                </Container>
            </Testimonial>
        );
    }

    renderSocialIcons() {
        return (
            <ul className="nav navbar-nav neal-footer-social pull-right">
                { this.renderSocialIcon("fa-twitter", this.props.twitterUrl) }
                { this.renderSocialIcon("fa-facebook", this.props.facebookUrl) }
                { this.renderSocialIcon("fa-github", this.props.githubUrl) }
            </ul>
        );
    }


    renderSocialIcon(iconClass, url) {
        if (!url || !iconClass) { return null; }
        return (
            <li className={`nav-item neal-footer-social-icon ${iconClass.replace("fa-", "")}`}>
                <a href={url} target="_blank">
            <span className="fa-stack">
            <i className="fa fa-circle fa-stack-2x"></i>
            <i className={`fa ${iconClass} fa-stack-1x fa-inverse`}></i>
        </span>
                </a>
            </li>
        );
    }
}


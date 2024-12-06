import React from "react";
import { Layout, Typography, Row, Col } from "antd";

const { Footer } = Layout;
const { Text, Title, Link } = Typography;

const AppFooter = () => {
  return (
    <Footer style={{ backgroundColor: "#001529", color: "#fff" }} className="p-2">
      {/* <Row justify="space-between">
        <Col xs={24} sm={12} md={8}>
          <Title level={4} style={{ color: "#fff" }}>
            About Us
          </Title>
          <Text style={{ color: "#ccc" }}>
            We are dedicated to providing high-quality solutions tailored to your needs.
          </Text>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <Title level={4} style={{ color: "#fff" }}>
            Quick Links
          </Title>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link href="/home" style={{ color: "#1890ff" }}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" style={{ color: "#1890ff" }}>
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{ color: "#1890ff" }}>
                Contact
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs={24} sm={24} md={8}>
          <Title level={4} style={{ color: "#fff" }}>
            Contact Us
          </Title>
          <Text style={{ color: "#ccc" }}>Email: support@example.com</Text>
          <br />
          <Text style={{ color: "#ccc" }}>Phone: +123 456 7890</Text>
        </Col>
      </Row> */}
      <div style={{ textAlign: "center", margin: "20px" }}>
        <Text style={{ color: "#ccc" }}>© 2024 THETECHERS. All Rights Reserved.</Text>
      </div>
    </Footer>
  );
};

export default AppFooter;

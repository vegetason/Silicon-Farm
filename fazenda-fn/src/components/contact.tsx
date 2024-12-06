import React from "react";
import { Layout, Row, Col, Typography, Form, Input, Button } from "antd";
import { MailOutlined, PhoneOutlined, LinkedinOutlined, TwitterOutlined, InstagramOutlined } from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Text } = Typography;

const ContactFooter = () => {
  const onFinish = (values: any) => {
    console.log("Submitted values:", values);
    // Handle form submission logic here
  };

  return (
    <Footer style={{ backgroundColor: "#0d1117", color: "#ffffff", padding: "40px 20px" }}>
      <Row gutter={[32, 32]} justify="center">
        {/* Left Section */}
        <Col xs={24} sm={12} lg={10}>
          <Title level={2} style={{ color: "#ffffff" }}>
            Get in touch
          </Title>
          <Text style={{ color: "#ccc", display: "block", marginBottom: "20px" }}>
            We'd love to hear from you. Our team is always here to chat.
          </Text>

          {/* Contact Information */}
          <div style={{ marginBottom: "20px" }}>
            <MailOutlined style={{ fontSize: "20px", color: "#ffffff", marginRight: "10px" }} />
            <Text style={{ color: "#ffffff" }}>Chat to us</Text>
            <br />
            <Text style={{ color: "#ccc" }}>thechers4@gmail.com</Text>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <PhoneOutlined style={{ fontSize: "20px", color: "#ffffff", marginRight: "10px" }} />
            <Text style={{ color: "#ffffff" }}>Phone</Text>
            <br />
            <Text style={{ color: "#ccc" }}>Mon - Sat, 9AM - 7PM</Text>
            <br />
            <Text style={{ color: "#ccc" }}>+260 893 090 500</Text>
          </div>

          {/* Social Media Links */}
          <div>
            <Text style={{ color: "#ffffff", display: "block", marginBottom: "10px" }}>Follow us</Text>
            <LinkedinOutlined style={{ fontSize: "24px", color: "#ffffff", marginRight: "15px" }} />
            <TwitterOutlined style={{ fontSize: "24px", color: "#ffffff", marginRight: "15px" }} />
            <InstagramOutlined style={{ fontSize: "24px", color: "#ffffff", marginRight: "15px" }} />
          </div>
        </Col>

        {/* Right Section */}
        <Col xs={24} sm={12} lg={10}>
          <Text style={{ color: "#ccc", display: "block", marginBottom: "20px" }}>
            Do you have any enquiries? Fill the form below to reach out directly. Our team will get back to you ASAP!
          </Text>
          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input placeholder="Your Name" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input placeholder="Your Email" />
            </Form.Item>

            <Form.Item
              label="Message"
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input.TextArea rows={4} placeholder="Your Message" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                SEND YOUR MESSAGE
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Footer>
  );
};

export default ContactFooter;

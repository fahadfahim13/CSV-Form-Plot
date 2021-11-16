import React from 'react';

import { Col, Row } from 'antd';

import VideoPlayer from 'components/VideoPlayer';

import styles from './TemplateDetails.module.scss';

const TemplateDetails = () => {
  return (
    <Row justify="center" gutter={[18, 0]} className={styles.container}>
      <Col span={8} className="gutter-row">
        <div>
          <Row gutter={[0, 3]}>
            <Col span={24} className="gutter-row">
              <div className={styles.tabs}>Tabs</div>
            </Col>
            <Col span={24} className="gutter-row">
              <div className={styles.tabDetails}>Tab details</div>
            </Col>
          </Row>
        </div>
      </Col>
      <Col span={13} className="gutter-row">
        <div>
          <Row gutter={[0, 10]}>
            <Col span={24}>
              <div className={styles.overlayOptions}>Overlay options</div>
            </Col>
            <Col span={24}>
              <div className={styles.player}>
                <VideoPlayer durationInFrames={300} playerBackgroundColor="#fff" />
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.templateNameSection}>Template Name Component</div>
            </Col>
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default TemplateDetails;

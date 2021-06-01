import {useState,useEffect,useRef} from 'react';
import {utils,components} from '@common';
import {Table as AntTable} from 'antd';
import ECharts from 'echarts-for-react';
import Panel from '@app/components/panel';
import {colCfg,tableCfg} from '@app/utils/config';
import './index.less';

import defaultOpts from '@app/models/screen1/defaultOpts';
import {
  option1,
  option2,
  option3,
  option4,
  option5,
  option6,
  option7,
  option8,
  option9,
  option10,
  option11,
  option12,
  columns1,
  columns2,
  dataSource1,
  dataSource2,
} from '@app/models/screen1';

const {Row,Col,Spinner}=components;

const ReactECharts=props=><ECharts {...props} theme="dark-screen" />;

const Table=({style,...rest})=><div style={{height:style?.height??300,overflow:'auto'}}><AntTable {...rest} {...tableCfg} /></div>;

const Index=props=>{
  const [charts,setCharts]=useState(null);
  useEffect(()=>{
    const getCharts=async ()=>{
      const echarts=await import('echarts');
      echarts.registerTheme('dark-screen',defaultOpts);
      setCharts(echarts);
    };
    getCharts();
  },[]);
  if(!charts){
    return <Spinner global />;
  }
  return <div className="page">
    <Row>
      <Col>
        <Row gutter={[12,12]}>
          <Col span={3} {...colCfg}>
            <Panel>
              <ReactECharts option={option6} style={{height:'160px'}} />
            </Panel>
          </Col>
          <Col span={3} {...colCfg}>
            <Panel>
              <ReactECharts option={option5} style={{height:'160px'}} />
            </Panel>
          </Col>
          <Col span={3} {...colCfg}>
            <Panel>
              <ReactECharts option={option7} style={{height:'160px'}} />
            </Panel>
          </Col>
          <Col span={3} {...colCfg}>
            <Panel>
              <ReactECharts option={option12} style={{height:'160px'}} />
            </Panel>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row gutter={[12,12]}>
          <Col span={4} {...colCfg}>
            <Row>
              <Col>
                <Panel>
                  <ReactECharts option={option8} />
                </Panel>
              </Col>
              <Col>
                <Panel>
                  <ReactECharts option={option10} style={{height:'240px'}} />
                </Panel>
              </Col>
            </Row>
          </Col>
          <Col span={8} {...colCfg}>
            <Row>
              <Col span={8}>
                <Panel>
                  <ReactECharts option={option2} />
                </Panel>
              </Col>
              <Col span={4}>
                <Panel>
                  <ReactECharts option={option11} />
                </Panel>
              </Col>
            </Row>
            <Row>
              <Col>
                <Panel>
                  <Table columns={columns1} dataSource={dataSource1} style={{height:'240px'}} />
                </Panel>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row gutter={[12,12]}>
          <Col span={8} {...colCfg}>
            <Panel>
              <ReactECharts option={option3} />
            </Panel>
          </Col>
          <Col span={4} {...colCfg}>
            <Panel>
              <ReactECharts option={option9} />
            </Panel>
          </Col>
        </Row>
      </Col>
      <Col>
        <Row gutter={[12,12]}>
          <Col span={6} {...colCfg}>
            <Panel>
              <ReactECharts option={option4} />
            </Panel>
          </Col>
          <Col span={6} {...colCfg}>
            <Panel>
              <Table columns={columns2} dataSource={dataSource2} />
            </Panel>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>;
};

export default Index;


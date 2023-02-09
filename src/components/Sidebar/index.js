import { Layout } from 'antd';
import './index.scss';

const { Sider } = Layout;

export default () => (
  <>
    <Layout className='left-sidebar'>
      <Sider />
    </Layout>
    <Layout className='right-sidebar'>
      <Sider />
    </Layout>
  </>
);

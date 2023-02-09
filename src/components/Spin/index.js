import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const antIcon = (
  <LoadingOutlined style={{ fontSize: 24, marginLeft: 500 }} spin />
);

export default () => <Spin indicator={antIcon} />;

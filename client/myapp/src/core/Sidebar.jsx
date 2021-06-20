import { Menu } from 'antd';
import { BankOutlined, AppleOutlined, DingtalkOutlined} from '@ant-design/icons';

const { SubMenu } = Menu;

function Sidebar() {

    
    return (
        <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<AppleOutlined />} title="Technology">
          <Menu.ItemGroup key="g1" title="Smartphone">
            <Menu.Item key="1">Iphone</Menu.Item>
            <Menu.Item key="2">Oppo</Menu.Item>
            <Menu.Item key="3">Samsung</Menu.Item>
            <Menu.Item key="4">Others</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Laptop">
            <Menu.Item key="5">Macbook</Menu.Item>
            <Menu.Item key="6">Dell</Menu.Item>
            <Menu.Item key="7">Asus</Menu.Item>
            <Menu.Item key="8">Others</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<BankOutlined />} title="Household tools">
          <Menu.Item key="9">Television</Menu.Item>
          <Menu.Item key="10">Refrigerator</Menu.Item>
          <Menu.Item key="11">Kitchen tools</Menu.Item>
          <Menu.Item key="12">Others</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<DingtalkOutlined />} title="Style">
          <Menu.Item key="13">Lady</Menu.Item>
          <Menu.Item key="14">Gentlement</Menu.Item>
          <Menu.Item key="15">Kid</Menu.Item>
          <Menu.Item key="16">Older People</Menu.Item>
        </SubMenu>
      </Menu>
    )
}

export default Sidebar

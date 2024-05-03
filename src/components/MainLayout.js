import React, { useState } from 'react';
//import { useToken } from 'antd';
import { MdDashboard } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { FaUsers, FaRectangleList } from "react-icons/fa6";
import { IoMdAddCircle, IoMdColorPalette } from "react-icons/io";
import { SiBrandfolder, SiMicrodotblog, SiBloglovin } from "react-icons/si";
import { FaListUl, FaBlogger } from "react-icons/fa";
import { TbCategoryFilled } from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
import { AiOutlineBgColors } from "react-icons/ai";
import { IoBagCheckSharp } from "react-icons/io5";
import { ImBlog } from "react-icons/im";
import { Link, Outlet } from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";
import { MenuFoldOutlined,MenuUnfoldOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>JM</span>
            <span className='lg-logo' >Jace Marketplace</span>
            </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({key})=>{
            if(key==='signout'){

            }else{
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <MdDashboard className='fs-4' />,
              label: 'DASHBOARD',
            },
            {
              key: 'customers',
              icon: <FaUsers className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'orders',
              icon: <IoBagCheckSharp className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'catalog',
              icon: <MdShoppingCart className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'Product',
              icon: <IoMdAddCircle className='fs-4' />,
              label: 'Add Product',
                },
                {
                  key: 'Product-list',
              icon: <FaListUl className='fs-4' />,
              label: 'Product List',
                },
                {
                  key: 'brand',
              icon: <SiBrandfolder className='fs-4' />,
              label: 'Brand',
                },
                {
                  key: 'list-brand',
              icon: <FaRectangleList className='fs-4' />,
              label: 'Brand List',
                },
                {
                  key: 'category',
              icon: <TbCategoryFilled className='fs-4' />,
              label: 'Category',
                },
                {
                  key: 'list-category',
              icon: <BiCategoryAlt className='fs-4' />,
              label: 'Category List',
                },
                {
                  key: 'color',
              icon: <AiOutlineBgColors className='fs-4' />,
              label: 'Color',
                },
                {
                  key: 'list-color',
              icon: <IoMdColorPalette className='fs-4' />,
              label: 'Color List',
                },
              ]
            },
            {
              key: 'blogs',
              icon: <FaBlogger className='fs-4' />,
              label: 'Blogs',
              children: [
                {
                  key: 'blog',
              icon: <FaBlogger className='fs-4' />,
              label: 'Add Blog',
                },
                {
                  key: 'blog-list',
              icon: <ImBlog className='fs-4' />,
              label: 'Blog List',
                },
                {
                  key: 'blog-category',
              icon: <SiMicrodotblog className='fs-4' />,
              label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
              icon: <SiBloglovin className='fs-4' />,
              label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <IoBagCheckSharp className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
        className="d-flex justify-content-between ps-1 pe-5"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className='d-flex gap-4 align-items-center'>
            <div className='position-relative'>
              <IoNotifications className='fs-4'/>
            <span className='badge bg-warning rounded-circle position-absolute' >
              3
              </span>
            </div>
            <div className='d-flex gap-3 align-items-center dropdown' >
              <div>
                <img
                width={32}
                height={32}
                 src='https://stroyka-admin.html.themeforest.scompiler.ru/variants/ltr/images/customers/customer-4-64x64.jpg' 
                 alt='' />
              </div>
              <div
              role='button' 
              id='dropdownMenuLink' 
              data-bs-toggle='dropdown' 
              aria-expanded='false'>
                <h5 className='font-bold mb-0'>Jack Ma</h5>
                <p className='mb-0'>jackmuriithi0@gmail.com</p>
              </div>
            </div><div className='dropdown-menu' aria-labelledby='dropdownMenuLink'>
            <li><Link className='dropdown-item' to='/'>View Profile</Link></li>
            <li><Link className='dropdown-item' to='/'>signout</Link></li>
          </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
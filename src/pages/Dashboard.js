import React from 'react'
import { GoArrowDownRight, GoArrowUpRight } from "react-icons/go";
import { Column } from '@ant-design/plots';
import { Table } from 'antd';
const columns = [
  {
    title: 'No',
    dataIndex: 'Key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Jack Kinyua ${i}`,
    product: 32,
    status: `Kasarani, Nairobi Kenya. ${i}`,
  });
}
const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 65,
    },
    {
      type: 'Mar',
      sales: 30,
    },
    {
      type: 'Apr',
      sales: 80,
    },
    {
      type: 'May',
      sales: 50,
    },
    {
      type: 'Jun',
      sales: 90,
    },
    {
      type: 'Jul',
      sales: 18,
    },
    {
      type: 'Aug',
      sales: 10,
    },
    {
      type: 'Sep',
      sales: 70,
    },
    {
      type: 'Oct',
      sales: 50,
    },
    {
      type: 'Nov',
      sales: 80,
    },
    {
      type: 'Dec',
      sales: 98,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    XAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Months',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <div>
      <h3 className='mb-4 title'>
        Dashboard
      </h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded -3'>
          <div>
            <p className='desc'>Total</p> <h4 className='mb-0 sub-title'>KES 120,000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <GoArrowUpRight /> 52%</h6>
            <p className='mb-0 desc'>Compared to December 2023</p>
          </div>
          </div>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded -3'>
          <div>
            <p className='desc'>Total</p> <h4 className='mb-0 sub-title'>KES 80,000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'>
              <GoArrowDownRight /> 32%</h6>
            <p className='mb-0 desc'>Compared to December 2023</p>
          </div>
          </div>
          <div className='d-flex justify-content-between align-items-end flex-grow-1 bg-white p-3 rounded -3'>
          <div>
            <p className='desc'>Total</p> <h4 className='mb-0 sub-title'>KES 160,000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'>
              <GoArrowUpRight /> 62%</h6>
            <p className='mb-0 desc'>Compared to December 2023</p>
          </div>
          </div>
        </div>
        <div className='mt-4'>
          <h3 className='mb-5 title'>Income Statics</h3>
          <div>
          <Column {...config} />
          </div>
        </div>
        <div className='mt-4'>
          <h4 className='mb-5 title'>Recent Orders</h4>
          <div>
          <Table columns={columns} dataSource={data1} />
          </div>
        </div>
      </div>
  )
}

export default Dashboard
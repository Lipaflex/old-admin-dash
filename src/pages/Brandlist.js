import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getBrands } from '../features/brand/brandSlice';
import { Link } from 'react-router-dom';
import { BiSolidEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const columns = [
    {
      title: 'SNo',
      dataIndex: 'Key',
      render: (text, record) => record.key,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
const Brandlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  },[])
  const brandState = useSelector((state) => state.brand.brands);
  const data1 = [];
  for (let i = 0; i < brandState.length; i++) {
    data1.push({
      key: i + 1,
      name: brandState[i].title,
      action: (
        <>
      <Link className='ms-3 fs-4 text-blue' to='/'>
      <BiSolidEdit />
      </Link>
      <Link className='ms-3 fs-4 text-danger'  to='/'>
      <AiFillDelete/>
      </Link>
      </>
      )
    });
  }
  return (
    <div>
        <h3 className='mb-4 title'>Brands</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}
export default Brandlist
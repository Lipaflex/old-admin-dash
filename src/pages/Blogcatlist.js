import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiSolidEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { getCategories } from '../features/bcategory/bcategorySlice';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'Key',
    render: (text, record) => record.key,

  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Action',
    dataIndex: 'action',
  },
];

const Blogcatlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories())
  }, []);
  const bCatState = useSelector((state) => state.bCategory.bCategories);
  const data1 = [];
  for (let i = 0; i < bCatState.length; i++) {
    data1.push({
      key: i+1,
      name: bCatState[i].title,
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
        <h3 className='mb-4 title'>Blog Categories</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}
export default Blogcatlist
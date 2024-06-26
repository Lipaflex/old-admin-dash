import React, { useEffect } from 'react'
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { BiSolidEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getBlogs } from '../features/blogs/blogSlice';

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
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
const Bloglist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlogs());
  },[])
  const getBlogState = useSelector(state => state.blogs.blogs);
  const data1 = [];
  for (let i = 0; i < getBlogState.length; i++) {
    data1.push({
      key: i + 1,
      name: getBlogState[i].title,
      category: getBlogState[i].category,
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
  }  return (
    <div>
        <h3 className='mb-4 title'>Blog List</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}

export default Bloglist
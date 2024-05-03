import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiSolidEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { getColors } from '../features/color/colorSlice';

const columns = [
    {
      title: 'SNo',
      dataIndex: 'Key',
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
  
const Colorlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getColors())
  }, []);
  const colorState = useSelector((state) => state.color.colors);
  const data1 = [];
  for (let i = 0; i < colorState.length; i++) {
    data1.push({
      key: i + 1,
      name: colorState[i].title,
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
        <h3 className='mb-4 title'>Colors</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}
export default Colorlist
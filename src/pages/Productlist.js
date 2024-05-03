import React, { useEffect } from 'react'
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../features/product/productSlice';
import {Link} from 'react-router-dom';
import { BiSolidEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { Avatar } from 'antd';
//import { FaRegEdit } from "react-icons/fa";
//import { MdDeleteSweep } from "react-icons/md";

const columns = [
  {
    title: 'SNo',
    dataIndex: 'Key',
    render: (text, record) => record.key,
  },
  {
    title: 'Image',
    dataIndex: 'image',
    render: (text, record) => (
      <Avatar src={record.images} />
    ),
  },
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.length - b.title.length,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
      sorter: (a, b) => a.brand.length - b.brand.length,

    },
    {
      title: 'Category',
      dataIndex: 'category',
      sorter: (a, b) => a.category.length - b.category.length,

    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,

    },
    {
      title: 'Color',
      dataIndex: 'color',
      sorter: (a, b) => a.color.length - b.color.length,

    },
    {
      title: 'Action',
      dataIndex: 'action',
    },
  ];
  
const Productlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  },[]);
  const productState = useSelector((state) => state.product.products)
  const data1 = [];
  for (let i = 0; i < productState.length; i++) {
    data1.push({
      key: i + 1,
      image: productState[i].images,
      title: productState[i].title,
      brand: productState[i].brand,
      category: productState[i].category,
      color: productState[i].color,
      price: `${productState[i].price}`,
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
        <h3 className='mb-4 title'>Products</h3>
        <div>
        <Table columns={columns} dataSource={data1} />
        </div>
    </div>
  )
}
export default Productlist
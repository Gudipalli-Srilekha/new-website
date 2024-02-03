import { Dropdown, Space } from 'antd';
import React from 'react';
import { FaRegUserCircle } from 'react-icons/fa';

const ProfileDropdown = () => {
  const onClicked = () => {
    localStorage.clear('token');
    window.location.href = '/';
  };
  const items = [
    {
      key: '1',
      label: <div onClick={onClicked}>logout</div>,
    },
  ];
  return (
    <>
      <div>
        <Dropdown
          menu={{
            items,
          }}
        >
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <FaRegUserCircle />
            </Space>
          </a>
        </Dropdown>
      </div>
    </>
  );
};

export default ProfileDropdown;
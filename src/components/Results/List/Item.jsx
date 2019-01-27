import React from 'react';
import { List as AntList, Avatar } from 'antd';

const Item = ({ data }) => (
  <AntList.Item>
    <AntList.Item.Meta
      avatar={
        data.images &&
        data.images.length > 0 && <Avatar src={data.images[0].url} />
      }
      title={
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={data.external_urls.spotify}
        >
          {data.name}
        </a>
      }
      description={`${
        data.popularity ? `Popularity: ${data.popularity}` : ''
      } ${data.release_date ? `Release Date: ${data.release_date}` : ''}`}
    />
  </AntList.Item>
);

export default Item;

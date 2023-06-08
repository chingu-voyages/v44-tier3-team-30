import React from 'react'

const blogCard = (props) => {

    const { title, description, image, username, time, id, isUser } = props;

  return (
    <div>
        <div class="ag-format-container">
  <div class="ag-courses_box">
    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">{title}</div>

        <div class="ag-courses-item_author">
          Author : <div className="ag-courses-item_date">{username}</div> 
        </div>
        {/* <div class="ag-courses-item_date-box">
          Published :<span class="ag-courses-item_date">{time}</span>
        </div> */}
      </a>
    </div>
  </div>
</div>;
    </div>
  )
}

export default blogCard

import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from './features/counter/userSlice'
import './Sidebar.css'


function Sidebar() {

    const user = useSelector(selectUser)

    const recentItem = (topic) =>(
        <div className="sidebar_recentItem">
            <span className="sidebar_hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className='sidebar_top'>
            <img  src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHsA2wMBIgACEQEDEQH/xAAbAAEBAQEAAwEAAAAAAAAAAAACAQADBQYHBP/EABkQAQEBAQEBAAAAAAAAAAAAAAABERICIf/EABsBAQEBAAMBAQAAAAAAAAAAAAMCAQAGBwQF/8QAGhEBAQEBAQEBAAAAAAAAAAAAAAECEhETA//aAAwDAQACEQMRAD8A+PTyWHyvLuOo3OBnkpCwpA2HzkJCkKQpBaj6M5HCkKRZAahsxIUbFkDqPozFhRMKQOsny0KJhQOsmjFEii1k+SKIsBcvozShQClDrJ86KHAlXRXB86OUtc4UodYPnbpClcpSlDrB87dZV6c5WDcHn6PXOVx05XHp9jy6Yc+Snk8XkWoXOAxcKQpBWFzkJFkPGwVhs5HCkWRQ3JcxMWRZFFclzGZWFrJYsVCFrJZViowrkudEyMHWTTRxdCFotZLnRytoRdDcFmzlLQ1tFrBZt1lbXPW6FcFn6PHcty6cry9HsdImHPlsdMbBWKmXPFw+VwVi5kMbDxsHYSQWLGwWouQcJcbB2EkSRsVsFcriFEWDuVSsqMK5JKqio7lc0SIwrhfRaugorhc2etoa2iuCTbpqaGt0O4V9G5bl15Tl3+x+Fw58py68tfNHY2YcsbHTlMHY3kMbDxsFcqmQxsPGxFz6qTwcE6g7lqISDuWoyoO5cZmQesKlXW1EHct6LW0U0dw3otbR1tHcKmy1dDUtHcN7Ppug1NRw36PI8pjtyl8u6+C4ccax15GxFjOXPEx05TB2M5c7Ex0xMRY54GJh2JYOxngYmHYlRY4NiFiJuWCy4w7lz1ErUUXLLpUZLR3LOmS1tRFyzpdQdS1Fwzs9S0NTUXDn0PW1z1tHcOfR7Byl8u/I3y7bY/T+bjYnLtYNiUXDlYNjriWJsTcuVg462DYixFy5WNh0aixFgCeJYi5SFSng4i5TRSrRqeUWpRXEqeUWpUrUai4TdNqWtU1FwjpLUtajai4RdqNqUbU3Cb+hamjamo4T9HuXI3y73yN8uy2O2XDhfIWP0XyF8osHcuGJXW+RvlPgrlywbHWwLGeDsc8Gx0sHE+CscrEsOpU3Iq52DTH0m5RQsGlRTyKjQp0Km5FalGrRtTyO6S0bWtGp5FdJaNq0LU3ArtbQta0LU8Du1tTRtTU3Ar+j6HZ8C+XapX7j0XWY4WBfLtQrA6kcr5Cx2oVngdRxsCx29OdT4CxzvkLHT0FSHQWBToemeA0FH0dD0mi050aYVzyAo0KdCpuYKjXP0dD0zyPn1RoVfQVPkDq1LQ9UqHpnkDrVTRtajU8wOtVLR1vQs5gbqv/Z' alt='' />
            <Avatar src={user.photoUrl} className='sidebar_avatar' >{user.email[0]}</Avatar>
            <h2>{user.displayName}</h2>
            <h4>{user.email}</h4>
        </div>

<div className='sidebar_stats'>
    <div className='sidebar_stat'>
        <p> Who viewed you</p>
        <p className='sidebar_statNumber'>1002</p>
    </div>

    <div className='sidebar_stat'>
        <p> Views on post </p>
        <p className='sidebar_statNumber'>4502</p>
    </div>
</div>

<div className='sidebar_button'>
    <p>Recent</p>
    {recentItem('reactjs')}
    {recentItem('programming')}
    {recentItem('softwareEngineering')}
    {recentItem('design')}
</div>

    </div>
  )
}

export default Sidebar
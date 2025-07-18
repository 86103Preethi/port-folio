import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import food from '../assets/food-thumbnail.jpg';
import portfolio from '../assets/portfolio-thumbnail.png';
import data from '../assets/data visualization - thumbnail.jpg';
import church from '../assets/church - thumbnail.jpeg';
import todolist from '../assets/to do list - thumbnail.jpg';

import dashVideo from '../assets/videos/dashboard video.mp4';
import foodVideo from '../assets/videos/foodcart video.mp4';
import churchVideo from '../assets/videos/church video.mp4';
import Slider from 'react-slick';

const workData = [
   {
    title: 'Church Website',
    image: church,
    description: 'Developed a clean, responsive website for a local church with pages for sermons, events, and contact, using HTML, CSS, Tailwind CSS and React.',
    certificate: 'https://www.rakshaprayerhouse.org',
    video:churchVideo
  },
  {
    title: 'Food Website',
    image: food,
    description: 'Created an interactive food ordering website with dynamic menus and cart features using React, optimized for both desktop and mobile devices.',
    certificate: 'https://github.com/86103Preethi/food-cart',
    video:foodVideo
  },
  {
    title: 'Data Visualization Dashboard',
    image: data,
    description: 'Built a dynamic dashboard to visualize complex datasets using React and rechart libraries, including filters, charts, and analytics widgets.',
    certificate: '#',
    video:dashVideo
  },
  {
    title: 'Portfolio Website',
    image: portfolio,
    description: 'Designed and developed a fully responsive personal portfolio using React and Tailwind CSS to showcase skills, projects, and contact information.',
    certificate: 'https://github.com/86103Preethi/port-folio',
    video:dashVideo
  },
    {
    title: 'To do list',
    image: todolist,
    description: 'A basic to do list for your daily routine.',
    certificate: 'https://github.com/86103Preethi/To-do-list---react',
    video:dashVideo
  },
];


const Work = () => {

  const [open, setOpen] = React.useState(false);
  const [selectedVideo, setSelectedVideo] = React.useState(null);

  const handleOpen = (video) => {
    setSelectedVideo(video);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedVideo(null);
  };


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px', 
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
          centerMode: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '30px',
          centerMode: false,
        }
      }
    ]
  };


  return (
    <div name="project" className="w-full bg-black text-[#ccd6f6] flex items-center text-center min-h-screen px-5">
      <div className="max-w-[1500px] mx-auto w-full">
        <div className='sm:mb-10'>
          <p className="text-4xl md:text-6xl font-bold inline border-b-4 border-[#c76acb] mb-4">Projects</p>
          <p className="text-[#d1d5db] py-6">A Collection of My Mini Builds & Ideas</p>
        </div>
        <Slider {...settings} >
          {workData.map((item, index) => (
            <div key={index} className='px-2'>
              <Card sx={{ maxWidth: 345, display:'flex',flexDirection: 'column',justifyContent: 'space-between',backgroundColor: '#1f1f1f', color: 'white', margin: 'auto', height: 400}}>
                <CardMedia
                  component="img"
                  sx={{ height: 200, objectFit: 'cover' }}
                  image={item.image}
                  alt={item.title}
                  className='hover:opacity-70'
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h6">{item.title}</Typography>
                  <Typography variant="body2" sx={{color: '#9ca3af', overflow: 'hidden',display: '-webkit-box',WebkitLineClamp: 6, WebkitBoxOrient: 'vertical',}}>{item.description}</Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'space-between', px: 2}}>
                  <Button size="small" href={item.certificate} target="_blank" variant="outlined" sx={{ color: '#c76acb', borderColor: '#c76acb' }}>
                    Source Code
                  </Button>
                  <Button size="small" onClick={() => handleOpen(item.video)} variant="outlined" sx={{ color: '#c76acb', borderColor: '#c76acb' }}>
                    Sample Video
                  </Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </Slider>
      </div>
    
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <div className="flex justify-end p-2">
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <DialogContent>
          {selectedVideo && (
            <video controls style={{ width: '100%' }}>
              <source src={selectedVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default Work;

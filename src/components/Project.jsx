import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';


import food from '../assets/food-thumbnail.jpg';
import portfolio from '../assets/portfolio-thumbnail.png';
import data from '../assets/data visualization - thumbnail.jpg';
import church from '../assets/church - thumbnail.jpeg';
import todolist from '../assets/to do list - thumbnail.jpg';

import dashVideo from '../assets/videos/dashboard video.mp4';
import foodVideo from '../assets/videos/foodcart video.mp4';


const workData = [
   {
    title: 'Church Website',
    image: church,
    description: 'Developed a clean, responsive website for a local church with pages for sermons, events, and contact, using HTML, CSS, Tailwind CSS and React.',
    certificate: 'https://www.rakshaprayerhouse.org',
    video:dashVideo
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


  return (
    <div name="project" className="w-full bg-black text-[#ccd6f6] py-16 px-5">
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="text-4xl font-bold inline border-b-4 border-[#c76acb] mb-4">
          Projects
        </p>
        <p className="text-[#6b7280] py-6">
          My Latest work and experiments
        </p>

        <Grid container spacing={4} justifyContent="center">
          {workData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, mx: 'auto', backgroundColor: '#1f1f1f', color: 'white' }}   className='hover:opacity-70'>
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#9ca3af' }}>
                    {item.description}
                  </Typography>
                </CardContent>

                <div className='flex justify-between'>
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    href={item.certificate}
                    target="_blank"
                    sx={{ color: '#c76acb', borderColor: '#c76acb' }}
                  >
                    Source Code
                  </Button>
                </CardActions>

                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    onClick = {() => handleOpen(item.video)}
                    sx={{ color: '#c76acb', borderColor: '#c76acb' }}
                  >
                    Sample Video
                  </Button>
                </CardActions>
                </div>



              </Card>
            </Grid>
          ))}
        </Grid>
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

import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import food from '../assets/food-thumbnail.jpg';
import portfolio from '../assets/portfolio-thumbnail.png';
import data from '../assets/data visualization - thumbnail.jpg';
import church from '../assets/church - thumbnail.jpeg';


const workData = [
   {
    title: 'Church Website',
    image: church,
    description: 'Developed a clean, responsive website for a local church with pages for sermons, events, and contact, using HTML, CSS, Tailwind CSS and React.',
    certificate: '#',
  },
  {
    title: 'Food Website',
    image: food,
    description: 'Created an interactive food ordering website with dynamic menus and cart features using React, optimized for both desktop and mobile devices.',
    certificate: '#',
  },
  {
    title: 'Data Visualization and Dashboard',
    image: data,
    description: 'Built a dynamic dashboard to visualize complex datasets using React and Chart.js, including filters, charts, and analytics widgets.',
    certificate: '#',
  },
  {
    title: 'Portfolio Website',
    image: portfolio,
    description: 'Designed and developed a fully responsive personal portfolio using React and Tailwind CSS to showcase skills, projects, and contact information.',
    certificate: '#',
  },
];


const Work = () => {
  return (
    <div name="work" className="w-full bg-black text-[#ccd6f6] py-16 px-6">
      <div className="max-w-[1000px] mx-auto text-center">
        <p className="text-4xl font-bold inline border-b-4 border-[#c76acb] mb-4">
          Projects
        </p>
        <p className="text-[#6b7280] mt-2 mb-8">
          My Latest work and experiments
        </p>

        <Grid container spacing={4} justifyContent="center">
          {workData.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ maxWidth: 345, mx: 'auto', backgroundColor: '#1f1f1f', color: 'white' }}   className='hover:opacity-70 hover:scale-110 transition-all duration-500'>
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
                <CardActions>
                  <Button
                    size="small"
                    variant="outlined"
                    href={item.certificate}
                    target="_blank"
                    sx={{ color: '#c76acb', borderColor: '#c76acb' }}
                  >
                    Source
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Work;

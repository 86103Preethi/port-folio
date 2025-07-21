import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const experiences = [
    {
    company: 'Mariyano Technologies Pvt Ltd',
    location: 'Karapakkam, Chennai',
    role: 'Junior Front-End Developer',
    period: 'Mar 2023 - Present',
    description: 'Developed responsive UI using React, Tailwind CSS, HTML, and CSS. Contributed to live projects including web apps and dashboards.',
    tags: ['HTML5', 'CSS3', , 'Javascript (ES6+)', 'React.js', 'Tailwind CSS', 'Svelte.js', 'Typescript', 'GSAP', 'Phasor.io'],
  },
  {
    company: 'Augray Pvt Ltd',
    location: 'Guindy, Chennai',
    role: 'Technical Business Analyst Intern',
    period: 'Mar 2022 - Oct 2022',
    description: 'Worked on immersive technologies like AR, VR, and XR for enterprise solutions, collaborating with product and tech teams. Developed flowcharts and made analysis about the project.',
    tags: ['AR', 'VR', 'XR', 'Analysis', 'Documentation', 'Presentation'],
  },
];

const Work = () => {
  return (
    <div name="work" className="bg-black text-white min-h-screen text-center flex items-center px-5">
      <div className="max-w-[900px] mx-auto w-full mt-10">
        <div className=''>
          <p className="text-5xl font-bold inline border-b-4 border-[#c76acb] text-[#ccd6f6] mb-4">Experience</p>
          <p className="text-[#d1d5db] py-6 md:text-xl">My journey so far in the tech industry</p>
        </div>
        <Grid container spacing={4} direction="column" alignItems="center">
          {experiences.map((exp, idx) => (
            <Grid item xs={12} sm={6} md={6} key={idx}>
              <Card variant="outlined" sx={{ MaxWidth: 900, mx: 'auto', backgroundColor: '#1f1f1f', color: '#fff' }}>
                <Box sx={{ p: 2 }}>
                  <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' } }} >
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#c76acb',fontSize: { xs: '0.8rem', sm: '1.25rem' } }} >
                      {exp.period}
                    </Typography>
                  </Stack>
                  <Divider sx={{ borderColor: '#333' }} />

                  <Typography sx={{ color: 'white', pt:1, fontWeight: 'bold', fontSize: { xs: '0.9rem', sm: '1.3rem' } }}>
                    {exp.role} — {exp.location}
                  </Typography>

                  <Typography variant="body2" sx={{ color: '#d1d5db', mt: 1 }}>
                    {exp.description}
                  </Typography>
                </Box>
                <Divider sx={{ borderColor: '#333' }} />
                <Box sx={{ p: 2 }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{rowGap: 1}}>
                    {exp.tags.map((tag, index) => (
                      <Chip key={index} label={tag} size="small" color='primary' sx={{background: '#c76acb', mb : 1, mt:1}}/>
                    ))}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Work;

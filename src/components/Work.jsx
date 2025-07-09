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
    tags: ['React.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Svelte.js', 'Javascript (ES6+)', 'Typescript', 'GSAP', 'Phasor.io'],
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
    <div className="w-full bg-black text-white py-16 px-5" name="work">
      <div className="max-w-[1000px] mx-auto p-4 text-center">
        <p className="text-4xl font-bold inline border-b-4 border-[#c76acb] mb-4">Experience</p>
        <p className="text-[#6b7280] py-6">My journey so far in the tech industry</p>

        <Grid container spacing={4} direction="column" alignItems="center">
          {experiences.map((exp, idx) => (
            <Grid item xs={12} sm={6} md={6} key={idx}>
              <Card variant="outlined" sx={{ maxWidth: 800, mx: 'auto', backgroundColor: '#1f1f1f', color: '#fff' }}>
                <Box sx={{ p: 2 }}>
                  <Stack
                    direction="row"
                    sx={{ justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#c76acb' }}>
                      {exp.period}
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle2" sx={{ color: '#9ca3af' }}>
                    {exp.role} — {exp.location}
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#d1d5db', mt: 1 }}>
                    {exp.description}
                  </Typography>
                </Box>
                <Divider sx={{ borderColor: '#333' }} />
                <Box sx={{ p: 2 }}>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {exp.tags.map((tag, index) => (
                      <Chip key={index} label={tag} size="small" color='primary' sx={{ background: '#c76acb' , mb : 1 , mt:1}}/>
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

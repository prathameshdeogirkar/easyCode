import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import AddCommentIcon from '@mui/icons-material/AddComment';
import PersonIcon from '@mui/icons-material/Person';
import QuizIcon from '@mui/icons-material/Quiz';
import CastForEducationIcon from '@mui/icons-material/CastForEducation';

const actions = [
  { icon: <AddCommentIcon />, name: 'Add Course' },
  { icon: <PersonIcon />, name: 'All User' },
  { icon: <QuizIcon />, name: 'Add Quiz' },
  { icon: <CastForEducationIcon/>, name: 'ALL Courses' },
];

export default function Speeddial() {
  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: "-80%", right: "5%"  }}
        icon={<SpeedDialIcon/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import './App.css';

import Education from './pages/education';
import HealthCare from './pages/healthcare';
import News from "./pages/news";
import ProgramsEventsSchemes from './pages/programs';
import WildlifeEcologyPage from './pages/wildlife_and_ecology';
import RootLayout from './layouts/RootLayout';
import Home from './pages/home';
import NotFound from './pages/not_found';
import { green } from '@mui/material/colors';
import WaterSolution from './pages/water_solution';
import WaterFilter from './pages/water_filter';
import WaterQualityDevice from './pages/WaterQualityDevice';

import withVoiceAssistant from './components/withVoiceAssistant';
import FloatingAssistantButton from './components/FloatingAssistantButton';

import VoiceChatBotTest from './pages/audio_record';

// Apply voice assistant to pages
const HomeWithVoiceAssistant = withVoiceAssistant(Home);
const HealthCareWithVoiceAssistant = withVoiceAssistant(HealthCare);
const EducationWithVoiceAssistant = withVoiceAssistant(Education);
const NewsWithVoiceAssistant = withVoiceAssistant(News);
const ProgramsWithVoiceAssistant = withVoiceAssistant(ProgramsEventsSchemes);
const WildlifeWithVoiceAssistant = withVoiceAssistant(WildlifeEcologyPage);
const WaterSolutionWithVoiceAssistant = withVoiceAssistant(WaterSolution);
const WaterFilterWithVoiceAssistant = withVoiceAssistant(WaterFilter);
const WaterQualityDeviceWithVoiceAssistant = withVoiceAssistant(WaterQualityDevice);

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: green[500]
      },
      secondary: {
        main: "#6c757d"
      }
    },
  });

  const router = createBrowserRouter([{
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        Component: HomeWithVoiceAssistant
      },
      {
        path: "healthcare",
        Component: HealthCareWithVoiceAssistant
      },
      {
        path: "education",
        Component: EducationWithVoiceAssistant
      },
      {
        path: "news",
        Component: NewsWithVoiceAssistant
      },
      {
        path: "programs",
        Component: ProgramsWithVoiceAssistant
      },
      {
        path: "wildlife",
        Component: WildlifeWithVoiceAssistant
      },
      {
        path: "water",
        Component: WaterSolutionWithVoiceAssistant,
      },
      {
        path: "water/filter",
        Component: WaterFilterWithVoiceAssistant
      },
      {
        path: "water/water_quality_device",
        Component: WaterQualityDeviceWithVoiceAssistant
      },
      
      {
        path: "audio_record_test",
        Component: VoiceChatBotTest
      }
    ]
  }]);

  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
// src/data/wildlifeData.js

// Conservation project data
export const conservationProjects = [
    {
      id: 1,
      title: "Community-Based Forest Management",
      description: "Empowering local communities to manage and protect forest resources while generating sustainable income.",
      image: "/api/placeholder/600/400",
      icon: "ForestOutlined",
      location: "Uttarakhand"
    },
    {
      id: 2,
      title: "Wildlife Corridor Protection",
      description: "Creating safe passages for animals to move between fragmented habitats, reducing human-wildlife conflict.",
      image: "/api/placeholder/600/400",
      icon: "PetsOutlined",
      location: "Karnataka-Tamil Nadu Border"
    },
    {
      id: 3,
      title: "Watershed Restoration",
      description: "Revitalizing water sources through traditional knowledge and modern conservation techniques.",
      image: "/api/placeholder/600/400",
      icon: "WaterOutlined",
      location: "Rajasthan"
    },
    {
      id: 4,
      title: "Sustainable Agriculture Training",
      description: "Teaching organic farming methods that work in harmony with local ecosystems.",
      image: "/api/placeholder/600/400",
      icon: "AgricultureOutlined",
      location: "Maharashtra"
    }
  ];
  
  // Success stories data
  export const successStories = [
    {
      id: 1,
      village: "Dharamjaigarh",
      state: "Chhattisgarh",
      achievement: "Increased forest cover by 15% while improving livelihoods through sustainable harvesting of non-timber forest products",
      impact: "250 families benefited with 40% income increase",
      image: "/api/placeholder/400/140"
    },
    {
      id: 2,
      village: "Periyar",
      state: "Kerala",
      achievement: "Former poachers now work as forest guides and protectors, leading to 70% reduction in illegal activities",
      impact: "Tourism revenue now supports 120 local families",
      image: "/api/placeholder/400/140"
    },
    {
      id: 3,
      village: "Banni",
      state: "Gujarat",
      achievement: "Traditional grassland management revived, supporting both livestock and wildlife conservation",
      impact: "Restored 12,000 hectares of grassland ecosystem",
      image: "/api/placeholder/400/140"
    }
  ];
  
  // Resources data
  export const resourcesList = [
    {
      id: 1,
      title: "Indigenous Plant Guide",
      icon: "LocalFloristOutlined"
    },
    {
      id: 2,
      title: "Water Conservation Handbook",
      icon: "WaterOutlined"
    },
    {
      id: 3,
      title: "Wildlife Identification App",
      icon: "PetsOutlined"
    }
  ];
  
  // Mission values data
  export const missionValues = [
    {
      id: 1,
      title: "Community Empowerment",
      icon: "VolunteerActivismOutlined"
    },
    {
      id: 2,
      title: "Ecological Conservation",
      icon: "LocalFloristOutlined"
    },
    {
      id: 3,
      title: "Sustainable Growth",
      icon: "TrendingUpOutlined"
    }
  ];
  
  // Ways to get involved
  export const involveItems = [
    {
      id: 1,
      title: "Volunteer for Conservation",
      description: "Join hands with local communities in protection efforts",
      icon: "ForestOutlined"
    },
    {
      id: 2,
      title: "Support Sustainable Agriculture",
      description: "Learn and promote eco-friendly farming practices",
      icon: "AgricultureOutlined"
    },
    {
      id: 3,
      title: "Wildlife Protection Programs",
      description: "Participate in monitoring and conservation initiatives",
      icon: "PetsOutlined"
    }
  ];
  
  // Theme configuration
  export const themeConfig = {
    colors: {
      primary: {
        main: "#2e7d32", // Forest green
        light: "#60ad5e",
        dark: "#005005",
        contrastText: "#ffffff"
      },
      secondary: {
        main: "#ff8f00", // Amber
        light: "#ffc046",
        dark: "#c56000",
        contrastText: "#000000"
      },
      success: {
        main: "#43a047",
        light: "#76d275",
        dark: "#00701a",
        contrastText: "#ffffff"
      }
    }
  };
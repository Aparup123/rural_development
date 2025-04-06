// NewsPage/components/CategoryList.js
import React from 'react';
import { List, ListItem, ListItemButton, ListItemText } from '@mui/material';

function CategoryList({ categories, selectedCategory, onCategorySelect }) {
  return (
    <List>
      {categories.map((category) => (
        <ListItem key={category.id} disablePadding>
          <ListItemButton 
            onClick={() => onCategorySelect(category.id)}
            selected={selectedCategory === category.id}
            sx={{
              borderLeft: selectedCategory === category.id ? `4px solid ${category.color}` : 'none',
              bgcolor: selectedCategory === category.id ? `${category.color}20` : 'transparent',
              '&:hover': { bgcolor: `${category.color}10` }
            }}
          >
            <ListItemText primary={category.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default CategoryList;
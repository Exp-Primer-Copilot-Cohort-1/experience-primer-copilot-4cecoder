function skillsMember(name, skills) {
    if (Array.isArray(skills) && skills.length > 0) {
      // Convert the skills array to a comma-separated string
      const skillsString = skills.join(', ');
      
      // Create a formatted string
      const formattedString = `${name} has the following skills: ${skillsString}.`;
      
      return formattedString;
    } else {
      return `${name} does not have any skills listed.`;
    }
  }
  

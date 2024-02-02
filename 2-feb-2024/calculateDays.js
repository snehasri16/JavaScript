function calculateDaysLeft(deadlineDate) {
    
    const deadline = new Date(deadlineDate);
    const currentDate = new Date();
    console.log(currentDate);
    
    const timeDifference = deadline - currentDate;
  
    const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    return daysLeft;
  }
  
  const deadline = "2024-02-18";
  const daysLeft = calculateDaysLeft(deadline);
  
  console.log(`Number of days left until ${deadline}: ${daysLeft} days`);
  
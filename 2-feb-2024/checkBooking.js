function checkAvailability(bookingDate) {
    const currentDate = new Date();
    console.log(currentDate);
    const bookingDateObj = new Date(bookingDate);
    const check = bookingDateObj > currentDate;
  
    return check;
  }
  
  console.log(checkAvailability("2024-07-15"));

  console.log(checkAvailability("2024-02-02"));
  
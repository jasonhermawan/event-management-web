const convertDate = (date) => {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  const splitDate = date.split("-");
  const day = parseInt(splitDate[2], 10);
  const monthIdx = parseInt(splitDate[1], 10) - 1;
  const month = months[monthIdx];
  const year = parseInt(splitDate[0], 10);

  return `${day} ${month} ${year}`;
}

export default convertDate
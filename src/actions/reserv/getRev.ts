export const getRev = (start_time, dt) => {
  const max = 1200;
  const min = 800;
  let sum = Math.random() * (max - min) + min;

  const normStart_time = start_time.slice(0, 2);
  const dt1 = new Date(dt);
  const getDayOfWeek = dt1.getDay();

  const timePlus = ['19', '20', '21', '22', '23'];
  const dayOfTheWeekPlus = [0, 5, 6];

  if (dayOfTheWeekPlus.includes(getDayOfWeek)) {
    sum += 300;
  }
  if (timePlus.includes(normStart_time)) {
    sum += 300;
  }

  const sumData = Math.floor(Math.max(sum, 1300));
  return sumData;
};

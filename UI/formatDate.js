export function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();

  let suffix = "th";
  if (day === 1 || day === 21 || day === 31) suffix = "st";
  if (day === 2 || day === 22) suffix = "nd";
  if (day === 3 || day === 23) suffix = "rd";

  return `${day}${suffix} ${month} ${year}`;
}
